/*
  # Seed Data for Dental Clinic

  1. Seed Data
    - Staff members
    - Dental services
  
  This migration populates the database with initial data for testing and development.
*/

-- Seed staff data
INSERT INTO staff (name, role, email, phone, specialization, image_url, bio)
VALUES
  ('Dr. Sarah Johnson', 'Dentist', 'sarah.johnson@dentalcare.com', '(555) 123-4567', 'General Dentistry', 'https://source.unsplash.com/featured/300x200/?dentist&sig=1', 'Dr. Johnson has over 15 years of experience in general dentistry and is passionate about preventive care.'),
  ('Dr. Michael Chen', 'Orthodontist', 'michael.chen@dentalcare.com', '(555) 234-5678', 'Orthodontics', 'https://source.unsplash.com/featured/300x200/?dentist&sig=2', 'Dr. Chen specializes in orthodontic treatments and is an expert in modern braces and Invisalign techniques.'),
  ('Dr. Emily Davis', 'Pediatric Dentist', 'emily.davis@dentalcare.com', '(555) 345-6789', 'Pediatric Dentistry', 'https://source.unsplash.com/featured/300x200/?dentist&sig=3', 'Dr. Davis loves working with children and making dental visits a positive experience for young patients.'),
  ('Dr. Robert Wilson', 'Oral Surgeon', 'robert.wilson@dentalcare.com', '(555) 456-7890', 'Oral Surgery', 'https://source.unsplash.com/featured/300x200/?dentist&sig=4', 'Dr. Wilson is a skilled oral surgeon with expertise in dental implants and complex extractions.'),
  ('Jessica Brown', 'Dental Hygienist', 'jessica.brown@dentalcare.com', '(555) 567-8901', 'Dental Hygiene', 'https://source.unsplash.com/featured/300x200/?dental-hygienist&sig=5', 'Jessica is dedicated to helping patients maintain optimal oral health through thorough cleanings and education.'),
  ('Amanda Martinez', 'Receptionist', 'amanda.martinez@dentalcare.com', '(555) 678-9012', NULL, 'https://source.unsplash.com/featured/300x200/?receptionist&sig=6', 'Amanda ensures the front desk runs smoothly and is the friendly face greeting patients as they arrive.')
ON CONFLICT (email) DO NOTHING;

-- Seed services data
INSERT INTO services (name, category, duration, price, description)
VALUES
  ('Dental Cleaning', 'Preventive', 30, 120, 'Professional cleaning to remove plaque and tartar.'),
  ('Dental Examination', 'Preventive', 30, 80, 'Comprehensive examination of teeth, gums, and mouth.'),
  ('Dental X-Rays', 'Preventive', 15, 75, 'Digital x-rays to detect hidden dental issues.'),
  ('Tooth Filling', 'Restorative', 45, 150, 'Filling cavities with composite resin material.'),
  ('Root Canal', 'Endodontic', 90, 800, 'Treatment for infected tooth pulp to save the tooth.'),
  ('Tooth Extraction', 'Surgical', 45, 200, 'Removal of damaged or problematic teeth.'),
  ('Wisdom Teeth Removal', 'Surgical', 60, 350, 'Extraction of impacted or problematic wisdom teeth.'),
  ('Dental Crown', 'Restorative', 60, 1200, 'Custom-fitted cap to cover damaged tooth.'),
  ('Dental Bridge', 'Restorative', 90, 2500, 'Fixed replacement for missing teeth.'),
  ('Dental Implant', 'Restorative', 120, 3000, 'Artificial tooth root to support replacement teeth.'),
  ('Teeth Whitening', 'Cosmetic', 60, 350, 'Professional whitening to remove stains and discoloration.'),
  ('Dental Veneers', 'Cosmetic', 60, 1500, 'Custom shells to cover front surface of teeth for a beautiful smile.'),
  ('Dental Bonding', 'Cosmetic', 45, 300, 'Repair chipped or cracked teeth with tooth-colored resin.'),
  ('Traditional Braces', 'Orthodontic', 45, 3000, 'Metal braces to straighten teeth and correct bite issues.'),
  ('Clear Aligners', 'Orthodontic', 30, 4000, 'Invisible aligners for discreet teeth straightening.'),
  ('Child Dental Exam', 'Pediatric', 30, 70, 'Gentle examination tailored for young patients.'),
  ('Fluoride Treatment', 'Pediatric', 15, 40, 'Preventive treatment to strengthen tooth enamel.'),
  ('Dental Sealants', 'Pediatric', 20, 50, 'Protective coating to prevent cavities in molars.')
ON CONFLICT DO NOTHING;