import { useEffect, useState } from "react";
import { GetSingleProduct } from "../services/services.mts";
import { useParams } from "react-router-dom";

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

const useSingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const idNumber: number = parseInt(id || "");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data: Product = await GetSingleProduct(idNumber);
        if (data !== null) {
          return setProduct(data);
        }
      } catch (error) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [idNumber]);

  return { product, loading, error };
};

export default useSingleProduct;
