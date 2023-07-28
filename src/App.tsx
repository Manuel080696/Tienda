import { AllProducts } from "./components/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductsCart from "./components/ProductsCart";
import Root from "./Root";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ProductsCart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
