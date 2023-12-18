import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h2>
            Nothing was found for your request. This page is not available,
            error 404, capisci.
          </h2>
          <StyledNavLink to="/">
            Sasuke <span> go back home!</span>
          </StyledNavLink>
          <img
            // src="/src/img/notFound-img.gif"
            src="https://media1.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
            alt="Not found"
            width="700"
            height="600"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  text-decoration: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;

  p {
    font-size: 20px;
    text-decoration: none;
  }
  span {
    color: gold;
    text-decoration: underline;
  }
`;
