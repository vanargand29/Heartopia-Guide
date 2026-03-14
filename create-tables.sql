-- ================================================
-- Heartopia Database Schema
-- ================================================

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
