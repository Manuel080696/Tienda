import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SingleProductPage } from "./pages/SingleProductPage";
import "./App.css";
import { AcercaDe } from "./pages/AcercaDe";
import { useCategoriesProducts } from "./hooks/useCategoriesProducts";

const App = () => {
  const { products, setProducts } = useCategoriesProducts();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Root setProducts={setProducts} products={products} />}
        >
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="acercade" element={<AcercaDe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
