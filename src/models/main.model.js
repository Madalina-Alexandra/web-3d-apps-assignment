import React, { useReducer, createContext } from "react";
import controller from "../controllers/main.controller";


// Build initial state
const initialState = {
  loading: false,
};

export const MainAppModel = createContext();

export const MainAppProvider = (props) => {
  const [modal, dispatch] = useReducer(controller, initialState);

  return (
    <MainAppModel.Provider value={{ modal, dispatch }}>
      {props.children}
    </MainAppModel.Provider>
  );
};
