import { useEffect, useState } from "react";
import { GetSingleCategory } from "../services/services.mjs";

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
const useCategoryProducts = (category: string) => {
  console.log(category);

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllProduts = async () => {
      try {
        const data = await GetSingleCategory(category);
        setProducts(data);
      } catch (error) {
        typeof error == "string" && setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllProduts();
  }, [category]);

  return { products, loading, error };
};

export default useCategoryProducts;
