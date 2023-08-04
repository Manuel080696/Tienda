import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../models";
import "./Cart.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function CartEntry({
  product,
  del,
  add,
  clear,
}: {
  del: (entry: Product) => Product[];
  product: Product;
  add: (entry: Product) => void;
  clear: (entry: Product) => void;
}) {
  const totalPrice = product.rating.count * product.price;

  return (
    <div key={product.id} className="cart-entry">
      <h3 className="titleEntry">{product.title}</h3>

      <span className="cart-span">
        <FontAwesomeIcon icon={faXmark} onClick={() => clear(product)} />
        <img src={product.image} className="cart-img" />

        <span className="cart-span-priceTotal">
          <p>Unit price:{product.price}$</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            rotation={180}
            style={{ color: "#000000" }}
            onClick={() => add(product)}
          />
          <p className="productCount">{product.rating.count}</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ color: "#000000" }}
            onClick={() => del(product)}
          />
          <p>
            <strong>Total:</strong> {totalPrice}$
          </p>
        </span>
      </span>
    </div>
  );
}

export default CartEntry;
