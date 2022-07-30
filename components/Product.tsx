import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Product as ProductType,
  ProductsOrdered,
  UpdateOrderInput,
} from "../src/API";
import { updateOrder } from "../src/graphql/mutations";

import { currentOrderAtom, OrderProducstAtom } from "../src/state/atoms";
import { SaveProductAtom } from "../src/state/selectors";
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
  const currentOrder = useRecoilValue(currentOrderAtom);
  const [productImage, setProductImage] = useState(image);
  const [orderProductAtom, setOrderProductAtom] =
    useRecoilState(OrderProducstAtom);
  const saveNewProduct = useSetRecoilState(SaveProductAtom);

  const open = () => {
    if (add === false) return setAdd(true);
  };

  const addNewProduct = async () => {
    if (currentOrder.id === undefined) return;
    if (currentOrder.products === null) {
      const newProduct: any = {
        id: product.id,
        notes: "",
        qty: "1",
      };
      const createNewRelation = {
        id: currentOrder.id,
        products: [newProduct],
      };

      const created: any = await API.graphql({
        query: updateOrder,
        variables: { input: createNewRelation },
      });

      return;
    }

    const checkIfThere: any = currentOrder.products?.filter(
      (prod) => prod?.id === product.id
    );

    if (checkIfThere?.length > 0) return;

    const newProduct: any = {
      id: product.id,
      notes: "",
      qty: "1",
    };

    const newArray: any = currentOrder.products;

    const createNewRelation: UpdateOrderInput = {
      id: currentOrder.id,
      products: newProduct,
    };

    const created: any = await API.graphql({
      query: updateOrder,
      variables: { input: createNewRelation },
    });

    setAdd(false);
  };

  return (
    <div
      className={`bg-white shadow-md rounded-md w-48 my-3 ${
        add === false ? "max-h-52" : ""
      }`}
      onClick={open}
    >
      {/* image */}
      {/* {image !== "" ? (
        <div className="h-28 w-48 bg-gray-400 rounded-t-md relative">
          <img
            src={productImage ?? ""}
            className="rounded-t-md"
            style={{ objectFit: "fill", width: "20rem", height: "7rem" }}
          />
        </div>
      ) : ( */}
      <div className="h-28 w-48 bg-gray-400 rounded-t-md relative"></div>
      {/* )} */}

      {/* )} */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>
        <p className="font-bold text-xl">${price}</p>

        {add && (
          <div className="relative">
            {/* select size */}

            <button
              className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50"
              onClick={addNewProduct}
            >
              Agregar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
