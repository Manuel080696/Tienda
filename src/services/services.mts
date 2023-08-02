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

export const GetLogin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const data = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const jsonData = await data.json();
  return jsonData;
};

export const GetRegister = async () => {
  const data = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: "maxi@gmail.com",
      username: "mvilarino",
      password: "Diego2023",
      name: {
        firstname: "Maxi",
        lastname: "Vilariño",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    }),
  });

  const jsonData = await data.json();
  return jsonData;
};
