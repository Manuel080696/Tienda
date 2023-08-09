import React from "react";
import { useCategoriesProducts } from "../hooks/useCategoriesProducts";
import { Product } from "../models";

type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CategoriesContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export const CategoriesProviderComponent = ({ children }: any) => {
  const { products, setProducts } = useCategoriesProducts();

  return (
    <CategoriesContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
