import React from "react";
import PropTypes from "prop-types";
import "./image.scss";

const Image = ({ alt, src, figcaption, modalImage, onClick, noHover }) => (
  <div
    className={`image ${modalImage ? "image--modal" : ""} ${
      noHover ? "image--no-hover" : ""
    }`}
    onClick={onClick}
  >
    <img className="image__image" alt={alt} src={src} />
    {figcaption && (
      <figcaption className="image__figcaption">{figcaption}</figcaption>
    )}
  </div>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  figcaption: PropTypes.string,
  modalImage: PropTypes.bool,
  onClick: PropTypes.func,
  noHover: PropTypes.bool,
};

Image.defaultProps = {
  figcaption: "",
  modalImage: false,
  onClick: () => {},
  noHover: false,
};

export default Image;
