import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../others/Logo";
import Navigation from "./Navigation";
import Navs from "./Navs";
import { Solid, media } from "../../../variables";

const NavBar = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <Link to="/">
            <Logo />
          </Link>
          <div className="nav">
            <Navigation />
          </div>
          <Navs cartCount="1" bellCount="1" />
          <Button type="button" className="nav-toggle"></Button>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background: ${Solid.GREY_LIGHT};
  display: flex;
  justify-content: center;
  box-shadow: 0 0.4rem 0.4rem -0.2rem rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 90px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and ${media.tablet}, ${media.desktop} {
    width: 90%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  margin-top: 30px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export default NavBar;
