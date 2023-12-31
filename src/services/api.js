import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '7b2ac305a76388b1525771ad00b10673';

export const fetchMoviesTrend = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMoviesBySearch = async inputValue => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: inputValue,
    },
  });
  return data.results;
};

export const fetchMoviesReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return data.results;
};

export const fetchMoviesCast = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return data;
};
