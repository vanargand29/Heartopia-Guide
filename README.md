# Heartopia Guide 2026 - Supabase Version

Database lengkap ingredients, makanan, ikan, burung, serangga & lainnya untuk game Heartopia.

## Cara Setup ke Supabase

### 1. Buat Project Supabase
1. Login ke [supabase.com](https://supabase.com)
2. Buat project baru
3. Catat **Project URL** dan **Anon Key** dari Settings > API

### 2. Buat Tabel Database
Jalankan SQL berikut di Supabase SQL Editor:

```sql
-- Ingredients table
CREATE TABLE ingredients (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  buy_price INTEGER,
  source TEXT,
  image TEXT,
  sell_price_stars JSONB,
  locations TEXT[],
  hobby_name TEXT,
  hobby_level INTEGER
);

-- Foods table  
CREATE TABLE foods (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  hobby_level INTEGER,
  ingredients TEXT[],
  cooking_time INTEGER
);

-- Seeds table
CREATE TABLE seeds (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER,
  image TEXT,
  hobby_level INTEGER,
  growth_time INTEGER,
  yield INTEGER
);

-- Insects table
CREATE TABLE insects (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  rarity TEXT,
  catch_difficulty INTEGER
);

-- Birds table
CREATE TABLE birds (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  rarity TEXT,
  favorite_food TEXT
);

-- Fishes table
CREATE TABLE fishes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  rarity TEXT,
  size TEXT,
  preferred_bait TEXT
);

-- Enable RLS (Row Level Security)
ALTER TABLE ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE seeds ENABLE ROW LEVEL SECURITY;
ALTER TABLE insects ENABLE ROW LEVEL SECURITY;
ALTER TABLE birds ENABLE ROW LEVEL SECURITY;
ALTER TABLE fishes ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON ingredients FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON foods FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON seeds FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON insects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON birds FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON fishes FOR SELECT USING (true);
```

### 3. Update Konfigurasi
Edit file `index.html` dan ganti:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Edit file `upload-data.js` dan ganti:
```javascript
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_SERVICE_KEY';
```

### 4. Upload Data
Install dependencies dan upload data:
```bash
npm install
npm run upload-data
```

### 5. Jalankan Aplikasi
```bash
npm run dev
```

Buka `http://localhost:3000` untuk melihat aplikasi.

## Deploy ke Supabase Hosting

1. Build aplikasi (jika perlu)
2. Upload file `index.html` ke Supabase Storage atau hosting lain
3. Pastikan URL Supabase configuration sudah benar

## Struktur Project

- `index.html` - Frontend aplikasi
- `heartopia-data-2026-03-13.json` - Data original
- `upload-data.js` - Script untuk upload data ke Supabase
- `package.json` - Dependencies dan scripts
- `README.md` - Documentation

## Features

- 📱 Responsive design
- 🔍 Search functionality  
- 🗂️ 6 kategori data (Foods, Ingredients, Seeds, Insects, Birds, Fishes)
- 🎨 Modern UI dengan dark theme
- ⚡ Real-time data dari Supabase
- 🖼️ Image support dengan fallback

## License

Dibuat untuk komunitas Heartopia • 2026
# Heartopia-Guide
