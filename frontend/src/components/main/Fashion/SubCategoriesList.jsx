import React from "react";
import styled from "styled-components";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

import { H3 } from "../../others/Text";
import { media, type } from "../../../variables";

function SubCategoriesList({ item }) {
  const location = useLocation();
  let { url } = useRouteMatch();
  return (
    <Container>
      <Header>{item.category}</Header>
      <ul>
        {item.subCategories.map((sub, index) => (
          <Item key={index}>
            <Sub to={`${url}/category`}>{sub}</Sub>
          </Item>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled(H3)`
  color: #333333;
  margin-bottom: 2rem;
  font-weight: 400;

  @media screen and ${media.tablet}, ${media.desktop} {
    margin-bottom: 1rem;
  }
`;

const Item = styled.li`
  margin-top: 0.5rem;
  font-weight: 400;
  list-style: none;

  @media screen and ${media.tablet}, ${media.desktop} {
    margin-top: 0.2rem;
  }
`;

const Sub = styled(Link)`
  text-decoration: none;
  color: #626262;
  font-family: ${type.OSWALD};
`;

export default SubCategoriesList;
