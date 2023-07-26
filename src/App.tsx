import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProducts } from "./components/AllProducts";
import { SingleProduct } from "./components/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
