import React, { useEffect, useState } from "react";

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
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  favorites: Product[];
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export const ProductProviderComponent = ({ children }: any) => {
  const storedCart = localStorage.getItem("cart");
  const storedCartParsed = storedCart && JSON.parse(storedCart);

  const storedCounter = localStorage.getItem("counter");
  const storedCounterParsed = storedCounter && JSON.parse(storedCounter);

  const storedTotalPrice = localStorage.getItem("total-price");
  const storedTotalPriceParsed =
    storedTotalPrice && JSON.parse(storedTotalPrice);

  const storedFavorites = localStorage.getItem("favorites");
  const storedFavoritesParsed = storedFavorites && JSON.parse(storedFavorites);

  const [productCart, setProductCart] = useState<Product[]>(
    storedCartParsed || []
  );
  const [showCart, setShowCart] = useState(false);
  const [carCounter, setCarCounter] = useState(storedCounterParsed);
  const [carTotalPrice, setCarTotalPrice] = useState(storedTotalPriceParsed);
  const [amount, setAmount] = useState(0);
  const [favorites, setFavorites] = useState<Product[]>(
    storedFavoritesParsed || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productCart));
  }, [productCart]);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(carCounter));
  }, [carCounter]);

  useEffect(() => {
    localStorage.setItem("total-price", JSON.stringify(carTotalPrice));
  }, [carTotalPrice]);

  useEffect(() => {
    localStorage.setItem("total-price", JSON.stringify(carTotalPrice));
  }, [carTotalPrice]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
        amount,
        setAmount,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
