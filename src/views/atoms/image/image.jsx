import React from "react";
import PropTypes from "prop-types";
import './image.scss';

const Image = ({ alt, src, caption }) => (
  <div className="image">
    <img className="image__image" alt={alt} src={src} />
    <caption className="image__caption">{caption}</caption>
  </div>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Image;
