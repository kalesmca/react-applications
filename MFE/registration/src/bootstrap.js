import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./app";

const registrationMount = (el, obh) => {
  ReactDOM.render(<App theme={obh.theme} mine={obh.mine}  />, el);
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