import { useNavigate } from "react-router-dom";

import "./ProductCard.css";
import { Product } from "../models";

export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const handleClickEvent = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <article className="card">
      <section className="imgCardShop">
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
          onClick={() => handleClickEvent()}
        />
      </section>

      <section className="card-container">
        <p className="card-title">{product.title}</p>
        <p className="card-price">{product.price}$</p>
      </section>
    </article>
  );
};
