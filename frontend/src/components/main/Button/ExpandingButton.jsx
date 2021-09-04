import React from "react";

import styled from "styled-components";
import { Solid, type, media } from "../../../variables";

function ExpandingButton({ text, icon }) {
  return (
    <Button>
      <Icon src={icon} />
      <span className="label-hidden">{text}</span>
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
  overflow: hidden;
  padding: 1rem;
  background: #eee;
  transition: 0.2s;
  background: ${Solid.PRIMARY} 0% 0% no-repeat padding-box;
  color: white;
  font-family: ${type.RUBIK};
  font-size: 1.8rem;

  @media screen and ${media.tablet} {
    padding: 0.5rem;
  }

  .img {
    transition: 0.2s;
  }

  .label-hidden {
    max-width: 0;
    opacity: 0;
    max-height: 1em;
    white-space: nowrap;
    transition: 0.2s;
  }

  &:hover {
    .label-hidden {
        max-width: 300px;
        margin-left: 2.5rem;
        margin-right: 2.5rem;
        opacity: 1;
    }

    &:hover + div {
      display: none;
    }
`;

const Icon = styled.img``;

export default ExpandingButton;
