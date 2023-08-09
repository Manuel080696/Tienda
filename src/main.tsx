import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CategoriesProviderComponent } from "./context/categoriesContext.tsx";
import { CartProviderComponent } from "./context/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoriesProviderComponent>
      <CartProviderComponent>
        <App />
      </CartProviderComponent>
    </CategoriesProviderComponent>
  </React.StrictMode>
);
