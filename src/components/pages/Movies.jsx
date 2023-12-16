import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import styled from 'styled-components';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const Movie = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesData, setMovies] = useState([]);

  useEffect(() => {
    async function getNewMovies() {
      try {
        const moviesDataNew = await fetchMoviesBySearch(inputValue);
        setMovies(moviesDataNew);
      } catch (error) {
        console.log(error);
      }
    }
    getNewMovies();
  }, [inputValue]);

  const onSubmit = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.inputValue.value;
    console.log(inputValue);
    setInputValue(inputValue);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <MovieList>
        {moviesData.map(movie => (
          <MovieItem key={movie.id}>
            <StyledNavLink to={movie.id.toString()}>
              {movie.poster_path === null ? (
                <img
                  src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`}
                  // src="/src/img/Poster_in_the_process.jpg"
                  alt={movie.title}
                />
              ) : (
                <img src={`${imgLink + movie.poster_path}`} alt={movie.title} />
              )}
              <p>{movie.title}</p>
              <p>{movie.media_type}</p>
              <p>{movie.popularity}</p>
            </StyledNavLink>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

export default Movie;

const MovieList = styled.ul`
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

const MovieItem = styled.li`
  display: flex;
  flex-direction: column;
  /* width: 20%; */
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
