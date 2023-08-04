import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../services/types";
import "./CartEntry.css";

type CartEntryProps = {
  product: Product;
};

const CartEntry = ({ product }: CartEntryProps) => {
  const {
    productCart,
    setProductCart,
    carCounter,
    setCarCounter,
    setShowCart,
    carTotalPrice,
    setCarTotalPrice,
  } = useContext(ProductContext);
  const HandleDeteleCart = () => {
    if (product.rating.count === 1) {
      const newCart = productCart.filter((item) => item.id !== product.id);
      setProductCart(newCart);
      setCarCounter(carCounter - 1);
      const totalPrice = parseFloat((carTotalPrice - product.price).toFixed(2));
      setCarTotalPrice(totalPrice);
      if (newCart.length === 0) {
        setShowCart(false);
        setCarTotalPrice(0);
      }
    } else {
      setCarCounter(carCounter - 1);
      product.rating.count = product.rating.count - 1;
      const totalPrice = parseFloat((carTotalPrice - product.price).toFixed(2));
      setCarTotalPrice(totalPrice);
    }
  };

  return (
    <section className="cart-container">
      <img src={product.image} alt={product.title} className="cart-image" />
      <p className="cart-title">{product.title}</p>
      <p className="cart-price">{`Price: €${product.price}`}</p>
      <p className="cart-amount">Amount: {product.rating.count}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        size="lg"
        style={{ color: "black" }}
        className="cart-trash"
        onClick={HandleDeteleCart}
      />
    </section>
  );
};

export default CartEntry;
