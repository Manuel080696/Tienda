import useCategoryProducts from "../hooks/useCategoryProducts";
import { ProductCard } from "./ProductCard";
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

const Jewelery = () => {
  const { products } = useCategoryProducts("jewelery");
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

export default Jewelery;
