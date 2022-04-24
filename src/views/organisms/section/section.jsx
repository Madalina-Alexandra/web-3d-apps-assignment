import React from "react";
import PropTypes from "prop-types";
import './section.scss';

const Section = ({ children, id }) => (
  <section className="section" id={id}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

Section.defaultProps = {
  id: "",
};

export default Section;
