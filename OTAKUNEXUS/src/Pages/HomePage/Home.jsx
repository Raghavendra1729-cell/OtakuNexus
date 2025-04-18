import React from 'react';
import Navbar from '../../Components/Navbar';
import Sliding from './Sliding';
function Home() {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.2)_0%,rgba(0,0,0,0.7)_100%)]"></div>
      <div className="relative z-10">
        <Navbar />
        <Sliding />
      </div>
    </div>
  );
}

export default Home;
