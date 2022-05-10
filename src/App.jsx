import React, { Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import { MainAppModel } from "./models/main.model";
import Header from "./views/organisms/header";
import HomePage from "./views/pages/home-page";
import LoadingPage from "./views/pages/loading-page/loading-page";
import ExperiencePage from "./views/pages/experience-page";
import AboutPage from "./views/pages/about-page";
import GalleryPage from "./views/pages/gallery-page";
import LinksPage from "./views/pages/links-page";
import Modal from "./views/molecules/modal/modal";

const App = () => {
  // Get app modal
  const { model } = useContext(MainAppModel);

  return (
    <div className="App">
      <Suspense fallback={<LoadingPage noBackground />}>
        <Header />
        <div className="app__wrapper">
          {model.modal && <Modal />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loading" element={<LoadingPage noBackground />} />
            <Route
              path="/loading-gltfs"
              element={<LoadingPage noBackground loadGLTFS />}
            />
            <Route path="/3d-experience" element={<ExperiencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/links" element={<LinksPage />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
