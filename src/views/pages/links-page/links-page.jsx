import React from "react";
import "./links-page.scss";
import Container from "../../templates/container";
import Section from "../../organisms/section";
import { Heading4xl, Paragraph } from "../../atoms/typography/typography";
import {
  LinksList,
  LinksListItem,
} from "../../molecules/links-list/links-list";
import CubeIcon from "../../atoms/icons/cube-icon";
import GithubIcon from "../../atoms/icons/github-icon";
import MedalIcon from "../../atoms/icons/medal-icon";
import BrowsersIcon from "../../atoms/icons/browsers-icon";
import BooksIcon from "../../atoms/icons/books-icon";
import Footer from "../../organisms/footer";

const LinksPage = () => (
  <div className="links-page">
    <Container>
      <Section>
        <Heading4xl>Links</Heading4xl>
        <LinksList>
          <LinksListItem
            to="https://universityofsussex-my.sharepoint.com/:f:/g/personal/mm2086_sussex_ac_uk/EnJllPKi91dOgLDRiu78u4IBGY1Kp2-MZjGfopkM_8Lebg?e=CLPt1f"
            title="3D Models"
            icon={<CubeIcon />}
          >
            <Paragraph>
              This is a OneDrive link with the 3D models (GLTF files) in case of
              an emergency.
            </Paragraph>
          </LinksListItem>
          <LinksListItem
            to="https://github.com/Madalina-Alexandra/web-3d-apps-assignment"
            title="Github repository"
            icon={<GithubIcon />}
          >
            <Paragraph>
              This is the github repository for the project.
            </Paragraph>
          </LinksListItem>
          <LinksListItem
            to="#statement-of-originality-section"
            title="Statement of Originality"
            icon={<MedalIcon />}
            isHash
          >
            <Paragraph>
              This a link to Statement of Originality found in the about page
            </Paragraph>
          </LinksListItem>
          <LinksListItem
            to="#sitemap-section"
            title="Site map"
            icon={<BrowsersIcon />}
            isHash
          >
            <Paragraph>
              This a link to project sitemap found in the about page
            </Paragraph>
          </LinksListItem>
          <LinksListItem
            to="#references-section"
            title="References"
            icon={<BooksIcon />}
            isHash
          >
            <Paragraph>
              This is a link to the to the References used in this project
            </Paragraph>
          </LinksListItem>
        </LinksList>
      </Section>
    </Container>
    <Footer noLinks />
  </div>
);

export default LinksPage;
