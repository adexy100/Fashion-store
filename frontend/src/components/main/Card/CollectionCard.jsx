import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";

import { H2 } from "../../others/Text";

function CollectionCard({ background, header, width, height }) {
  return (
    <Link background={background} to="" height={height} width={width}>
      <H2>{header}</H2>
    </Link>
  );
}

const Link = styled(link)`
  height: ${({ height }) => (height ? height : 100)}%;
  width: ${({ width }) => (width ? width : 100)}%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${({ background }) =>
    background ? background : ""}");
  background-size: 100% 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }

  &:active {
    text-decoration: none;
    transform: scale(0.95);
  }
`;

export default CollectionCard;
