import useAllProducts from "../hooks/useAllProducts.ts";
import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import { Product } from "../models/index.ts";
import { useParams } from "react-router-dom";
import { Categories } from "./Categories.tsx";

export const AllProducts = ({
  add,
}: {
  add: (entry: Product) => Product[];
}) => {
  const { products } = useAllProducts();
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product: Product) => product.category === category
  );
  return (
    <>
      {filteredProducts.length === 0 ? (
        <ul className="container">
          {products?.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} add={add} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="container">
          {filteredProducts?.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} add={add} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
