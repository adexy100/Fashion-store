import React from "react";
import styled from "styled-components";

import { SmallSubHeading } from "../../others/Text";
import { Solid, type, media } from "../../../variables";

function HeaderList({ header, items, url }) {
  return (
    <Container>
      <SmallSubHeading>{header}</SmallSubHeading>

      <Items>
        {items.map((item, index) => (
          <Item key={index}>{item.item}</Item>
        ))}
      </Items>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Items = styled.ul`
  margin-top: 1.5rem;
  color: white;
  list-style-type: none;
`;

const Item = styled.li`
  color: ${Solid.GREY};
  margin-top: 1rem;
  font-family: ${type.RUBIK};
  font-size: 1.4rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1rem;
  }
`;

export default HeaderList;
