import { API } from "aws-amplify";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Status, UpdateOrderInput } from "../../src/API";
import { updateOrder } from "../../src/graphql/mutations";
import { currentOrderAtom, ProductListAtom } from "../../src/state/atoms";

const AddProduct = ({ close,product }: any) => {
  const [note, setNote] = useState("");
  const currentOrder = useRecoilValue(currentOrderAtom);
  const [orderProductAtom, setOrderProductAtom] =
    useRecoilState(ProductListAtom);

  const addNewProduct = async () => {
    if (currentOrder.id === undefined) return;
    if (currentOrder.products === null) {
      const newProduct: any = {
        id: product.id,
        notes: note,
        qty: "1",
        price: product.price,
        status: Status.ORDERED,
      };
      const createNewRelation = {
        id: currentOrder.id,
        products: [newProduct],
        status: Status.ORDERED,
      };

      const created: any = await API.graphql({
        query: updateOrder,
        variables: { input: createNewRelation },
      });

      setOrderProductAtom(created.data.updateOrder.products);
      return;
    }

    

    const checkIfThere: any = currentOrder.products?.filter(
      (prod) => prod?.id === product.id
    );

    if (checkIfThere?.length > 0) return;

    const newProduct: any = {
      id: product.id,
      notes:note,
      qty: "1",
      status: Status.ORDERED,
    };

    const newArray: any = currentOrder.products;

    const createNewRelation: UpdateOrderInput = {
      id: currentOrder.id,
      products: newProduct,
      status: Status.CREATED
    };

    const created: any = await API.graphql({
      query: updateOrder,
      variables: { input: createNewRelation },
    });
    setOrderProductAtom(created.data.updateOrder.products);

    close(false);
  };
  return (
    <>
      <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 select-none flex justify-center">
          <section className="shadow-2xl rounded-3xl bg-white">
            <div className="p-8 text-center sm:p-12">
              <p className="text-sm font-semibold tracking-widest text-primary-400 uppercase">
                Recuerda añadir alguna nota
              </p>

              {/* <h5 className="mt-6 text-3xl font-bold">
                Thanks for your purchase, we're getting it ready!
              </h5> */}

              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-white border rounded-md px-2 py-3 w-full pl-3 mt-5 focus:outline-primary-400"
                placeholder="Notas"
              />

              <a
                className="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl"
                onClick={addNewProduct}
              >
                Añadir Producto
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
