import React from "react";
import "./gallery-page.scss";
import Container from "../../templates/container/container";
import { Heading4xl } from "../../atoms/typography/typography";
import Gallery from "../../organisms/gallery";
import Footer from "../../organisms/footer";

const GalleryPage = () => (
  <div className="gallery-page">
    <Container>
      <Heading4xl>Gallery</Heading4xl>
      <Gallery />
    </Container>
    <Footer />
  </div>
);

export default GalleryPage;
