import useList from "../hooks/useListCart";
import { AllProducts } from "./AllProducts";
import { Cart } from "./Cart";

export const Tienda = () => {
  const { list, add } = useList();

  return (
    <div>
      <AllProducts add={add} />
      <Cart list={list} />
    </div>
  );
};
