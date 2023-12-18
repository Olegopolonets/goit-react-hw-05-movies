import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <h1>Scorsese</h1>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movie</StyledNavLink>
        </nav>
      </StyledHeader>

      <Suspense fallback={<div>Loading...</div>}>
        <StyledMainContent>
          <Outlet />
        </StyledMainContent>
      </Suspense>

      <StyledFooter>
        <h2>
          Scorsese - we are the best in the world of free online movies and TV
          series in good HD quality!
        </h2>
      </StyledFooter>
    </StyledWrapper>
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
    color: white;
    text-decoration: underline;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContent = styled.div`
  flex-grow: 1;
  padding: 20px 0;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: tomato;
  font-size: 1.2rem;
`;
