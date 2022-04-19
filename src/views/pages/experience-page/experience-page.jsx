import React from "react";
import "./experience-page.scss";
import SceneControls from "../../organisms/scene-controls";
import HandIcon from '../../atoms/icons/hand-icon';

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <div className="experience-page__canvas-container">
        <div className="experience-page__tool-tip">
          <HandIcon />
          <p className="experience-page__tool-tip-text">Drag to interact</p>
        </div>
        <canvas className="experience-page__canvas"></canvas>
      </div>
      <SceneControls />
    </div>
  );
};

export default ExperiencePage;
