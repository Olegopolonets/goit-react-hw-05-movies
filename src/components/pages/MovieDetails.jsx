import React, { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import s from './Mov.module.css';
import { IoPlayCircleOutline } from 'react-icons/io5';
import moment from 'moment';
import styled from 'styled-components';

const imgLink = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  //
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

  const onTrailer = () => {
    alert('Sorry, not implemented yet.');
  };

  return (
    <div>
      <ButtonGoBack onClick={handleGoBack}>Go back</ButtonGoBack>
      <div className={s.filmWrapper}>
        <div className={s.filmTrailer}>
          {movie.poster_path === null ? (
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`}
              // src="/src/img/Poster_in_the_process.jpg"
              alt={movie.title}
              className={s.poster}
            />
          ) : (
            <img
              src={`${imgLink + movie.poster_path}`}
              alt={movie.title}
              className={s.poster}
            />
          )}
          <a data-fancybox onClick={onTrailer} className={s.trailerButton}>
            <IoPlayCircleOutline size={50} />
            <span className={s.trailerButtonText}>Watch the trailer</span>
          </a>
        </div>
        <div className={s.filmText}>
          <h1 className={s.filmTitle}>{movie.title}</h1>

          <span className={s.filmSubtitle}>{movie.tagline}</span>
          <p className={s.filmDescription}>{movie.overview}</p>
          <div className={s.aboutFilm}>
            <span className={s.aboutText}>
              <strong className={s.aboutTextBold}>Genres:</strong>

              {movie.genres?.map(item => (
                <span className={s.aboutTextReg} key={item.id}>
                  {item.name}.
                </span>
              ))}
            </span>
            <span className={s.aboutText}>
              <strong className={s.aboutTextBold}>Duration:</strong>
              <span className={s.aboutTextReg}>{movie.runtime} min</span>
            </span>
            <span className={s.aboutText}>
              <strong className={s.aboutTextBold}>Premiere:</strong>
              <p className={s.aboutTextReg}>
                {moment(movie.release_date).format('DD MMMM YYYY')}
              </p>
            </span>
          </div>
          <div className={s.rating}>
            <div className={s.filmRatingCounter}>
              {movie.vote_average?.toFixed(1) * 10}%
            </div>
            <div>
              <h3 className={s.ratingTitle}>Viewer rating</h3>
              <span className={s.ratingText}>
                Number of views:
                <strong className={s.ratingTextBold}>{movie.popularity}</strong>
              </span>
              <span className={s.ratingText}>
                Total votes:
                <strong className={s.ratingTextBold}>{movie.vote_count}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <NavLinkWrapper>
        <StyledNavLink to="cast">Cast</StyledNavLink>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </NavLinkWrapper>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

const NavLinkWrapper = styled.div`
  margin: 30px auto;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 30px;
  margin-left: 10px;
  &.active {
    color: tomato;
    text-decoration: underline;
  }
`;

const ButtonGoBack = styled.button`
  padding: 10px 12px;
  border-radius: 10px;
  border: 2px solid tomato;
  background-color: tomato;
  color: white;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: white;
    color: tomato;
  }
`;
