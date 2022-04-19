import React, { useState, useEffect } from "react";
import "./scene-controls.scss";
import Tab from "../../atoms/buttons/tab";
import FlavorButton from "../../atoms/buttons/flavor-button";
import Checkbox from "../../atoms/inputs/checkbox/checkbox";
import Select from "../../atoms/select";

const SceneControls = () => {
  // This handles showing showing the wireframe
  const [showWireframe, setShowWireframe] = useState(false);
  const handleShowWireframe = () => {
    setShowWireframe(!showWireframe);
  };

  // This handles changing the light color
  const [lightColor, setLightColor] = useState("white");
  const handleColorLightChange = (e) => {
    setLightColor(e.target.value);
  };

  // This handles changing the light color
  const [lightIntensity, setIntensity] = useState("100");
  const handleIntensityLightChange = (e) => {
    setIntensity(e.target.value);
  };

  // This handle the camera position
  const [cameraPosition, setCameraPosition] = useState("Free control");
  const handleCameraPosition = (e) => {
    setCameraPosition(e.target.value);
  };

  return (
    <div className="scene-controls">
      <div className="scene-controls__tabs">
        <Tab active onClick={() => console.log("Coke was clicked")}>
          Coke
        </Tab>
        <Tab onClick={() => console.log("Costa was clicked")}>Costa</Tab>
        <Tab onClick={() => console.log("Glaceau was clicked")}>Glaceau</Tab>
      </div>
      <div className="scene-controls__content">
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Flavors:</span>
          <div className="scene-controls__flavor-buttons">
            <FlavorButton
              active
              onClick={() => console.log("Original was clicked")}
              color="var(--red-600)"
            >
              Original
            </FlavorButton>
            <FlavorButton
              onClick={() => console.log("Original was clicked")}
              color="var(--yellow-500)"
            >
              No Caffeine
            </FlavorButton>
            <FlavorButton
              onClick={() => console.log("Original was clicked")}
              color="var(--red-400)"
            >
              Strawberry
            </FlavorButton>
            <FlavorButton
              onClick={() => console.log("Original was clicked")}
              color="var(--lime-500)"
            >
              Lime
            </FlavorButton>
          </div>
        </div>
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Wireframe:</span>
          <Checkbox checked={showWireframe} onChange={handleShowWireframe}>
            Show wireframe
          </Checkbox>
        </div>
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Lighting:</span>
          <Select
            value={lightColor}
            onChange={handleColorLightChange}
            label="Color"
          >
            <option value="white">White</option>
            <option value="wed">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Select>
          <Select
            value={lightIntensity}
            onChange={handleIntensityLightChange}
            label="Intensity"
          >
            <option value="100">100%</option>
            <option value="75">75%</option>
            <option value="75">50%</option>
            <option value="75">25%</option>
          </Select>
        </div>
        <div className="scene-controls__control-group">
          <span className="scene-controls__control-group-span">Camera:</span>
          <Select
            value={cameraPosition}
            onChange={handleCameraPosition}
            label="Camera position"
          >
            <option value="free-control">Free control</option>
            <option value="top">Top</option>
            <option value="left">Left</option>
            <option value="left">Right</option>
            <option value="bottom">Bottom</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SceneControls;
