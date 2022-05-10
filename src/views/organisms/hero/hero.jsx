import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.scss';
import gsap from 'gsap';
import {
  Heading4xl,
  Paragraph,
  StandardLink,
} from '../../atoms/typography/typography';
import PrimaryButton from '../../atoms/buttons/primary-button';

const Hero = () => {
  // This will allow us to navigate to the 3d-experience when the primary button is clicked on
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/3d-experience');

  // This is for the hero image animation
  const heroImgRef = useRef(null);
  const bubbleOneRef = useRef(null);
  const bubbleTwoRef = useRef(null);
  const bubbleThreeRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1 });
    tl.to(
      heroImgRef.current,
      { y: -20, duration: 1.5, ease: 'power2.out' },
      'start'
    );
    tl.to(
      heroImgRef.current,
      { y: 0, duration: 1.5, ease: 'power2.out' },
      'end'
    );
    tl.to(bubbleOneRef.current, { y: -25, duration: 1.5 }, 'start');
    tl.to(bubbleOneRef.current, { y: 0, duration: 1.5 }, 'end');
    tl.to(bubbleTwoRef.current, { y: -15, duration: 1.5 }, 'start');
    tl.to(bubbleTwoRef.current, { y: 0, duration: 1.5 }, 'end');
    tl.to(bubbleThreeRef.current, { y: -15, duration: 1.5 }, 'start');
    tl.to(bubbleThreeRef.current, { y: 0, duration: 1.5 }, 'end');
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">
        <Heading4xl noMargin>
          <span className="hero__span">Check out</span> your favorite drinks
        </Heading4xl>
        <Paragraph>
          Welcome to the home of Coca-Cola. Find information about Coca-Cola's
          range of drinks.
        </Paragraph>
        <div className="hero__buttons">
          <PrimaryButton onClick={handleNavigate}>Start</PrimaryButton>
          <StandardLink router to="/about">
            See docs
          </StandardLink>
        </div>
      </div>
      <div className="hero__img-container">
        <div className="hero__animated-img">
          <div
            ref={bubbleOneRef}
            className="hero__img-bubble hero__img-bubble--1"
          />
          <div
            ref={bubbleTwoRef}
            className="hero__img-bubble hero__img-bubble--2"
          />
          <div
            ref={bubbleThreeRef}
            className="hero__img-bubble hero__img-bubble--3"
          />
          <img
            ref={heroImgRef}
            className="hero__img"
            src={process.env.PUBLIC_URL + "images/hero.png"}
            alt="Animated coke can"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
