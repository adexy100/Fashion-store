import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Solid, type, media } from "../../../variables";
import { Link as link } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions";

export const Login = ({ icon, user, desc, link, profile }) => {
  return (
    <Link to={link}>
      <Span>
        <Img alt={desc} profile={profile} src={icon} />
        <Div>{user}</Div>
      </Span>
    </Link>
  );
};

export const Logout = ({ icon, desc, link, profile }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Span>
      <Img alt={desc} profile={profile} src={icon} />
      <Div onClick={logoutHandler}>Logout</Div>
    </Span>
  );
};

const Span = styled.span`
  color: ${Solid.PRIMARY};
  display: flex;
  font-size: 1.8rem;
  font-family: ${type.RUBIK};
  margin-left: 5rem;

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
    margin-left: 2rem;

    img {
      width: 25px;
    }
  }
`;

const Img = styled.img`
  transition: transform 0.2s;
`;

const Div = styled.span`
  margin-top: 6px;
  color: ${Solid.SECONDARY_LIGHT};
`;

const Link = styled(link)`
  text-decoration: none;
`;
