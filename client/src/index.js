import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <PersistGate>
      <App />
    </PersistGate>
  </BrowserRouter>,
  document.getElementById("root")
);
