import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <h1>Scorsese</h1>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movie</StyledNavLink>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Layout;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: tomato;
  font-size: 1.2rem;
  nav {
    display: flex;
    gap: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  &.active {
    color: bisque;
    text-decoration: underline;
  }
`;
