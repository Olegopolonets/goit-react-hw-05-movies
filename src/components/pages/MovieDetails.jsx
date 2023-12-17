import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const goBackRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState([null]);

  useEffect(() => {
    fetchMoviesById(movieId).then(res => setMovie(res));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(goBackRef.current);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <img
        src={movie.poster_path ? `${imgLink + movie.poster_path}` : ''}
        alt={movie.media_type}
      />
      <p>{movie.title}</p>
      <hr />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
