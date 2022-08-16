import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GiftExpertApp } from "./GiftExpertApp";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const nuevoAnime = document.getElementById('ani')

root.render(
  <React.StrictMode>
    <GiftExpertApp/>
  </React.StrictMode>
);

