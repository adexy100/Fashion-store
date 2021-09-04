import React from "react";
import styled from "styled-components";

import { H4 } from "../../others/Text";
import ColorSelector from "./ColorSelector";
import StyleSelector from "./StyleSelector";
import SizeSelector from "./SizeSelector";
import { media } from "../../../variables";

function Filtering() {
  return (
    <Container>
      <StyleSelector />
      <ColorSelector />
      <SizeSelector />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 23.5%;
  }
`;

const Header = styled(H4)`
  margin-bottom: 3rem;
`;

const Image = styled.img`
  height: 381px;
  width: 100%;

  @media screen and ${media.tablet}, ${media.desktop} {
    height: 250px;
  }
`;

export default Filtering;
