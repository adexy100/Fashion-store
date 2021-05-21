import React from "react";
import { Link as link } from "react-router-dom";

import styled from "styled-components";
import { H3, SubHeading } from "../../atoms/Text";

function SubCategoryCard({ background, name, desc, slug }) {
  return (
    <Link to={`/category/${slug}`} background={background}>
      <Wrapper>
        <Header>{name}</Header>
        <SubHeader>{desc ? `${desc}` : "Browse Now"}</SubHeader>
      </Wrapper>
    </Link>
  );
}

const Header = styled(H3)`
  text-transform: capitalize;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 3%;
`;

const SubHeader = styled(SubHeading)`
  color: white;
`;

const Link = styled(link)`
  height: 100%;
  text-decoration: none;
  color: none;
  align-self: flex-end;
  width: 38.5%;
  display: inline-block;
  margin: 1rem;
  padding: 2rem;
  background-image: url("${({ background }) =>
    background ? background : ""}");
  background-size: cover;
`;

export default SubCategoryCard;
