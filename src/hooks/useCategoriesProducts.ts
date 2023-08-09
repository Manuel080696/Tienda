import { useEffect, useState } from "react";
import useAllProducts from "./useAllProducts";
import { Product } from "../models";

export const useCategoriesProducts = () => {
  const { product } = useAllProducts();

  const [products, setProducts] = useState<Product[]>(product);

  useEffect(() => {
    setProducts(product);
  }, [product]);

  return { products, setProducts };
};
