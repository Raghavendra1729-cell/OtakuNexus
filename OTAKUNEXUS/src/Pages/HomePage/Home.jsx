import React from 'react';
import Navbar from '../../Components/Navbar';
import Sliding from './Sliding';
import ListAnime from './ListAnime';
function Home() {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.2)_0%,rgba(0,0,0,0.7)_100%)]"></div>
      <div className="relative z-10 pb-12">
        <Navbar />
        <Sliding />
        <div className="mt-8">
          <ListAnime />
        </div>
      </div>
    </div>
  );
}

export default Home;
