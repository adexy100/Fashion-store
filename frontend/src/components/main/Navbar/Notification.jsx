import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";
import { Solid, type, media } from "../../../variables";

export default function Notification({ icon, count, desc, link, profile }) {
  return (
    <Link to={link}>
      <Span>
        <Img alt={desc} profile={profile} src={icon} />
        {count}
      </Span>
    </Link>
  );
}

const Span = styled.span`
  color: ${Solid.PRIMARY};
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  font-family: ${type.RUBIK};
  margin-right: 1.5rem;

  img {
    width: 30px;
    margin-right: 0.2rem;
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.2);
    }
  }

  @media screen and ${media.tablet} {
    font-size: 1.5rem;

    img {
      width: 25px;
    }
  }
`;

const Img = styled.img`
  transition: transform 0.2s;
`;

const Link = styled(link)`
  text-decoration: none;
`;
