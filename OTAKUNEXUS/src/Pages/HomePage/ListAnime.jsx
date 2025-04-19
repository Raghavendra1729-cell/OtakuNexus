import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FavContext } from '../../App';

function Card({ anime }) {
  const { favAnime, setFavAnime } = useContext(FavContext);

  const isLiked = favAnime.filter(item => item.mal_id === anime.mal_id).length > 0;

  const handleLike = () => {
    if (isLiked) {
      const newList = favAnime.filter(item => item.mal_id !== anime.mal_id);
      setFavAnime(newList);
    } else {
      setFavAnime([...favAnime, anime]);
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/30">
      <div className="relative">
        <img 
          src={anime.images.jpg.large_image_url} 
          alt={anime.title}
          className="w-full h-64 object-contain"
          loading="lazy"
        />
        <button 
          onClick={handleLike}
          className="absolute top-2 right-2 p-2 bg-slate-900/50 rounded-full"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={isLiked ? 'h-5 w-5 text-red-400' : 'h-5 w-5 text-gray-300'}
            fill={isLiked ? 'currentColor' : 'none'}
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
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
  );
}

function ListAnime() {
  const [listAnime, setListAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchAnimeList = (pageNum) => {
    setLoading(true);
    setTimeout(() => {
      axios.get(`https://api.jikan.moe/v4/top/anime?page=${pageNum}`)
        .then((res) => {
          setListAnime(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch anime list:", err);
          setTimeout(() => fetchAnimeList(pageNum), 5000);
        });
    }, 1000);
  };

  useEffect(() => {
    fetchAnimeList(page);
    return () => setLoading(false);
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
