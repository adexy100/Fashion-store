import React from "react";
import styled from "styled-components";

import { Solid, type, media } from "../../../variables";

function Select({ label, onChange, value, category, select }) {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectWrapper>
        <CustomSelect onChange={onChange}>
          <option>Please Select</option>
          <option value={value} selected={select}>
            {category}
          </option>
        </CustomSelect>
        <span className="focus"></span>
      </SelectWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: ${type.RUBIK};
`;

const Label = styled.label`
  color: ${Solid.SECONDARY};
  width: 95px;
  padding-left: 1.1rem;
`;

const SelectWrapper = styled.div`
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  &:after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: ${Solid.PRIMARY};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
    margin-right: 10px;
  }
`;

const CustomSelect = styled.select`
  appearance: none;
  border: 2px solid ${Solid.PRIMARY};
  padding: 1em;
  margin: 0;
  width: 400px;
  font-family: ${type.RUBIK};
  font-size: 1.6rem;
  color: #777777;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  grid-area: select;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 100%;
    padding: 0.5em;
  }
`;

export default Select;
