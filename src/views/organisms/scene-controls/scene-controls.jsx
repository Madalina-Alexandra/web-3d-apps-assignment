import React, { useContext } from "react";
import "./scene-controls.scss";
import { MainAppModel } from "../../../models/main.model";
import Tab from "../../atoms/buttons/tab";
import FlavorButton from "../../atoms/buttons/flavor-button";
import Checkbox from "../../atoms/inputs/checkbox/checkbox";
import Select from "../../atoms/select";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

const SceneControls = () => {
  // Get app modal
  const { model, dispatch } = useContext(MainAppModel);

  const {
    name,
    flavors,
    selectedFlavor,
    showWireFrame,
    showBackground,
    hdri,
    cameraPosition,
    rotate,
    description,
  } = model.current3DModel;

  const { width } = useWindowDimensions();

  // This handles changing the model
  const handleChangeModel = (model) => {
    dispatch({
      type: "SET_CURRENT_MODEL",
      payload: {
        modelName: model,
        screen: width >= 1024 ? "desktop" : "mobile",
      },
    });
  };

  // This handle changing the flavor
  const handleSelectedFlavor = (flavor) =>
    dispatch({ type: "SET_SELECTED_FLAVOR", payload: flavor });

  // This handles showing showing the wireframe
  const handleShowWireframe = () => {
    dispatch({ type: "SET_SHOW_WIRE_FRAME", payload: !showWireFrame });
  };

  // This handles changing the hdRI
  const handleHdriChange = (e) => {
    dispatch({ type: "SET_HDRI", payload: e.target.value });
  };

  const handleShowBackground = () => {
    dispatch({ type: "SET_SHOW_BACKGROUND", payload: !showBackground });
  };

  const handleRotate = () => {
    dispatch({ type: "SET_ROTATE", payload: !rotate });
  };

  // This handle the camera position
  const handleCameraPosition = (e) => {
    dispatch({ type: "SET_CAMERA_POSITION", payload: e.target.value });
  };

  return (
    <div className="scene-controls">
      {/* --------- Tabs --------- */}
      <div className="scene-controls__tabs">
        <Tab active={name === "coke"} onClick={() => handleChangeModel("coke")}>
          Coke
        </Tab>
        <Tab
          active={name === "costa"}
          onClick={() => handleChangeModel("costa")}
        >
          Costa
        </Tab>
        <Tab
          active={name === "glaceau"}
          onClick={() => handleChangeModel("glaceau")}
        >
          Glaceau
        </Tab>
      </div>
      <div className="scene-controls__content">
        {/* --------- Flavor buttons --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Flavors:</span>
          <div className="scene-controls__flavor-buttons">
            {flavors.map((flavor) => (
              <FlavorButton
                key={flavor.id}
                active={selectedFlavor === flavor.name}
                onClick={() => handleSelectedFlavor(flavor.name)}
                color={flavor.color}
              >
                {flavor.name}
              </FlavorButton>
            ))}
          </div>
        </div>
        {/* --------- Description --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">
            Description:
          </span>
          <p className="scene-controls__paragraph">{description}</p>
        </div>
        {/* --------- Wireframe checkbox --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Wireframe:</span>
          <Checkbox checked={showWireFrame} onChange={handleShowWireframe}>
            Show wireframe
          </Checkbox>
        </div>
        {/* --------- Lighting options --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Lighting:</span>
          <Select value={hdri} onChange={handleHdriChange} label="HDIR Preset">
            <option value="warehouse">Warehouse</option>
            <option value="studio">Studio</option>
            <option value="sunset">Sunset</option>
            <option value="apartment">Apartment</option>
          </Select>
          <Checkbox checked={showBackground} onChange={handleShowBackground}>
            Show background
          </Checkbox>
        </div>
        {/* --------- Camera options --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Camera:</span>
          <Select
            value={cameraPosition}
            onChange={handleCameraPosition}
            label="Camera position"
          >
            <option value="default">Default</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </Select>
        </div>
        {/* --------- Animation options --------- */}
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">
            Animations:
          </span>
          <Checkbox checked={rotate} onChange={handleRotate}>
            Rotate
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default SceneControls;
