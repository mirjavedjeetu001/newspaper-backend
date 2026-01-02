-- Default Menu Items for Header Navigation
INSERT INTO menus (title_en, title_bn, url, location, `order`, is_active, open_new_tab, icon) VALUES
('Home', 'হোম', '/', 'header', 0, 1, 0, '🏠'),
('Photos', 'ছবি', '/photos', 'header', 1, 1, 0, '📷'),
('Videos', 'ভিডিও', '/videos', 'header', 2, 1, 0, '🎥'),
('Politics', 'রাজনীতি', '/category/politics', 'header', 3, 1, 0, NULL),
('Sports', 'খেলাধুলা', '/category/sports', 'header', 4, 1, 0, NULL),
('Entertainment', 'বিনোদন', '/category/entertainment', 'header', 5, 1, 0, NULL),
('Technology', 'প্রযুক্তি', '/category/technology', 'header', 6, 1, 0, NULL),
('Business', 'ব্যবসা', '/category/business', 'header', 7, 1, 0, NULL);

-- Default Menu Items for Footer
INSERT INTO menus (title_en, title_bn, url, location, `order`, is_active, open_new_tab, icon) VALUES
('About Us', 'আমাদের সম্পর্কে', '/about', 'footer', 0, 1, 0, NULL),
('Contact', 'যোগাযোগ', '/contact', 'footer', 1, 1, 0, NULL),
('Privacy Policy', 'গোপনীয়তা নীতি', '/privacy', 'footer', 2, 1, 0, NULL),
('Terms of Service', 'সেবার শর্তাবলী', '/terms', 'footer', 3, 1, 0, NULL);
