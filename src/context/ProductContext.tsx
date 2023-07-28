import React, { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
};

type Rate = {
  rate: number;
  count: number;
};

type ProductContextType = {
  productCart: Product[];
  setProductCart: React.Dispatch<React.SetStateAction<Product[]>>;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  carCounter: number;
  setCarCounter: React.Dispatch<React.SetStateAction<number>>;
  carTotalPrice: number;
  setCarTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export const ProductProviderComponent = ({ children }: any) => {
  const [productCart, setProductCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [carCounter, setCarCounter] = useState(0);
  const [carTotalPrice, setCarTotalPrice] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        productCart,
        setProductCart,
        showCart,
        setShowCart,
        carCounter,
        setCarCounter,
        carTotalPrice,
        setCarTotalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
