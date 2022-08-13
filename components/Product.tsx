import { useEffect, useState } from "react";

import { Product as ProductType } from "../src/API";

import AddProduct from "./Modals/AddProduct";
interface ProductProps {
  product: ProductType;
}

export type Flavor = {
  id: string;
  name: string;
};

const Product = ({ product }: ProductProps) => {
  const { price, name, description, image } = product;
  const [add, setAdd] = useState(false);

  const open = () => {
    setAdd(true);
  };

  return (
    <div className={`bg-white shadow-md rounded-md w-48 my-3`} onClick={open}>
      {/* image */}

      {/* )} */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">{description}</p>
          <p className="font-bold text-xl">${price}</p>
        </div>

        {add && <AddProduct close={setAdd} product={product} />}
      </div>
    </div>
  );
};

export default Product;
