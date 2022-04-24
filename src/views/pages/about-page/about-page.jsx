import React from "react";
import "./about-page.scss";
import Container from "../../templates/container";
import Section from "../../organisms/section";
import {
  Heading4xl,
  HeadingLg,
  Paragraph,
  StandardLink,
} from "../../atoms/typography/typography";
import { List, ListItem } from "../../molecules/list/list";
import {
  Admonition,
  AdmonitionParagraph,
  AdmonitionLink,
} from "../../molecules/admonition/admonition";
import Codeblock from "../../molecules/codeblock";
import Footer from "../../organisms/footer";

const AboutPage = () => (
  <div className="about-page">
    <Container>
      {/* ------------------------------------ Intro section ------------------------------------ */}
      <Section>
        <Heading4xl>About</Heading4xl>
        <Admonition>
          <AdmonitionParagraph>
            Lorem ipsum <AdmonitionLink to="#">NPM</AdmonitionLink> dolor sit
            amet, consectetur adipiscing elit. Aliquet in gravida amet cras
            ullamcorper morbi faucibus ultricies blandit. Diam enim, varius
            aliquet ipsum, adipiscing morbi
          </AdmonitionParagraph>
        </Admonition>
        <HeadingLg>Technologies:</HeadingLg>
        <List>
          <ListItem>
            <Paragraph>
              <StandardLink to="#react" dark bold>
                React
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#gsap" dark bold>
                GSAP
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#scss" dark bold>
                SCSS
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#threejs" dark bold>
                Three.js
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#c4d" dark bold>
                Cinema 4D
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#figma" dark bold>
                Figma
              </StandardLink>{" "}
              ipsum dolor sit amet, consectetur adipiscing elit. Donec non nec,
              neque
            </Paragraph>
          </ListItem>
        </List>
      </Section>
      {/* ------------------------------------ React section ------------------------------------ */}
      <Section>
        <HeadingLg>React</HeadingLg>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Admonition warning>
          <AdmonitionParagraph>
            Lorem ipsum <AdmonitionLink to="#">NPM</AdmonitionLink> dolor sit
            amet, consectetur adipiscing elit. Aliquet in gravida amet cras
            ullamcorper morbi faucibus ultricies blandit. Diam enim, varius
            aliquet ipsum, adipiscing morbi
          </AdmonitionParagraph>
        </Admonition>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <StandardLink to="https://reactjs.org/" bold>
            React
          </StandardLink>{" "}
          in gravida amet cras ullamcorper morbi faucibus ultricies blandit.
          Diam enim, varius aliquet ipsum, adipiscing morbi
        </Paragraph>
      </Section>
      {/* ------------------------------------ GSAP section ------------------------------------ */}
      <Section>
        <HeadingLg>GSAP</HeadingLg>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <Codeblock>
          @import "/src/styles/abstracts/mixins"; <br />
          @import"../../../styles/base/animations"; <br />
        </Codeblock>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida amet
          cras ullamcorper morbi faucibus ultricies blandit. Diam enim, varius
          aliquet ipsum, adipiscing morbi Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Gravida amet cras ullamcorper morbi
          faucibus ultricies blandit. Diam enim, varius aliquet ipsum,
          adipiscing morbi
        </Paragraph>
      </Section>
    </Container>
    <Footer />
  </div>
);

export default AboutPage;
