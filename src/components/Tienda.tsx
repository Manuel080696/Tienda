import { useEffect, useState } from "react";
import useList from "../hooks/useListCart";
import { AllProducts } from "./AllProducts";
import { Cart } from "./Cart";
import { Categorias } from "./Categorias";
import { Product } from "../models";
import useAllProducts from "../hooks/useAllProducts";

export const Tienda = () => {
  const { add, del, setCarritoVisible, carritoVisible, list, clear } =
    useList();

  const { product } = useAllProducts();

  useEffect(() => {
    setProducts(product);
  }, [product]);
  const [products, setProducts] = useState<Product[]>(product);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      setCarritoVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="tienda">
      <Categorias setProducts={setProducts} />
      <AllProducts add={add} products={products} />
      <Cart
        del={del}
        add={add}
        clear={clear}
        setCarritoVisible={setCarritoVisible}
        carritoVisible={carritoVisible}
        list={list}
        products={products}
      />
    </section>
  );
};
