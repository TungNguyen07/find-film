import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ setQuery }) => {
  const [key, setKey] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleChange = (e) => {
    setKey(e.target.value);
  };

  const handleClick = () => {
    setQuery(key);
    setKey("");
    setIsSearch(true);
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      setQuery(key);
      setKey("");
      setIsSearch(true);
    }
  };

  return (
    <div>
      <DivRoot>
        <Input
          type="text"
          value={key}
          onChange={handleChange}
          className="search-bar"
          placeholder="Type name..."
          onKeyPress={handleEnter}
        />
        <Button onClick={handleClick}>Search</Button>
      </DivRoot>
      {!isSearch && (
        <Description>Sharing a few of my favorite movies</Description>
      )}
    </div>
  );
};

const Input = styled.input`
  padding: 1rem;
  margin-right: 0.5rem;
  width: 20rem;
  height: 1.5rem;
`;

const DivRoot = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Arial";
`;

const Button = styled.button`
  background-color: rgb(103, 114, 229);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  width: 6rem;
  font-weight: bold;
  font-size: 1rem;
  &:hover {
    background-color: rgb(84, 105, 212);
    cursor: pointer;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-family: sans-serif;
  margin-top: 1rem;
`;

export default SearchBar;
