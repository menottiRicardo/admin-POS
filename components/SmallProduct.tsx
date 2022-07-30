import { API, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { UpdateOrderInput } from "../src/API";
import { updateOrder } from "../src/graphql/mutations";
import { currentOrderAtom, ResProducts } from "../src/state/atoms";

const SmallProduct = ({
  id,
  qty,
  notes,
}: {
  id: string;
  qty: string;
  notes: string;
}) => {
  const products = useRecoilValue(ResProducts);
  const [quantity, setQuantity] = useState(qty);
  const currentOrder = useRecoilValue(currentOrderAtom);
  const [product, setProduct] = useState(
    products.filter((prod) => prod.id === id)[0]
  );

  const setLess = () => {
    if (parseInt(quantity) === 0) return;
    const newQty = parseInt(quantity) - 1;
    setQuantity(newQty.toString());
  };

  const addOne = () => {
    const newQty = parseInt(quantity) + 1;
    setQuantity(newQty.toString());
  };

  useEffect(() => {
    if (quantity === qty) return;

    const newProductList = currentOrder.products?.map((prod) => {
      if (prod?.id !== product.id) return "hola";
      const updated = {
        ...prod,
        qty: quantity,
      };
      return updated;
    });

    const newTable: UpdateOrderInput = {
      id: currentOrder.id,
      products,
    };
    console.log(currentOrder.products, product, newProductList);

    // const created: any = API.graphql({
    //   query: updateOrder,
    //   variables: { input: newTable },
    // });
  }, [quantity]);

  return (
    <div className="bg-white rounded-md flex my-2 items-center px-2 py-4">
      <div className="ml-2 flex justify-between w-full items-center">
        <p className="font-medium text-lg text-primary-400 uppercase">
          {product.name}
        </p>
        <div className="p-1 flex items-center">
          <p
            className="bg-primary-500 px-2 rounded-md text-white font-bold text-xl h-10 w-10 flex items-center justify-center"
            onClick={setLess}
          >
            -
          </p>
          <p className="mx-4">{quantity}</p>
          <p
            className="bg-primary-600 px-2 rounded-md text-white font-bold text-xl h-10 w-10 flex items-center justify-center"
            onClick={addOne}
          >
            +
          </p>
        </div>
        <p className="text-primary-600 font-medium pr-2">${product.price}</p>
      </div>
    </div>
  );
};

export default SmallProduct;
