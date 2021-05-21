import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Notification from "../../molecules/navbar/Notification";
import Profile from "../../molecules/navbar/Profile";
import { Login, Logout } from "../../molecules/navbar/User";
import cartIcon from "../../assets/shopping-cart.svg";
import bellIcon from "../../assets/bell.svg";
import userIcon from "../../assets/user.svg";
import styled from "styled-components";
import { media } from "../../variables";

export default function Notifications({ cartCount, bellCount }) {
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
