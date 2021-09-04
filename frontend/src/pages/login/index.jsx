import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link as link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CustomInput } from "../../components/main";
import { H3 } from "../../components/others/Text";
import { Button } from "../../components/main";
import { type, media } from "../../variables";
import SignInOptions from "../../utils/SignInOptions";
import facebookLogo from "../../images/facebook-3.svg";
import googleLogo from "../../images/google-icon.svg";
import Divider from "../../components/others/Divider";
import { Spinner } from "../../components/main";
import { login } from "../../redux/actions/userActions";

function Login({ history, location }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, user } = userLogin;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      history.push(redirect);
    }
  }, [history, user, redirect]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 20 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    },
  });

  return (
    <Container>
      <Wrapper>
        <LoginWrapper>
          <Header>Login</Header>
          <Top>
            <Row>
              <SignInOptions
                href="/api/auth/google"
                icon={googleLogo}
                label="Sign in with Google"
              />
              <SignInOptions
                href="/api/auth/facebook"
                icon={facebookLogo}
                label="Sign in with Facebook"
              />
            </Row>
          </Top>
          <LoginForm onSubmit={formik.handleSubmit}>
            <CustomInput
              value={formik.values.email}
              id="email"
              onChange={formik.handleChange}
              errorMessage={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
              type="email"
              label="Email Address"
            />
            <CustomInput
              value={formik.values.password}
              onChange={formik.handleChange}
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""
              }
              type="password"
              label="Password"
              id="password"
            />
            <Action>
              <SignIn
                type="submit"
                disabled={loading}
                size="md"
                variant="primary"
              >
                Sign in {loading && <Spinner />}
              </SignIn>
              <Link to="/register">
                <span>Don't have an account? Register</span>
              </Link>
              <Divider />
              <Link to="/forgot-password">
                <span>Forgot Password?</span>
              </Link>
            </Action>
          </LoginForm>
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
`;

const Top = styled.div`
  width: 95%;
  align-self: center;
  text-align: center;
`;

const LoginForm = styled.form`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const Link = styled(link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-family: ${type.RUBIK}

  &: link {
    text-decoration: none;
    color: black;
  }

  &: visited {
    color: black;
    text-decoration: none;
  }
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

export default Login;
