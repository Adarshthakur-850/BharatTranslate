import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Languages, History, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-6xl">
        <div className="flex items-center space-x-2">
          <Languages className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            BharatTranslate
          </span>
        </div>
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Languages className="w-5 h-5" />
            <span className="hidden sm:inline">Translate</span>
          </Link>
          <Link 
            to="/history" 
            className={`flex items-center space-x-1 ${isActive('/history') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <History className="w-5 h-5" />
            <span className="hidden sm:inline">History</span>
          </Link>
          <Link 
            to="/settings" 
            className={`flex items-center space-x-1 ${isActive('/settings') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
