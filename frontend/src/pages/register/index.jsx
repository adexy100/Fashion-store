import React from "react";
import styled from "styled-components";
import { Link as link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CustomInput } from "../../components/main";
import { H3, MediumSubHeading } from "../../components/others/Text";
import { Button } from "../../components/main";
import { type, media } from "../../variables";
import SignInOptions from "../../utils/SignInOptions";
import facebookLogo from "../../images/facebook-3.svg";
import googleLogo from "../../images/google-icon.svg";
import Divider from "../../components/others/Divider";
import { Spinner } from "../../components/main";
import { register } from "../../redux/actions/userActions";

function Register() {
  const userRegister = useSelector((state) => state.userRegister);
  const { loading } = userRegister;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      lastName: Yup.string()
        .min(3, "Must not be less than 3")
        .required("Last name is required!"),
      firstName: Yup.string()
        .min(3, "Must not be less than 3")
        .required("First name is required!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
      password: Yup.string()
        .min(6, "Must not be less than 6")
        .required("Password is required!"),
    }),

    onSubmit: (values) => {
      dispatch(
        register(
          values.firstName,
          values.lastName,
          values.email,
          values.password,
          values.phoneNumber
        )
      );
    },
  });
  return (
    <Container>
      <Wrapper>
        <RegisterWrapper>
          <Header>Register</Header>
          <Top>
            <Row style={{ margin: "3rem 0rem" }}>
              <SignInOptions
                href="/api/auth/google"
                icon={googleLogo}
                label="Sign up with Google"
              />
              <SignInOptions
                href="/api/auth/facebook"
                icon={facebookLogo}
                label="Sign up with Facebook"
              />
            </Row>
            <Divider />
          </Top>
          <RegisterForm onSubmit={formik.handleSubmit}>
            <Row>
              <CustomInput
                value={formik.values.firstName}
                id="firstName"
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : ""
                }
                type="text"
                label="Firstname"
              />
              <CustomInput
                value={formik.values.lastName}
                id="lastName"
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : ""
                }
                type="text"
                label="Lastname"
              />
            </Row>
            <Row>
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
                id="password"
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""
                }
                type="password"
                label="Password"
              />
            </Row>
            <PhoneNumber id="number">
              <CountryCode>+234</CountryCode>
              <CustomInput
                value={formik.values.phoneNumber}
                id="phoneNumber"
                onChange={formik.handleChange}
                errorMessage={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? formik.errors.phoneNumber
                    : ""
                }
                type="tel"
                label="Phone number (optional)"
                size="lg"
              />
            </PhoneNumber>
            <Action>
              <Continue
                type="submit"
                disabled={loading}
                size="md"
                variant="primary"
              >
                Continue {loading && <Spinner />}
              </Continue>
              <Link to="/login">
                <span>Already have an account? Login</span>
              </Link>
            </Action>
          </RegisterForm>
        </RegisterWrapper>
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
  margin-bottom: 1rem;
  text-align: center;
`;

const RegisterWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin: 10rem 0rem;

  padding: 4rem;
  background: #f8f8f8 0% 0% no-repeat padding-box;

  @media screen and ${media.tablet}, ${media.desktop} {
    width: 70%;
  }
`;

const Top = styled.div`
  width: 95%;
  align-self: center;
  text-align: center;
`;

const RegisterForm = styled.form`
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PhoneNumber = styled.div`
  display: flex;
  align-items: center;
`;

const CountryCode = styled(MediumSubHeading)`
  margin-right: 1rem;
  margin-bottom: 3.5rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
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

const Continue = styled(Button)`
  width: 100%;
  margin-bottom: 2rem;
  height: 5.5rem;
  font-size: 1.2rem;

  div {
    margin-left: 2rem;
  }
`;

export default Register;
