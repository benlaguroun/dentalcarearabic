import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  Pill, 
  DollarSign, 
  Phone, 
  Mail, 
  MapPin, 
  Edit, 
  Trash, 
  Clock,
  AlertTriangle
} from 'lucide-react';

// Mock patient data
const mockPatientData = {
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  phone: '(555) 123-4567',
  address: '123 Main St, Anytown, CA 12345',
  dateOfBirth: '1985-06-15',
  gender: 'Female',
  insuranceProvider: 'Blue Cross Blue Shield',
  insuranceNumber: 'BCBS123456789',
  medicalHistory: [
    { id: 1, condition: 'Allergies', details: 'Penicillin', date: '2010-03-12' },
    { id: 2, condition: 'Hypertension', details: 'Controlled with medication', date: '2018-05-20' }
  ],
  medications: [
    { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', startDate: '2018-05-25' }
  ],
  dentalHistory: [
    { id: 1, procedure: 'Root Canal', tooth: '16', date: '2022-11-10', dentist: 'Dr. Smith' },
    { id: 2, procedure: 'Filling', tooth: '24', date: '2023-02-05', dentist: 'Dr. Johnson' }
  ],
  appointments: [
    { id: 1, date: '2023-04-15', time: '10:00 AM', reason: 'Dental Cleaning', status: 'Completed' },
    { id: 2, date: '2023-05-20', time: '11:30 AM', reason: 'Follow-up Check', status: 'Scheduled' }
  ],
  notes: [
    { id: 1, date: '2023-04-15', author: 'Dr. Smith', content: 'Patient reported sensitivity in upper right molar. Recommended sensitive toothpaste.' },
    { id: 2, date: '2023-03-10', author: 'Dr. Johnson', content: 'Discussed importance of flossing daily. Patient agreed to improve oral hygiene routine.' }
  ],
  billing: [
    { id: 1, date: '2023-04-15', service: 'Dental Cleaning', amount: 120, status: 'Paid', insuranceCovered: 100 },
    { id: 2, date: '2023-02-05', service: 'Filling', amount: 200, status: 'Paid', insuranceCovered: 160 }
  ]
};

const PatientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const patient = mockPatientData; // In a real app, you'd fetch the patient by ID

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">{patient.name}</h1>
            <span className="ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active Patient
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">Patient ID: {patient.id}</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  </div>
                  <dd className="mt-1 text-sm text-gray-900">{patient.phone}</dd>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                  </div>
                  <dd className="mt-1 text-sm text-gray-900">{patient.email}</dd>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                  </div>
                  <dd className="mt-1 text-sm text-gray-900">{patient.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                  <dd className="mt-1 text-sm text-gray-900">{patient.dateOfBirth}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Gender</dt>
                  <dd className="mt-1 text-sm text-gray-900">{patient.gender}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Insurance Information</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Provider</dt>
                  <dd className="mt-1 text-sm text-gray-900">{patient.insuranceProvider}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Policy Number</dt>
                  <dd className="mt-1 text-sm text-gray-900">{patient.insuranceNumber}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Medical History</h3>
              <button className="text-sm text-blue-600 hover:text-blue-500">
                Add
              </button>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {patient.medicalHistory.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {patient.medicalHistory.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">{item.condition}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No medical history recorded.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Appointments</h3>
              <button className="text-sm text-blue-600 hover:text-blue-500">
                View All
              </button>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {patient.appointments.filter(a => a.status === 'Scheduled').length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {patient.appointments
                    .filter(a => a.status === 'Scheduled')
                    .map((appointment) => (
                      <li key={appointment.id} className="py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-blue-100 rounded-md p-2 mr-4">
                              <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{appointment.reason}</p>
                              <div className="flex items-center mt-1">
                                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">No upcoming appointments.</p>
                  <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Schedule Now
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Dental History</h3>
              <button className="text-sm text-blue-600 hover:text-blue-500">
                Add Procedure
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Procedure
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tooth
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dentist
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patient.dentalHistory.map((procedure) => (
                    <tr key={procedure.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {procedure.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {procedure.procedure}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {procedure.tooth}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {procedure.dentist}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-900">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Medications</h3>
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Add
                </button>
              </div>
              <div className="px-4 py-5 sm:p-6">
                {patient.medications.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {patient.medications.map((medication) => (
                      <li key={medication.id} className="py-3">
                        <div className="flex items-start">
                          <Pill className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{medication.name}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {medication.dosage}, {medication.frequency}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Since: {medication.startDate}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500">No medications recorded.</p>
                )}
              </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Allergies & Alerts</h3>
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Add
                </button>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="rounded-md bg-yellow-50 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Allergies</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>Penicillin - Severe reaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">No other alerts recorded.</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Billing History</h3>
              <button className="text-sm text-blue-600 hover:text-blue-500">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Insurance Covered
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patient.billing.map((bill) => (
                    <tr key={bill.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {bill.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {bill.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${bill.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${bill.insuranceCovered.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bill.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;