import { ProductCard } from "./ProductCard.tsx";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.tsx";
import "./AllProducts.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

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
