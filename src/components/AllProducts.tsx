import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import { Product } from "../models/index.ts";

export const AllProducts = ({
  add,
  products,
}: {
  add: (entry: Product) => Product[];
  products: Product[];
}) => {
  return (
    <>
      <ul className="container">
        {products?.map((product: Product) => (
          <li className="products-li" key={product.id}>
            <ProductCard product={product} add={add} />
          </li>
        ))}
      </ul>
    </>
  );
};
