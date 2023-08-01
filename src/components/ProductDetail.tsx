import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductsCart from "./ProductsCart";
import "./ProductDetail.css";
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

type Params = {
  id: string;
};

type Props = {
  product: Product;
};

const ProductDetail = () => {
  const { id } = useParams() as Params;
  const { product } = useSingleProduct(id) as Props;
  const {
    productCart,
    setProductCart,
    showCart,
    setShowCart,
    carCounter,
    setCarCounter,
    carTotalPrice,
    setCarTotalPrice,
  } = useContext(ProductContext);

  const handleClick = () => {
    if (!productCart.includes(product)) {
      setProductCart([...productCart, product]);
      setShowCart(true);
      setCarCounter(carCounter + 1);
      product.rating.count = 1;
      setCarTotalPrice(parseFloat((carTotalPrice + product.price).toFixed(2)));
    } else {
      product.rating.count += 1;
      setCarTotalPrice(parseFloat((carTotalPrice + product.price).toFixed(2)));
      setCarCounter(carCounter + 1);
    }
  };

  return (
    <section className="detail-container">
      <section className="detail-card">
        <img src={product.image} alt={product.title} className="detail-image" />
        <section className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <h3 className="detail-paragraph">{`Category: ${product.category}`}</h3>
          <p className="detail-description">{product.description}</p>
          <h3 className="detail-paragraph">{`Price: ${product.price} €`}</h3>
          <button className="detail-button" onClick={handleClick}>
            Add to cart
          </button>
        </section>
      </section>
      {showCart && <ProductsCart />}
    </section>
  );
};

export default ProductDetail;
