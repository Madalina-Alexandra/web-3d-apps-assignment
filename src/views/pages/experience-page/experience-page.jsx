import React, { lazy, useContext } from "react";
import "./experience-page.scss";
import { MainAppModel } from "../../../models/main.model";
import SceneControls from "../../organisms/scene-controls";
import HandIcon from "../../atoms/icons/hand-icon";
import Footer from "../../organisms/footer";
import ExperienceCanvas from "../../organisms/experience-canvas";


const ExperiencePage = () => {
  // Get app modal
  const { model, dispatch } = useContext(MainAppModel);

  /**
   * This will out modal to hide our tooltip when the user interacts
   * with the Canvas
   */
  const handleTooltip = () => {
    if (model.showTooltip) dispatch({ type: "SET_TOOLTIP", payload: false });
  };

  return (
    <div className="experience-page">
      <div className="experience-page__container">
        <div className="experience-page__canvas-container">
          <div onMouseDown={handleTooltip} className="experience-page__canvas">
            <ExperienceCanvas />
          </div>
          {model.showTooltip && (
            <div className="experience-page__tool-tip">
              <HandIcon />
              <p className="experience-page__tool-tip-text">Drag to interact</p>
            </div>
          )}
        </div>
        <SceneControls />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
