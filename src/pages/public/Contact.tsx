import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useSupabase } from '../../lib/supabase';

const PublicContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const { supabase } = useSupabase();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date()
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly by phone.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">We're here to answer your questions and help you schedule your visit.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@dentalcareclinic.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Main Street, Suite 100, Anytown, CA 12345</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="Appointment Request">Appointment Request</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Insurance Question">Insurance Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">When We're Open</h3>
                </div>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Monday</td>
                      <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Tuesday</td>
                      <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Wednesday</td>
                      <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Thursday</td>
                      <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Friday</td>
                      <td className="py-3 text-right">9:00 AM - 4:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 font-medium">Saturday</td>
                      <td className="py-3 text-right">10:00 AM - 2:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Sunday</td>
                      <td className="py-3 text-right">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Care</h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing a dental emergency during office hours, please call us immediately at (555) 123-4567.
                </p>
                <p className="text-gray-600">
                  For after-hours emergencies, please call our emergency line at (555) 987-6543 or visit the nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
            <p className="mt-4 text-lg text-gray-600">Conveniently located in downtown Anytown</p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 w-full">
            {/* This would be a map in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Interactive map would be displayed here</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              We're located at 123 Main Street, Suite 100, Anytown, CA 12345. <br />
              Convenient parking is available in the building's garage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicContact;