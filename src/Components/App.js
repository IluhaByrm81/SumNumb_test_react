import React from "react";
import "./App.css";
import Input from "./Inputs/Inputs";
import Result from "./Result/Result";
import { useState } from "react";

const App = () => {
  const [numOne, setNumOne] = useState();
  const [numTwo, setNumTwo] = useState();
  const [result, setResult] = useState([]);

  const hendleChandgeNumberOne = (event) => {
    setNumOne(event.target.value);
  };

  const hendleChandgeNumberTwo = (event) => {
    setNumTwo(event.target.value);
  };

  const sumResult = () => {
    setResult([Number(numOne) + Number(numTwo), ...result]);
  };

  return (
    <div className="box">
      <Result result={result.join(",")} />
      <Input
        hendleChandgeNumberOne={hendleChandgeNumberOne}
        hendleChandgeNumberTwo={hendleChandgeNumberTwo}
      />
      <button className="btn" onClick={sumResult}>
        Push
      </button>
    </div>
  );
};
export default App;
