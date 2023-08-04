import { OtherRelationatedProducts } from "../components/OtherRelationatedProducts";
import { SingleProduct } from "../components/SingleProduct";

import useList from "../hooks/useListCart";

export const SingleProductPage = () => {
  const { add } = useList();

  return (
    <>
      <SingleProduct add={add} />
      <OtherRelationatedProducts />
    </>
  );
};
