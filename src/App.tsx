import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';
import PatientDetails from './pages/PatientDetails';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Settings from './pages/Settings';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { SupabaseProvider } from './lib/supabase';
import PublicHome from './pages/public/Home';
import PublicServices from './pages/public/Services';
import PublicAbout from './pages/public/About';
import PublicContact from './pages/public/Contact';
import PublicBooking from './pages/public/Booking';
import PublicLayout from './components/PublicLayout';

function App() {
  return (
    <SupabaseProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<PublicHome />} />
              <Route path="services" element={<PublicServices />} />
              <Route path="about" element={<PublicAbout />} />
              <Route path="contact" element={<PublicContact />} />
              <Route path="book" element={<PublicBooking />} />
            </Route>
            
            {/* Admin routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="patients" element={<Patients />} />
              <Route path="patients/:id" element={<PatientDetails />} />
              <Route path="services" element={<Services />} />
              <Route path="staff" element={<Staff />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </SupabaseProvider>
  );
}

export default App;