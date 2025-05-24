/*
  # Initial Schema Setup for Dental Clinic

  1. New Tables
    - `staff` - Stores information about dental clinic staff members
    - `services` - Stores available dental services
    - `appointments` - Stores patient appointment information
    - `contact_messages` - Stores messages from the contact form
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Staff table
CREATE TABLE IF NOT EXISTS staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  specialization TEXT,
  image_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Staff can be read by anyone"
  ON staff
  FOR SELECT
  USING (true);

CREATE POLICY "Staff can be modified by authenticated users only"
  ON staff
  USING (auth.role() = 'authenticated');

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  duration INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services can be read by anyone"
  ON services
  FOR SELECT
  USING (true);

CREATE POLICY "Services can be modified by authenticated users only"
  ON services
  USING (auth.role() = 'authenticated');

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id),
  service_name TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  notes TEXT,
  is_new_patient BOOLEAN DEFAULT false,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Appointments can be read by authenticated users"
  ON appointments
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Appointments can be created by anyone"
  ON appointments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Appointments can be modified by authenticated users only"
  ON appointments
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Contact messages can be read by authenticated users"
  ON contact_messages
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Contact messages can be created by anyone"
  ON contact_messages
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Contact messages can be modified by authenticated users only"
  ON contact_messages
  FOR UPDATE
  USING (auth.role() = 'authenticated');