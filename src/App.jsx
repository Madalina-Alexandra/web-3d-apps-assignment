
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './styles/main.scss';
import Header from './views/organisms/header';
import Home from './views/pages/home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
