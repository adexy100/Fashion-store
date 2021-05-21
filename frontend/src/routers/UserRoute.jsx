import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./Redirect";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.userLogin);

  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
