import { useContext } from "react";
import { GetAllProducts } from "../services/services.mts";
import "./ProductCard.css";
import { CategoriesContext } from "../context/categoriesContext";

export const Categorias = () => {
  const { setProducts } = useContext(CategoriesContext);

  const handleCategoryChange = async (data: string) => {
    const selectedCategory = data;
    switch (selectedCategory) {
      case "all":
        setProducts(await GetAllProducts("/"));
        break;
      case "electronics":
        setProducts(await GetAllProducts("/category/electronics"));
        break;
      case "jewelery":
        setProducts(await GetAllProducts("/category/jewelery"));
        break;
      case "men":
        setProducts(await GetAllProducts("/category/men's clothing"));
        break;
      case "women":
        setProducts(await GetAllProducts("/category/women's clothing"));
        break;
      default:
        setProducts(await GetAllProducts("/"));
    }
  };

  return (
    <>
      <section className="containerSection">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => handleCategoryChange("all")}>All</li>
          <li onClick={() => handleCategoryChange("electronics")}>
            Electronics
          </li>
          <li onClick={() => handleCategoryChange("jewelery")}>Jewelery</li>
          <li onClick={() => handleCategoryChange("men")}>Men's clothing</li>
          <li onClick={() => handleCategoryChange("women")}>
            Women's clothing
          </li>
        </ul>
      </section>
    </>
  );
};
