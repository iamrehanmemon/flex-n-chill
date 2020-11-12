import React from "react";
import ClipLoader from "react-spinners/RingLoader";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="loader">
      <ClipLoader size={60} color={"#2062e1"} />
    </div>
  );
};

export default Spinner;
