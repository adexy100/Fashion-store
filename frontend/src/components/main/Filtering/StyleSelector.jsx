import React from "react";
import styled from "styled-components";

import CustomDropdown from "../../../atoms/CustomDropdown";
import { type, media } from "../../../variables";

const items = ["Style 1", " Style 2", "Style 3", "Style 4", "Style 6"];
function StyleSelector() {
  return (
    <CustomDropdown title="Style">
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </CustomDropdown>
  );
}

const Item = styled.li`
  list-style: none;
  color: #626262;
  font-size: 1.8rem;
  margin-top: 0.5rem;
  font-family: ${type.RUBIK};

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1.6rem;
  }
`;

export default StyleSelector;
