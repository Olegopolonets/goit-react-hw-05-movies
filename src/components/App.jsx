import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFonnd from './pages/NotFonnd';
import Layout from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFonnd />} />
        </Route>
      </Routes>
    </>
  );
};
