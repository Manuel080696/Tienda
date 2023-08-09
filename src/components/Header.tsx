import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useContext } from "react";
import useList from "../hooks/useListCart";
import { useCategoriesProducts } from "../hooks/useCategoriesProducts";
import { Cart } from "./Cart";
import { CategoriesContext } from "../context/categoriesContext";
import { GetAllProducts } from "../services/services.mts";

export const Header = () => {
  const navigate = useNavigate();
  const { add, setCarritoVisible, del, clear, carritoVisible, list } =
    useList();
  const { products } = useCategoriesProducts();
  const { setProducts } = useContext(CategoriesContext);

  const handleClick = async () => {
    navigate("/");
    setProducts(await GetAllProducts("/"));
  };

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
    <section className="home">
      <img src="/medium.svg" onClick={() => handleClick()} />
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
