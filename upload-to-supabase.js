// API untuk mengupload data ke Supabase
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Load data dari JSON file
const dataPath = path.join(__dirname, 'heartopia-data-2026-03-13.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

// Fungsi untuk upload data ke Supabase
async function uploadDataToSupabase() {
  console.log('🚀 Starting upload to Supabase...');
  
  const categories = ['ingredients', 'foods', 'seeds', 'insects', 'birds', 'fish'];
  let totalUploaded = 0;
  
  for (const category of categories) {
    console.log(`\n📦 Processing ${category}...`);
    
    if (!data[category] || data[category].length === 0) {
      console.log(`⚠️  No data found for ${category}`);
      continue;
    }
    
    const items = data[category];
    let successCount = 0;
    let errorCount = 0;
    
    // Upload item per item
    for (const item of items) {
      try {
        const { data, error } = await supabase
          .from('heartopia_items')
          .upsert({
            name: item.name,
            category: category,
            data: item
          }, {
            onConflict: 'name,category'
          });
        
        if (error) {
          console.error(`❌ Error uploading ${item.name}:`, error.message);
          errorCount++;
        } else {
          console.log(`✅ Uploaded: ${item.name}`);
          successCount++;
          totalUploaded++;
        }
      } catch (err) {
        console.error(`❌ Error processing ${item.name}:`, err.message);
        errorCount++;
      }
    }
    
    console.log(`📊 ${category}: ${successCount} success, ${errorCount} errors`);
  }
  
  console.log(`\n🎉 Upload complete! Total items uploaded: ${totalUploaded}`);
  return totalUploaded;
}

// Main function
async function main() {
  try {
    await uploadDataToSupabase();
  } catch (error) {
    console.error('💥 Fatal error during upload:', error);
    process.exit(1);
  }
}

// Run jika dijalankan langsung
if (require.main === module) {
  main();
}

module.exports = { uploadDataToSupabase };
