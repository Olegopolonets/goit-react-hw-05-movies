import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <h2>This page is not available!</h2>
          <p>Go home!</p>
          <img
            src="/src/img/notFound-img.gif"
            alt="Not found"
            width="200"
            height="100"
          />
        </Link>
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
`;
