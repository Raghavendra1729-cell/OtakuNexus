import React, { Suspense, lazy, useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';

const Sliding = lazy(() => import('./Sliding'));
const ListAnime = lazy(() => import('./ListAnime'));

function Home() {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowList(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.2)_0%,rgba(0,0,0,0.7)_100%)]"></div>
      <div className="relative z-10 pb-12">
        <Navbar />
        <Suspense fallback={<div className="text-blue-400 text-center py-12">Loading...</div>}>
          <Sliding />
        </Suspense>
        {showList && (
          <div className="mt-8">
            <Suspense fallback={<div className="text-blue-400 text-center py-12">Loading list...</div>}>
              <ListAnime />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
