import React, { useState } from "react";
import styled from "styled-components";

function AnimatedArrow({ onActiveHandler }) {
  const [up, setUp] = useState(true);
  const [down, setDown] = useState(true);

  const onClickHandler = () => {
    if (!up && !down) {
      setUp(true);
      onActiveHandler(true);
    } else {
      setUp(false);
      setDown(false);
      onActiveHandler(false);
    }
  };

  return (
    <Wrapper>
      <Button onClick={onClickHandler}>
        <LineA up={up} down={down} />
        <LineB up={up} down={down} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  width: 13px;
  height: 13px;
  margin: 0;
  border: none;
  background: none;
  position: relative;

  &:focus {
    outline: none;
  }

  &:hover span:nth-child(1),
  &:hover span:nth-child(2) {
    background: #d9d9d9;
  }
`;

const LineA = styled.span`
  display: inline-block;
  width: 8px;
  height: 1px;
  background: #363636;
  position: absolute;
  left: 0;
  top: 12px;
  transform: rotate3d(0, 0, 1, 45deg);
  transition: background 0.3s ease-in-out;

  ${({ down }) => {
    if (down === true) {
      return `
      position: absolute;
      right: 0;
      top: 10px;
      animation-name: turnAdown;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      transform: rotate3d(0, 0, 1, 45deg);
      `;
    }
  }};

  @keyframes turnAdown {
    0% {
      transform: rotate3d(0, 0, 1, -45deg);
      top: 10px;
    }
    50% {
      width: 7px;
    }
    100% {
      transform: rotate3d(0, 0, 1, 45deg);
      top: 12px;
    }
  }

  @-webkit-keyframes turnAdown {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      top: 10px;
    }
    50% {
      width: 7px;
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      top: 13px;
    }
  }

  ${({ up }) => {
    if (up === true) {
      return `
      position: absolute;
      left: 0;
      top: 13px;
      animation-name: turnAup;
      -webkit-animation-name: turnAup;
      animation-duration: 0.5s;
      -webkit-animation-duration: 0.5s;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      -webkit-animation-timing-function: ease-in-out;
      transform: rotate3d(0, 0, 1, -45deg);
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
    `;
    }
  }}

  @keyframes turnAup {
    0% {
      transform: rotate3d(0, 0, 1, 45deg);
      top: 12px;
    }
    50% {
      width: 7px;
    }
    100% {
      transform: rotate3d(0, 0, 1, -45deg);
      top: 10px;
    }
  }

  @-webkit-keyframes turnAup {
    0% {
      transform: rotate3d(0, 0, 1, 45deg);
      top: 12px;
    }
    50% {
      width: 7px;
    }
    100% {
      transform: rotate3d(0, 0, 1, -45deg);
      top: 10px;
    }
  }
`;

const LineB = styled.span`
  display: inline-block;
  width: 8px;
  height: 1px;
  background: #363636;
  position: absolute;
  right: 0;
  top: 12px;
  transform: rotate3d(0, 0, 1, -45deg);
  transition: background 0.3s ease-in-out;

  ${({ down }) => {
    if (down === true) {
      return `
      position: absolute;
      right: 0;
      top: 10px;
      animation-name: turnBdown;
      -webkit-animation-name: turnBdown;
      animation-duration: 0.5s;
      -webkit-animation-duration: 0.5s;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      -webkit-animation-timing-function: ease-in-out;
      transform: rotate3d(0, 0, 1, -45deg);
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      `;
    }
  }};

  @keyframes turnBdown {
    0% {
      transform: rotate3d(0, 0, 1, 45deg);
      top: 10px;
    }
    50% {
      width: 7px;
    }
    100% {
      transform: rotate3d(0, 0, 1, -45deg);
      top: 13px;
    }
  }

  @-webkit-keyframes turnBdown {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      top: 10px;
    }
    50% {
      width: 7px;
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      top: 13px;
    }
  }

  ${({ up }) => {
    if (up === true) {
      return `
      position: absolute;
      right: 0;
      top: 13px;
      animation-name: turnBup;
      -webkit-animation-name: turnBup;
      animation-duration: 0.5s;
      -webkit-animation-duration: 0.5s;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      -webkit-animation-timing-function: ease-in-out;
      transform: rotate3d(0, 0, 1, 45deg);
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      `;
    }
  }}

  @keyframes turnBup {
    0% {
      transform: rotate3d(0, 0, 1, -45deg);
      top: 13px;
    }
    50% {
      width: 7px;
    }
    100% {
      transform: rotate3d(0, 0, 1, 45deg);
      top: 10px;
    }
  }

  @-webkit-keyframes turnBup {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      top: 13px;
    }
    50% {
      width: 7px;
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      top: 10px;
    }
  }
`;

export default AnimatedArrow;
