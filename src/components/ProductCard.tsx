import ReactStars from "react-rating-star-with-type";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 98ddc8307ea7163a2ca21c53aa64878c8e7382b6
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

  return (
    <article className="card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img"
        onClick={() => handleClickEvent()}
      />
      <section className="card-container">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-paragraph">{product.description}</p>
        <ReactStars
          value={product.rating.rate}
          isEdit={false}
          activeColors={["orange", "#FFCE00"]}
        />
        <p className="card-paragraph">{`Price: ${product.price}€`}</p>
<<<<<<< HEAD
        <button className="card-button" onClick={() => add(product)}>
          Shop Now
        </button>
=======

        <Link to={`/products/${product.id}`} className="card-button">
          Shop Now
        </Link>
>>>>>>> 98ddc8307ea7163a2ca21c53aa64878c8e7382b6
      </section>
    </article>
  );
};
