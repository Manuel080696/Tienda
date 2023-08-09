import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { useContext } from "react";
import { CategoriesContext } from "../context/categoriesContext";
import { GetAllProducts } from "../services/services.mts";

export const Footer = () => {
  const { setProducts } = useContext(CategoriesContext);
  const navigate = useNavigate();

  const handleCategoryChange = async (data: string) => {
    const selectedCategory = data;
    switch (selectedCategory) {
      case "all":
        navigate("/");
        setProducts(await GetAllProducts("/"));

        break;
      case "electronics":
        navigate("/");
        setProducts(await GetAllProducts("/category/electronics"));

        break;
      case "jewelery":
        navigate("/");
        setProducts(await GetAllProducts("/category/jewelery"));

        break;
      case "men":
        navigate("/");
        setProducts(await GetAllProducts("/category/men's clothing"));

        break;
      case "women":
        navigate("/");
        setProducts(await GetAllProducts("/category/women's clothing"));

        break;
      default:
        navigate("/");
        setProducts(await GetAllProducts("/"));
    }
  };

  return (
    <section className="footer">
      <ul>
        <h3>Productos</h3>
        <li onClick={() => handleCategoryChange("all")}>All</li>
        <li onClick={() => handleCategoryChange("electronics")}>Electronics</li>
        <li onClick={() => handleCategoryChange("jewelery")}>Jewelery</li>
        <li onClick={() => handleCategoryChange("men")}>Men's clothing</li>
        <li onClick={() => handleCategoryChange("women")}>Women's clothing</li>
      </ul>

      <ul>
        <h3>Información del creador</h3>
        <li onClick={() => navigate("acercade")}>Acerca de Manu</li>
      </ul>
    </section>
  );
};
