import React from "react";
import "./home-page.scss";
import Hero from "../../organisms/hero";

const HomePage = () => (
  <div className="home-page">
    <img
      className="home-page__bg"
      alt=""
      src={process.env.PUBLIC_URL + "images/backgrounds/hero-desktop-bg.svg"}
    />
    <main className="home-page__container">
      <Hero />
    </main>
  </div>
);

export default HomePage;
