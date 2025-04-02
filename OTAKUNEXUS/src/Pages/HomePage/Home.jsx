import React from 'react';
import Navbar from '../../Components/Navbar';
import Sliding from './Sliding';

function Home() {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-800 to-gray-900 py-8 min-h-screen">
      <Navbar />
      <Sliding />
    </div>
  );
}

export default Home;
