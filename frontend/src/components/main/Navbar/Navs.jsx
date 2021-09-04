import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Notification from "./Notification";
import Profile from "./Profile";
import { Login, Logout } from "./User";
import cartIcon from "../../../images/shopping-cart.svg";
import bellIcon from "../../../images/bell.svg";
import userIcon from "../../../images/user.svg";
import { media } from "../../../variables";

export default function Navs({ cartCount, bellCount }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  return (
    <Div>
      <Notification
        count={cartCount}
        desc="cart"
        icon={cartIcon}
        link="/fashion/cart"
      />
      <Notification
        count={bellCount}
        desc="notifications"
        icon={bellIcon}
        link="/notifications"
      />
      {user ? (
        <Fragment>
          <Profile desc="profile" link="/profile" />
          <Logout desc="" icon={userIcon} />
        </Fragment>
      ) : (
        <Login user="Login" desc="" icon={userIcon} link="/login" />
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  margin-top: 35px;

  @media screen and ${media.tablet} {
    margin-top: 35px;
  }
`;
