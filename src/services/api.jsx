import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '7b2ac305a76388b1525771ad00b10673';

export const fetchMoviesTrend = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(data);
  return data;
};
