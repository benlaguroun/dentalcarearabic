import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Stethoscope, UserCog, Settings, Bluetooth as Tooth } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
    { name: 'Patients', href: '/admin/patients', icon: Users },
    { name: 'Services', href: '/admin/services', icon: Stethoscope },
    { name: 'Staff', href: '/admin/staff', icon: UserCog },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className={`bg-blue-800 text-white ${expanded ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-blue-700">
        <div className={`flex items-center ${expanded ? '' : 'justify-center w-full'}`}>
          <Tooth className="h-8 w-8 text-white" />
          {expanded && <span className="ml-2 text-xl font-semibold">DentalCare</span>}
        </div>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-white focus:outline-none"
        >
          {expanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center ${expanded ? 'px-4' : 'justify-center'} py-3 rounded-md ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  <item.icon className={`h-6 w-6 ${expanded ? 'mr-3' : ''}`} />
                  {expanded && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-700">
        <Link to="/" className="flex items-center text-blue-100 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {expanded && <span>View Public Site</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;