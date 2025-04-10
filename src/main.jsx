import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
