import useFetch from "fetch-suspense";

export const useGetAllProducts = () => {
  const response = useFetch("https://fakestoreapi.com/products");
  return response;
};

export const useGetSingleProduct = (id: number) => {
  useFetch(`https://fakestoreapi.com/products/${id}`);
};

export const useGetCartProducts = () => {
  useFetch("https://fakestoreapi.com/carts");
};

export const useGetAllUsers = () => {
  useFetch("https://fakestoreapi.com/users");
};

export const useGetSingleUser = (id: number) => {
  useFetch(`https://fakestoreapi.com/users/${id}`);
};
