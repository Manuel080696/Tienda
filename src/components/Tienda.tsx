import useList from "../hooks/useListCart";
import { AllProducts } from "./AllProducts";
import { Cart } from "./Cart";
import { Categories } from "./Categories";

export const Tienda = () => {
  const { list, add } = useList();

  return (
    <div>
      <h1 className="text_list">Lista de Productos</h1>
      <Cart list={list} />
      <Categories />
      <AllProducts add={add} />
    </div>
  );
};
