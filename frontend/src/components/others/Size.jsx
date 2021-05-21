import React, { useState } from "react";
import styled from "styled-components";

import { Solid, type, media } from "../../utils";

function Size({ value }) {
  const [isSelected, setIsSelected] = useState(false);

  const onSizeClickHandler = () => {
    setIsSelected((isSelected) => !isSelected);
  };

  return (
    <Content active={isSelected} onClick={onSizeClickHandler}>
      {value}
    </Content>
  );
}

const Content = styled.p`
  border: thin solid #a0a0a0;
  padding: 1rem;
  font-size: 1.5rem;
  font-family: ${type.RUBIK};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  cursor: pointer;

  @media screen and ${media.tablet}, ${media.desktop} {
    padding: 0.8rem;
    font-size: 1.3rem;
  }

  ${({ active }) => {
    if (active) {
      return `
      border-color: ${Solid.SECONDARY};
      `;
    }
  }}
`;
export default Size;
