import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";

import background from "../../../images/Group 4143@2x.png";
import backgroundMobile from "../../../images/Group 4143.png";
import { H2, SubHeading } from "../../../components/others/Text";
import { Button } from "../../../components/main";
import { media, Solid } from "../../../variables";

function FirstBox() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Header>Pick of the week</Header>
          <SubHeader>Browse our best fashion pick of the week</SubHeader>
          <Link to="/products">
            <Action size="md" variant="primary">
              Shop now
            </Action>
          </Link>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url("${background}");
  background-size: 100% 66vh;
  background-repeat: no-repeat;
  height: 66vh;
  width: 100%;

  @media screen and ${media.tablet}, ${media.desktop} {
    background: url("${backgroundMobile}");
    background-size: contain;
    background-repeat: no-repeat;
    height: 25vh;
  }
`;

const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  height: 50%;
  width: 70%;
`;

const Header = styled(H2)`
  color: ${Solid.SECONDARY};
`;

const SubHeader = styled(SubHeading)`
  margin-top: 2rem;
  color: ${Solid.SECONDARY};
  font-weight: 400;

  @media screen and ${media.tablet}, ${media.desktop} {
    margin-top: 1rem;
  }
`;

const Link = styled(link)`
  text-decoration: none;
  color: none;
`;

const Action = styled(Button)`
  width: 16%;
  margin-top: 4rem;
  font-size: 1.5rem;

  @media screen and ${media.desktop} {
    margin-top: 3rem;
    font-size: 1.3rem;
    width: 23%;
  }

  @media screen and ${media.tablet} {
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }
`;

export default FirstBox;
