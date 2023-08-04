import { ProductCard } from "./ProductCard.tsx";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.tsx";
import { Product } from "../services/types";
import "./AllProducts.css";

export const Favorites = () => {
  const { favorites } = useContext(ProductContext);

  return (
    <>
      {favorites.length === 0 && (
        <h1 className="favorites">No favorites yet</h1>
      )}
      <ul className="container">
        {favorites?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              category={product.category}
              rating={product.rating}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
