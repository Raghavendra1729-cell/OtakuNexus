import { useState, createContext } from 'react';
import './index.css';
import Home from './Pages/HomePage/Home';

export const FavContext = createContext();

function App() {
  const [favAnime, setFavAnime] = useState([]);

  return (
    <FavContext.Provider value={{ favAnime, setFavAnime }}>
      <Home />
    </FavContext.Provider>
  );
}

export default App;
