-- Create database with UTF-8 support for Bangla text
CREATE DATABASE IF NOT EXISTS newspaper_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE newspaper_db;

-- Note: TypeORM will automatically create tables based on entities
-- This file is for reference and manual database creation if needed

-- Tables will be created automatically:
-- 1. categories (id, name_en, name_bn, slug, order, is_active, created_at, updated_at)
-- 2. news (id, title_en, title_bn, content_en, content_bn, image, video_url, is_breaking, is_featured, is_trending, views, category_id, is_active, created_at, updated_at)
-- 3. photos (id, title_en, title_bn, image_url, description_en, description_bn, is_active, created_at, updated_at)
-- 4. videos (id, title_en, title_bn, video_url, thumbnail, description_en, description_bn, is_active, created_at, updated_at)
-- 5. ads (id, title, image_url, link_url, position, order, is_active, created_at, updated_at)

-- Sample data insertion (optional - can also use admin panel)

-- Insert sample categories
INSERT INTO categories (name_en, name_bn, slug, `order`, is_active, created_at, updated_at) VALUES
('National', 'জাতীয়', 'national', 1, 1, NOW(), NOW()),
('International', 'আন্তর্জাতিক', 'international', 2, 1, NOW(), NOW()),
('Politics', 'রাজনীতি', 'politics', 3, 1, NOW(), NOW()),
('Economy', 'অর্থনীতি', 'economy', 4, 1, NOW(), NOW()),
('Sports', 'খেলাধুলা', 'sports', 5, 1, NOW(), NOW()),
('Entertainment', 'বিনোদন', 'entertainment', 6, 1, NOW(), NOW()),
('Technology', 'প্রযুক্তি', 'technology', 7, 1, NOW(), NOW()),
('Education', 'শিক্ষা', 'education', 8, 1, NOW(), NOW());

-- Sample news (update categoryId based on your data)
INSERT INTO news (title_en, title_bn, content_en, content_bn, image, is_breaking, is_featured, is_trending, views, categoryId, is_active, created_at, updated_at) VALUES
(
  'Major Economic Reform Announced',
  'বড় অর্থনৈতিক সংস্কার ঘোষণা',
  'The government has announced major economic reforms aimed at boosting growth and creating new opportunities for businesses...',
  'সরকার অর্থনৈতিক প্রবৃদ্ধি বাড়াতে এবং ব্যবসার জন্য নতুন সুযোগ সৃষ্টির লক্ষ্যে বড় অর্থনৈতিক সংস্কার ঘোষণা করেছে...',
  'https://via.placeholder.com/800x600/0066cc/ffffff?text=Economic+Reform',
  1, 1, 1, 1250, 4, 1, NOW(), NOW()
),
(
  'National Cricket Team Wins Championship',
  'জাতীয় ক্রিকেট দল চ্যাম্পিয়নশিপ জিতেছে',
  'In a thrilling final match, the national cricket team secured victory with an outstanding performance...',
  'একটি রোমাঞ্চকর ফাইনাল ম্যাচে, জাতীয় ক্রিকেট দল অসাধারণ পারফরম্যান্সের মাধ্যমে বিজয় নিশ্চিত করেছে...',
  'https://via.placeholder.com/800x600/00cc66/ffffff?text=Cricket+Win',
  1, 1, 1, 2100, 5, 1, NOW(), NOW()
),
(
  'New Technology Initiative Launched',
  'নতুন প্রযুক্তি উদ্যোগ চালু হয়েছে',
  'A groundbreaking technology initiative was launched today to promote digital innovation across the country...',
  'দেশজুড়ে ডিজিটাল উদ্ভাবন প্রচারের জন্য আজ একটি যুগান্তকারী প্রযুক্তি উদ্যোগ চালু হয়েছে...',
  'https://via.placeholder.com/800x600/cc00cc/ffffff?text=Technology',
  0, 1, 1, 1800, 7, 1, NOW(), NOW()
);

-- Sample photos
INSERT INTO photos (title_en, title_bn, image_url, description_en, description_bn, is_active, created_at, updated_at) VALUES
('City Skyline at Sunset', 'সূর্যাস্তে শহরের স্কাইলাইন', 'https://via.placeholder.com/800x600/ff6600/ffffff?text=Skyline', 'Beautiful view of the city during sunset', 'সূর্যাস্তের সময় শহরের সুন্দর দৃশ্য', 1, NOW(), NOW()),
('Cultural Festival', 'সাংস্কৃতিক উৎসব', 'https://via.placeholder.com/800x600/ffcc00/ffffff?text=Festival', 'Annual cultural festival celebration', 'বার্ষিক সাংস্কৃতিক উৎসব উদযাপন', 1, NOW(), NOW()),
('National Monument', 'জাতীয় স্মৃতিসৌধ', 'https://via.placeholder.com/800x600/00ccff/ffffff?text=Monument', 'Historic national monument', 'ঐতিহাসিক জাতীয় স্মৃতিসৌধ', 1, NOW(), NOW());

-- Sample videos
INSERT INTO videos (title_en, title_bn, video_url, thumbnail, description_en, description_bn, is_active, created_at, updated_at) VALUES
('News Highlights Today', 'আজকের খবরের হাইলাইট', 'https://www.youtube.com/watch?v=sample', 'https://via.placeholder.com/400x225/cc0000/ffffff?text=Video', 'Daily news highlights and important updates', 'দৈনিক খবরের হাইলাইট এবং গুরুত্বপূর্ণ আপডেট', 1, NOW(), NOW()),
('Sports Weekly Roundup', 'সাপ্তাহিক খেলাধুলার সংবাদ', 'https://www.youtube.com/watch?v=sample2', 'https://via.placeholder.com/400x225/00cc00/ffffff?text=Sports', 'Weekly sports news and match highlights', 'সাপ্তাহিক খেলাধুলার খবর এবং ম্যাচের হাইলাইট', 1, NOW(), NOW());

-- Sample ads
INSERT INTO ads (title, image_url, link_url, position, `order`, is_active, created_at, updated_at) VALUES
('Header Ad', 'https://via.placeholder.com/970x90/333333/ffffff?text=Header+Advertisement', 'https://example.com', 'header', 1, 1, NOW(), NOW()),
('Sidebar Ad', 'https://via.placeholder.com/300x250/666666/ffffff?text=Sidebar+Ad', 'https://example.com', 'sidebar', 1, 1, NOW(), NOW()),
('Footer Ad', 'https://via.placeholder.com/970x90/999999/ffffff?text=Footer+Advertisement', 'https://example.com', 'footer', 1, 1, NOW(), NOW());
