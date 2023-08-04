// import { useEffect, useState } from "react";
// import { GetAllProducts } from "../services/services.mts";
// import useSingleProduct from "./useSingleProduct";
// import { useParams } from "react-router-dom";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: Rating;
// };

// //No la estoy usando este hook para nada, hay que arreglarlo para las categorías//
// type Rating = {
//   rate: number;
//   count: number;
// };

// const useCategoryProduct = () => {
//   const { id } = useParams();
//   const productID = id && parseInt(id);
//   const [category, setCategory] = useState<string>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [producto, setProducto] = useState<Product[]>([]);

//   const { product } = useSingleProduct();

//   setCategory(product?.category);

//   useEffect(() => {
//     const loadAllProduts = async () => {
//       try {
//         setLoading(true);
//         const data: Product[] = await GetAllProducts("/");
//         console.log(data);

//         const productsSameCategory = data.filter(
//           (producto) => producto.category === category
//         );
//         console.log(productsSameCategory);

//         const deleteMyElement = productsSameCategory.filter(
//           (producto) => producto.id !== productID
//         );
//         setProducto(deleteMyElement);
//       } catch (error) {
//         typeof error == "string" && setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadAllProduts();
//   }, [category, productID]);

//   return { producto, loading, error };
// };

// export default useCategoryProduct;

import { useEffect, useState } from "react";
import { GetAllProducts } from "../services/services.mts";
import useSingleProduct from "./useSingleProduct";
import { useParams } from "react-router-dom";
import { log } from "console";

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
