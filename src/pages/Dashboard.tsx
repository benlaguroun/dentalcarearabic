import React from 'react';
import { Calendar, Users, DollarSign, Clock, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data
  const stats = [
    { name: 'Today\'s Appointments', value: '12', icon: Calendar, color: 'bg-blue-500' },
    { name: 'Total Patients', value: '1,248', icon: Users, color: 'bg-green-500' },
    { name: 'Monthly Revenue', value: '$24,500', icon: DollarSign, color: 'bg-purple-500' },
    { name: 'Avg. Wait Time', value: '14 min', icon: Clock, color: 'bg-yellow-500' },
  ];

  const upcomingAppointments = [
    { id: 1, patient: 'Sarah Johnson', time: '09:00 AM', treatment: 'Dental Cleaning', status: 'Confirmed' },
    { id: 2, patient: 'Michael Chen', time: '10:30 AM', treatment: 'Root Canal', status: 'Confirmed' },
    { id: 3, patient: 'Emily Davis', time: '11:45 AM', treatment: 'Consultation', status: 'Pending' },
    { id: 4, patient: 'Robert Wilson', time: '02:15 PM', treatment: 'Tooth Extraction', status: 'Confirmed' },
    { id: 5, patient: 'Jessica Brown', time: '03:30 PM', treatment: 'Dental Filling', status: 'Confirmed' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome to DentalCare Clinic management system.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Today's Appointments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Treatment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{appointment.patient}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{appointment.treatment}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Activity Overview</h3>
          </div>
          <div className="p-6">
            <div className="relative" style={{ height: '250px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="h-8 w-8 text-gray-300" />
                <p className="ml-2 text-gray-500">Activity chart will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;