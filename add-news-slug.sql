-- Add slug column to news table
ALTER TABLE news ADD COLUMN IF NOT EXISTS slug VARCHAR(500) DEFAULT '';

-- Generate slugs for existing news (using id as slug for now)
UPDATE news SET slug = CONCAT('news-', id) WHERE slug = '' OR slug IS NULL;

-- Add unique index on slug
CREATE UNIQUE INDEX IF NOT EXISTS idx_news_slug ON news(slug);
