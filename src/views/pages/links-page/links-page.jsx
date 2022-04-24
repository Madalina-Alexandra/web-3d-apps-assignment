import React from "react";
import "./links-page.scss";
import Container from "../../templates/container";
import Section from "../../organisms/section";
import { Heading4xl } from "../../atoms/typography/typography";
import Footer from "../../organisms/footer";

const LinksPage = () => (
  <div className="links-page">
    <Container>
      <Section>
        <Heading4xl>Links</Heading4xl>
        links
      </Section>
    </Container>
    <Footer noLinks />
  </div>
);

export default LinksPage;
