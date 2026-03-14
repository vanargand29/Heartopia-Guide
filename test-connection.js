const { createClient } = require('@supabase/supabase-js');

// Test connection dengan anon key
const supabaseUrl = 'https://ogcxugdalqehvwxhzrct.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nY3h1Z2RhbHFlaHZ3eGh6cmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MjA0NzAsImV4cCI6MjA4ODk5NjQ3MH0.BEsPMld6a9WzGM71Z5y1AbPdr4P6p1v0Pqr03DTAEZk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test ingredients table
    const { data: ingredients, error: ingredientsError } = await supabase
      .from('ingredients')
      .select('*')
      .limit(5);
    
    console.log('Ingredients test:', { 
      count: ingredients?.length || 0, 
      error: ingredientsError?.message 
    });
    
    // Test foods table
    const { data: foods, error: foodsError } = await supabase
      .from('foods')
      .select('*')
      .limit(5);
    
    console.log('Foods test:', { 
      count: foods?.length || 0, 
      error: foodsError?.message 
    });
    
    // Test fish table
    const { data: fish, error: fishError } = await supabase
      .from('fish')
      .select('*')
      .limit(5);
    
    console.log('Fish test:', { 
      count: fish?.length || 0, 
      error: fishError?.message 
    });
    
  } catch (error) {
    console.error('Connection test failed:', error);
  }
}

testConnection();
