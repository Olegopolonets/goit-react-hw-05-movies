import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesTrend } from 'services/api';
import styled from 'styled-components';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  //
  const location = useLocation();

  //
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesTrend().then(response => setMovies(response.results));
  }, []);
  return (
    <>
      <h1>Today's trends</h1>
      <TrendingList>
        {movies.map(movie => (
          <TrendingItem key={movie.id}>
            <StyledNavLink
              state={{ from: location }}
              to={`/movies/${movie.id.toString()}`}
            >
              {movie.poster_path === null ? (
                <img
                  src={`https://content1.rozetka.com.ua/goods/images/big/342966749.jpg`}
                  alt={movie.title}
                />
              ) : (
                <img src={`${imgLink + movie.poster_path}`} alt={movie.title} />
              )}
              <p>{movie.title}</p>
              <p>{movie.media_type}</p>
              <p>{movie.popularity}</p>
            </StyledNavLink>
          </TrendingItem>
        ))}
      </TrendingList>
    </>
  );
};

export default Home;

const TrendingList = styled.ul`
  display: grid;
  max-width: calc(100vw - 200px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const TrendingItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border: 2px solid silver;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.01);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    /* transform: rotate(1deg); */
    /* transform: matrix(0, 1, 1, 0, 0, 0); */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
