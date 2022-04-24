import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProviderStore } from "./context/ContextAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderStore>
      <App />
    </ProviderStore>
  </React.StrictMode>
);
