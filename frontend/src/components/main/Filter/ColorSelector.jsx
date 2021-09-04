import React from "react";
import styled from "styled-components";

import { CustomDropdown } from "../Dropdown";
import blackColor from "../../../images/65ef46ca45704b2be63ebeb9faf84bfc.svg";
import blueColor from "../../../images/blueCircle.svg";
import purpleColor from "../../../images/purpleCircle.svg";
import greenColor from "../../../images/greenCircle.svg";
import redColor from "../../../images/redCircle.svg";
import pinkColor from "../../../images/pinkCircle.svg";
import yellowColor from "../../../images/yellowCircle.svg";
import darkGreenColor from "../../../images/darkGreenCircle.svg";

function ColorSelector() {
  return (
    <CustomDropdown title="Color">
      <Wrapper>
        <Image src={blackColor} alt="" />
        <Image src={blueColor} alt="" />
        <Image src={purpleColor} alt="" />
        <Image src={greenColor} alt="" />
        <Image src={redColor} alt="" />
        <Image src={pinkColor} alt="" />
        <Image src={yellowColor} alt="" />
        <Image src={darkGreenColor} alt="" />
      </Wrapper>
    </CustomDropdown>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

export default ColorSelector;
