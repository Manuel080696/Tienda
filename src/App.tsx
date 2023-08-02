import { AllProducts } from "./components/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import ProductDetail from "./components/ProductDetail";
import ProductsCart from "./components/ProductsCart";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import Login from "./Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ProductsCart />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/men's clothing" element={<MensClothing />} />
            <Route path="/women's clothing" element={<WomensClothing />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
