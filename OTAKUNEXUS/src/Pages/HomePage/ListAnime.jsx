import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card({ anime }) {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/30 
                    hover:border-blue-500/20 transition-all duration-300 group">
      <img 
        src={anime.images.jpg.large_image_url} 
        alt={anime.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
      />
      <div className="p-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80">
        <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {anime.title_english || anime.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-blue-400">★ {anime.score}</span>
          <span className="text-slate-400 text-sm">
            Episodes: {anime.episodes || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}

function ListAnime() {
  const [listAnime, setListAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    // Add 1 second delay before fetching
    setTimeout(() => {
      axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)
        .then((res) => {
          setListAnime(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);
  }, [page]);

  return (
    <div className="px-8 pb-12">
      <div className="w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-blue-200 to-blue-400 mb-8">
          Explore More Anime
        </h2>

        {loading ? (
          <div className="text-blue-400 text-center py-12">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {listAnime.map((anime) => (
                <Card key={anime.mal_id} anime={anime} />
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-6 py-2 bg-blue-950/60 text-blue-200 rounded-full
                         disabled:opacity-50 border border-blue-500/20 
                         hover:bg-blue-900/40 transition-all duration-300"
              >
                Previous
              </button>
              <span className="px-6 py-2 bg-slate-800/60 text-white rounded-full 
                           border border-slate-700/30">
                Page {page}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                className="px-6 py-2 bg-blue-950/60 text-blue-200 rounded-full
                         border border-blue-500/20 hover:bg-blue-900/40 
                         transition-all duration-300"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListAnime;
