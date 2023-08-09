import { useEffect, useState } from "react";
import { GetAllProducts } from "../services/services.mts";
import useSingleProduct from "./useSingleProduct";
import { useParams } from "react-router-dom";
import { Product } from "../models";

const useCategoryProduct = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : 0;
  const [category, setCategory] = useState<string | undefined>();
  const [producto, setProducto] = useState<Product[]>([]);

  const { product } = useSingleProduct();

  useEffect(() => {
    setCategory(product?.category);
  }, [product?.category]);

  useEffect(() => {
    const loadAllProducts = async () => {
      if (category !== undefined) {
        const data: Product[] = await GetAllProducts("/");

        const productsSameCategory = data.filter(
          (producto) => producto.category === category
        );

        if (productId !== 0) {
          const deleteMyElement = productsSameCategory.filter(
            (producto) => producto.id !== productId
          );

          setProducto(deleteMyElement);
        } else {
          setProducto(productsSameCategory);
        }
      }
    };
    loadAllProducts();
  }, [category, productId]);

  return { producto };
};

export default useCategoryProduct;
