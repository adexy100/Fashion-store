import React from "react";
import { media, Gradient, Solid, type } from "../../../utils";
import styled from "styled-components";

const Button = ({ children, size, ...props }) => {
  return (
    <StyledButton size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  border: none;
  color: white;
  text-decoration: none;
  font-family: ${type.OSWALD};
  letter-spacing: 2.5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 0rem;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  ${({ size }) => {
    if (size === "lg") {
      return `
        padding: 1rem 6rem;
        height: 6rem;
        font-size: 1.5rem;

        &:hover {
          box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.12), 0 6px 18px 0 rgba(0, 0, 0, 0.1);
        }
      
        &:active {
          box-shadow: none;
        }

        &:disabled {
          box-shadow: none;
        }

        @media screen and ${media.tablet}, ${media.desktop} {
          height: 5rem;
          font-size: 1.1rem;
          padding: 1rem 4rem;
        }

        @media screen and ${media.mobile} {
          width: 12rem;
          height: 2.4rem;
          font-size: 0.7rem;
        }

        @media screen and ${media.xsMobile} {
          width: 8rem;
          height: 2.1rem;
          font-size: 0.7rem;
        }
      `;
    }

    if (size === "md") {
      return `
        padding: 1rem 2rem;
        height: 5rem;
        font-size: 1.1rem;
       
        &:hover {
          box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.12), 0 6px 18px 0 rgba(0, 0, 0, 0.1);
        }
      
        &:active {
          box-shadow: none;
        }

        &:disabled {
          box-shadow: none;
        }

        @media screen and ${media.desktop}  {
          height: 3.8rem;
          padding: 1rem 1rem;
          font-size: 0.8rem;
        }

        @media screen and ${media.tablet}  {
          font-size: 0.7rem;
        }

        @media screen and ${media.mobile} {
          width: 7.5rem;
          height: 2.1rem;
          font-size: 0.7rem;
        }

        @media screen and ${media.xsMobile} {
          width: 7rem;
          height: 1.9rem;
          font-size: 0.65rem;
        }
      `;
    }

    if (size === "sm") {
      return `
        width: 9rem;
        height: 3.3rem;
        font-size: 1rem;

        &:hover {
          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.12), 0 6px 14px 0 rgba(0, 0, 0, 0.09);
        }
      
        &:active {
          box-shadow: none;
        }

        @media screen and ${media.tablet} {
          width: 8rem;
          height: 2.5rem;
          font-size: 0.9rem;
        }

        @media screen and ${media.mobile} {
          width: 7.5rem;
          height: 2.1rem;
          font-size: 0.7rem;
        }

        @media screen and ${media.xsMobile} {
          width: 7rem;
          height: 1.9rem;
          font-size: 0.65rem;
        }
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === "primary") {
      return `
        background: ${Gradient.YELLOWISH};
      `;
    }

    if (variant === "secondary") {
      return `
      background-color: ${Solid.SECONDARY_LIGHT};
      `;
    }
  }}
`;
