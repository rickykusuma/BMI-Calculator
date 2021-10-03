import React from "react";
import { useGlobalContext } from "../context";

function BmiResult() {
  const { bmi, bmiDesc } = useGlobalContext();
  return (
    bmi !== 0 &&
    bmiDesc !== "" && (
      <div className="mt-4 mt-md-0 col-12 col-md-5 text-center result-container">
        <h1>Result</h1>
        <h1>Your BMI : </h1>
        <h1 className="total">{bmi}</h1>
        <h1 className="description">{bmiDesc}</h1>
      </div>
    )
  );
}

export default BmiResult;
