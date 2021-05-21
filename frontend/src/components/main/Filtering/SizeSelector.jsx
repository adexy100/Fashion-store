import React from "react";
import styled from "styled-components";

import CustomDropdown from "../../../atoms/CustomDropdown";
import Size from "../../../atoms/Size";

function SizeSelector() {
  return (
    <CustomDropdown title="Size">
      <Wrapper>
        <Size value="XS" />
        <Size value="S" />
        <Size value="M" />
        <Size value="L" />
        <Size value="XL" />
        <Size value="XXL" />
        <Size value="XXXL" />
      </Wrapper>
    </CustomDropdown>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SizeSelector;
