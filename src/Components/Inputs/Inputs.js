import React from "react";
import "./Inputs.css";

const Input = (props) => {
  const { numOne, numTwo, hendleChandgeNumberOne, hendleChandgeNumberTwo } =
    props;

  return (
    <div className="inputs">
      <input
        className="input_one"
        onChange={hendleChandgeNumberOne}
        value={numOne}
      />
      <input
        className="input_two"
        onChange={hendleChandgeNumberTwo}
        value={numTwo}
      />
    </div>
  );
};

export default Input;
