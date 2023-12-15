import React, { useEffect } from 'react';
import { fetchMoviesTrend } from 'services/api';

const Home = () => {
  useEffect(() => {
    fetchMoviesTrend();
  }, []);
  return <div>Home</div>;
};

export default Home;
