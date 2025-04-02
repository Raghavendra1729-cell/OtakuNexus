import React from 'react';
import '../index.css';
import Jinwoo from '../assets/Pictures/Jinwoo.png';

function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white p-4 flex items-center justify-between shadow-lg border-b border-gray-700">
      <img 
        src={Jinwoo} 
        alt="Loading..." 
        className="h-12 w-12 rounded-full border-2 border-gray-300 shadow-md transform hover:scale-110 transition-transform duration-500" 
      />
      <h3 className="text-3xl font-extrabold tracking-widest text-gray-200 font-serif drop-shadow-md text-center flex-grow ml-40">
        OTAKU NEXUS
      </h3>
      <ul className="flex space-x-8 text-lg font-semibold">
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-105">
          Home
        </li>
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-105">
          MyList
        </li>
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-105">
          AI Anime Recommendation
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;