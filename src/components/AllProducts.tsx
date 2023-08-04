import useAllProducts from "../hooks/useAllProducts.ts";
import { ProductCard } from "./ProductCard.tsx";
import { Product } from "../services/types";
import "./AllProducts.css";

export const AllProducts = () => {
  const { products } = useAllProducts();

  return (
    <>
      <ul className="container">
        {products?.map((product: Product) => (
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
