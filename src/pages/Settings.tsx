import React, { useState } from 'react';
import { Save, Clock, MapPin, Phone, Mail, Globe, Bell, Shield, CreditCard } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // Mock clinic data
  const clinicData = {
    name: 'DentalCare Clinic',
    address: '123 Main Street, Suite 100, Anytown, CA 12345',
    phone: '(555) 123-4567',
    email: 'info@dentalcareclinic.com',
    website: 'www.dentalcareclinic.com',
    hours: [
      { day: 'Monday', open: '09:00', close: '17:00' },
      { day: 'Tuesday', open: '09:00', close: '17:00' },
      { day: 'Wednesday', open: '09:00', close: '17:00' },
      { day: 'Thursday', open: '09:00', close: '17:00' },
      { day: 'Friday', open: '09:00', close: '16:00' },
      { day: 'Saturday', open: '10:00', close: '14:00' },
      { day: 'Sunday', open: '', close: '' },
    ]
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage clinic settings and preferences.</p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('general')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'general'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'notifications'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'security'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'billing'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Billing
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'general' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">Clinic Information</h3>
                <p className="mt-1 text-sm text-gray-500">Update your clinic's basic information.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="clinic-name" className="block text-sm font-medium text-gray-700">
                    Clinic Name
                  </label>
                  <input
                    type="text"
                    name="clinic-name"
                    id="clinic-name"
                    defaultValue={clinicData.name}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      Address
                    </div>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    defaultValue={clinicData.address}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-400 mr-2" />
                        Phone
                      </div>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      defaultValue={clinicData.phone}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-400 mr-2" />
                        Email
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={clinicData.email}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gray-400 mr-2" />
                      Website
                    </div>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    defaultValue={clinicData.website}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 flex items-center mb-3">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    Business Hours
                  </h4>
                  <div className="bg-gray-50 rounded-md p-4">
                    <div className="space-y-3">
                      {clinicData.hours.map((hour) => (
                        <div key={hour.day} className="grid grid-cols-3 gap-4 items-center">
                          <div className="text-sm font-medium text-gray-700">{hour.day}</div>
                          <div>
                            <input
                              type="time"
                              defaultValue={hour.open}
                              className="block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                          <div>
                            <input
                              type="time"
                              defaultValue={hour.close}
                              className="block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Bell className="h-5 w-5 text-gray-400 mr-2" />
                  Notification Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">Configure how and when you receive notifications.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Email Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="appointment-reminders"
                          name="appointment-reminders"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="appointment-reminders" className="font-medium text-gray-700">
                          Appointment Reminders
                        </label>
                        <p className="text-gray-500">Receive email notifications for upcoming appointments.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="new-appointments"
                          name="new-appointments"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="new-appointments" className="font-medium text-gray-700">
                          New Appointment Bookings
                        </label>
                        <p className="text-gray-500">Receive email notifications when new appointments are booked.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="cancelled-appointments"
                          name="cancelled-appointments"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="cancelled-appointments" className="font-medium text-gray-700">
                          Cancelled Appointments
                        </label>
                        <p className="text-gray-500">Receive email notifications when appointments are cancelled.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">SMS Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="sms-appointment-reminders"
                          name="sms-appointment-reminders"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="sms-appointment-reminders" className="font-medium text-gray-700">
                          Appointment Reminders
                        </label>
                        <p className="text-gray-500">Send SMS reminders to patients for upcoming appointments.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="sms-confirmation"
                          name="sms-confirmation"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="sms-confirmation" className="font-medium text-gray-700">
                          Booking Confirmations
                        </label>
                        <p className="text-gray-500">Send SMS confirmations when appointments are booked.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Shield className="h-5 w-5 text-gray-400 mr-2" />
                  Security Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">Manage your account security and access controls.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="current-password"
                        id="current-password"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Two-Factor Authentication</h4>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="two-factor"
                        name="two-factor"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="two-factor" className="font-medium text-gray-700">
                        Enable Two-Factor Authentication
                      </label>
                      <p className="text-gray-500">Add an extra layer of security to your account.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Session Management</h4>
                  <p className="text-sm text-gray-500 mb-4">You're currently signed in on these devices:</p>
                  
                  <div className="bg-gray-50 rounded-md p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Chrome on Windows</p>
                        <p className="text-xs text-gray-500">Last active: Today at 10:23 AM</p>
                      </div>
                      <div className="text-xs text-gray-500">Current Session</div>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    className="text-sm text-red-600 hover:text-red-500"
                  >
                    Sign out of all other sessions
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                  Billing Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">Manage your billing preferences and payment methods.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Payment Methods</h4>
                  <div className="bg-gray-50 rounded-md p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded-md mr-3">
                          <svg className="h-6 w-6" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="24" rx="4" fill="#252525"/>
                            <path d="M14.5 10.5C14.5 9.11929 15.6193 8 17 8H19C20.3807 8 21.5 9.11929 21.5 10.5V13.5C21.5 14.8807 20.3807 16 19 16H17C15.6193 16 14.5 14.8807 14.5 13.5V10.5Z" fill="#FF5F00"/>
                            <path d="M14.5 12C14.5 14.4853 16.5147 16.5 19 16.5C21.4853 16.5 23.5 14.4853 23.5 12C23.5 9.51472 21.4853 7.5 19 7.5C16.5147 7.5 14.5 9.51472 14.5 12Z" stroke="#EB001B"/>
                            <path d="M14.5 12C14.5 14.4853 16.5147 16.5 19 16.5C21.4853 16.5 23.5 14.4853 23.5 12C23.5 9.51472 21.4853 7.5 19 7.5C16.5147 7.5 14.5 9.51472 14.5 12Z" stroke="#F79E1B"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Mastercard ending in 4242</p>
                          <p className="text-xs text-gray-500">Expires 12/2025</p>
                        </div>
                      </div>
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Billing Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="billing-name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="billing-name"
                        id="billing-name"
                        defaultValue="DentalCare Clinic LLC"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="billing-address" className="block text-sm font-medium text-gray-700">
                        Billing Address
                      </label>
                      <textarea
                        id="billing-address"
                        name="billing-address"
                        rows={3}
                        defaultValue="123 Main Street, Suite 100, Anytown, CA 12345"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="tax-id" className="block text-sm font-medium text-gray-700">
                        Tax ID / VAT Number
                      </label>
                      <input
                        type="text"
                        name="tax-id"
                        id="tax-id"
                        defaultValue="US123456789"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Subscription Plan</h4>
                  <div className="bg-blue-50 rounded-md p-4 mb-4 border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Professional Plan</p>
                        <p className="text-xs text-gray-500">$99/month, billed monthly</p>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;