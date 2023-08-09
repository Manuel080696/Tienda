import React, { useState } from "react";
import { Product } from "../models";

type CartContextType = {
  carritoVisible: boolean;
  setCarritoVisible: React.Dispatch<React.SetStateAction<boolean>>;
  list: Product[];
  setList: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType
);

export const CartProviderComponent = ({ children }: any) => {
  const local = JSON.parse(localStorage.getItem("cart"));
  const [carritoVisible, setCarritoVisible] = useState<boolean>(false);
  const [list, setList] = useState<Product[]>(local || []);

  return (
    <CartContext.Provider
      value={{
        carritoVisible,
        setCarritoVisible,
        list,
        setList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
