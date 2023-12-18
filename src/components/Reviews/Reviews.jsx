import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';
import styled from 'styled-components';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setReviews(res));
  }, [movieId]);
  return (
    <div>
      <ReviewsList>
        {reviews.length !== 0 ? (
          reviews.map(item => (
            <ReviewsItem key={item.id}>
              <span>{item.author}</span>
              <p>{item.content}</p>
            </ReviewsItem>
          ))
        ) : (
          <NoReviewsInfo>
            There are currently no reviews. This movie has not yet had time to
            talk about itself, but we hope that the reviews will be positive.
          </NoReviewsInfo>
        )}
      </ReviewsList>
    </div>
  );
};

export default Reviews;

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  h2 {
    line-height: 20px;
    font-weight: 700;
    font-size: 14px;
  }
`;

const ReviewsItem = styled.li`
  width: 100%;
  background-color: silver;
  padding: 30px;
  border-radius: 5px;

  span {
    display: block;
    margin-bottom: 10px;
    line-height: 16px;
    font-weight: 900;
    font-size: 14px;
  }

  p {
    font-weight: normal;
    line-height: 25px;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
  }
`;

const NoReviewsInfo = styled.h2`
  text-align: center;
`;
