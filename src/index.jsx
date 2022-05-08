import React from "react";
import ReactDOM from "react-dom/client";
import { MainAppProvider } from "./models/main.model";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainAppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MainAppProvider>
  </React.StrictMode>
);
