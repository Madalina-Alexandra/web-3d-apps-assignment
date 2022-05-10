const flavors = {
  coke: [
    {
      id: 1,
      name: "original",
      color: "var(--red-600)",
      texture:
        process.env.PUBLIC_URL + "images/textures/coke/coke-diet-texture.png",
    },
    {
      id: 2,
      name: "no caffeine",
      color: "var(--yellow-500)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/coke/coke-no-caffeine-texture.png",
    },
    {
      id: 3,
      name: "strawberry",
      color: "var(--red-400)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/coke/coke-strawberry-texture.png",
    },
    {
      id: 4,
      name: "lime",
      color: "var(--lime-500)",
      texture:
        process.env.PUBLIC_URL + "images/textures/coke/coke-lime-texture.png",
    },
  ],
  costa: [
    {
      id: 5,
      name: "americano",
      color: "var(--warm-gray-600)",
      texture:
        process.env.PUBLIC_URL + "images/textures/costa/costa-americano.png",
    },
    {
      id: 6,
      name: "caramel latte",
      color: "var(--warm-gray-500)",
      texture:
        process.env.PUBLIC_URL + "images/textures/costa/costa-caramel.png",
    },
    {
      id: 7,
      name: "latte",
      color: "var(--warm-gray-400)",
      texture: process.env.PUBLIC_URL + "images/textures/costa/costa-latte.png",
    },
  ],
  glaceau: [
    {
      id: 8,
      name: "triple berry",
      color: "rgb(131, 8, 40)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/glaceau/glaceau-triple-berry.png",
    },
    {
      id: 9,
      name: "orange",
      color: "rgb(246, 166, 10)",
      texture:
        process.env.PUBLIC_URL + "images/textures/glaceau/glaceau-orange.png",
    },
    {
      id: 10,
      name: "dragonfruit",
      color: "rgb(230, 77, 98)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/glaceau/glaceau-dragonfruit.png",
    },
    {
      id: 11,
      name: "fruit punch",
      color: "rgb(190, 8, 74)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/glaceau/glaceau-fruit-punch.png",
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
            gltf: state.gltfs[1],
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
            gltf: state.gltfs[2],
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
    case "SET_HDRI":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          hdri: action.payload,
        },
      };
    case "SET_SHOW_BACKGROUND":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          showBackground: action.payload,
        },
      };
    case "SET_ROTATE":
      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          rotate: action.payload,
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
    case "SET_MODAL":
      if (!action.payload) {
        return {
          ...state,
          modal: null,
        };
      }
      return {
        ...state,
        modal: {
          src: action.payload.src,
          alt: action.payload.alt,
        },
      };
    default:
      return state;
  }
};

export default controller;
