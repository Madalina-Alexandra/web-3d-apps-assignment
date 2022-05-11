const flavors = {
  coke: [
    {
      id: 1,
      name: "original",
      color: "var(--red-600)",
      texture:
        process.env.PUBLIC_URL + "images/textures/coke/coke-diet-texture.png",
      description:
        "Add some sparkle to your day without the sugar or calories, with a crisp, refreshing Diet Coke!",
    },
    {
      id: 2,
      name: "no caffeine",
      color: "var(--yellow-500)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/coke/coke-no-caffeine-texture.png",
      description:
        "Add some sparkle to your day without the caffeine, with a crisp, refreshing Diet Coke Caffeine Free!",
    },
    {
      id: 3,
      name: "strawberry",
      color: "var(--red-400)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/coke/coke-strawberry-texture.png",
      description:
        "Add some flavour to your day without the sugar or calories, with Diet Coke Twisted Strawberry.",
    },
    {
      id: 4,
      name: "lime",
      color: "var(--lime-500)",
      texture:
        process.env.PUBLIC_URL + "images/textures/coke/coke-lime-texture.png",
      description:
        "Add some flavour to your day, without the sugar or calories with Diet Coke Sublime Lime.",
    },
  ],
  costa: [
    {
      id: 5,
      name: "americano",
      color: "var(--warm-gray-600)",
      texture:
        process.env.PUBLIC_URL + "images/textures/costa/costa-americano.png",
      description:
        "Our classic Americano has been expertly crafted by our Master of Coffee.",
    },
    {
      id: 6,
      name: "caramel latte",
      color: "var(--warm-gray-500)",
      texture:
        process.env.PUBLIC_URL + "images/textures/costa/costa-caramel.png",
      description:
        "Our sweet and creamy Caramel Latte has been expertly crafted by our Master of Coffee.",
    },
    {
      id: 7,
      name: "latte",
      color: "var(--warm-gray-400)",
      texture: process.env.PUBLIC_URL + "images/textures/costa/costa-latte.png",
      description:
        "Our smooth and creamy Latte has been expertly crafted by our Master of Coffee.",
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
      description: "XXX - A low calorie berry flavoured spring water.",
    },
    {
      id: 9,
      name: "orange",
      color: "rgb(246, 166, 10)",
      texture:
        process.env.PUBLIC_URL + "images/textures/glaceau/glaceau-orange.png",
      description: "Essential - A low calorie orange flavoured spring water.",
    },
    {
      id: 10,
      name: "dragonfruit",
      color: "rgb(230, 77, 98)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/glaceau/glaceau-dragonfruit.png",
      description:
        "Power-C – A low calorie dragon fruit flavoured spring water.",
    },
    {
      id: 11,
      name: "fruit punch",
      color: "rgb(190, 8, 74)",
      texture:
        process.env.PUBLIC_URL +
        "images/textures/glaceau/glaceau-fruit-punch.png",
      description: "Restore – A low calorie fruit flavoured spring water.",
    },
  ],
};

const setPositionAndScale = (name, screenSize) => {
  let position;
  let scale;
  // Coke
  if (name === "coke") {
    if (screenSize === "mobile") {
      position = [0, -1, 0];
      scale = 1.5;
    }
    if (screenSize === "desktop") {
      position = [0, -1.5, 0];
      scale = 1.25;
    }
  }
  // Costa
  if (name === "costa") {
    if (screenSize === "mobile") {
      position = [0, -0.25, 0];
      scale = 1.1;
    }
    if (screenSize === "desktop") {
      position = [0, -0.5, 0];
      scale = 1.25;
    }
  }

  // glaceau
  if (name === "glaceau") {
    if (screenSize === "mobile") {
      position = [0, -0.5, 0];
      scale = 0.8;
    }
    if (screenSize === "desktop") {
      position = [0, -1.5, 0];
      scale = 1;
    }
  }

  return { position, scale };
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
      const { modelName, screen } = action.payload;
      if (modelName === "coke") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            gltf: state.gltfs[0],
            selectedFlavor: flavors.coke[0].name,
            texture: flavors.coke[0].texture,
            name: "coke",
            flavors: [...flavors.coke],
            description: flavors.coke[0].description,
            position: setPositionAndScale("coke", screen).position,
            scale: setPositionAndScale("coke", screen).scale,
          },
        };
      }
      if (modelName === "costa") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            gltf: state.gltfs[1],
            selectedFlavor: flavors.costa[0].name,
            texture: flavors.costa[0].texture,
            name: "costa",
            flavors: [...flavors.costa],
            description: flavors.costa[0].description,
            position: setPositionAndScale("costa", screen).position,
            scale: setPositionAndScale("costa", screen).scale,
          },
        };
      }
      if (modelName === "glaceau") {
        return {
          ...state,
          current3DModel: {
            ...state.current3DModel,
            gltf: state.gltfs[2],
            selectedFlavor: flavors.glaceau[0].name,
            texture: flavors.glaceau[0].texture,
            name: "glaceau",
            flavors: [...flavors.glaceau],
            description: flavors.glaceau[0].description,
            position: setPositionAndScale("glaceau", screen).position,
            scale: setPositionAndScale("glaceau", screen).scale,
          },
        };
      }
      break;
    case "SET_SELECTED_FLAVOR":
      const getFlavor = flavors[state.current3DModel.name].find(
        (flavor) => flavor.name === action.payload
      );

      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          texture: getFlavor.texture,
          selectedFlavor: action.payload,
          description: getFlavor.description,
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
    case "SET_MODEL_POSITION":
      const { name, screenSize } = action.payload;

      return {
        ...state,
        current3DModel: {
          ...state.current3DModel,
          position: setPositionAndScale(name, screenSize).position,
          scale: setPositionAndScale(name, screenSize).scale,
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
