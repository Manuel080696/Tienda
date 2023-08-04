import { useEffect, useState } from "react";
import { GetAllProducts } from "../services/services.mts";

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

const useAllProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllProduts = async () => {
      try {
        setLoading(true);
        const data = await GetAllProducts("/");
        setProduct(data);
      } catch (error) {
        typeof error == "string" && setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllProduts();
  }, []);

  return { product, loading, error };
};

export default useAllProducts;
