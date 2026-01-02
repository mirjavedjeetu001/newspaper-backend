-- Insert Default Roles
INSERT INTO roles (name, display_name, description) VALUES
('super_admin', 'Super Admin', 'Full access to all features and settings'),
('admin', 'Admin', 'Manage content and users with limited access to critical settings'),
('editor', 'Editor', 'Edit and publish content'),
('reporter', 'Reporter', 'Create and submit content for review');

-- Insert Default Permissions
INSERT INTO permissions (name, display_name_en, display_name_bn, module, description) VALUES
-- User Management
('manage_users', 'Manage Users', 'ব্যবহারকারী পরিচালনা', 'users', 'Create, edit, and delete users'),
('view_users', 'View Users', 'ব্যবহারকারী দেখুন', 'users', 'View user list and details'),

-- Role Management
('manage_roles', 'Manage Roles', 'ভূমিকা পরিচালনা', 'roles', 'Create, edit, and delete roles'),
('assign_permissions', 'Assign Permissions', 'অনুমতি বরাদ্দ', 'roles', 'Assign permissions to roles'),

-- News Management
('manage_news', 'Manage News', 'সংবাদ পরিচালনা', 'news', 'Full access to news management'),
('create_news', 'Create News', 'সংবাদ তৈরি', 'news', 'Create new news articles'),
('edit_news', 'Edit News', 'সংবাদ সম্পাদনা', 'news', 'Edit existing news articles'),
('delete_news', 'Delete News', 'সংবাদ মুছুন', 'news', 'Delete news articles'),
('publish_news', 'Publish News', 'সংবাদ প্রকাশ', 'news', 'Publish news articles'),

-- Category Management
('manage_categories', 'Manage Categories', 'বিভাগ পরিচালনা', 'categories', 'Full access to category management'),
('create_category', 'Create Category', 'বিভাগ তৈরি', 'categories', 'Create new categories'),
('edit_category', 'Edit Category', 'বিভাগ সম্পাদনা', 'categories', 'Edit existing categories'),
('delete_category', 'Delete Category', 'বিভাগ মুছুন', 'categories', 'Delete categories'),

-- Photo Management
('manage_photos', 'Manage Photos', 'ছবি পরিচালনা', 'photos', 'Full access to photo management'),
('upload_photos', 'Upload Photos', 'ছবি আপলোড', 'photos', 'Upload new photos'),
('delete_photos', 'Delete Photos', 'ছবি মুছুন', 'photos', 'Delete photos'),

-- Video Management
('manage_videos', 'Manage Videos', 'ভিডিও পরিচালনা', 'videos', 'Full access to video management'),
('upload_videos', 'Upload Videos', 'ভিডিও আপলোড', 'videos', 'Upload new videos'),
('delete_videos', 'Delete Videos', 'ভিডিও মুছুন', 'videos', 'Delete videos'),

-- Ad Management
('manage_ads', 'Manage Ads', 'বিজ্ঞাপন পরিচালনা', 'ads', 'Full access to advertisement management'),
('create_ads', 'Create Ads', 'বিজ্ঞাপন তৈরি', 'ads', 'Create new advertisements'),
('edit_ads', 'Edit Ads', 'বিজ্ঞাপন সম্পাদনা', 'ads', 'Edit existing advertisements'),
('delete_ads', 'Delete Ads', 'বিজ্ঞাপন মুছুন', 'ads', 'Delete advertisements'),

-- Settings Management
('manage_settings', 'Manage Settings', 'সেটিংস পরিচালনা', 'settings', 'Access and modify system settings'),

-- Menu Management
('manage_menus', 'Manage Menus', 'মেনু পরিচালনা', 'menus', 'Full access to menu management'),

-- District Management
('manage_districts', 'Manage Districts', 'জেলা পরিচালনা', 'districts', 'Manage district settings'),

-- Dashboard Access
('view_dashboard', 'View Dashboard', 'ড্যাশবোর্ড দেখুন', 'dashboard', 'Access admin dashboard'),
('view_analytics', 'View Analytics', 'বিশ্লেষণ দেখুন', 'dashboard', 'View analytics and reports');

