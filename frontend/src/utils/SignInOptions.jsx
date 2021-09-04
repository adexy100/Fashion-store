import React from "react";
import styled from "styled-components";

import { Button } from "../components/main";

function SignInOptions({ icon, label, href }) {
  return (
    <Link href={href}>
      <Container size="md">
        <Icon src={icon} />
        {label}
      </Container>
    </Link>
  );
}

const Container = styled(Button)`
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  justify-content: center;
  background: white;
  color: black;
  font-size: 1.23rem;
  letter-spacing: 0.6px;
  text-transform: none;
  width: 100%;
`;

const Icon = styled.img`
  margin-right: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  width: 49%;

  &: link {
    text-decoration: none;
    color: black;
  }

  &: visited {
    color: black;
    text-decoration: none;
  }
`;

export default SignInOptions;
