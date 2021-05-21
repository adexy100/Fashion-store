import React from "react";
import styled from "styled-components";

import CustomDropdown from "../../../atoms/CustomDropdown";
import blackColor from "../../../assets/65ef46ca45704b2be63ebeb9faf84bfc.svg";
import blueColor from "../../../assets/blueCircle.svg";
import purpleColor from "../../../assets/purpleCircle.svg";
import greenColor from "../../../assets/greenCircle.svg";
import redColor from "../../../assets/redCircle.svg";
import pinkColor from "../../../assets/pinkCircle.svg";
import yellowColor from "../../../assets/yellowCircle.svg";
import darkGreenColor from "../../../assets/darkGreenCircle.svg";

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
