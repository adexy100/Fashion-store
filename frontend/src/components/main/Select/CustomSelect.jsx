import React from "react";
import styled from "styled-components";

import { Solid } from "../../../variables";

function CustomSelect({ label, options, id }) {
  return (
    <Container>
      <label htmlFor={id}>{label}: </label>
      <Select id={id}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  label {
    font-size: 1.8rem;
    margin-right: 1rem;
  }
`;

const Select = styled.select`
  margin-left: 1rem;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  color: ${Solid.PRIMARY}

  &:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid ${Solid.PRIMARY};
    border-radius: inherit;
  }
`;

export default CustomSelect;
