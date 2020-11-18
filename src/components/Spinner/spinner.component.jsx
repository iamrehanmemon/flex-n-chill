import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="loader">
      <PuffLoader size={60} color={"#2062e1"} />
    </div>
  );
};

export default Spinner;
