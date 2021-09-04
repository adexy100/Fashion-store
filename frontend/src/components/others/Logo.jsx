import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/logo.svg";
import { media } from "../../variables";

const Logo = () => {
  return <Img alt="RaychyBeauty" src={LogoImage} />;
};

const Img = styled.img`
  @media screen and ${media.tablet} {
    width: 120px;
  }
`;

export default Logo;
