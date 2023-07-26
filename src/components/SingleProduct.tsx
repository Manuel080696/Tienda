import { ProductCard } from "./ProductCard.tsx";
import "./AllProducts.css";
import useSingleProduct from "../hooks/useSingleProduct.ts";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: Rating;
// };

// type Rating = {
//   rate: number;
//   count: number;
// };

export const SingleProduct = () => {
  const { product } = useSingleProduct();

  return (
    <>
      <h1 className="text_list">Lista de Productos</h1>
      {product === null ? (
        <h2>Cargando...</h2>
      ) : (
        <ProductCard
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          category={product.category}
          rating={product.rating}
        />
      )}
    </>
  );
};
