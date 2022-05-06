import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MainAppModel } from "../../../models/main.model";
import "./modal.scss";
import Image from "../../atoms/image/image";
import CloseButton from "../../atoms/buttons/close-button";
import Container from "../../templates/container/container";

const Modal = ({ show, image, alt }) => {
  // Get app modal
  const { model, dispatch } = useContext(MainAppModel);

  // This handles closing the modal
  const handleCloseModal = () => {
    console.log("i fired");
    dispatch({ type: "SET_MODAL", payload: null });
  };

  // If no modal in model return
  if (!model.modal) return;

  return (
    <div className="modal">
      <div className="modal__background"></div>
      <Container>
        <div className="modal__content">
          <div className="modal__close-btn">
            <CloseButton onClick={handleCloseModal} />
          </div>
          <Image src={model.modal.src} alt={model.modal.alt} modalImage />
        </div>
      </Container>
    </div>
  );
};

export default Modal;
