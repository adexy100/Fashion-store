import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";

import { H3, SubHeading } from "../../atoms/Text";
import Button from "../../atoms/Button";
import { Solid, media } from "../../variables";

function CategoryCard({ background, name, desc, slug }) {
  return (
    <Container background={background}>
      <Main>
        <Header>Shop {name}</Header>
        <SubHeader>{desc ? `${desc}` : "Browse Now"}</SubHeader>
      </Main>
      <Link to={`/category/${slug}`}>
        <Action size="md" variant="primary">
          Explore
        </Action>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 48.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("${({ background }) =>
    background ? background : ""}");
  background-size: cover;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 48%;
  }
`;

const Main = styled.div`
  width: 40%;
  background: ${Solid.PRIMARY};
  padding: 10px;
`;

const Header = styled(H3)`
  text-transform: capitalize;
  color: white;
`;

const SubHeader = styled(SubHeading)`
  color: white;
  opacity: 0.7;
  font-weight: 400;
`;

const Link = styled(link)`
  text-decoration: none;
  color: none;
  display: block;
  align-self: flex-end;
  margin: 5rem 3rem;
  width: 16%;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 22%;
    margin: 2rem 1.5rem;
  }
`;

const Action = styled(Button)`
  width: 100%;
  font-size: 1.5rem;

  @media screen and ${media.desktop} {
    font-size: 1.3rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.15rem;
  }
`;

export default CategoryCard;
