// API Functions untuk Vercel + Supabase Integration
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

// Handle OPTIONS requests for CORS
function handleOptions() {
  return new Response(null, { 
    status: 200, 
    headers: corsHeaders 
  });
}

// Get all data from Supabase
async function getAllData() {
  try {
    const { data, error } = await supabase
      .from('heartopia_items')
      .select('*');
    
    if (error) {
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Get data by category
async function getDataByCategory(category) {
  try {
    const { data, error } = await supabase
      .from('heartopia_items')
      .select('*')
      .eq('category', category);
    
    if (error) {
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching category data:', error);
    return null;
  }
}

// Search items
async function searchItems(query, category = null) {
  try {
    let supabaseQuery = supabase
      .from('heartopia_items')
      .select('*');
    
    if (category) {
      supabaseQuery = supabaseQuery.eq('category', category);
    }
    
    if (query) {
      supabaseQuery = supabaseQuery.ilike('name', `%${query}%`);
    }
    
    const { data, error } = await supabaseQuery;
    
    if (error) {
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error searching items:', error);
    return null;
  }
}

// Main API handler
export async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return handleOptions();
  }
  
  try {
    let result;
    
    switch (path) {
      case '/api/data':
        result = await getAllData();
        break;
        
      case '/api/search':
        const query = url.searchParams.get('q');
        const category = url.searchParams.get('category');
        result = await searchItems(query, category);
        break;
        
      case '/api/category':
        const categoryParam = url.searchParams.get('type');
        result = await getDataByCategory(categoryParam);
        break;
        
      default:
        return new Response(
          JSON.stringify({ error: 'Endpoint not found' }), 
          { 
            status: 404, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
    }
    
    return new Response(
      JSON.stringify({ data: result }), 
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
}
