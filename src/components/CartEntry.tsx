import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./CartEntry.css";
import { parse } from "path";

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

type CartEntryProps = {
  product: Product;
};

const CartEntry = ({ product }: CartEntryProps) => {
  const {
    productCart,
    setProductCart,
    setCarCounter,
    setShowCart,
    carTotalPrice,
    setCarTotalPrice,
  } = useContext(ProductContext);
  const HandleDeteleCart = () => {
    const newCart = productCart.filter((item) => item.id !== product.id);
    setProductCart(newCart);
    setCarCounter(newCart.length);
    const totalPrice = parseFloat((carTotalPrice - product.price).toFixed(2));
    setCarTotalPrice(totalPrice);
    if (newCart.length === 0) {
      setShowCart(false);
      setCarTotalPrice(0);
    }
  };

  return (
    <section className="cart-container">
      <img src={product.image} alt={product.title} className="cart-image" />
      <p className="cart-title">{product.title}</p>
      <p className="cart-price">{`Price: €${product.price}`}</p>
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
