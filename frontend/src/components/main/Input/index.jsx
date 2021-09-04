import React from "react";
import styled from "styled-components";

import { Solid, type, media } from "../../../variables";

function CustomInput({
  label,
  type,
  multiple,
  required,
  size,
  value,
  onChange,
  errorMessage,
  id,
  accept,
}) {
  return (
    <Group size={size}>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        multiple={multiple}
        required={required}
        accept={accept}
      />
      <Highlight className="highlight" />
      <Bar className="bar" />
      <Label>{label}</Label>
      {errorMessage ? <Error>{errorMessage}</Error> : null}
    </Group>
  );
}

const Group = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  width: ${({ size }) => (size ? (size === "lg" ? "48%" : "auto") : "auto")};
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  border: none;
  border-bottom: 0.1rem solid #96a0aa;
  background: rgba(255, 255, 255, 0);
  font-family: ${type.RUBIK};
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid ${Solid.PRIMARY};
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -1rem;
    font-size: 1.2rem;
    color: ${Solid.PRIMARY};

    @media screen and ${media.tablet}, ${media.desktop} {
      font-size: 1rem;
    }
  }

  // &:invalid ~ label {
  //   color: red;
  //   top: -1rem;
  //   font-size: 1.2rem;
  //   color: ${Solid.PRIMARY};
  // }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }

  &:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.2rem;
  }
`;

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 10rem;
  top: 20%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: 0.2rem;
    width: 0;
    bottom: 0.1rem;
    position: absolute;
    background: ${Solid.PRIMARY};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const Label = styled.label`
  font-family: ${type.RUBIK};
  color: #7c7b7b;
  font-size: 1.4rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 0.8rem;
  transition: 0.2s ease all;

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.2rem;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 1.2rem;
`;

export default CustomInput;
