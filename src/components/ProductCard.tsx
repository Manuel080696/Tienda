import ReactStars from "react-rating-star-with-type";
import { Link } from "react-router-dom";

import "./ProductCard.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
};

type Rate = {
  rate: number;
  count: number;
};

export const ProductCard = (product: Product) => {
  return (
    <article className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <section className="card-container">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-paragraph">{product.description}</p>
        <ReactStars
          value={product.rating.rate}
          isEdit={false}
          activeColors={["orange", "#FFCE00"]}
        />
        <p className="card-paragraph">{`Price: ${product.price}€`}</p>
        <Link to={`/product/${product.id}`} className="card-button">
          Shop Now
        </Link>
      </section>
    </article>
  );
};
