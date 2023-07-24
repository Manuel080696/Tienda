import { useGetAllProducts } from "../services/services";
import { ProductCard } from "./ProductCard.tsx";

type Product = {
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

export const AllProducts = () => {
  const products: FetchResponse = useGetAllProducts();
  console.log(products);

  return (
    <ul>
      {products?.map((product) => {
        <li key={product.id}>
          <ProductCard product={product} />
        </li>;
      })}
    </ul>
  );
};
