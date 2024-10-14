import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ProviderContext from "./components/provider/ProviderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ProviderContext>
    <App />
  </ProviderContext>

  // </React.StrictMode>
);
