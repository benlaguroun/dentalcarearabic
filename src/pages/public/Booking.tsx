import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Check, AlertCircle } from 'lucide-react';
import { useSupabase } from '../../lib/supabase';
import { format, addDays, isWeekend } from 'date-fns';

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const PublicBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    isNewPatient: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const { supabase } = useSupabase();

  // Generate available dates (next 14 days, excluding weekends)
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = addDays(new Date(), i);
    return { date, available: !isWeekend(date) };
  });

  // Fetch services from Supabase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('id, name, duration, price')
          .order('name');
        
        if (error) throw error;
        
        setServices(data || mockServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to mock data
        setServices(mockServices);
      }
    };

    fetchServices();
  }, [supabase]);

  // Generate time slots based on selected date
  useEffect(() => {
    // In a real app, this would check availability against existing appointments
    const generateTimeSlots = () => {
      const slots: TimeSlot[] = [];
      const startHour = 9; // 9 AM
      const endHour = 17; // 5 PM
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const time = `${hour > 12 ? hour - 12 : hour}:${minute === 0 ? '00' : minute} ${hour >= 12 ? 'PM' : 'AM'}`;
          
          // Simulate some slots being unavailable
          const available = Math.random() > 0.3;
          
          slots.push({ time, available });
        }
      }
      
      return slots;
    };
    
    setTimeSlots(generateTimeSlots());
    setSelectedTime(null);
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBookingStatus(null);

    try {
      // Get selected service details
      const service = services.find(s => s.id === selectedService);
      
      if (!service || !selectedTime) {
        throw new Error('Please select a service and time');
      }

      // Submit to Supabase
      const { error } = await supabase
        .from('appointments')
        .insert([
          {
            service_id: selectedService,
            service_name: service.name,
            appointment_date: format(selectedDate, 'yyyy-MM-dd'),
            appointment_time: selectedTime,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            notes: formData.notes,
            is_new_patient: formData.isNewPatient,
            status: 'pending',
            created_at: new Date()
          }
        ]);

      if (error) throw error;

      setBookingStatus({
        success: true,
        message: 'Your appointment has been booked successfully! We will send a confirmation email shortly.'
      });
      
      // Reset form
      setStep(1);
      setSelectedService(null);
      setSelectedDate(new Date());
      setSelectedTime(null);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: '',
        isNewPatient: false
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      setBookingStatus({
        success: false,
        message: 'There was an error booking your appointment. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedDate !== null && selectedTime !== null;
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      default:
        return false;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl max-w-3xl mx-auto">Schedule your dental visit in just a few simple steps.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {bookingStatus ? (
            <div className={`p-6 rounded-lg shadow-md ${bookingStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${bookingStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {bookingStatus.success ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <AlertCircle className="h-6 w-6" />
                  )}
                </div>
                <div className="ml-3">
                  <h3 className={`text-lg font-medium ${bookingStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                    {bookingStatus.success ? 'Appointment Booked' : 'Booking Error'}
                  </h3>
                  <div className={`mt-2 text-sm ${bookingStatus.success ? 'text-green-700' : 'text-red-700'}`}>
                    <p>{bookingStatus.message}</p>
                  </div>
                  {bookingStatus.success && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStatus(null)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Book Another Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Progress Steps */}
              <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className=" text-lg font-medium text-gray-900">Book Your Appointment</h2>
                  <div className="flex items-center">
                    <span className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      1
                    </span>
                    <div className={`h-1 w-8 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <span className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      2
                    </span>
                    <div className={`h-1 w-8 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <span className={`flex items-center justify-center h-8 w-8 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      3
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                        <Clock className="h-5 w-5" />
                      </span>
                      Select a Service
                    </h3>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <div 
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={`p-4 border rounded-md cursor-pointer transition-colors ${
                            selectedService === service.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="text-lg font-medium text-gray-900">{service.name}</h4>
                            <span className="text-blue-600 font-medium">${service.price}</span>
                          </div>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{service.duration} minutes</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                        <Calendar className="h-5 w-5" />
                      </span>
                      Select Date & Time
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Available Dates</h4>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {availableDates.map((dateObj, index) => (
                          <div 
                            key={index}
                            onClick={() => dateObj.available && handleDateSelect(dateObj.date)}
                            className={`p-2 text-center rounded-md cursor-pointer ${
                              !dateObj.available 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                : format(selectedDate, 'yyyy-MM-dd') === format(dateObj.date, 'yyyy-MM-dd')
                                  ? 'bg-blue-600 text-white'
                                  : 'hover:bg-blue-50'
                            }`}
                          >
                            <div className="text-xs">{format(dateObj.date, 'EEE')}</div>
                            <div className="font-medium">{format(dateObj.date, 'd')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Available Time Slots</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot, index) => (
                          <div 
                            key={index}
                            onClick={() => slot.available && handleTimeSelect(slot.time)}
                            className={`p-2 text-center rounded-md cursor-pointer ${
                              !slot.available 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                : selectedTime === slot.time
                                  ? 'bg-blue-600 text-white'
                                  : 'hover:bg-blue-50'
                            }`}
                          >
                            {slot.time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                        <User className="h-5 w-5" />
                      </span>
                      Your Information
                    </h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Please let us know if you have any specific concerns or questions."
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="isNewPatient"
                              name="isNewPatient"
                              type="checkbox"
                              checked={formData.isNewPatient}
                              onChange={handleChange}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="isNewPatient" className="font-medium text-gray-700">
                              I am a new patient
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Appointment Summary</h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {services.find(s => s.id === selectedService)?.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {services.find(s => s.id === selectedService)?.duration} minutes - ${services.find(s => s.id === selectedService)?.price}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Calendar className="h-4 w-4 text-gray-400 mt-0.5 mr-2" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                              </p>
                              <p className="text-xs text-gray-500">
                                {selectedTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                <div className="flex justify-between mt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepComplete()}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isStepComplete() || isSubmitting}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Booking...' : 'Book Appointment'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you prefer to book your appointment by phone or have any questions, please don't hesitate to call us.
            </p>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock services data (used as fallback if Supabase is not set up)
const mockServices: Service[] = [
  { id: 1, name: 'Dental Cleaning', duration: 30, price: 120 },
  { id: 2, name: 'Dental Examination', duration: 30, price: 80 },
  { id: 3, name: 'Tooth Filling', duration: 45, price: 150 },
  { id: 4, name: 'Root Canal', duration: 90, price: 800 },
  { id: 5, name: 'Teeth Whitening', duration: 60, price: 350 },
  { id: 6, name: 'Dental Crown', duration: 60, price: 1200 },
  { id: 7, name: 'Orthodontic Consultation', duration: 45, price: 100 },
];

export default PublicBooking;