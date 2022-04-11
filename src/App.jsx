
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/main.scss';

import HeaderMobile from './views/organisms/header-mobile';
import Home from './views/pages/home';

const App = () => {
  return (
    <div className="App">
      <HeaderMobile />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
