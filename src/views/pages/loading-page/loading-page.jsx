import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./loading-page.scss";
import { MainAppModel } from "../../../models/main.model";
import LoadingIcon from "../../atoms/icons/loading-icon";


const LoadingPage = ({ noBackground, loadGLTFS }) => {
  // Get model
  const { model, dispatch } = useContext(MainAppModel);

  const navigate = useNavigate();

  /**
   * If no gltfs in the model make and API request to get them,
   * and update the model to have them.
   * Note: We can't do this in the actions as eseEffect must
   * run inside a component.
   */
  useEffect(() => {
    if (model.gltfs.length === 0 && loadGLTFS) {
      fetch('http://users.sussex.ac.uk/~mm2086/api/post/read.php')
        .then((res) => res.json())
        .then(
          (result) => {
            const gltfs = [];
            /**
             * As our json data will not have the textures set
             * (to stop them being too large) we need to set their
             * textures here for the first time
             */
            result.forEach((item) => {
              if (item.name === 'coke') {
                item.gltf.images[0].uri =
                  process.env.PUBLIC_URL +
                  "images/textures/coke/coke-diet-texture.png";
              }

              if (item.name === 'costa') {
                item.gltf.images[0].uri =
                  process.env.PUBLIC_URL +
                  "images/textures/costa/costa-americano.png";
              }
              if (item.name === 'glaceau') {
                item.gltf.images[0].uri =
                  process.env.PUBLIC_URL +
                  "images/textures/glaceau/glaceau-triple-berry.png";
              }

              gltfs.push(item.gltf);
            });

            // Add GLTFS to our modal and set current model to coke
            dispatch({ type: 'SET_GLTFS', payload: gltfs });
            dispatch({ type: 'SET_CURRENT_MODEL', payload: 'coke' });
          },
          (error) => {
            console.log(error);
          }
        );
    }

    // If gltfs have been loaded to the model navigate back to experience page
    if (model && model.gltfs.length > 0 && loadGLTFS) {
      navigate(`/3d-experience`);
    }
  }, [model.gltfs]);

  return (
    <div
      className={`loading-page ${noBackground ? "loading-page--no-bg" : ""}`}
    >
      <div className="loading-page__content">
        <div className="loading-page__icon">
          <LoadingIcon />
        </div>
        <p className="loading-page__paragraph">
          Loading ...
        </p>
      </div>
    </div>
  );
};

LoadingPage.propTypes = {
  noBackground: PropTypes.bool,
  loadGLTFS: PropTypes.bool,
};

LoadingPage.defaultProps = {
  noBackground: false,
  loadGLTFS: false,
};

export default LoadingPage;
