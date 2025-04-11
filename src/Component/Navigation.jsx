import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Cpu, Mail, FileUser, GraduationCap, Menu, X, Workflow } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
              <Workflow className="h-8 w-8 text-yellow-300" />
              <span className="text-yellow-300">Logo</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1">
              <Home size={18} />
              <span>HOME</span>
            </Link>
            <Link to="/Skills" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1">
              <Cpu size={18} />
              <span>SKILLS</span>
            </Link>
            <Link to="/Contact" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1">
              <Mail size={18} />
              <span>CONTACT</span>
            </Link>

            <Link to="/Resume" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1">
              <FileUser size={18} />
              <span>RESUME</span>
            </Link>

            <Link to="/Education" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center gap-1">
              <GraduationCap size={18} />
              <span>EDUCATION</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-600">
            <Link to="/" className="text-white hover:bg-blue-700  px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Home size={18} />
              <span>HOME</span>
            </Link>
            <Link to="/Skills" className="text-white hover:bg-blue-700  px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Cpu size={18} />
              <span>SKILLS</span>
            </Link>
            <Link to="/Contact" className="text-white hover:bg-blue-700  px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Mail size={18} />
              <span>CONTACT</span>
            </Link>
            <Link to="/Education" className="text-white hover:bg-blue-700  px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <GraduationCap size={18} />
              <span>EDUCATION</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}