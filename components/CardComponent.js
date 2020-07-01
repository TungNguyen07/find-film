import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = ({ film }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    film && setItem(film);
  }, [film]);

  return (
    <Link>
      <CardContainer>
        {item && (
          <div>
            <div>
              <Poster src={film.Poster} />
            </div>
            <Title>{film.Title}</Title>
            <Year>({film.Year})</Year>
          </div>
        )}
      </CardContainer>
    </Link>
  );
};

const Link = styled.div`
  margin: 0.1rem;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  padding-bottom: 2rem;
`;

const CardContainer = styled.div`
  border-radius: 5px;
  border: none;
  height: 25.5rem;
  width: 14rem;
`;

const Poster = styled.img`
  height: 20rem;
  width: 14rem;
`;

const Title = styled.h4`
  text-align: center;
`;

const Year = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0;
  text-align: center;
`;

export default Card;
