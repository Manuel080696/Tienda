import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartEntry from "./CartEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./ProductDetail.css";

const ProductsCart = () => {
  const { productCart, carTotalPrice, setShowCart } =
    useContext(ProductContext);

  return (
    <aside className="products-cart-container">
      <section className="products-cart-close-container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          style={{ color: "#000000" }}
          className="products-cart-close"
          onClick={() => setShowCart(false)}
        />
      </section>
      <h1 className="products-cart-title">My Car</h1>
      <ul>
        {productCart?.map((product) => (
          <li key={product.id} className="products-cart-item">
            <CartEntry product={product} />
          </li>
        ))}
      </ul>
      <section className="products-cart-total-container">
        <p className="products-cart-total-title">Total </p>
        <p className="products-cart-total">{`${carTotalPrice} €`}</p>
      </section>
      <button className="products-cart-button">Start order</button>
    </aside>
  );
};

export default ProductsCart;
