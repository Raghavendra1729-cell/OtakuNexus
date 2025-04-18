import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function Searchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const timer = useRef();

  const handleSearch = (value) => {
    setInput(value);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(async () => {
      try {
        const url = input === "" 
          ? "https://api.jikan.moe/v4/top/anime" 
          : `https://api.jikan.moe/v4/anime?q=${input}&sfw`;
        
        const response = await axios.get(url);
        setResult(response.data.data?.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching anime:", error);
        setResult([]);
      }
    }, 500);

    return () => clearTimeout(timer.current);
  }, [input]);

  return (
    <div className="w-full h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 
                rounded-xl p-4 shadow-2xl border border-slate-700/30">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-3 bg-slate-950/50 text-white rounded-lg 
                 border border-slate-700/50 focus:border-blue-500/50 
                 focus:outline-none focus:ring-1 focus:ring-blue-500/30 
                 placeholder-slate-500 transition-all duration-300"
          placeholder="Search anime..."
        />
      </div>

      <div className="overflow-y-auto h-[calc(100%-60px)] scrollbar-thin 
                  scrollbar-track-slate-900 scrollbar-thumb-blue-800/30">
        {result.length === 0 ? (
          <div className="text-slate-500 text-center py-4 bg-slate-950/50 rounded-lg">
            No results found
          </div>
        ) : (
          result.map((anime, index) => (
            <div 
              key={index}
              className="flex gap-4 mb-3 p-3 bg-slate-950/50 rounded-lg 
                     hover:bg-slate-800/70 transition-all duration-300 
                     border border-slate-700/20 hover:border-blue-500/20
                     group cursor-pointer"
            >
              <img
                src={anime.images?.jpg?.large_image_url}
                alt={anime.title}
                className="w-16 h-20 object-cover rounded-md shadow-lg 
                       group-hover:scale-105 transition-transform duration-300
                       border border-slate-600/30"
              />
              <div className="flex flex-col justify-center">
                <div className="text-slate-300 group-hover:text-blue-200 
                          transition-colors duration-300 font-medium">
                  {anime.title_english || anime.title}
                </div>
                <div className="text-slate-500 text-sm mt-1">
                  Episodes: {anime.episodes || 'N/A'}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Searchbar;
