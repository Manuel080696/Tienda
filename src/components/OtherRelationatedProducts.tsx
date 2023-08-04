import { ProductCard } from "./ProductCard.tsx";
import "./OtherRelationatedProducts.css";
import { Product } from "../models/index.ts";
import useCategoryProduct from "../hooks/useCategoryProduct.ts";

export const OtherRelationatedProducts = ({
  add,
}: {
  add: (entry: Product) => Product[];
}) => {
  const { producto } = useCategoryProduct();

  return (
    <>
      <h1 className="text_list">Productos relacionados</h1>
      <ul className="container">
        {producto?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} add={add} />
          </li>
        ))}
      </ul>
    </>
  );
};
