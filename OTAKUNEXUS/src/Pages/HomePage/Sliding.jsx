import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../index.css";
import Searchbar from './Searchbar';

function Sliding() {
  const [list, setList] = useState([]);
  const [index, setindex] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((res) => {
        setList(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((index) => (index + 1) % list.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [list]);

  const filterSet = new Set();
  const filterList = list.filter(
    (item) => !filterSet.has(item.title) && filterSet.add(item.title)
  );

  return (
    <div className="flex relative py-8 px-4">
      <div className="w-[80%] mx-auto">
        {filterList.length > 0 && (
          <div className="relative w-[100%] h-[70vh] flex items-center justify-between 
                        bg-gradient-to-br from-slate-900 via-slate-800/80 to-gray-900/90 
                        backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden 
                        transition-all duration-700 ease-in-out border border-slate-700/30">
            <h1 className="absolute top-4 left-4 bg-blue-950/60 text-blue-100 px-6 py-2 
                        rounded-full text-xl font-medium z-10 shadow-xl border border-blue-500/20">
              Spotlight Rank : {filterList[index].rank}
            </h1>

            <div className="w-1/2 h-full p-8 flex flex-col justify-center space-y-6 
                         bg-gradient-to-r from-slate-900/90 to-transparent">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-blue-200 to-blue-400">
                {filterList[index].title_english}
              </h2>
              <p className="text-slate-300 text-base line-clamp-3 leading-relaxed">
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

            <div className="w-1/2 h-full overflow-hidden flex items-center justify-center p-6">
              <img
                src={filterList[index].images.jpg.large_image_url}
                alt={filterList[index].title}
                className="w-[90%] h-[90%] object-cover rounded-xl shadow-2xl 
                        transform hover:scale-105 transition-all duration-700 
                        border border-slate-600/30 shadow-blue-500/10"
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-[20%]"><Searchbar /></div>
    </div>
  );
}

export default Sliding;
