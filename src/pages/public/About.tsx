import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, Clock, MapPin, Heart } from "lucide-react";

const PublicAbout: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About DentalCare Clinic</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Providing quality dental care for families since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Clinic"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                DentalCare Clinic was founded in 2005 by Dr. Sarah Johnson with
                a vision to provide exceptional dental care in a comfortable and
                welcoming environment. What started as a small practice has
                grown into a comprehensive dental center serving thousands of
                patients in our community.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to improve the oral health of our patients
                through preventive care, education, and personalized treatment
                plans. We believe that a healthy smile contributes to overall
                well-being and quality of life.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've expanded our services and team to meet the
                growing needs of our patients, but our commitment to providing
                compassionate, high-quality care remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                We put our patients first, listening to their concerns and
                tailoring treatments to their specific needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from clinical care
                to patient communication and service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                We are committed to ongoing education and staying current with
                the latest dental techniques and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Dedicated professionals committed to your oral health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1643297653753-2d3f459edc6b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBpbWFnZXMlMjBEci4lMjBTYXJhaCUyMEpvaG5zb258ZW58MHx8MHx8fDA%3D"
                  alt="Dr. Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-blue-600 mb-4">Founder & General Dentist</p>
                <p className="text-gray-600 mb-4">
                  Dr. Johnson has over 15 years of experience in general
                  dentistry and is passionate about preventive care.
                </p>
                <p className="text-sm text-gray-500">
                  DDS, University of California
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1584362562886-9b9002d5e493?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. Michael Chen
                </h3>
                <p className="text-blue-600 mb-4">Orthodontist</p>
                <p className="text-gray-600 mb-4">
                  Dr. Chen specializes in orthodontic treatments and is an
                  expert in modern braces and Invisalign techniques.
                </p>
                <p className="text-sm text-gray-500">
                  DMD, Harvard School of Dental Medicine
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBpbWFnZXMlMjBEci4lMjBTYXJhaCUyMEpvaG5zb258ZW58MHx8MHx8fDA%3D"
                  alt="Dr. Emily Davis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Dr. Emily Davis
                </h3>
                <p className="text-blue-600 mb-4">Pediatric Dentist</p>
                <p className="text-gray-600 mb-4">
                  Dr. Davis loves working with children and making dental visits
                  a positive experience for young patients.
                </p>
                <p className="text-sm text-gray-500">
                  DDS, University of Michigan
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Facility</h2>
            <p className="mt-4 text-lg text-gray-600">
              Modern, comfortable, and equipped with the latest technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <img
                src="https://images.unsplash.com/photo-1672985020309-7f02da84e363?q=80&w=1292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reception Area"
                className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Welcoming Reception Area
              </h3>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Treatment Room"
                className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Modern Treatment Rooms
              </h3>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1674998805052-23ea88091da2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWR2YW5jZWQlMjBUZWNobm9sb2d5JTIwY2xpbmljJTIwZGVudGFsfGVufDB8fDB8fHww"
                alt="Advanced Technology"
                className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">
                Advanced Dental Technology
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit Our Clinic
                </h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-gray-600">123 Main Street, Suite 100</p>
                    <p className="text-gray-600">Anytown, CA 12345</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <p className="text-gray-600">
                      Monday-Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-lg h-64">
                  {/* This would be a map in a real implementation */}
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the DentalCare Difference
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our family of satisfied patients and discover why so many
            people trust us with their dental care.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Your First Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PublicAbout;
