import React from "react";
import styled from "styled-components";

import FirstBox from "./FirstBox";
import FourthBox from "./FourthBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";

function Fashion() {
  return (
    <Container>
      <FirstBox />
      <SecondBox />
      <ThirdBox />
      <FourthBox />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Fashion;
