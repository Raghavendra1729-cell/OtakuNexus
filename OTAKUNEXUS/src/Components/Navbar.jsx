import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Jinwoo from '../assets/Pictures/Jinwoo.png';

function Navbar() {
  return (
    <nav className="bg-slate-900/60 backdrop-blur-md border-b border-slate-700/30 text-white p-6 flex items-center justify-between shadow-2xl">
      <Link to="/">
        <img 
          src={Jinwoo} 
          alt="Loading..." 
          className="h-12 w-12 rounded-full border-2 border-blue-500/30 shadow-xl shadow-blue-500/10 transform hover:scale-110 transition-all duration-500" 
        />
      </Link>

      <h3 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 font-serif drop-shadow-lg text-center flex-grow ml-40">
        OTAKU NEXUS
      </h3>

      <ul className="flex space-x-8 text-lg">
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => `text-slate-300 hover:text-blue-300 transition-all duration-300 relative group ${isActive ? 'text-blue-300' : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/mylist"
            className={({ isActive }) => `text-slate-300 hover:text-blue-300 transition-all duration-300 relative group ${isActive ? 'text-blue-300' : ''}`}
          >
            MyList
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/ai"
            className={({ isActive }) => `text-slate-300 hover:text-blue-300 transition-all duration-300 relative group ${isActive ? 'text-blue-300' : ''}`}
          >
            Recommendations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;