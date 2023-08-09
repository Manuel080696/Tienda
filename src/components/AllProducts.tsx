import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import { Product } from "../models/index.ts";
import { useContext } from "react";
import { CategoriesContext } from "../context/categoriesContext.tsx";

export const AllProducts = () => {
  const { products } = useContext(CategoriesContext);

  return (
    <>
      <ul className="container">
        {products?.map((product: Product) => (
          <li className="products-li" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
