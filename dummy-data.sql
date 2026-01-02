SET FOREIGN_KEY_CHECKS=0;

-- Insert Admin User (username: admin, password: admin123)
INSERT IGNORE INTO admins (username, password, email, role) VALUES 
('admin', '$2b$10$RlaVT4mMwz/mLTstga9ck./xsXnqaUO06ckfjB2frne4u4v..Ili.', 'admin@dailynews.com', 'admin');

-- Insert Site Settings
INSERT IGNORE INTO settings (site_name_en, site_name_bn, logo_url, favicon_url, description_en, description_bn, contact_email, contact_phone, address_en, address_bn, facebook_url, twitter_url, youtube_url, instagram_url) VALUES
('Daily News', 'প্রতিদিনের সংবাদ', 'https://via.placeholder.com/200x60/c8102e/ffffff?text=Daily+News', 'https://via.placeholder.com/32x32', 'Bangladesh''s most trusted news source', 'বাংলাদেশের সবচেয়ে বিশ্বস্ত সংবাদ উৎস', 'info@dailynews.com', '+880 1234-567890', 'Dhaka, Bangladesh', 'ঢাকা, বাংলাদেশ', 'https://facebook.com/dailynews', 'https://twitter.com/dailynews', 'https://youtube.com/dailynews', 'https://instagram.com/dailynews');

-- Insert Categories
INSERT IGNORE INTO categories (name_en, name_bn, slug, `order`, show_in_menu) VALUES
('Politics', 'রাজনীতি', 'politics', 1, true),
('Sports', 'খেলাধুলা', 'sports', 2, true),
('Technology', 'প্রযুক্তি', 'technology', 3, true),
('Entertainment', 'বিনোদন', 'entertainment', 4, true),
('Business', 'ব্যবসা', 'business', 5, true),
('International', 'আন্তর্জাতিক', 'international', 6, true),
('Education', 'শিক্ষা', 'education', 7, true),
('Health', 'স্বাস্থ্য', 'health', 8, true);

-- Insert News Articles
INSERT IGNORE INTO news (title_en, title_bn, content_en, content_bn, image, video_url, is_breaking, is_featured, is_trending, views, categoryId) VALUES
-- Breaking News
('Major Political Reform Announced by Government', 'সরকার প্রধান রাজনৈতিক সংস্কার ঘোষণা করেছে', 
'The government has announced sweeping political reforms aimed at strengthening democratic institutions and improving governance. Prime Minister announced these reforms during a special address to the nation, emphasizing transparency and accountability.', 
'সরকার গণতান্ত্রিক প্রতিষ্ঠান শক্তিশালী করা এবং শাসন উন্নত করার লক্ষ্যে ব্যাপক রাজনৈতিক সংস্কারের ঘোষণা দিয়েছে। প্রধানমন্ত্রী জাতির উদ্দেশ্যে বিশেষ ভাষণে এই সংস্কারের কথা ঘোষণা করেন।',
'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800', NULL, true, true, true, 1250, 1),

('Cricket Team Wins Historic Victory', 'ক্রিকেট দল ঐতিহাসিক বিজয় অর্জন করেছে',
'Bangladesh cricket team secured a historic victory against a top-ranked opponent in a thrilling match that went down to the last over. The victory has been hailed as one of the greatest achievements in Bangladesh cricket history.',
'বাংলাদেশ ক্রিকেট দল একটি শীর্ষ র‍্যাংকের প্রতিপক্ষের বিরুদ্ধে একটি রোমাঞ্চকর ম্যাচে ঐতিহাসিক বিজয় অর্জন করেছে। এই বিজয়কে বাংলাদেশ ক্রিকেট ইতিহাসের অন্যতম সেরা অর্জন হিসেবে বিবেচনা করা হচ্ছে।',
'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800', NULL, true, true, true, 2100, 2),

-- Featured News
('New Tech Hub to Create 50,000 Jobs', 'নতুন টেক হাব ৫০,০০০ চাকরির সুযোগ সৃষ্টি করবে',
'A major technology company has announced plans to establish a new innovation hub in Dhaka, expected to create over 50,000 jobs in the next five years. The hub will focus on artificial intelligence, software development, and digital services.',
'একটি প্রধান প্রযুক্তি কোম্পানি ঢাকায় একটি নতুন ইনোভেশন হাব স্থাপনের পরিকল্পনা ঘোষণা করেছে, যা আগামী পাঁচ বছরে ৫০,০০০-এর বেশি চাকরি সৃষ্টি করবে বলে আশা করা হচ্ছে।',
'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800', NULL, false, true, true, 980, 3),

