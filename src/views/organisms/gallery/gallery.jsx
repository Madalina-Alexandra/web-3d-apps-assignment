import React, { useState, useContext } from "react";
import "./gallery.scss";
import { MainAppModel } from "../../../models/main.model";
import Image from "../../atoms/image";
import galleryImage1 from "../../../images/gallery/full/full-1.jpg";
import galleryImage2 from "../../../images/gallery/full/full-2.jpg";
import galleryImage3 from "../../../images/gallery/full/full-3.jpg";
import galleryImage4 from "../../../images/gallery/full/full-4.jpg";
import galleryImage5 from "../../../images/gallery/full/full-5.jpg";
import galleryImage6 from "../../../images/gallery/full/full-6.jpg";
import galleryImage7 from "../../../images/gallery/full/full-7.jpg";
import galleryImage8 from "../../../images/gallery/full/full-8.jpg";
import galleryImage9 from "../../../images/gallery/full/full-9.jpg";
import galleryThumbImage1 from "../../../images/gallery/thumb/thumb-1.jpg";
import galleryThumbImage2 from "../../../images/gallery/thumb/thumb-2.jpg";
import galleryThumbImage3 from "../../../images/gallery/thumb/thumb-3.jpg";
import galleryThumbImage4 from "../../../images/gallery/thumb/thumb-4.jpg";
import galleryThumbImage5 from "../../../images/gallery/thumb/thumb-5.jpg";
import galleryThumbImage6 from "../../../images/gallery/thumb/thumb-6.jpg";
import galleryThumbImage7 from "../../../images/gallery/thumb/thumb-7.jpg";
import galleryThumbImage8 from "../../../images/gallery/thumb/thumb-8.jpg";
import galleryThumbImage9 from "../../../images/gallery/thumb/thumb-9.jpg";

import ChevronButton from "../../atoms/buttons/chevron-button";

import SecondaryButton from "../../atoms/buttons/secondary-button";

const Gallery = () => {
  // Get app modal
  const { model, dispatch } = useContext(MainAppModel);

  const images = [
    {
      figcaption:
        "Glaceau Water Bottles rendered & textured with Redshift for C4D",
      full: galleryImage2,
      thumb: galleryThumbImage2,
    },
    {
      figcaption:
        "Glaceau Water Bottles rendered & textured with Redshift for C4D",
      full: galleryImage3,
      thumb: galleryThumbImage3,
    },
    {
      figcaption: "Coke can top rendered & textured with Redshift for C4D",
      full: galleryImage4,
      thumb: galleryThumbImage4,
    },
    {
      figcaption: "Coke cans rendered & textured with Redshift for C4D",
      full: galleryImage5,
      thumb: galleryThumbImage5,
    },
    {
      figcaption: "Costa Coffee cans rendered & textured with Redshift for C4D",
      full: galleryImage7,
      thumb: galleryThumbImage7,
    },
    {
      figcaption:
        "Coke can textures recreated using Adobe Illustrator and Photoshop",
      full: galleryImage6,
      thumb: galleryThumbImage6,
    },
    {
      figcaption:
        "Costa can textures recreated using Adobe Illustrator and Photoshop",
      full: galleryImage8,
      thumb: galleryThumbImage8,
    },
    {
      figcaption:
        "Water bottle textures recreated using Adobe Illustrator and Photoshop",
      full: galleryImage9,
      thumb: galleryThumbImage9,
    },
    {
      figcaption: "All models rendered & textured with Redshift for C4D",
      full: galleryImage1,
      thumb: galleryThumbImage1,
    },
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
      payload: { src: image.full, alt: image.figcaption },
    });

  return (
    <div className="gallery">
      {/* Mobile */}
      <div className="gallery__container gallery__container--mobile">
        <Image
          src={currentImage.thumb}
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
            src={image.thumb}
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
