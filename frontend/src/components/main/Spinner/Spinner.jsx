import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner({ visible }) {
  return (
    <Loader
      type="TailSpin"
      color="#FFFFFF"
      height={32}
      width={32}
      timeout={30000}
    />
  );
}

export default Spinner;
