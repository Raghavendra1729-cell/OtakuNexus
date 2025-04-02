import React, { useEffect, useState } from "react";
import axios from "axios";

function Sliding() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((res) => setList(res.data.data)) 
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex overflow-x-auto gap-4 p-4 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {list.map((object) => (
        <div
          key={object.mal_id}
          className="flex-none w-64 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={object.images.jpg.image_url}
            alt={object.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-white truncate">{object.title}</h3>
            <p className="text-sm text-gray-400 mt-2 line-clamp-3">{object.synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sliding;
