import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import useSingleProduct from "../hooks/useSingleProduct.ts";
import { Product } from "../models/index.ts";

export const SingleProduct = ({
  add,
}: {
  add: (entry: Product) => Product[];
}) => {
  const { product } = useSingleProduct();

  return (
    <>
      <h1 className="text_list">Lista de Productos</h1>
      {product === null ? (
        <h2>Cargando...</h2>
      ) : (
        <ProductCard product={product} add={add} />
      )}
    </>
  );
};
