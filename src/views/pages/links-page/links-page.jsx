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
          <LinksListItem to="/" title="3D Model" icon={<CubeIcon />}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </Paragraph>
          </LinksListItem>
          <LinksListItem to="/" title="Github repository" icon={<GithubIcon />}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </Paragraph>
          </LinksListItem>
          <LinksListItem
            to="/"
            title="Statement of Originality"
            icon={<MedalIcon />}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </Paragraph>
          </LinksListItem>
          <LinksListItem to="/" title="Site map" icon={<BrowsersIcon />}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </Paragraph>
          </LinksListItem>
          <LinksListItem to="/" title="References" icon={<BooksIcon />}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </Paragraph>
          </LinksListItem>
        </LinksList>
      </Section>
    </Container>
    <Footer noLinks />
  </div>
);

export default LinksPage;
