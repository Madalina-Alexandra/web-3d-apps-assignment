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
  AdmonitionCodeblock,
} from "../../molecules/admonition/admonition";
import Codeblock from "../../molecules/codeblock";
import Footer from "../../organisms/footer";

const AboutPage = () => (
  <div className="about-page">
    <Container>
      {/* ------------------------------------ Intro section ------------------------------------ */}
      <Section>
        <Heading4xl>About</Heading4xl>
        <HeadingLg>Statement of Originality</HeadingLg>
        <Paragraph>
          This project is submitted as part requirement for H7006: Web 3D
          Applications at the University of Sussex - May 2022. It is the product
          of my own labour except where indicated otherwise. References can be
          found <StandardLink to="#">here add link!!</StandardLink>
        </Paragraph>
        <Admonition warning>
          <AdmonitionParagraph>
            As this project uses{" "}
            <AdmonitionLink to="https://reactjs.org/">React</AdmonitionLink> it
            needs to use{" "}
            <AdmonitionLink to="https://webpack.js.org/">
              Webpack
            </AdmonitionLink>{" "}
            to compile the project into code that can be used in the browser.
            The command to do this is{" "}
            <AdmonitionCodeblock small>yarn build</AdmonitionCodeblock> however,
            the university server has no way of running this command. To get
            around this the project has been compiled locally so it can be
            served statically on the university server. Please only mark the
            code in the{" "}
            <AdmonitionCodeblock small>non-compiled</AdmonitionCodeblock>{" "}
            folder, this is the project code before it has been compiled, it can
            also be found on{" "}
            <AdmonitionLink to="#">Github add link!!</AdmonitionLink>. This is
            because the compiled code is not readable.
          </AdmonitionParagraph>
        </Admonition>
        <Admonition>
          <AdmonitionParagraph>
            This project does not use any CSS frameworks and all of the
            components (not including react three fiber{" "}
            <AdmonitionLink to="#">see here Add link!!</AdmonitionLink>) in the
            views have been designed in{" "}
            <AdmonitionLink to="#">Figma Add link!!</AdmonitionLink> and custom
            built using{" "}
            <AdmonitionLink to="https://sass-lang.com/">SCSS</AdmonitionLink>.
          </AdmonitionParagraph>
        </Admonition>
      </Section>
      {/* ------------------------------------ Technology list section ------------------------------------ */}
      <Section>
        <HeadingLg>Technologies:</HeadingLg>
        <List>
          <ListItem>
            <Paragraph>
              <StandardLink to="#react" dark bold>
                React
              </StandardLink>{" "}
              , this was the front-end framework used for the project, It
              allowed the project views to use the{" "}
              <StandardLink to="https://bradfrost.com/blog/post/atomic-web-design/">
                Atomic design
              </StandardLink>{" "}
              methodology.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#gsap" dark bold>
                GSAP
              </StandardLink>{" "}
              this was the animation library used for the project and was used
              for animations such as the mobile navigation dropdown.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#scss" dark bold>
                SCSS
              </StandardLink>{" "}
              this was a CSS preprocessor that allowed this project to use the{" "}
              <StandardLink to="https://css-tricks.com/bem-101/">
                BEM
              </StandardLink>{" "}
              naming for its element class names and add advanced functionally
              to the CSS with the use of{" "}
              <StandardLink to="https://sass-lang.com/documentation/at-rules/mixin">
                mixins
              </StandardLink>{" "}
              and{" "}
              <StandardLink to="https://sass-lang.com/documentation/at-rules/function">
                functions
              </StandardLink>
              .
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#threejs" dark bold>
                Three.js
              </StandardLink>{" "}
              , this was the 3D framework used to render the 3D elements on the{" "}
              <StandardLink to="#/3d-experience">3d-experience</StandardLink>{" "}
              page, it was also use in conjunction with{" "}
              <StandardLink to="https://github.com/pmndrs/react-three-fiber">
                react-three-fiber
              </StandardLink>{" "}
              and{" "}
              <StandardLink to="https://github.com/pmndrs/drei">
                react-three-drei
              </StandardLink>
              .
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#c4d" dark bold>
                PHP
              </StandardLink>{" "}
              this was the backend language used to build the API that served
              converted{" "}
              <StandardLink to="https://www.khronos.org/gltf/">
                GLTF
              </StandardLink>{" "}
              files as JSON to the frontend.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#c4d" dark bold>
                Cinema 4D
              </StandardLink>{" "}
              this was the software used to build 3D models for this project.
            </Paragraph>
          </ListItem>
          <ListItem>
            <Paragraph>
              <StandardLink to="#figma" dark bold>
                Figma
              </StandardLink>{" "}
              this was the design and prototyping tool that was used to design
              the project screens.
            </Paragraph>
          </ListItem>
        </List>
      </Section>
      {/* ------------------------------------ MVC section ------------------------------------ */}
      <Section>
        <HeadingLg>How MVC is used in the project</HeadingLg>
        <Paragraph>
          As this project uses React the modal view controller architecture is
          set up slightly differently. It works by using the{" "}
          <StandardLink to="https://www.loginradius.com/blog/engineering/react-context-api/">
            React context API
          </StandardLink>
          , this is not the API that servers the GLTF's to the project frontend
          (covered in next section) but instead its React's built-in state
          management solution similar to{" "}
          <StandardLink to="https://redux.js.org/">Redux</StandardLink>.
        </Paragraph>
        <Paragraph>
          The project has a main model called{" "}
          <Codeblock small>MainAppProvider</Codeblock> found in the{" "}
          <Codeblock small>main.model.js</Codeblock> file, this allows all of
          the application's views to have access to the state object. When the
          application first loads it is initialized with the{" "}
          <Codeblock small>initialState</Codeblock> object shown below.
        </Paragraph>
        <Codeblock>
          {`const initialState = {`} <br />
          {`\u00A0 loading: false,`} <br />
          {`\u00A0 gltfs: [],`} <br />
          {`\u00A0 showTooltip: true,`} <br />
          {`\u00A0 modal: null,`} <br />
          {`\u00A0 // More code ...`} <br />
          {`}`}
        </Codeblock>
        <Paragraph>
          However, if the user wants to make an update to a view the application
          needs a way to do this, this done with the application controller in{" "}
          <Codeblock small>main.controller.js</Codeblock>. In react these
          controllers are called actions and the example below shows the{" "}
          <Codeblock small>SET_SHOW_WIRE_FRAME</Codeblock> controller. This
          controller updates the model to show or hide the wireframe for the 3d
          model in the{" "}
          <StandardLink to="#/3d-experience">3d-experience</StandardLink> page
          based on the <Codeblock small>action.payload</Codeblock>.
        </Paragraph>
        <Codeblock>
          {`case "SET_SHOW_WIRE_FRAME":`}
          <br />
          {`\u00A0 return {`}
          <br />
          {`\u00A0 \u00A0...state,`}
          <br />
          {`\u00A0 \u00A0current3DModel: {`}
          <br />
          {`\u00A0 \u00A0 \u00A0...state.current3DModel,`}
          <br />
          {`\u00A0 \u00A0 \u00A0showWireFrame: action.payload,`}
          <br />
          {`\u00A0 \u00A0},`}
          <br />
          {`\u00A0 };`}
          <br />
        </Codeblock>
        <Paragraph>
          Lastly, views need a way of accessing the model and dispatching
          controllers, this is done via the use of the{" "}
          <StandardLink to="https://reactjs.org/docs/hooks-reference.html#usecontext">
            useContext
          </StandardLink>{" "}
          hook. The example below shows how the{" "}
          <Codeblock small>useContext</Codeblock> hook is implemented in a view
          and how the <Codeblock small>SET_SHOW_WIRE_FRAME</Codeblock>{" "}
          controller is dispatched from a view.
        </Paragraph>
        <Codeblock>
          {`const { model, dispatch } = useContext(MainAppModel);`} <br />
          <br />
          {`// Some code`} <br />
          <br />
          {`// This handles showing showing the wireframe`} <br />
          {`const handleShowWireframe = () => {`} <br />
          {`\u00A0 dispatch({ type: "SET_SHOW_WIRE_FRAME", payload: !showWireFrame });`}{" "}
          <br />
          {`};`}
        </Codeblock>
      </Section>
      {/* ------------------------------------ How AJAX is implemented ------------------------------------ */}
      <Section>
        <HeadingLg>How AJAX is implemented in this project</HeadingLg>
        <Paragraph>
          This application makes use of a small PHP REST API to serve JSON data
          that is then converted to a GLTF to be rendered as a 3D model on the
          3D-experience page. Because of this the application needs a way of
          making asynchronous requests. Lucky, React has the{" "}
          <StandardLink to="https://reactjs.org/docs/hooks-reference.html#useeffect">
            useEffect
          </StandardLink>{" "}
          hook that allows the application to make a fetch request to the API to
          get the JSON data it needs. The code for this can be found in{" "}
          <Codeblock small>loading-page.jsx</Codeblock> and is shown below.
        </Paragraph>
        <Codeblock>
          {`useEffect(() => {`}
          <br />
          {`\u00A0 if (model.gltfs.length === 0 && loadGLTFS) {`}
          <br />
          {`\u00A0 \u00A0 fetch('http://users.sussex.ac.uk/~mm2086/api/post/read.php')`}
          <br />
          {`\u00A0 \u00A0 \u00A0.then((res) => res.json())`}
          <br />
          {`\u00A0 \u00A0 \u00A0.then(`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0(result) => {`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0const gltfs = [];`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0// Some code that adds the textures to each item in the`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0// result & pushes them to gltfs ...`}
          <br />
          {``}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0// Add GLTFS to our modal and set current model to coke`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0dispatch({ type: 'SET_GLTFS', payload: gltfs });`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0dispatch({ type: 'SET_CURRENT_MODEL', payload: 'coke' });`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0  },`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 (error) => {`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 console.log(error);`}
          <br />
          {`\u00A0 \u00A0 \u00A0 \u00A0 }`}
          <br />
          {`\u00A0 \u00A0 \u00A0);`}
          <br />
          {`\u00A0 \u00A0}`}
          <br />
          <br />
          {`\u00A0 // If gltfs have been loaded to the model navigate back to experience page`}
          <br />
          {`\u00A0 if (model && model.gltfs.length > 0 && loadGLTFS) {`}
          <br />
          {`\u00A0 navigate('/3d-experience');`}
          <br />
          {`\u00A0 }`}
          <br />
          {`}, [model.gltfs]);`}
          <br />
          {``}
          <br />
          {``}
          <br />
          {``}
        </Codeblock>
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
