import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

const mount = (el, { theme, selectedCif }) => {
  ReactDOM.render(<App theme={theme} selectedCif={selectedCif} />, el);
};

// for stand alone
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#accounts-dev-mode");

  if (devRoot) {
    mount(devRoot, { theme: "default" });
  }
}

// for container/external app
export { mount };