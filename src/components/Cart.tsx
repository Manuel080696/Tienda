import CartEntry from "./CartEntry";

import { CartEntryProps } from "../models";

export function Cart({ list }: CartEntryProps) {
  return (
    <aside>
      Mi carro:
      <div>
        {list.map((product) => (
          <CartEntry
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </aside>
  );
}
