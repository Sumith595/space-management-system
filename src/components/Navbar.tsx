import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, Navigation } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 text-white p-4 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Rocket className="h-6 w-6" />
          <span>SpaceOS</span>
        </NavLink>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-1 hover:text-blue-400 transition-colors ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            <Rocket className="h-4 w-4" />
            <span>Get Started</span>
          </NavLink>
          <NavLink
            to="/vehicles"
            className={({ isActive }) =>
              `flex items-center space-x-1 hover:text-blue-400 transition-colors ${
                isActive ? 'text-blue-400' : ''
              }`
            }
          >
            <Navigation className="h-4 w-4" />
            <span>Space Vehicles</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;