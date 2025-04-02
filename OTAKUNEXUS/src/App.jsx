import { useState, useEffect } from 'react';
import './index.css';
import Home from './Pages/HomePage/Home';
import { fetchEpisode } from './Utils/fetchEpisode';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEpisode();
        console.log('Fetched Episode Data:', data);
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
