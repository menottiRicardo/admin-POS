import {  Storage } from "aws-amplify";
import { useEffect, useState } from "react";

import {
  Product as ProductType,
} from "../src/API";

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
  
  const [productImage, setProductImage] = useState(image);
  

  const open = () => {
    setAdd(true);
  };

  

  async function setPhoto() {
    const s3Image = await Storage.get(image as string);
    const req = new Request(s3Image);
    setProductImage(req.url);
  }

  useEffect(() => {
    setPhoto();
  }, [image]);

  return (
    <div
      className={`bg-white shadow-md rounded-md w-48 my-3 ${
        add === false ? "max-h-52" : ""
      }`}
      onClick={open}
    >
      {/* image */}
      {image !== "" ? (
        <div className="h-28 w-48 bg-gray-400 rounded-t-md relative">
          <img
            src={productImage ?? ""}
            className="rounded-t-md"
            style={{ objectFit: "fill", width: "20rem", height: "7rem" }}
          />
        </div>
      ) : (
        <div className="h-28 w-48 bg-gray-400 rounded-t-md relative"></div>
      )}

      {/* )} */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>
        <p className="font-bold text-xl">${price}</p>

        {add && (
          <AddProduct close={setAdd} product={product}/>
        )}
      </div>
    </div>
  );
};

export default Product;
