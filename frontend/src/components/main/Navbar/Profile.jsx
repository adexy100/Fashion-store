import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Solid, type } from "../../../utils";
import { Link as link } from "react-router-dom";

export default function Profile({ desc, link }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  return (
    <Link to={link} alt={desc}>
      <Span>
        <Name>{user.email.slice(0, 1)}</Name>
      </Span>
    </Link>
  );
}

const Span = styled.div`
  background: ${Solid.PRIMARY};
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;

  &:hover {
    cursor: pointer;
`;

const Name = styled.span`
  color: ${Solid.GREY_LIGHTER};
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  font-family: ${type.RUBIK};
  margin: 10px;
`;

const Link = styled(link)`
  text-decoration: none;
`;
