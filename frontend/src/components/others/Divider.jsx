import React from "react";
import styled from "styled-components";

function Divider() {
  return (
    <Container>
      <Line />
      <Word>or</Word>
      <Line />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0rem;
`;

const Word = styled.small`
  font-size: 1.9rem;
  color: #11161a;
`;

const Line = styled.hr`
  width: 44%;
  border: 0;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
  border-top: 1px solid rgba(0, 7, 9, 0.1);
  height: 0;
`;

export default Divider;
