import React, { useContext, useState } from 'react';
import { FavContext } from '../../App';

function Favpage() {
  const { favAnime, setFavAnime } = useContext(FavContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemove = (animeId) => {
    setFavAnime(favAnime.filter(anime => anime.mal_id !== animeId));
  };

  const filteredAnime = favAnime.filter(anime => 
    anime.title_english?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    anime.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-8 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
            My Favorite Anime
          </h2>
          <input
            type="text"
            placeholder="Search favorites..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 text-white rounded-lg border border-slate-700/30 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        {filteredAnime.length === 0 ? (
          <div className="text-slate-400 text-center py-12">
            {searchTerm ? "No matches found" : "No favorites added yet"}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAnime.map((anime) => (
              <div key={anime.mal_id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/30">
                <div className="relative">
                  <img 
                    src={anime.images.jpg.large_image_url} 
                    alt={anime.title}
                    className="w-full h-64 object-contain"
                  />
                  <button
                    onClick={() => handleRemove(anime.mal_id)}
                    className="absolute top-2 right-2 p-2 bg-red-900/50 rounded-full hover:bg-red-800/50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold mb-2">{anime.title_english || anime.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">★ {anime.score}</span>
                    <span className="text-slate-400 text-sm">Episodes: {anime.episodes || 'N/A'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favpage;
