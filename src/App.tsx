import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Root } from "./pages/Root";
import { SingleProductPage } from "./pages/SingleProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products/:id" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
