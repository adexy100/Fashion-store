import React from "react";
import styled from "styled-components";

import { Solid } from "../../../variables";
import search from "../../../images/magnify.png";
import searchdark from "../../../images/magnify-dark.png";

function CustomSearch() {
  return (
    <SearchBox>
      <Input type="text" placeholder="Search" />
      <Button>
        <img src={search} alt="search-icon" />
      </Button>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  background-color: ${Solid.SECONDARY};
  border-radius: 40px;
  padding: 0.25em;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  &:hover input {
    width: 200px;
    padding: 0.25em 0.5em;
  }

  &:hover button {
    background: rgba(255, 255, 255, 1);
  }

  &:hover button img {
    content: url("${searchdark}");
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  width: 0;
  -webkit-transition: all ease-in 400ms;
  transition: all ease-in 400ms;

  &::-webkit-input-placeholder {
    color: #ddd;
    font-size: 1rem;
  }

  &::-moz-placeholder {
    color: #ddd;
    font-size: 1rem;
  }

  &:-ms-input-placeholder {
    color: #ddd;
    font-size: 1rem;
  }

  &::-ms-input-placeholder {
    color: #ddd;
    font-size: 1rem;
  }

  &::placeholder {
    color: #ddd;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #12cbc4;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  border-radius: 50%;
  -webkit-transition: all ease-out 300ms;
  transition: all ease-out 300ms;
  -webkit-transition-delay: 380ms;
  transition-delay: 380ms;
  cursor: pointer;
`;

export default CustomSearch;
