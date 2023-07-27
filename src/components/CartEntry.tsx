import { Product } from "../models";

function CartEntry(product: Product) {
  return (
    <div key={product.id} className="cart-entry">
      <img src={product.image} />
      <span>{product.title}</span>
    </div>
  );
}

export default CartEntry;
