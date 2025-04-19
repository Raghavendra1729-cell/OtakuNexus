import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/HomePage/Home';
import Favpage from './Pages/FavPage/Favpage';
import Navbar from './Components/Navbar';

export const FavContext = createContext();

function App() {
  const [favAnime, setFavAnime] = useState([]);

  return (
    <FavContext.Provider value={{ favAnime, setFavAnime }}>
      <BrowserRouter>
        <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.2)_0%,rgba(0,0,0,0.7)_100%)]"></div>
          <div className="relative z-10 pb-12">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mylist" element={<Favpage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </FavContext.Provider>
  );
}

export default App;
