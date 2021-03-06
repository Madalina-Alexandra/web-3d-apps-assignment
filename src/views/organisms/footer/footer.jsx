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
            This website is done for the Web 3D Applications assignment - May
            2022.
          </Paragraph>
        </div>
      </div>
      {!noLinks && (
        <ul className="footer__ul">
          <li className="footer__li">
            <a
              className="footer__link"
              href="https://universityofsussex-my.sharepoint.com/:f:/g/personal/mm2086_sussex_ac_uk/EnJllPKi91dOgLDRiu78u4IBGY1Kp2-MZjGfopkM_8Lebg?e=CLPt1f"
              target="_blank"
              rel="noreferrer"
            >
              <CubeIcon />
              3D Models
            </a>
          </li>
          <li className="footer__li">
            <a
              className="footer__link"
              href="https://github.com/Madalina-Alexandra/web-3d-apps-assignment"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              Github repository
            </a>
          </li>
          <li className="footer__li">
            <Link
              className="footer__link"
              to={{
                pathname: "/about",
                hash: "#statement-of-originality-section",
              }}
            >
              <MedalIcon />
              Statement of Originality
            </Link>
          </li>
          <li className="footer__li">
            <Link
              className="footer__link"
              to={{ pathname: "/about", hash: "#sitemap-section" }}
            >
              <BrowsersIcon />
              Site map
            </Link>
          </li>
          <li className="footer__li">
            <Link
              className="footer__link"
              to={{ pathname: "/about", hash: "#references-section" }}
            >
              <BooksIcon />
              References
            </Link>
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
