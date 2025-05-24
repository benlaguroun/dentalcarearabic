import React from 'react';
import { Link } from 'react-router-dom';
import { Bluetooth as Tooth, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Tooth className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">DentalCare</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality dental care for the whole family since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-white">Book Appointment</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#general" className="text-gray-300 hover:text-white">General Dentistry</Link>
              </li>
              <li>
                <Link to="/services#cosmetic" className="text-gray-300 hover:text-white">Cosmetic Dentistry</Link>
              </li>
              <li>
                <Link to="/services#orthodontics" className="text-gray-300 hover:text-white">Orthodontics</Link>
              </li>
              <li>
                <Link to="/services#pediatric" className="text-gray-300 hover:text-white">Pediatric Dentistry</Link>
              </li>
              <li>
                <Link to="/services#surgical" className="text-gray-300 hover:text-white">Oral Surgery</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Main Street, Suite 100, Anytown, CA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">info@dentalcareclinic.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;