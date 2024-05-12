import { useState, createContext } from "react";
import { singleEdTechData as singleEdTechDataJson } from "../data/singleEdTechData";

const SingleEdTechContext = createContext();

export const SingleEdTechProvider = ({ children }) => {
  const [singleEdTechData, setSingleEdTechData] =
    useState(singleEdTechDataJson);

  return (
    <SingleEdTechContext.Provider
      value={{ singleEdTechData, setSingleEdTechData }}
    >
      {children}
    </SingleEdTechContext.Provider>
  );
};

export default SingleEdTechContext;
