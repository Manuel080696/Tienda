type Product = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type Rating = {
  rate: number;
  count: number;
};

export const ProductCard = (product: Product) => {
  const Rating = require("react-rating");

  return (
    <section>
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Rating
        start={0}
        stop={5}
        step={1}
        fractions={1}
        initialRating={product.rating.rate}
        readonly={true}
        emptySymbol={
          <img src="assets/images/star-empty.png" className="icon" />
        }
        fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
      />
    </section>
  );
};
