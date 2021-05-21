import React from "react";
import styled from "styled-components";
import Button from "../main/Button";

import { type, media } from "../../utils";

function EnterDiscount() {
  return (
    <Form>
      <Label>Enter discount code</Label>
      <Wrapper>
        <Input type="text" placeholder="Enter discount code" />
        <Action size="lg" variant="secondary">
          Apply Coupon
        </Action>
      </Wrapper>
    </Form>
  );
}

const Form = styled.form`
  background: #f8f8f8;
  height: 14rem;
  padding: 3rem;
  margin-top: 5rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    padding: 2rem;
  }
`;

const Label = styled.label`
  color: #a0a0a0;
  font-size: 1.6rem;
  font-family: ${type.RUBIK};

  @media screen and ${media.desktop} {
    font-size: 1.4rem;
  }

  @media screen and ${media.tablet} {
    font-size: 1.4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Input = styled.input`
  border-radius: 0px;
  border: thin solid #f8f8f8;
  width: 70%;
  font-size: 1.6rem;
  font-family: ${type.RUBIK};
  font-weight: bold;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and ${media.desktop} {
    width: 65%;
    font-size: 1.5rem;
  }

  @media screen and ${media.tablet} {
    width: 60%;
    font-size: 1.4rem;
  }
`;

const Action = styled(Button)`
  width: 28%;

  @media screen and ${media.desktop} {
    width: 33%;
  }

  @media screen and ${media.tablet} {
    width: 36%;
    padding: 0rem 1.5rem;
  }
`;

export default EnterDiscount;
