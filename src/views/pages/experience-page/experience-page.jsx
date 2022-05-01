import React from "react";
import "./experience-page.scss";
import SceneControls from "../../organisms/scene-controls";
import HandIcon from '../../atoms/icons/hand-icon';
import ExperienceCanvas from "../../organisms/experience-canvas";
import Footer from '../../organisms/footer';

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <div className="experience-page__container">
      <div className="experience-page__canvas-container">
        <div className="experience-page__tool-tip">
          <HandIcon />
          <p className="experience-page__tool-tip-text">Drag to interact</p>
        </div>
        <div className="experience-page__canvas">
          <ExperienceCanvas />
        </div>
      </div>
      <SceneControls />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
