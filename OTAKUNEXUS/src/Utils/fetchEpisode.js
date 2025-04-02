import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://hianime.p.rapidapi.com/anime/episode-srcs',
  params: {
    id: 'steinsgate-3?ep=230',
    server: 'vidstreaming',
    category: 'dub'
  },
  headers: {
    'x-rapidapi-key': '0ad23b99b6msh9818836ac858cabp10aa46jsn0a0b078e7af6',
    'x-rapidapi-host': 'hianime.p.rapidapi.com'
  }
};

export const fetchEpisode = async () => {
  try {
    const response = await axios.request(options);
    console.log('Response Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    throw error;
  }
};
