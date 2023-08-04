import ReactStars from "react-rating-star-with-type";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./ProductCard.css";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

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
  const [favorite, setFavorite] = useState(true);
  const [addfavorite, setAddfavorite] = useState(false);
  const { favorites, setFavorites } = useContext(ProductContext);
  const handleFavorite = () => {
    setFavorite(!favorite);
    console.log(favorite);
    console.log(product);

    if (favorite) {
      setFavorites([product, ...favorites]);
      setAddfavorite(true);
      console.log(favorites);
    } else {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
      setAddfavorite(false);
      console.log(favorites);
    }
  };
  return (
    <article className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <section className="card-container">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-paragraph">{product.description}</p>
        <div className="card-info">
          <div className="card-rating">
            <ReactStars
              value={product.rating.rate}
              isEdit={false}
              activeColors={["orange", "#FFCE00"]}
            />
            <p className="card-paragraph">{`Price: ${product.price}€`}</p>
          </div>
          <div className="card-heart">
            {addfavorite ? (
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#CC081E" }}
                onClick={handleFavorite}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#000000" }}
                onClick={handleFavorite}
              />
            )}
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="card-button">
          Shop Now
        </Link>
      </section>
    </article>
  );
};
