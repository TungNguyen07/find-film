import React, { useEffect, useState } from "react";
import Card from "./CardComponent";
import styled from "styled-components";

const Result = ({ query }) => {
  const defaultFilm = [
    {
      Title: "Iron Man",
      Year: "2008",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 3",
      Year: "2013",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 2",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Man of Steel",
      Year: "2013",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man",
      Year: "2002",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Ant-Man",
      Year: "2015",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider-Man",
      Year: "2012",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man 2",
      Year: "2004",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: Homecoming",
      Year: "2017",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man 3",
      Year: "2007",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
  ];

  const [listFilm, setListFilm] = useState(defaultFilm);
  const [total, setTotal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    listFilm != defaultFilm &&
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=2fc1a213`)
        .then((resp) => resp.json())
        .then((result) => {
          getFilm(result.Search, result.totalResults);
          setIsLoading(false);
        });
  }, [query]);

  const getFilm = (film, count) => {
    setListFilm(film);
    setTotal(count);
  };

  useEffect(() => {
    listFilm && setIsLoading(false);
  }, [listFilm]);

  return (
    <div>
      {!isLoading ? (
        <div>
          <div>
            {query &&
              (total >= 2 ? (
                <CountResult>
                  Found {total} results. Here are top of its
                </CountResult>
              ) : total == 1 ? (
                <CountResult>Found {total} result. Here you are</CountResult>
              ) : (
                <CountResult>Found nothing!</CountResult>
              ))}
          </div>
          <Container className="container">
            <div className="row">
              {listFilm &&
                listFilm.map((film, index) => {
                  return <Card className="col-2" key={index} film={film} />;
                })}
            </div>
          </Container>
        </div>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Container = styled.div`
  margin: auto;
  display: flex;
  width: 80%;
`;

const CountResult = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export default Result;
