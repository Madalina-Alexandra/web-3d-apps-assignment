import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./loading-page.scss";
// import { MainAppModel } from "../../../models/main.model";
import LoadingIcon from "../../atoms/icons/loading-icon";

const LoadingPage = ({ noBackground }) => {
  // Just for testing
  // const { modal, dispatch } = useContext(MainAppModel);
  // console.log(modal);

  return (
    <div
      className={`loading-page ${noBackground ? "loading-page--no-bg" : ""}`}
    >
      <div className="loading-page__content">
        <div className="loading-page__icon">
          <LoadingIcon />
        </div>
        <p className="loading-page__paragraph">
          {/* Just creating your experience{" "}
          <span className="loading-page__span">now...</span> */}
          Loading ...
        </p>
      </div>
    </div>
  );
};

LoadingPage.propTypes = {
  noBackground: PropTypes.bool,
}

LoadingPage.defaultProps = {
  noBackground: true
}


export default LoadingPage;
