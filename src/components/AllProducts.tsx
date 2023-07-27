import useAllProducts from "../hooks/useAllProducts.ts";
import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import { Product } from "../models/index.ts";

export const AllProducts = ({
  add,
}: {
  add: (entry: Product) => Product[];
}) => {
  const { products } = useAllProducts();

  return (
    <>
      <h1 className="text_list">Lista de Productos</h1>
      <ul className="container">
        {products?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} add={add} />
          </li>
        ))}
      </ul>
    </>
  );
};
