import React from "react";
import BmiDesc from "./BmiDesc";
import BmiCalc from "./BmiCalc";
import BmiCategories from "./BmiCategories";
import BmiResult from "./BmiResult";
function Content() {
  return (
    <main className="container main-content">
      {/* open bmi description */}
      <div className="row pt-1 justify-content-between">
        <BmiDesc />
        <BmiCalc />
      </div>
      <br />
      {/* open bmi categories & result*/}
      <div className="row justify-content-between ">
        <BmiCategories />
        <BmiResult />
      </div>
      {/* close bmi categories & result */}
    </main>
  );
}

export default Content;
