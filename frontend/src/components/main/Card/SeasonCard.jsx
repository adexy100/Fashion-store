import React from "react";
import { Link as link } from "react-router-dom";

import styled from "styled-components";
import { H3, SubHeading } from "../../others/Text";

function SeasonCard({
  link,
  type,
  header,
  background,
  height,
  width,
  textColor,
}) {
  return (
    <Link to={link} background={background} height={height} width={width}>
      <Wrapper>
        <Header textColor={textColor}>{header}</Header>
        <SubHeader textColor={textColor}>
          {type ? `Browse ${type} fashion here` : "Browse Now"}
        </SubHeader>
      </Wrapper>
    </Link>
  );
}

const Header = styled(H3)`
  text-transform: capitalize;
  color: ${({ textColor }) => (textColor ? textColor : "white")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled(SubHeading)`
  color: ${({ textColor }) => (textColor ? textColor : "white")};
`;

const Link = styled(link)`
  height: ${({ height }) => (height ? height : 100)}%;
  text-decoration: none;
  color: none;
  width: ${({ width }) => (width ? width : 48.5)}%;
  display: flex;
  margin: 1rem;
  padding: 3rem;
  background-image: url("${({ background }) =>
    background ? background : ""}");
  background-size: cover;
`;

export default SeasonCard;
