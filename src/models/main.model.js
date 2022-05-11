import React, { useReducer, createContext } from "react";
import controller from "../controllers/main.controller";

// Build initial state
const initialState = {
  loading: false,
  gltfs: [],
  showTooltip: true,
  modal: null,
  current3DModel: {
    name: "coke",
    gltf: null,
    texture:
      process.env.PUBLIC_URL + "images/textures/coke/coke-diet-texture.png",
    selectedFlavor: "original",
    flavors: [
      {
        id: 1,
        name: "original",
        color: "var(--red-600)",
        description:
          "Add some sparkle to your day without the sugar or calories, with a crisp, refreshing Diet Coke!",
      },
      {
        id: 2,
        name: "no caffeine",
        color: "var(--yellow-500)",
        description:
          "Add some sparkle to your day without the caffeine, with a crisp, refreshing Diet Coke Caffeine Free!",
      },
      {
        id: 3,
        name: "strawberry",
        color: "var(--red-400)",
        description:
          "Add some flavour to your day without the sugar or calories, with Diet Coke Twisted Strawberry.",
      },
      {
        id: 4,
        name: "lime",
        color: "var(--lime-500)",
        description:
          "Add some flavour to your day, without the sugar or calories with Diet Coke Sublime Lime.",
      },
    ],
    showWireFrame: false,
    position: [0, -1, 0],
    scale: 1.5,
    cameraPosition: "default",
    hdri: "warehouse",
    showBackground: false,
    rotate: false,
    description:
      "Add some sparkle to your day without the sugar or calories, with a crisp, refreshing Diet Coke!",
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
