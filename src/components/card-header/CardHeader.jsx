import React from "react";

export const CardHeader = ({ title, ...otherProps }) => {
  return (
    <div className="card-header">
      <span className="title">{title}</span>
      <div className="custom-select">
        <select>
          <option value="Streaming">{otherProps.option1}</option>
          <option value="On TV">{otherProps.option2}</option>
          <option selected value="For Rent">
            {otherProps.option3}
          </option>
          <option value="In Theaters">{otherProps.option4}</option>
        </select>
        <span className="custom-arrow"></span>
      </div>
    </div>
  );
};
