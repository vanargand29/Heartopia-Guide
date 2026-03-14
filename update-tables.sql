-- ================================================
-- Update Heartopia Database Schema
-- ================================================

-- Drop existing tables and recreate with correct schema
DROP TABLE IF EXISTS foods CASCADE;
DROP TABLE IF EXISTS seeds CASCADE;
DROP TABLE IF EXISTS insects CASCADE;
DROP TABLE IF EXISTS birds CASCADE;
DROP TABLE IF EXISTS fish CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;

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
  ingredients JSONB,
  sell_price JSONB,
  image TEXT,
  hobby_name TEXT,
  hobby_level INTEGER
);

-- Seeds table
CREATE TABLE seeds (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER,
  image TEXT,
  growth_time INTEGER,
  hobby_name TEXT,
  hobby_level INTEGER,
  sell_price INTEGER
);

-- Insects table
CREATE TABLE insects (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  weather TEXT[],
  time TEXT[],
  hobby_name TEXT,
  hobby_level INTEGER
);

-- Birds table
CREATE TABLE birds (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  weather TEXT[],
  time TEXT[],
  hobby_name TEXT,
  hobby_level INTEGER
);

-- Fishes table
CREATE TABLE fish (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  sell_price JSONB,
  image TEXT,
  locations TEXT[],
  weather TEXT[],
  shadow TEXT,
  time TEXT[],
  hobby_name TEXT,
  hobby_level INTEGER
);

-- Enable RLS (Row Level Security)
ALTER TABLE ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE seeds ENABLE ROW LEVEL SECURITY;
ALTER TABLE insects ENABLE ROW LEVEL SECURITY;
ALTER TABLE birds ENABLE ROW LEVEL SECURITY;
ALTER TABLE fish ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON ingredients FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON foods FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON seeds FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON insects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON birds FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON fish FOR SELECT USING (true);