('Film Industry Announces Record Investment', 'চলচ্চিত্র শিল্প রেকর্ড বিনিয়োগ ঘোষণা করেছে',
'The film industry has received a record investment of $100 million from international studios, marking a new era for Bangladeshi cinema. Industry experts predict this will lead to higher quality productions.',
'চলচ্চিত্র শিল্প আন্তর্জাতিক স্টুডিও থেকে ১০০ মিলিয়ন ডলারের রেকর্ড বিনিয়োগ পেয়েছে, যা বাংলাদেশী সিনেমার জন্য একটি নতুন যুগের সূচনা করছে।',
'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800', NULL, false, true, true, 750, 4),

-- Trending News
('Stock Market Reaches All-Time High', 'শেয়ার বাজার সর্বকালের উচ্চতায় পৌঁছেছে',
'The Dhaka Stock Exchange reached an all-time high today, driven by strong performances in banking and technology sectors. Analysts attribute this growth to positive economic indicators.',
'ঢাকা স্টক এক্সচেঞ্জ আজ সর্বকালের উচ্চতায় পৌঁছেছে, যা ব্যাংকিং এবং প্রযুক্তি খাতের শক্তিশালী পারফরম্যান্স দ্বারা চালিত হয়েছে।',
'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', NULL, false, false, true, 1520, 5),

('Bangladesh Signs Trade Deal with Major Economy', 'বাংলাদেশ প্রধান অর্থনীতির সাথে বাণিজ্য চুক্তি স্বাক্ষর করেছে',
'Bangladesh has signed a landmark trade agreement with a major global economy, expected to boost exports by 40% and create new opportunities for local businesses.',
'বাংলাদেশ একটি প্রধান বৈশ্বিক অর্থনীতির সাথে একটি যুগান্তকারী বাণিজ্য চুক্তি স্বাক্ষর করেছে, যা রপ্তানি ৪০% বৃদ্ধি করবে বলে আশা করা হচ্ছে।',
'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', NULL, false, false, true, 890, 6),

-- Regular News
('Universities Introduce AI Curriculum', 'বিশ্ববিদ্যালয়গুলি AI পাঠ্যক্রম চালু করেছে',
'Major universities across the country have introduced new artificial intelligence and machine learning programs to prepare students for the future job market.',
'দেশের প্রধান বিশ্ববিদ্যালয়গুলি ভবিষ্যতের চাকরির বাজারের জন্য শিক্ষার্থীদের প্রস্তুত করতে নতুন কৃত্রিম বুদ্ধিমত্তা এবং মেশিন লার্নিং প্রোগ্রাম চালু করেছে।',
'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', NULL, false, true, false, 450, 7),

('New Health Initiative Targets Rural Areas', 'নতুন স্বাস্থ্য উদ্যোগ গ্রামীণ এলাকাকে লক্ষ্য করে',
'The government has launched a comprehensive health initiative focusing on improving healthcare access in rural areas, including mobile clinics and telemedicine services.',
'সরকার গ্রামীণ এলাকায় স্বাস্থ্যসেবা প্রবেশাধিকার উন্নত করার উপর মনোনিবেশ করে একটি ব্যাপক স্বাস্থ্য উদ্যোগ চালু করেছে।',
'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', NULL, false, false, true, 320, 8),

('Football League Season Kicks Off', 'ফুটবল লীগ মৌসুম শুরু হয়েছে',
'The national football league season began with spectacular opening matches, drawing record crowds to stadiums across the country.',
'জাতীয় ফুটবল লীগ মৌসুম দর্শনীয় উদ্বোধনী ম্যাচ দিয়ে শুরু হয়েছে, যা দেশজুড়ে স্টেডিয়ামে রেকর্ড দর্শক টেনে এনেছে।',
'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800', NULL, false, false, false, 680, 2),

('Tech Startup Raises Record Funding', 'টেক স্টার্টআপ রেকর্ড তহবিল সংগ্রহ করেছে',
'A local tech startup has raised $50 million in Series B funding, the largest ever for a Bangladeshi startup, to expand its e-commerce platform.',
'একটি স্থানীয় টেক স্টার্টআপ তার ই-কমার্স প্ল্যাটফর্ম সম্প্রসারণের জন্য সিরিজ B তহবিলে ৫০ মিলিয়ন ডলার সংগ্রহ করেছে।',
'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800', NULL, false, false, false, 540, 3),

