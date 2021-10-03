import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const Category = {
  weight: [
    { label: "Kilograms", value: "kilograms" },
    { label: "Pounds", value: "pounds" },
  ],
  height: [
    { label: "Centimeters", value: "centimeters" },
    { label: "Inch", value: "inch" },
  ],
};

const AppProvider = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiDesc, setBmiDesc] = useState("");
  const [selectWeight, setSelectWeight] = useState("kilograms");
  const [selectHeight, setSelectHeight] = useState("centimeters");

  const handleSubmit = (e) => {
    e.preventDefault();
    // checking value
    if (height === 0 || weight === 0) {
      return alert("Please input your Weight and Height~!");
    } else {
      let convertedHeight = height;
      let convertedWeight = weight;
      let result = 0;
      // calculate conversion
      selectWeight === "pounds"
        ? (convertedWeight = weight * 0.453592)
        : (convertedWeight = weight);
      selectHeight === "inch"
        ? (convertedHeight = height * 2.54 * 0.01)
        : (convertedHeight = height * 0.01);

      // calculate bmi
      result = parseFloat(
        (convertedWeight / (convertedHeight * convertedHeight)).toFixed(1)
      );
      // determine bmi desc
      if (result >= 30) {
        setBmiDesc("Obese");
      } else if (result >= 25 && result < 30) {
        setBmiDesc("Overweight");
      } else if (result >= 18.5 && result < 25) {
        setBmiDesc("Healthy");
      } else if (result < 18.5) {
        setBmiDesc("Underweight");
      }
      setBmi(result);
    }
  };
  return (
    <AppContext.Provider
      value={{
        height,
        setHeight,
        weight,
        setWeight,
        selectHeight,
        setSelectHeight,
        selectWeight,
        setSelectWeight,
        handleSubmit,
        bmi,
        bmiDesc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
