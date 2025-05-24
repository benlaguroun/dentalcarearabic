import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react';
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isToday } from 'date-fns';

const Appointments: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'day' | 'week'>('day');
  
  // Mock data for appointments
  const appointments = [
    { id: 1, patientName: 'Sarah Johnson', time: '09:00', duration: 30, treatment: 'Dental Cleaning', status: 'confirmed' },
    { id: 2, patientName: 'Michael Chen', time: '10:30', duration: 60, treatment: 'Root Canal', status: 'confirmed' },
    { id: 3, patientName: 'Emily Davis', time: '11:45', duration: 30, treatment: 'Consultation', status: 'pending' },
    { id: 4, patientName: 'Robert Wilson', time: '14:15', duration: 45, treatment: 'Tooth Extraction', status: 'confirmed' },
    { id: 5, patientName: 'Jessica Brown', time: '15:30', duration: 30, treatment: 'Dental Filling', status: 'confirmed' },
  ];

  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 9; // Start at 9 AM
    return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
  });

  const handlePrevDay = () => {
    setCurrentDate(prevDate => addDays(prevDate, -1));
  };

  const handleNextDay = () => {
    setCurrentDate(prevDate => addDays(prevDate, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentDate, { weekStartsOn: 1 }),
    end: endOfWeek(currentDate, { weekStartsOn: 1 })
  });

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and schedule patient appointments.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">
              {view === 'day' 
                ? format(currentDate, 'MMMM d, yyyy') 
                : `${format(weekDays[0], 'MMM d')} - ${format(weekDays[6], 'MMM d, yyyy')}`}
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setView('day')}
                className={`px-4 py-2 text-sm font-medium ${
                  view === 'day' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 text-sm font-medium ${
                  view === 'week' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                Week
              </button>
            </div>
            <button
              onClick={handleToday}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Today
            </button>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={handlePrevDay}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextDay}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue=""
              >
                <option value="">All Treatments</option>
                <option value="cleaning">Dental Cleaning</option>
                <option value="rootcanal">Root Canal</option>
                <option value="extraction">Tooth Extraction</option>
                <option value="filling">Dental Filling</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue=""
              >
                <option value="">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {view === 'day' ? (
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {timeSlots.map((timeSlot, index) => {
                  const slotAppointments = appointments.filter(app => {
                    const [hour] = app.time.split(':');
                    const slotHour = index + 9;
                    return parseInt(hour) === slotHour;
                  });

                  return (
                    <div key={timeSlot} className="p-4 flex">
                      <div className="w-20 flex-shrink-0 text-sm text-gray-500">{timeSlot}</div>
                      <div className="flex-grow">
                        {slotAppointments.length > 0 ? (
                          <div className="space-y-2">
                            {slotAppointments.map(appointment => (
                              <div 
                                key={appointment.id} 
                                className={`p-2 rounded-md ${
                                  appointment.status === 'confirmed' 
                                    ? 'bg-blue-50 border-l-4 border-blue-500' 
                                    : 'bg-yellow-50 border-l-4 border-yellow-500'
                                }`}
                              >
                                <div className="flex justify-between">
                                  <span className="font-medium">{appointment.patientName}</span>
                                  <span className="text-sm text-gray-500">{appointment.time}</span>
                                </div>
                                <div className="text-sm text-gray-600">{appointment.treatment}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="h-10 border border-dashed border-gray-300 rounded-md flex items-center justify-center">
                            <span className="text-sm text-gray-400">Available</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-8 border-b border-gray-200">
                  <div className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </div>
                  {weekDays.map((day, i) => (
                    <div 
                      key={i} 
                      className={`py-3 px-4 text-center text-xs font-medium uppercase tracking-wider ${
                        isToday(day) ? 'bg-blue-50 text-blue-700' : 'text-gray-500'
                      }`}
                    >
                      {format(day, 'EEE')}<br />
                      {format(day, 'd')}
                    </div>
                  ))}
                </div>

                {timeSlots.map((timeSlot, index) => (
                  <div key={timeSlot} className="grid grid-cols-8 border-b border-gray-200">
                    <div className="py-3 px-4 text-sm text-gray-500">{timeSlot}</div>
                    {weekDays.map((day, dayIndex) => {
                      // This is a simplified example - in a real app, you'd filter appointments by both time and day
                      const dayAppointments = dayIndex === 0 ? appointments.filter(app => {
                        const [hour] = app.time.split(':');
                        const slotHour = index + 9;
                        return parseInt(hour) === slotHour;
                      }) : [];

                      return (
                        <div key={dayIndex} className="py-2 px-2 border-l border-gray-200">
                          {dayAppointments.length > 0 ? (
                            <div className="space-y-1">
                              {dayAppointments.map(appointment => (
                                <div 
                                  key={appointment.id} 
                                  className={`p-1 text-xs rounded ${
                                    appointment.status === 'confirmed' 
                                      ? 'bg-blue-50 border-l-2 border-blue-500' 
                                      : 'bg-yellow-50 border-l-2 border-yellow-500'
                                  }`}
                                >
                                  <div className="font-medium truncate">{appointment.patientName}</div>
                                  <div className="truncate">{appointment.treatment}</div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;