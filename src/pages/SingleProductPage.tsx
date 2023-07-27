import { SingleProduct } from "../components/SingleProduct";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
  const { id } = useParams();

  const idProduct = parseInt(id as string);

  return (
    <>
      {idProduct !== undefined ? (
        <SingleProduct id={idProduct} />
      ) : (
        <h4>No se ha encontrado el artículo</h4>
      )}
    </>
  );
};
