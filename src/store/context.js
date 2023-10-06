import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://run.mocky.io/v3/84085b39-68d0-4365-b783-2d721a9583c6";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  return (
    <AppContext.Provider
    >
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
