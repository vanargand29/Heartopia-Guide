-- Create table for heartopia items
CREATE TABLE IF NOT EXISTS heartopia_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_heartopia_items_category ON heartopia_items(category);
CREATE INDEX IF NOT EXISTS idx_heartopia_items_name ON heartopia_items(name);

-- Function to update or insert item
CREATE OR REPLACE FUNCTION upsert_heartopia_item(
  item_name TEXT,
  item_category TEXT,
  item_data JSONB
) RETURNS VOID AS $$
BEGIN
  INSERT INTO heartopia_items (name, category, data)
  VALUES (item_name, item_category, item_data)
  ON CONFLICT (name, category) 
  DO UPDATE SET 
    data = EXCLUDED.data,
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- Function to get items by category
CREATE OR REPLACE FUNCTION get_items_by_category(
  item_category TEXT
) RETURNS TABLE (
  id INTEGER,
  name TEXT,
  category TEXT,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT id, name, category, data, created_at, updated_at
  FROM heartopia_items
  WHERE category = item_category
  ORDER BY name;
END;
$$ LANGUAGE plpgsql;

-- Function to search items
CREATE OR REPLACE FUNCTION search_heartopia_items(
  search_query TEXT,
  item_category TEXT DEFAULT NULL
) RETURNS TABLE (
  id INTEGER,
  name TEXT,
  category TEXT,
  data JSONB,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT id, name, category, data, created_at, updated_at
  FROM heartopia_items
  WHERE 
    (item_category IS NULL OR category = item_category)
    AND name ILIKE '%' || search_query || '%'
  ORDER BY 
    CASE 
      WHEN name ILIKE search_query || '%' THEN 1
      ELSE 2
    END,
    name;
END;
$$ LANGUAGE plpgsql;
