import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../index.css";
import Searchbar from './Searchbar';

function Sliding() {
  const [list, setList] = useState([]);
  const [index, setindex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get("https://api.jikan.moe/v4/top/anime")
        .then((res) => {
          setList(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.error("Failed to fetch:", err);
          setTimeout(() => {
            axios.get("https://api.jikan.moe/v4/top/anime")
              .then((res) => setList(res.data.data))
              .catch((err) => console.error("Retry failed:", err));
          }, 1000);
        });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((index) => (index + 1) % list.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [list]);

  const filterSet = new Set();
  const filterList = list.filter(
    (item) => !filterSet.has(item.title) && filterSet.add(item.title)
  );

  return (
    <div className="flex flex-col lg:flex-row relative py-8 px-4 gap-4">
      <div className="w-full lg:w-[80%]">
        {filterList.length > 0 && (
          <div className="relative w-full h-[70vh] flex flex-col lg:flex-row items-center justify-between 
                        bg-gradient-to-br from-slate-900 via-slate-800/80 to-gray-900/90 
                        backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden 
                        transition-all duration-700 ease-in-out border border-slate-700/30">
            <h1 className="absolute top-4 left-4 bg-blue-950/60 text-blue-100 px-6 py-2 
                        rounded-full text-base lg:text-xl font-medium z-10 shadow-xl border border-blue-500/20">
              Spotlight Rank : {filterList[index].rank}
            </h1>

            <div className="w-full lg:w-1/2 h-full p-4 lg:p-8 flex flex-col justify-center space-y-4 lg:space-y-6 
                         bg-gradient-to-r from-slate-900/90 to-transparent">
              <h2 className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-blue-200 to-blue-400">
                {filterList[index].title_english}
              </h2>
              <p className="text-slate-300 text-sm lg:text-base line-clamp-3 leading-relaxed">
                {filterList[index].synopsis}
              </p>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-1.5 bg-blue-950/50 text-blue-200 rounded-full 
                             text-sm font-medium shadow-xl border border-blue-500/20">
                  ★ {filterList[index].score}
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400 text-sm">
                  {filterList[index].episodes} Episodes
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full flex flex-col">
              <div className="h-[80%] w-[100%]relative flex items-center justify-center">
                <img
                  src={filterList[index].images.jpg.large_image_url}
                  alt={filterList[index].title}
                  className="w-full h-full object-contain rounded-tr-xl"
                  loading="lazy"
                />
              </div>

              <div className="h-[30%] bg-slate-900/60 backdrop-blur-sm p-4 rounded-br-xl">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Status:</span>
                      <span className="text-blue-400 text-sm font-medium">{filterList[index].status}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Year:</span>
                      <span className="text-blue-400 text-sm font-medium">{filterList[index].year || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Rating:</span>
                      <span className="text-blue-400 text-sm font-medium">{filterList[index].rating || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Source:</span>
                      <span className="text-blue-400 text-sm font-medium">{filterList[index].source || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filterList[index].genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 text-xs bg-blue-950/50 text-blue-200 
                               rounded-full border border-blue-500/20"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full lg:w-[20%] mt-4 lg:mt-0"><Searchbar /></div>
    </div>
  );
}

export default Sliding;
