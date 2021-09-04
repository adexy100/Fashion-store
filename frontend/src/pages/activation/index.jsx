import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";

import { H3, SubHeading } from "../../components/others/Text";
import { Button } from "../../components/main";
import { media } from "../../variables";
import { Spinner } from "../../components/main";
import { activateUser } from "../../redux/actions/userActions";

function CompleteRegister({ match, history, location }) {
  const activeUser = useSelector((state) => state.activateUser);
  const { loading } = activeUser;

  const dispatch = useDispatch();

  const token = match.params.token;
  const { firstName } = jwt.decode(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(activateUser(token));
  };

  return (
    <Container>
      <Wrapper>
        <LoginWrapper>
          <Header>Complete Registration</Header>
          <Top>
            <LoginHeader>Your account to everything</LoginHeader>
          </Top>
          <Action onSubmit={handleSubmit}>
            <SignIn type="submit" disabled="" size="md" variant="primary">
              Continue {loading && <Spinner />}
            </SignIn>
          </Action>
        </LoginWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
`;

const Header = styled(H3)`
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

const LoginWrapper = styled.div`
  width: 34%;
  display: flex;
  flex-direction: column;
  margin: 10rem 0rem;
  padding: 4rem;
  background: #f8f8f8 0% 0% no-repeat padding-box;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 84.3%;
  }
`;

const LoginHeader = styled(SubHeading)`
  color: #333333;
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: 100;
`;

const Top = styled.div`
  width: 95%;
  align-self: center;
  text-align: center;
`;

const Action = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const SignIn = styled(Button)`
  width: 100%;
  margin-bottom: 2rem;
  height: 6rem;
  font-size: 1.2rem;

  div {
    margin-left: 2rem;
  }
`;

export default CompleteRegister;
