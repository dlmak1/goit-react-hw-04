import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";

import "modern-normalize";
import "./styles/index.css";

import App from "./components/App/App";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
