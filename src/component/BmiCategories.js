import React from "react";

function BmiCategories() {
  return (
    <div className="col-12 col-md-5 wrapper rounded bmi-container">
      <h1 className="text-center">BMI Categories</h1>
      <ul className="bmi-categories row justify-content-center text-center">
        <div className="col-5 col-md-4 bmi-number">
          <br />
          <li>Below 18.5</li>
          <hr />
          <li>18.5 - 24.9</li>
          <hr />
          <li>25 - 29.9</li>
          <hr />
          <li>30 and above</li>
          <hr />
        </div>
        <div className="col-5 col-md-4 bmi-category">
          <br />
          <li>Underweight</li>
          <hr />
          <li>Healthy</li>
          <hr />
          <li>Overweight</li>
          <hr />
          <li>Obese</li>
          <hr />
        </div>
      </ul>
    </div>
  );
}

export default BmiCategories;
