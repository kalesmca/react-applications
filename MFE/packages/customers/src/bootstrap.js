import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

const customersMount = (el, { theme, selectedCif }) => {
  ReactDOM.render(<App theme={theme} selectedCif={selectedCif} />, el);
};

// for stand alone
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#customers-dev-mode");

  if (devRoot) {
    customersMount(devRoot, { theme: "default" });
  }
}

// for container/external app
export { customersMount };