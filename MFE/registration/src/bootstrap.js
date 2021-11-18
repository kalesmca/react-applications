import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

const registrationMount = (el, { theme }) => {
  ReactDOM.render(<App theme={theme}  />, el);
};

// for stand alone
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#registration-dev-mode");

  if (devRoot) {
    registrationMount(devRoot, { theme: "default" });
  }
}

// for container/external app
export { registrationMount };