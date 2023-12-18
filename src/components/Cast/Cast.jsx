import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/api';
import styled from 'styled-components';
const imgLink = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);
  return (
    <>
      <CastList>
        {cast.map(item => (
          <Card key={item.id}>
            {item.profile_path === null ? (
              <ActorImg
                src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923`}
                alt={item.original_name}
              />
            ) : (
              <ActorImg
                src={`${imgLink + item.profile_path}`}
                alt={item.original_name}
              />
            )}

            <div>
              <h3>{item.name}</h3>
              <span>
                <b>Role:</b> {item.character}
              </span>
            </div>
          </Card>
        ))}
      </CastList>
    </>
  );
};
export default Cast;

const CastList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;

const Card = styled.li`
  display: flex;
  align-items: center;
  flex-basis: 33%;
  margin-bottom: 35px;

  h3 {
    font-size: 20px;
    color: tomato;
    margin-top: 0;
    margin-bottom: 6px;
  }
  span {
    color: #a5a5a5;
    font-size: 18px;
  }
`;
const ActorImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;
