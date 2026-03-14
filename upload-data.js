const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Konfigurasi Supabase - GANTI dengan credentials Anda
const supabaseUrl = 'https://ogcxugdalqehvwxhzrct.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nY3h1Z2RhbHFlaHZ3eGh6cmN0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQyMDQ3MCwiZXhwIjoyMDg4OTk2NDcwfQ.K1iwad9j_4G9XBcStYmDD-dDTYghrTSwSgyY2NkRuEE'; // Gunakan service role key untuk upload data

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadData() {
  try {
    // Baca data JSON
    const rawData = fs.readFileSync('./heartopia-data-2026-03-13.json', 'utf8');
    const data = JSON.parse(rawData);

    console.log('Mulai upload data ke Supabase...');

    // Upload ingredients
    if (data.ingredients && data.ingredients.length > 0) {
      console.log(`Upload ${data.ingredients.length} ingredients...`);
      const { error: ingredientsError } = await supabase
        .from('ingredients')
        .upsert(data.ingredients, { onConflict: 'id' });

      if (ingredientsError) {
        console.error('Error upload ingredients:', ingredientsError);
      } else {
        console.log('✅ Ingredients uploaded successfully');
      }
    }

    // Upload foods
    if (data.foods && data.foods.length > 0) {
      console.log(`Upload ${data.foods.length} foods...`);
      const { error: foodsError } = await supabase
        .from('foods')
        .upsert(data.foods, { onConflict: 'id' });

      if (foodsError) {
        console.error('Error upload foods:', foodsError);
      } else {
        console.log('✅ Foods uploaded successfully');
      }
    }

    // Upload seeds
    if (data.seeds && data.seeds.length > 0) {
      console.log(`Upload ${data.seeds.length} seeds...`);
      const { error: seedsError } = await supabase
        .from('seeds')
        .upsert(data.seeds, { onConflict: 'id' });

      if (seedsError) {
        console.error('Error upload seeds:', seedsError);
      } else {
        console.log('✅ Seeds uploaded successfully');
      }
    }

    // Upload insects
    if (data.insects && data.insects.length > 0) {
      console.log(`Upload ${data.insects.length} insects...`);
      const { error: insectsError } = await supabase
        .from('insects')
        .upsert(data.insects, { onConflict: 'id' });

      if (insectsError) {
        console.error('Error upload insects:', insectsError);
      } else {
        console.log('✅ Insects uploaded successfully');
      }
    }

    // Upload birds
    if (data.birds && data.birds.length > 0) {
      console.log(`Upload ${data.birds.length} birds...`);
      const { error: birdsError } = await supabase
        .from('birds')
        .upsert(data.birds, { onConflict: 'id' });

      if (birdsError) {
        console.error('Error upload birds:', birdsError);
      } else {
        console.log('✅ Birds uploaded successfully');
      }
    }

    // Upload fishes (note: table name is 'fishes' not 'fish')
    if (data.fish && data.fish.length > 0) {
      console.log(`Upload ${data.fish.length} fish...`);
      const { error: fishesError } = await supabase
        .from('fishes')
        .upsert(data.fish, { onConflict: 'id' });

      if (fishesError) {
        console.error('Error upload fish:', fishesError);
      } else {
        console.log('✅ Fish uploaded successfully');
      }
    }

    console.log('🎉 Semua data berhasil diupload ke Supabase!');

  } catch (error) {
    console.error('Error:', error);
  }
}

// Jalankan upload
uploadData();
