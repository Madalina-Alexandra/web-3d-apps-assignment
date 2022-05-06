import React, { useState, useContext } from "react";
import "./gallery.scss";
import { MainAppModel } from "../../../models/main.model";
import Image from "../../atoms/image";
import galleryImage1 from "../../../images/gallery-img-1.jpg";
import galleryImage2 from "../../../images/gallery-img-2.jpg";
import galleryImage3 from "../../../images/gallery-img-3.jpg";
import galleryImage4 from "../../../images/gallery-img-1.jpg";
import galleryImage5 from "../../../images/gallery-img-2.jpg";
import galleryImage6 from "../../../images/gallery-img-3.jpg";
import galleryImage7 from "../../../images/gallery-img-1.jpg";
import galleryImage8 from "../../../images/gallery-img-2.jpg";
import galleryImage9 from "../../../images/gallery-img-3.jpg";
import ChevronButton from "../../atoms/buttons/chevron-button";
import SecondaryButton from "../../atoms/buttons/secondary-button";

const Gallery = () => {
  // Get app modal
  const { model, dispatch } = useContext(MainAppModel);

  const images = [
    { figcaption: "Glaceau render", src: galleryImage1 },
    { figcaption: "Costa render", src: galleryImage2 },
    { figcaption: "Coke render", src: galleryImage3 },
    { figcaption: "Glaceau render", src: galleryImage4 },
    { figcaption: "Costa render", src: galleryImage5 },
    { figcaption: "Coke render", src: galleryImage6 },
    { figcaption: "Glaceau render", src: galleryImage7 },
    { figcaption: "Costa render", src: galleryImage8 },
    { figcaption: "Coke render", src: galleryImage9 },
  ];

  // For mobile
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const currentImage = [...images].slice(startIndex, endIndex)[0];
  const handleNextImage = () => {
    if (startIndex < images.length - 1) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };
  const handlePreviousImage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  // For Desktop
  const [amountOfImagesToShow, setAmountOfImagesToShow] = useState(6);
  const handleLoadMOre = () => {
    if (amountOfImagesToShow < images.length - 1) {
      setAmountOfImagesToShow(amountOfImagesToShow + 6);
    }
  };

  const handleShowModal = (image) =>
    dispatch({
      type: "SET_MODAL",
      payload: { src: image.src, alt: image.figcaption },
    });

  return (
    <div className="gallery">
      {/* Mobile */}
      <div className="gallery__container gallery__container--mobile">
        <Image
          src={currentImage.src}
          alt={currentImage.figcaption}
          figcaption={currentImage.figcaption}
        />
        <div className="gallery__carousel-buttons">
          <ChevronButton
            disabled={startIndex === 0}
            onClick={handlePreviousImage}
          />
          <ChevronButton
            right
            disabled={startIndex === images.length - 1}
            onClick={handleNextImage}
          />
        </div>
      </div>
      {/* Desktop */}
      <div className="gallery__container gallery__container--desktop">
        {[...images.slice(0, amountOfImagesToShow)].map((image) => (
          <Image
            key={crypto.randomUUID()}
            src={image.src}
            alt={image.figcaption}
            figcaption={image.figcaption}
            onClick={() => handleShowModal(image)}
          />
        ))}
      </div>
      {amountOfImagesToShow < images.length && (
        <div className="gallery__load-more-btn">
          <SecondaryButton onClick={handleLoadMOre}>Load more</SecondaryButton>
        </div>
      )}
    </div>
  );
};

export default Gallery;
