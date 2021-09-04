import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";

import { media, type } from "../../variables";

function BreadCrumb({ current }) {
  return (
    <Wrapper>
      <Container>
        <Item to="/">Home</Item>/<Current>{current}</Current>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;

const Container = styled.div`
  width: 70%;
  font-family: ${type.RUBIK};

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 85%;
  }
`;

const Item = styled(link)`
  text-decoration: none;
  color: #333333;
  font-size: 1.4rem;
  margin-right: 0.5rem;

  &:hover {
    font-weight: 100;
  }
`;

const Current = styled.small`
  color: #333333;
  margin-left: 0.5rem;
  font-size: 1.4rem;
`;

export default BreadCrumb;
