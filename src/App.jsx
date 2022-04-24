import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import { MainAppProvider } from "./models/main.model";
import Header from "./views/organisms/header";
import HomePage from "./views/pages/home-page";
import LoadingPage from "./views/pages/loading-page/loading-page";
import ExperiencePage from "./views/pages/experience-page";
import AboutPage from "./views/pages/about-page";
import LinksPage from "./views/pages/links-page";

const App = () => {
  return (
    <div className="App">
      <MainAppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/3d-experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </MainAppProvider>
    </div>
  );
};

export default App;
