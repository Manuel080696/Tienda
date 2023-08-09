import "./ProductCard.css";
import ReactStars from "react-rating-star-with-type";
import useSingleProduct from "../hooks/useSingleProduct.ts";
import { Product } from "../models/index.ts";
import { CartContext } from "../context/cartContext.tsx";
import { useContext } from "react";

export const SingleProduct = ({
  add,
}: {
  add: (entry: Product) => Product[];
}) => {
  const { product } = useSingleProduct();
  const { list } = useContext(CartContext);

  const productModify = product && list.find((p) => p.id === product.id);

  return (
    <>
      {product === null ? (
        <h2>Cargando...</h2>
      ) : (
        <article className="card-single">
          <section className="imgCardShop-single">
            <img
              src={product.image}
              alt={product.title}
              className="card-img-single"
            />
          </section>

          <section className="card-container-single">
            <ul>
              <li>
                <h2 className="card-title-single">{product.title}</h2>
                <ReactStars
                  value={product.rating.rate}
                  isEdit={false}
                  activeColors={["orange", "#FFCE00"]}
                  classNames="card-starts"
                />
                <p className="card-paragraph">{product.description}</p>
              </li>
              <li>
                <p className="card-price-single">{product.price}$</p>
                <button
                  className="card-button-single"
                  onClick={() => {
                    list.find((p) => p.id === product.id)
                      ? productModify && add(productModify)
                      : add(product);
                  }}
                >
                  Shop Now
                </button>
              </li>
            </ul>
          </section>
        </article>
      )}
    </>
  );
};
