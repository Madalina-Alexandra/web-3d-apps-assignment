import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import { MainAppProvider } from "./models/main.model";
import Header from "./views/organisms/header";
import HomePage from "./views/pages/home-page";
import LoadingPage from "./views/pages/loading-page/loading-page";
import ExperiencePage from "./views/pages/experience-page";

const App = () => {
  return (
    <div className="App">
      <MainAppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/3d-experience" element={<ExperiencePage />} />
        </Routes>
      </MainAppProvider>
    </div>
  );
};

export default App;
