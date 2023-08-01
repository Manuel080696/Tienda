type Product = {
  id: number;
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

export const GetAllProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const jsonData = (await data.json()) as Product[];
  return jsonData;
};

export const GetSingleProduct = async (id: number) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const jsonData = (await data.json()) as Product;
  return jsonData;
};

export const GetSingleCategory = async (category: string) => {
  const data = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const jsonData = (await data.json()) as Product[];
  return jsonData;
};
