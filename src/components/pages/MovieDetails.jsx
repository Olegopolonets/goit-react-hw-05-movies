import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([null]);

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <div>
      <img
        src={movie.poster_path ? `${imgLink + movie.poster_path}` : ''}
        alt={movie.media_type}
      />
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieDetails;
