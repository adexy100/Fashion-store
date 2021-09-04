import React from "react";
import styled from "styled-components";
import { Solid } from "../../../variables";

const Loader = () => {
  return <Div className="loader"> </Div>;
};

export default Loader;

const Div = styled.div`
  .loader {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    width: 80px;
    height: 80px;
    padding-left: 0;
  }
  .loader:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${Solid.PRIMARY};
    border-color: ${Solid.PRIMARY} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;