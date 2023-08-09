import { useEffect, useContext } from "react";
import { Product } from "../models";
import { CartContext } from "../context/cartContext";

const useList = () => {
  const { carritoVisible, setCarritoVisible, list, setList } =
    useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(list));
  }, [list]);

  const add = (entry: Product) => {
    if (!list.find((product) => product.id === entry.id)) {
      entry.rating.count = 1;
      setList([...list, entry]);
      setCarritoVisible(true);
    } else {
      entry.rating.count = entry.rating.count + 1;
      setList([...list]);
    }
  };

  const del = (entry: Product) => {
    const { count } = entry.rating;
    if (count === 1) {
      entry.rating.count = entry.rating.count - 1;
      setList(list.filter((p) => p.id !== entry.id));
      localStorage.setItem("cart", JSON.stringify(list));

      if (list.length === 0) {
        setList(list.filter((p) => p.id !== entry.id));
        setCarritoVisible(false);
      }
    } else if (count > 1) {
      entry.rating.count = entry.rating.count - 1;
      setList([...list]);
    }
  };

  const clear = (entry: Product) => {
    setList(list.filter((p) => p.id !== entry.id));
  };

  return { add, list, del, setCarritoVisible, carritoVisible, clear };
};

export default useList;
