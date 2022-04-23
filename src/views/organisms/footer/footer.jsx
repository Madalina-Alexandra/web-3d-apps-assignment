import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./footer.scss";
import Logo from "../../atoms/logo";
import { Paragraph } from "../../atoms/typography/typography";
import CubeIcon from "../../atoms/icons/cube-icon";
import GithubIcon from "../../atoms/icons/github-icon";
import MedalIcon from "../../atoms/icons/medal-icon";
import BrowsersIcon from "../../atoms/icons/browsers-icon";
import BooksIcon from "../../atoms/icons/books-icon";

const Footer = ({ noLinks }) => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <Logo onDark />
        <div className="footer__paragraph">
          <Paragraph onDark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            pellentesque sociis risus ut.
          </Paragraph>
        </div>
      </div>
      {!noLinks && (
        <ul className="footer__ul">
          <li className="footer__li">
            <a className="footer__link" href="/">
              <CubeIcon />
              3D Models
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__link" href="/">
              <GithubIcon />
              Github repository
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__link" href="/">
              <MedalIcon />
              Statement of Originality
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__link" href="/">
              <BrowsersIcon />
              Site map
            </a>
          </li>
          <li className="footer__li">
            <a className="footer__link" href="/">
              <BooksIcon />
              References
            </a>
          </li>
        </ul>
      )}
    </div>
    <span className="footer__copyright">
      &copy;197697 - Madalina Mehedinti - Web 3D Apps Assignment - May 2022
    </span>
  </footer>
);

Footer.propTypes = {
  noLinks: PropTypes.bool,
};

Footer.defaultProps = {
  noLinks: false,
};

export default Footer;
