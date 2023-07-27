import { useEffect, useState } from "react";
import { GetCategories } from "../services/services.mts";
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

const useCategories = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        if (category !== undefined) {
          const data = await GetCategories(category);
          console.log(data);
          return setCategories(data);
        }
      } catch (error) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [category]);

  return { categories, loading, error };
};

export default useCategories;
