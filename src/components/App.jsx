import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Layout from './Layout';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFonnd';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<h2>Movie</h2>} />
          {/*  */}
          <Route path="/:movieId" element={<MovieDetails />} />
          {/*  */}
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
