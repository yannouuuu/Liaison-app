import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { cn } from "./lib/utils";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
