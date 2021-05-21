import React from "react";
import styled from "styled-components";

import { Solid, type, media } from "../../../utils";

function BottomNav() {
  return (
    <Span href="https://www.ademola.website">
      Developed by ademola adewumi.
    </Span>
  );
}

const Span = styled.a`
  color: ${Solid.GREY_LIGHT};
  text-decoration: none;
  display: flex;
  font-size: 1.5em;
  font-family: ${type.RUBIK};

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.5em;
  }
`;

export default BottomNav;
