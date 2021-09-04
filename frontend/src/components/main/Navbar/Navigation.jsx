import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import mainNavigationItems from "../../../helpers/mainNavigationItems";
import { media, Solid, type } from "../../../variables";

function Navigation({ setIsSubHeading, ...props }) {
  return (
    <div>
      <ul>
        {mainNavigationItems.map((item, index) => (
          <NavItem key={index}>
            {props.location.pathname === item.url ? (
              <ActiveNavLink to={item.url}>{item.name}</ActiveNavLink>
            ) : item.options ? (
              item.options.find(
                (subItem) => subItem.url === props.location.pathname
              ) ? (
                <ActiveNavLink to={item.url}>{item.name}</ActiveNavLink>
              ) : (
                <InActiveNavLink to={item.url}>{item.name}</InActiveNavLink>
              )
            ) : (
              <InActiveNavLink to={item.url}>{item.name}</InActiveNavLink>
            )}
          </NavItem>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(Navigation);

const NavItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  float: left;
  margin-top: 40px;
  margin-right: 4rem;
  font-size: 15px;
  letter-spacing: 0.02em;

  @media screen and ${media.tablet}, ${media.desktop} {
    font-size: 1rem;
    margin-right: 1.5rem;
    margin-top: 30px;
    letter-spacing: none;
    display: none;
  }
`;

const InActiveNavLink = styled(Link)`
  text-decoration: none;
  color: ${Solid.SECONDARY_LIGHT};
  font-family: ${type.RUBIK};
`;

const ActiveNavLink = styled(Link)`
  text-decoration: none;
  color: ${Solid.SECONDARY_LIGHT};
  font-family: ${type.RUBIK};
  padding-bottom: 1.3rem;
  border-bottom: 0.5rem solid ${Solid.PRIMARY};

  @media screen and ${media.tablet}, ${media.desktop} {
    padding-bottom: 0.5rem;
    border-bottom: 0.3rem solid ${Solid.PRIMARY};
  }
`;
