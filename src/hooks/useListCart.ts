import { useState } from "react";
import { Product } from "../models";

const useList = () => {
  const [list, setList] = useState<Product[]>([]);

  const add = (entry: Product) => {
    setList([...list, entry]);
    return list;
  };

  return { add, list };
};

export default useList;
