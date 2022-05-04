import cokeDietTexture from "../images/textures/coke/coke-diet-texture.png";
import cokeLimeTexture from "../images/textures/coke/coke-lime-texture.png";
import cokeNoCaffeineTexture from "../images/textures/coke/coke-no-caffeine-texture.png";
import cokeStrawberryTexture from "../images/textures/coke/coke-strawberry-texture.png";
import costaAmericanoTexture from "../images/textures/costa/costa-americano.png";
import costaCaramelTexture from "../images/textures/costa/costa-caramel.png";
import costaLatteTexture from "../images/textures/costa/costa-latte.png";

const flavors = {
  coke: [
    {
      id: crypto.randomUUID(),
      name: "original",
      color: "var(--red-600)",
      texture: cokeDietTexture,
    },
    {
      id: crypto.randomUUID(),
      name: "no caffeine",
      color: "var(--yellow-500)",
      texture: cokeNoCaffeineTexture,
    },
    {
      id: crypto.randomUUID(),
      name: "strawberry",
      color: "var(--red-400)",
      texture: cokeStrawberryTexture,
    },
    {
      id: crypto.randomUUID(),
      name: "lime",
      color: "var(--lime-500)",
      texture: cokeLimeTexture,
    },
  ],
  costa: [
    {
      id: crypto.randomUUID(),
      name: "americano",
      color: "var(--warm-gray-600)",
      texture: costaAmericanoTexture,
    },
    {
      id: crypto.randomUUID(),
      name: "caramel latte",
      color: "var(--warm-gray-500)",
      texture: costaCaramelTexture,
    },
    {
      id: crypto.randomUUID(),
      name: "latte",
      color: "var(--warm-gray-400)",
      texture: costaLatteTexture,
    },
  ],
  glaceau: [
    {
      id: crypto.randomUUID(),
      name: "triple berry",
      color: "var(--pink-500)",
    },
    {
      id: crypto.randomUUID(),
      name: "orange",
      color: "var(--yellow-500)",
    },
    {
      id: crypto.randomUUID(),
      name: "dragonfruit",
      color: "var(--pink-300)",
    },
    {
      id: crypto.randomUUID(),
      name: "fruit punch",
      color: "var(--purple-500)",
    },
  ],
};

const controller = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_TOOLTIP":
      return { ...state, showTooltip: action.payload };
    case "SET_GLTFS":
      return { ...state, gltfs: action.payload };
    case "SET_CURRENT_MODEL":
      if (action.payload === "coke") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            gltf: state.gltfs[0],
            selectedFlavor: flavors.coke[0].name,
            texture: flavors.coke[0].texture,
            name: "coke",
            flavors: [...flavors.coke],
          },
        };
      }
      if (action.payload === "costa") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            selectedFlavor: flavors.costa[0].name,
            texture: flavors.costa[0].texture,
            name: "costa",
            flavors: [...flavors.costa],
          },
        };
      }
      if (action.payload === "glaceau") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            selectedFlavor: flavors.glaceau[0].name,
            texture: flavors.glaceau[0].texture,
            name: "glaceau",
            flavors: [...flavors.glaceau],
          },
        };
      }
      break;
    case "SET_SELECTED_FLAVOR":
      const getTexture = flavors[state.current3DModel.name].find(
        (texture) => texture.name === action.payload
      );

      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          texture: getTexture.texture,
          selectedFlavor: action.payload,
        },
      };
    case "SET_SHOW_WIRE_FRAME":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          showWireFrame: action.payload,
        },
      };
    case "SET_LIGHT_COLOR":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          lightColor: action.payload,
        },
      };
    case "SET_LIGHT_INTENSITY":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          lightIntensity: parseInt(action.payload, 10),
        },
      };
    case "SET_CAMERA_POSITION":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          cameraPosition: action.payload,
        },
      };
    default:
      return state;
  }
};

export default controller;
