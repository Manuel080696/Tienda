import React from "react";
import ReactDOM from "react-dom/client";
import { ProductProviderComponent } from "./context/ProductContext.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProviderComponent>
      <App />
    </ProductProviderComponent>
  </React.StrictMode>
);
