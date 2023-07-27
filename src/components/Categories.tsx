import React from "react";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;

    switch (selectedCategory) {
      case "all":
        navigate("/");
        break;
      case "electronics":
        navigate("/products/category/electronics");
        break;
      case "jewelery":
        navigate("/products/category/jewelery");
        break;
      case "men":
        navigate("/products/category/men's clothing");
        break;
      case "women":
        navigate("/products/category/women's clothing");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <form className="containerForm ">
        <h5>Filtro </h5>
        <select onChange={handleCategoryChange} defaultValue="all">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men">Men's clothing</option>
          <option value="women">Women's clothing</option>
        </select>
      </form>
    </>
  );
};
