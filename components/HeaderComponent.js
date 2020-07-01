import React from "react";
import styled from "styled-components";
import Router from "next/router";

const Header = () => {
  const handleReload = () => {
    Router.reload();
  };
  return (
    <Container>
      <Title onClick={handleReload}>Find Film</Title>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial;
  background-color: black;
  color: WHITE;
  margin-bottom: 1rem;
  padding: 0.6rem;
`;

const Title = styled.h1`
  margin: auto;
  width: fit-content;
  font-size: 3rem;
  cursor: pointer;
`;

export default Header;
