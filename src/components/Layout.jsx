import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
