export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  unidades?: number;
};

export type Rating = {
  rate: number;
  count: number;
};

export type ProductEntry = {
  add: Product[];
};

export interface ProductMap extends Product {
  add?: { add: (entry: Product) => Product[] };
}

export interface CartEntryProps extends Product {
  list: Product[];
}
