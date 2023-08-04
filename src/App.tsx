import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SingleProductPage } from "./pages/SingleProductPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
