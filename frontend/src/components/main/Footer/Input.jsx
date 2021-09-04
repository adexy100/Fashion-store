import React from "react";

import styled from "styled-components";
import { Solid, type, media } from "../../../variables";

function Input() {
  return (
    <Container>
      <CustomInput type="email" required="required" />
      <Label>Email address</Label>
      <Cover />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 60%;
  }
`;

const Label = styled.label`
  position: absolute;
  opacity: 0.6;
  font-size: 1.25rem;
  left: 1rem;
  pointer-events: none;
  color: ${Solid.GREY};
  transition: all 0.22s;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  font-family: ${type.RUBIK};

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.15rem;
  }
`;

const CustomInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-width: thin;
  background: ${Solid.SECONDARY};
  margin: 1.5rem 0;
  border-color: ${Solid.GREY};
  border-radius: 0rem;
  color: white;
  font-size: 1.125rem;

  &:focus {
    outline: 0;
  }

  &:focus + label,
  &:hover + label,
  &:valid + label {
    top: 0;
    font-size: 1.125rem;
    transform: translateY(0);
    left: 0;
    opacity: 1;
  }

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.025rem;
    margin: 1rem 0;
    padding: 1rem;
  }
`;

const Cover = styled.div`
  width: 100%;
  position: absolute;
  background: ${Solid.SECONDARY};
  top: 1.25rem;
`;

export default Input;
