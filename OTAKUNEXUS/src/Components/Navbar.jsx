import React from 'react';
import '../index.css';
import Jinwoo from '../assets/Pictures/Jinwoo.png';
// we will create one navbar component that will be used in all the pages Home,MyList,AiAnime Recomendatiobn

function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-4 flex items-center justify-between shadow-2xl border-b border-gray-700 animate-gradient-x">
      <img 
        src={Jinwoo} // created a logo for our website 
        alt="Loading..." 
        className="h-12 w-12 rounded-full border-2 border-gray-300 shadow-xl transform hover:scale-125 transition-transform duration-500 hover:rotate-12" 
      />
      <h3 className="text-3xl font-extrabold tracking-widest text-gray-200 animate-pulse font-serif drop-shadow-lg text-center flex-grow ml-40">
        OTAKU NEXUS
      </h3>
      <ul className="flex space-x-8 text-lg font-semibold font-sans">
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-110 drop-shadow-md">
          Home
        </li>
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-110 drop-shadow-md">
          MyList
        </li>
        <li className="hover:text-gray-400 transition duration-300 cursor-pointer hover:underline underline-offset-4 decoration-gray-500 hover:scale-110 drop-shadow-md">
          AI Anime Recommendation
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;