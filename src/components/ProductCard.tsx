import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ProductCard.css";
import { Product } from "../models";

export const ProductCard = ({
  product,
  add,
}: {
  add: (entry: Product) => Product[];
  product: Product;
}) => {
  const navigate = useNavigate();
  const handleClickEvent = () => {
    navigate(`/products/${product.id}`);
  };

  const [visiblecarrito, setVisiblecarrito] = useState<boolean>(false);

  const handleEnterEvent = () => {
    setVisiblecarrito(true);
  };
  const handleLeaveEvent = () => {
    setVisiblecarrito(false);
  };

  return (
    <article className="card">
      <section className="imgCardShop">
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
          onClick={() => handleClickEvent()}
          onMouseEnter={() => handleEnterEvent()}
          onMouseLeave={() => handleLeaveEvent()}
        />
        {visiblecarrito && (
          <button className="card-button" onClick={() => add(product)}>
            Shop Now
          </button>
        )}
      </section>

      <section className="card-container">
        <p className="card-title">{product.title}</p>
        <p className="card-price">{product.price}$</p>
      </section>
    </article>
  );
};
