import React from "react";
import { useGlobalContext, Category } from "../context";
function BmiCalc() {
  const {
    height,
    weight,
    setWeight,
    setHeight,
    handleSubmit,
    setSelectWeight,
    setSelectHeight,
  } = useGlobalContext();
  return (
    <div className="col-12 col-md-5 mt-3 mt-md-2 border rounded wrapper">
      <div className="row text-center mt-3">
        <h1>Calculate Your Body Mass Index</h1>
      </div>
      {/* open form */}
      <form className="row mt-4 m-3" onSubmit={handleSubmit}>
        {/* weight */}
        <label htmlFor="" className="col-12 col-md-12">
          <h5>Weight:</h5>
        </label>
        <div className="col-12 col-md-6 mb-2">
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            value={weight !== 0 ? weight : ""}
            placeholder="Weight"
            className="form-control col-6 col-md-6"
          />
        </div>
        <div className="col-12 col-md-6">
          <select
            className="form-select col-6 col-md-6"
            onChange={(e) => {
              setSelectWeight(e.target.value);
            }}
          >
            {Category.weight.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        {/* height form */}
        <label htmlFor="" className="col-12 col-md-12 mt-2">
          <h5>Height:</h5>
        </label>
        <div className="col-12 col-md-6 mb-2">
          <input
            onChange={(e) => setHeight(e.target.value)}
            type="number"
            value={height !== 0 ? height : ""}
            placeholder="Height"
            className="form-control col-6 col-md-6"
          />
        </div>
        <div className="col-12 col-md-6">
          <select
            className="form-select col-6 col-md-6"
            onChange={(e) => {
              setSelectHeight(e.target.value);
            }}
          >
            {Category.height.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        {/* button container */}
        <div className="col-12 mt-5 ">
          <div className="row justify-content-between">
            <div className="col-4 col-md-3">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setWeight(0);
                  setHeight(0);
                }}
              >
                Clear
              </button>
            </div>
            <div className="col-4 col-md-3 btn-calculate">
              <button className="btn btn-success" type="submit">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* close form */}
    </div>
  );
}

export default BmiCalc;
