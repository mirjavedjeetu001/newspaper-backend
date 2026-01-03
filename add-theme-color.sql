-- Add theme_color column to settings table (MySQL compatible)
ALTER TABLE settings ADD COLUMN theme_color VARCHAR(7) DEFAULT '#c8102e';

-- Update existing row if it exists
UPDATE settings SET theme_color = '#c8102e' WHERE theme_color IS NULL;
