import React, {useState} from 'react';
import './gallery.scss'
import Image from '../../atoms/image';
import galleryImageOne from '../../../images/gallery-img-1.jpg';

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);

  return (
    <div className="gallery">
      <div className="gallery__container gallery__container--mobile">
        <Image
          src={galleryImageOne}
          alt="Glaceau render"
          caption="Glaceau render"
        />
      </div>
    </div>
  );
}

export default Gallery;
