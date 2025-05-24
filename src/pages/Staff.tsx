import React, { useState, useEffect } from "react";
import { Plus, Search, Mail, Phone, Edit, Trash } from 'lucide-react';
import { useSupabase } from '../lib/supabase';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  specialization: string;
  image_url: string;
  bio: string;
}

const Staff: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { supabase } = useSupabase();

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const { data, error } = await supabase
          .from('staff')
          .select('*')
          .order('name');
        
        if (error) throw error;
        
        setStaff(data || []);
      } catch (error) {
        console.error('Error fetching staff:', error);
        // Fallback to mock data if Supabase is not set up yet
        setStaff(mockStaff);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [supabase]);

  const filteredStaff = staff.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Staff Management</h1>
          <p className="mt-1 text-sm text-gray-500">Manage dental professionals and clinic staff.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Staff Member
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <p className="text-gray-500">Loading staff members...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredStaff.map((member) => (
              <div key={member.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={member.image_url || `https://source.unsplash.com/featured/300x200/?dentist&sig=${member.id}`} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600">{member.role}</p>
                  {member.specialization && (
                    <p className="text-sm text-gray-500 mt-1">Specialization: {member.specialization}</p>
                  )}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2" />
                      {member.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.phone}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredStaff.length === 0 && (
          <div className="p-6 text-center">
            <p className="text-gray-500">No staff members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Mock data for staff members (used as fallback if Supabase is not set up)
const mockStaff: StaffMember[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Dentist",
    email: "sarah.johnson@dentalcare.com",
    phone: "(555) 123-4567",
    specialization: "General Dentistry",
    image_url: "https://source.unsplash.com/featured/300x200/?dentist&sig=1",
    bio: "Dr. Johnson has over 15 years of experience in general dentistry and is passionate about preventive care."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    email: "michael.chen@dentalcare.com",
    phone: "(555) 234-5678",
    specialization: "Orthodontics",
    image_url: "https://source.unsplash.com/featured/300x200/?dentist&sig=2",
    bio: "Dr. Chen specializes in orthodontic treatments and is an expert in modern braces and Invisalign techniques."
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    role: "Pediatric Dentist",
    email: "emily.davis@dentalcare.com",
    phone: "(555) 345-6789",
    specialization: "Pediatric Dentistry",
    image_url: "https://source.unsplash.com/featured/300x200/?dentist&sig=3",
    bio: "Dr. Davis loves working with children and making dental visits a positive experience for young patients."
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    role: "Oral Surgeon",
    email: "robert.wilson@dentalcare.com",
    phone: "(555) 456-7890",
    specialization: "Oral Surgery",
    image_url: "https://source.unsplash.com/featured/300x200/?dentist&sig=4",
    bio: "Dr. Wilson is a skilled oral surgeon with expertise in dental implants and complex extractions."
  },
  {
    id: 5,
    name: "Jessica Brown",
    role: "Dental Hygienist",
    email: "jessica.brown@dentalcare.com",
    phone: "(555) 567-8901",
    specialization: "Dental Hygiene",
    image_url: "https://source.unsplash.com/featured/300x200/?dental-hygienist&sig=5",
    bio: "Jessica is dedicated to helping patients maintain optimal oral health through thorough cleanings and education."
  },
  {
    id: 6,
    name: "Amanda Martinez",
    role: "Receptionist",
    email: "amanda.martinez@dentalcare.com",
    phone: "(555) 678-9012",
    specialization: "",
    image_url: "https://source.unsplash.com/featured/300x200/?receptionist&sig=6",
    bio: "Amanda ensures the front desk runs smoothly and is the friendly face greeting patients as they arrive."
  }
];

export default Staff;