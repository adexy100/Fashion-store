import React from "react";
import styled from "styled-components";

import { MediumSubHeading } from "../../others/Text";
import { Button } from "../Button";
import Input from "./Input";
import { media } from "../../../variables";

function Newsletter() {
  return (
    <Container>
      <MediumSubHeading>Subscribe to Newsletter</MediumSubHeading>
      <Form>
        <Input placeholder="Email Address" />
        <Submit variant="primary" lg="md">
          Subscribe
        </Submit>
      </Form>
    </Container>
  );
}

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Submit = styled(Button)`
  height: 4.501rem;
  width: 12rem;
  border-radius: 0reem;
  margin-left: 0.05rem;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 6.5rem;
    height: 3.7rem;
    font-size: 0.8rem;
  }
`;

export default Newsletter;
