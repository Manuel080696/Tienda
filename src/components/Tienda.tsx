import useList from "../hooks/useListCart";
import { Product } from "../models";
import { AllProducts } from "./AllProducts";
import { Categorias } from "./Categorias";

export const Tienda = () => {
  type AddFunctionType = {
    add: (entry: Product) => Product[];
  };
  const { add } = useList() as AddFunctionType;

  return (
    <section className="tienda">
      <Categorias />
      <AllProducts add={add} />
    </section>
  );
};
