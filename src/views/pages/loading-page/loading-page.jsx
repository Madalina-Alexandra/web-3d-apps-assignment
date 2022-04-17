import React, { useContext } from "react";
import "./loading-page.scss";
import { MainAppModel } from "../../../models/main.model";
import LoadingIcon from "../../atoms/icons/loading-icon";

const LoadingPage = () => {
  // Just for testing
  const { modal, dispatch } = useContext(MainAppModel);
  console.log(modal);

  return (
    <div className="loading-page">
      <div className="loading-page__content">
        <div className="loading-page__icon">
          <LoadingIcon />
        </div>
        <p className="loading-page__paragraph">
          Just creating your experience{" "}
          <span className="loading-page__span">now...</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
