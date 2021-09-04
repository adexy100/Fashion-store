import React from "react";
import styled from "styled-components";

import logo from "../../../images/logo.svg";
import footerNavList from "../../../helpers/footerNavList";
import HeaderList from "./HeaderList";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";
import { Solid, media, type } from "../../../variables";
import BottomNav from "./BottomNav";

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Communication>
            <Img src={logo} alt="logo" />
            <div>
              <Heading>
                Copyright © 2021 RachyBeauty. All rights reserved
              </Heading>
              <SocialIcons />
            </div>
          </Communication>
          <Navigations>
            {footerNavList.map((nav, index) => (
              <HeaderList key={index} header={nav.header} items={nav.items} />
            ))}
            <Newsletter />
          </Navigations>
        </Top>
        <Bottom>
          <Divider />
          <BottomNav />
        </Bottom>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background: ${Solid.SECONDARY};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 4rem 0rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 85%;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.hr`
  color: ${Solid.GREY_LIGHT};
  opacity: 0.2;
  margin-top: 5rem;
  height: 0.1rem;
  margin-bottom: 2rem;
`;

const Communication = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  max-width: 50%;
  margin-bottom: 1rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    max-width: 50%;
  }
`;

const Heading = styled.div`
  color: ${Solid.GREY};
  margin-top: 1rem;
  font-family: ${type.RUBIK};
  font-size: 1.4rem;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1rem;
  }
`;

const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

export default Footer;
