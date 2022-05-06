import React, { useReducer, createContext } from "react";
import controller from "../controllers/main.controller";
import cokeDietTexture from "../images/textures/coke/coke-diet-texture.png";

// Build initial state
const initialState = {
  loading: false,
  gltfs: [],
  showTooltip: true,
  modal: null,
  current3DModel: {
    name: "coke",
    gltf: null,
    texture: cokeDietTexture,
    selectedFlavor: "original",
    flavors: [
      {
        id: crypto.randomUUID(),
        name: "original",
        color: "var(--red-600)",
      },
      {
        id: crypto.randomUUID(),
        name: "no caffeine",
        color: "var(--yellow-500)",
      },
      {
        id: crypto.randomUUID(),
        name: "strawberry",
        color: "var(--red-400)",
      },
      {
        id: crypto.randomUUID(),
        name: "lime",
        color: "var(--lime-500)",
      },
    ],
    showWireFrame: false,
    lightColor: "white",
    lightIntensity: 100,
    cameraPosition: "default",
    hdri: "warehouse",
    showBackground: false,
    rotate: false,
  },
};

export const MainAppModel = createContext();

export const MainAppProvider = (props) => {
  const [model, dispatch] = useReducer(controller, initialState);

  return (
    <MainAppModel.Provider value={{ model, dispatch }}>
      {props.children}
    </MainAppModel.Provider>
  );
};
