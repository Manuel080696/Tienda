import useCategoryProducts from "../hooks/useCategoryProducts";
import { ProductCard } from "./ProductCard";
import { Product } from "../services/types";
import "./AllProducts.css";

const MensClothing = () => {
  const { products } = useCategoryProducts("men's clothing");
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

export default MensClothing;
