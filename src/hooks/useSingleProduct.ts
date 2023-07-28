import { useEffect, useState } from "react";
import { GetSingleProduct } from "../services/services.mts";

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

const useSingleProduct = (id: string) => {
  const Id = parseInt(id);
  const [product, setProduct] = useState<Product | []>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllProduts = async () => {
      try {
        const data = await GetSingleProduct(Id);
        setProduct(data);
      } catch (error) {
        typeof error == "string" && setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllProduts();
  }, [Id]);

  return { product, loading, error };
};

export default useSingleProduct;
