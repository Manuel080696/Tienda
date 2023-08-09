import CartEntry from "./CartEntry";
import "./Cart.css";
import { Product } from "../models";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Cart({
  del,
  setCarritoVisible,
  carritoVisible,
  list,
  add,
  clear,
}: {
  del: (entry: Product) => Product[];
  setCarritoVisible: React.Dispatch<React.SetStateAction<boolean>>;
  carritoVisible: boolean;
  list: Product[];
  add: (entry: Product) => void;
  clear: (entry: Product) => void;
}) {
  const handleClick = () => {
    if (list.length === 0) {
      setCarritoVisible(false);
    } else {
      setCarritoVisible(!carritoVisible);
    }
  };

  return (
    <aside
      className={
        !carritoVisible || list.length === 0 ? "carrito" : "carrito-visible"
      }
    >
      <FontAwesomeIcon
        className="cartIcon"
        icon={faCartShopping}
        size="2xl"
        style={{ color: "black" }}
        onClick={() => handleClick()}
      />

      <div className={carritoVisible ? "active" : "hidden"}>
        {list?.map((product: Product) => (
          <ul key={product.id}>
            <CartEntry product={product} del={del} add={add} clear={clear} />
          </ul>
        ))}
      </div>
    </aside>
  );
}
