-- Add author_name column to news table
ALTER TABLE news ADD COLUMN author_name VARCHAR(255) NULL;

-- Add footer settings columns
ALTER TABLE settings ADD COLUMN footer_about_en TEXT NULL;
ALTER TABLE settings ADD COLUMN footer_about_bn TEXT NULL;
ALTER TABLE settings ADD COLUMN footer_links TEXT NULL;

-- Create dummy users for testing
INSERT INTO users (username, email, password, full_name, phone, is_active, created_at, updated_at) VALUES
('reporter1', 'reporter1@newspaper.com', '$2b$10$YourHashedPasswordHere', 'মোহাম্মদ করিম', '01711111111', 1, NOW(), NOW()),
('reporter2', 'reporter2@newspaper.com', '$2b$10$YourHashedPasswordHere', 'ফাতেমা আক্তার', '01722222222', 1, NOW(), NOW()),
('editor1', 'editor1@newspaper.com', '$2b$10$YourHashedPasswordHere', 'আব্দুল রহমান', '01733333333', 1, NOW(), NOW());

-- Note: You'll need to properly hash passwords and assign roles through the admin panel
