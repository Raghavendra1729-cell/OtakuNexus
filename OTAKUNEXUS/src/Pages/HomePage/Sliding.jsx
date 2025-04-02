import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../index.css';

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
      setindex((prevIndex) => (prevIndex + 1) % list.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, [list]);

  const filterSet = new Set();
  const filterList = list.filter((item) => !filterSet.has(item.title) && filterSet.add(item.title));

  return (
    <>
      <div className="relative bg-gradient-to-b from-black via-gray-800 to-gray-900 py-8">
        {filterList.length > 0 && (
          <div className="relative w-[90%] h-[50vh] mx-auto flex items-center justify-between 
                          bg-gradient-to-r from-black via-gray-800 to-gray-700 
                          rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-in-out">

            <h1 className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-2xl font-semibold z-10 shadow-md">
              Spotlight Rank: {filterList[index].rank}
            </h1>

            <div className="w-1/2 h-full p-6 flex flex-col justify-center text-white space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
                {filterList[index].title}
              </h2>
              <p className="text-gray-300 text-base line-clamp-3 leading-relaxed">
                {filterList[index].synopsis}
              </p>
              <div className="flex items-center space-x-4">
                <span className="px-4 py-1.5 bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded-full text-sm font-bold shadow-md">
                  ★ {filterList[index].score}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300 text-sm">{filterList[index].episodes} Episodes</span>
              </div>
            </div>

            <div className="w-1/2 h-full overflow-hidden flex items-center justify-center">
              <img
                src={filterList[index].images.jpg.large_image_url}
                alt={filterList[index].title}
                className="w-[90%] h-[90%] object-cover rounded-md transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sliding;
