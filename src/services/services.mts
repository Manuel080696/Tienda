import useFetch from "fetch-suspense";

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
  const jsonData = (await data.json()) as Product[];
  // console.log(jsonData);
  return jsonData;
};

export const GetCartProducts = () => {
  useFetch("https://fakestoreapi.com/carts");
};

export const GetAllUsers = () => {
  useFetch("https://fakestoreapi.com/users");
};

export const useGetSingleUser = (id: number) => {
  useFetch(`https://fakestoreapi.com/users/${id}`);
};