-- Insert Districts (All 64 districts of Bangladesh)
INSERT INTO districts (name_en, name_bn, code, is_active) VALUES
('Dhaka', 'ঢাকা', 'DHA', 1),
('Chattogram', 'চট্টগ্রাম', 'CTG', 1),
('Rajshahi', 'রাজশাহী', 'RAJ', 1),
('Khulna', 'খুলনা', 'KHL', 1),
('Barishal', 'বরিশাল', 'BAR', 1),
('Sylhet', 'সিলেট', 'SYL', 1),
('Rangpur', 'রংপুর', 'RAN', 1),
('Mymensingh', 'ময়মনসিংহ', 'MYM', 1),
('Comilla', 'কুমিল্লা', 'COM', 1),
('Narayanganj', 'নারায়ণগঞ্জ', 'NAR', 1),
('Gazipur', 'গাজীপুর', 'GAZ', 1),
('Tangail', 'টাঙ্গাইল', 'TAN', 1),
('Jamalpur', 'জামালপুর', 'JAM', 1),
('Netrokona', 'নেত্রকোণা', 'NET', 1),
('Sherpur', 'শেরপুর', 'SHE', 1),
('Kishoreganj', 'কিশোরগঞ্জ', 'KIS', 1),
('Faridpur', 'ফরিদপুর', 'FAR', 1),
('Gopalganj', 'গোপালগঞ্জ', 'GOP', 1),
('Madaripur', 'মাদারীপুর', 'MAD', 1),
('Rajbari', 'রাজবাড়ী', 'RAJB', 1),
('Shariatpur', 'শরীয়তপুর', 'SHA', 1),
('Manikganj', 'মানিকগঞ্জ', 'MAN', 1),
('Munshiganj', 'মুন্সীগঞ্জ', 'MUN', 1),
('Narsingdi', 'নরসিংদী', 'NARS', 1),
('Cox\'s Bazar', 'কক্সবাজার', 'COX', 1),
('Feni', 'ফেনী', 'FEN', 1),
('Lakshmipur', 'লক্ষ্মীপুর', 'LAK', 1),
('Noakhali', 'নোয়াখালী', 'NOA', 1),
('Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', 'BRA', 1),
('Chandpur', 'চাঁদপুর', 'CHA', 1),
('Rangamati', 'রাঙ্গামাটি', 'RANG', 1),
('Bandarban', 'বান্দরবান', 'BAN', 1),
('Khagrachari', 'খাগড়াছড়ি', 'KHA', 1),
('Bogura', 'বগুড়া', 'BOG', 1),
('Joypurhat', 'জয়পুরহাট', 'JOY', 1),
('Naogaon', 'নওগাঁ', 'NAO', 1),
('Natore', 'নাটোর', 'NAT', 1),
('Chapainawabganj', 'চাঁপাইনবাবগঞ্জ', 'CHAP', 1),
('Pabna', 'পাবনা', 'PAB', 1),
('Sirajganj', 'সিরাজগঞ্জ', 'SIR', 1),
('Bagerhat', 'বাগেরহাট', 'BAG', 1),
('Chuadanga', 'চুয়াডাঙ্গা', 'CHU', 1),
('Jashore', 'যশোর', 'JAS', 1),
('Jhenaidah', 'ঝিনাইদহ', 'JHE', 1),
('Kushtia', 'কুষ্টিয়া', 'KUS', 1),
('Magura', 'মাগুরা', 'MAG', 1),
('Meherpur', 'মেহেরপুর', 'MEH', 1),
('Narail', 'নড়াইল', 'NARL', 1),
('Satkhira', 'সাতক্ষীরা', 'SAT', 1),
('Barguna', 'বরগুনা', 'BARG', 1),
('Bhola', 'ভোলা', 'BHO', 1),
('Jhalokati', 'ঝালকাঠি', 'JHA', 1),
('Patuakhali', 'পটুয়াখালী', 'PAT', 1),
('Pirojpur', 'পিরোজপুর', 'PIR', 1),
('Habiganj', 'হবিগঞ্জ', 'HAB', 1),
('Moulvibazar', 'মৌলভীবাজার', 'MOU', 1),
('Sunamganj', 'সুনামগঞ্জ', 'SUN', 1),
('Dinajpur', 'দিনাজপুর', 'DIN', 1),
('Gaibandha', 'গাইবান্ধা', 'GAI', 1),
('Kurigram', 'কুড়িগ্রাম', 'KUR', 1),
('Lalmonirhat', 'লালমনিরহাট', 'LAL', 1),
('Nilphamari', 'নীলফামারী', 'NIL', 1),
('Panchagarh', 'পঞ্চগড়', 'PAN', 1),
('Thakurgaon', 'ঠাকুরগাঁও', 'THA', 1);

-- Assign all permissions to Super Admin role
INSERT INTO role_permissions (role_id, permission_id)
SELECT 1, id FROM permissions;

-- Assign permissions to Admin role (exclude user and role management)
INSERT INTO role_permissions (role_id, permission_id)
SELECT 2, id FROM permissions 
WHERE name NOT IN ('manage_users', 'manage_roles', 'assign_permissions');

-- Assign permissions to Editor role
INSERT INTO role_permissions (role_id, permission_id)
SELECT 3, id FROM permissions 
WHERE name IN ('manage_news', 'create_news', 'edit_news', 'publish_news', 'manage_categories', 'manage_photos', 'upload_photos', 'manage_videos', 'upload_videos', 'view_dashboard');

-- Assign permissions to Reporter role
INSERT INTO role_permissions (role_id, permission_id)
SELECT 4, id FROM permissions 
WHERE name IN ('create_news', 'edit_news', 'upload_photos', 'upload_videos', 'view_dashboard');

-- Create default super admin user (username: superadmin, password: admin123)
INSERT INTO users (username, email, password, full_name, is_active)
VALUES ('superadmin', 'superadmin@newspaper.com', '$2b$10$YQHHxQ8FPZ8.ixQ8zv5Yme7LJZcjKKvKKZW3kVjJK.9n9iZhZ/YB.', 'Super Administrator', 1);

-- Assign super_admin role to the default user
INSERT INTO user_roles (user_id, role_id) VALUES (1, 1);
