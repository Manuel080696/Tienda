import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Root } from "./pages/Root";
import { SingleProductPage } from "./pages/SingleProductPage";
=======
import { AllProducts } from "./components/AllProducts";
import { SingleProduct } from "./components/SingleProduct";
>>>>>>> 98ddc8307ea7163a2ca21c53aa64878c8e7382b6

const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products/:id" element={<SingleProductPage />} />
        </Route>
=======
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
>>>>>>> 98ddc8307ea7163a2ca21c53aa64878c8e7382b6
      </Routes>
    </Router>
  );
};

export default App;
