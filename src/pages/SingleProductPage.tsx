import { SingleProduct } from "../components/SingleProduct";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
  let { id } = useParams();

  const idProduct = parseInt(id as string);

  return <SingleProduct id={idProduct} />;
};