('New Movie Breaks Box Office Records', 'নতুন সিনেমা বক্স অফিস রেকর্ড ভেঙে দিয়েছে',
'A newly released Bangladeshi film has broken all previous box office records, earning over 10 crore taka in its opening weekend.',
'একটি নতুন মুক্তিপ্রাপ্ত বাংলাদেশী চলচ্চিত্র সমস্ত পূর্ববর্তী বক্স অফিস রেকর্ড ভেঙে দিয়েছে।',
'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800', NULL, false, false, false, 920, 4),

('Opposition Party Proposes Electoral Reforms', 'বিরোধী দল নির্বাচনী সংস্কারের প্রস্তাব দিয়েছে',
'The main opposition party has submitted a comprehensive proposal for electoral reforms, calling for greater transparency in the electoral process.',
'প্রধান বিরোধী দল নির্বাচনী প্রক্রিয়ায় আরও স্বচ্ছতার জন্য নির্বাচনী সংস্কারের জন্য একটি ব্যাপক প্রস্তাব জমা দিয়েছে।',
'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=800', NULL, false, false, false, 420, 1);

-- Insert Photos
INSERT IGNORE INTO photos (title_en, title_bn, image_url, description_en, description_bn) VALUES
('National Victory Day Celebration', 'জাতীয় বিজয় দিবস উদযাপন',
'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
'Thousands gathered to celebrate Victory Day with cultural programs',
'হাজার হাজার মানুষ সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে বিজয় দিবস উদযাপনে একত্রিত হয়েছিল'),

('Youth Tech Summit 2026', 'যুব প্রযুক্তি সম্মেলন ২০২৬',
'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
'Young innovators showcase their projects at the annual tech summit',
'বার্ষিক প্রযুক্তি সম্মেলনে তরুণ উদ্ভাবকরা তাদের প্রকল্প প্রদর্শন করছে'),

('Traditional Festival Celebrations', 'ঐতিহ্যবাহী উৎসব উদযাপন',
'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800',
'Communities across the country celebrate traditional festivals',
'সারাদেশে সম্প্রদায়গুলি ঐতিহ্যবাহী উৎসব উদযাপন করছে'),

('Modern Dhaka Skyline', 'আধুনিক ঢাকা স্কাইলাইন',
'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
'The rapidly developing skyline of Dhaka city',
'ঢাকা শহরের দ্রুত উন্নয়নশীল স্কাইলাইন');

-- Insert Videos
INSERT IGNORE INTO videos (title_en, title_bn, video_url, thumbnail, description_en, description_bn) VALUES
('Prime Minister\'s Press Conference', 'প্রধানমন্ত্রীর সংবাদ সম্মেলন',
'https://www.youtube.com/embed/dQw4w9WgXcQ',
'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800',
'Full coverage of the Prime Minister\'s monthly press conference',
'প্রধানমন্ত্রীর মাসিক সংবাদ সম্মেলনের সম্পূর্ণ কভারেজ'),

('Cricket Match Highlights', 'ক্রিকেট ম্যাচের হাইলাইটস',
'https://www.youtube.com/embed/dQw4w9WgXcQ',
'https://images.unsplash.com/photo-1540747913346-19e32778e8e5?w=800',
'Best moments from yesterday\'s thrilling cricket match',
'গতকালের রোমাঞ্চকর ক্রিকেট ম্যাচের সেরা মুহূর্তগুলি'),

('Tech Innovation Showcase', 'প্রযুক্তি উদ্ভাবন প্রদর্শনী',
'https://www.youtube.com/embed/dQw4w9WgXcQ',
'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
'Latest technological innovations from local startups',
'স্থানীয় স্টার্টআপগুলির সর্বশেষ প্রযুক্তিগত উদ্ভাবন');

-- Insert Ads
INSERT IGNORE INTO ads (title, image_url, link_url, position) VALUES
('Premium Banking Services', 'https://via.placeholder.com/728x90/4CAF50/ffffff?text=Bank+Ad', 'https://example.com/bank', 'top'),
('New Smartphone Launch', 'https://via.placeholder.com/300x250/2196F3/ffffff?text=Phone+Ad', 'https://example.com/phone', 'sidebar'),
('E-commerce Sale', 'https://via.placeholder.com/728x90/FF9800/ffffff?text=Shopping+Sale', 'https://example.com/sale', 'middle'),
('Education Platform', 'https://via.placeholder.com/300x250/9C27B0/ffffff?text=Learn+Online', 'https://example.com/education', 'sidebar'),
('Real Estate Investment', 'https://via.placeholder.com/728x90/F44336/ffffff?text=Property+Investment', 'https://example.com/property', 'bottom');

SET FOREIGN_KEY_CHECKS=1;
