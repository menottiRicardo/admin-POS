import { API, DataStore } from "aws-amplify";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CreateOrderInput,
  ModelIDInput,
  Order as OrderType,
  Status,
  UpdateOrderInput,
} from "../src/API";
import { createOrder, updateOrder } from "../src/graphql/mutations";
import { listOrders } from "../src/graphql/queries";
import { Order, Product, ProductsOrdered } from "../src/models";
import {
  currentOrderAtom,
  ordersAtom,
  orderType,
  ProductListAtom,
} from "../src/state/atoms";

import SmallProduct from "./SmallProduct";

const Checkout = () => {
  const [orders, setOrders] = useRecoilState(ordersAtom);
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderAtom);
  const [orderProducts, setOrderProducts] = useRecoilState(ProductListAtom);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const { tableId, tableNumber } = router.query;

  const addOrder = async () => {
    const newOrder: CreateOrderInput = {
      name,
      tableID: tableId as string,
      status: Status.CREATED,
      total: 0,
    };

    const created: any = await API.graphql({
      query: createOrder,
      variables: { input: newOrder },
    });

    const orderCreated = created.data.createOrder;
    setOrders([...orders, orderCreated]);
    setOpen(false);
    setName("");
  };

  const getProducts = async (order: OrderType) => {
    setCurrentOrder(order);
    setOrderProducts(order.products as ProductsOrdered[]);
  };

  useEffect(() => {
    const orderSubscription = DataStore.observeQuery(Order, (o) =>
      o.tableID("eq", tableId as string)
    ).subscribe((msg) => {
      console.log(msg.items)
      setOrders(msg.items as OrderType[]);
    });

    return () => {
      orderSubscription.unsubscribe();
    };
  }, [tableId]);

  const ordenar = async () => {
    const newOrder: UpdateOrderInput = {
      id: currentOrder.id,
      status: Status.ORDERED,
    };

    const rawOrder: any = await API.graphql({
      query: updateOrder,
      variables: { input: newOrder },
    });

    const orderUpdated = rawOrder.data.updateOrder;
    setCurrentOrder(orderUpdated);
  };

  const renderButton: () => JSX.Element = () => {
    switch (currentOrder.status) {
      case Status.CREATED:
        return (
          <button
            className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50"
            onClick={ordenar}
          >
            Ordenar
          </button>
        );

      case Status.ORDERED:
        return (
          <button className="animate-pulse bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Preparando
          </button>
        );

      case Status.PREPARED:
        return (
          <button className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Preparada
          </button>
        );

      default:
        return (
          <button className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Seleccione una Orden
          </button>
        );
    }
  };

  return (
    <div>
      <p className="font-bold text-xl mt-4">Mesa #{tableNumber}</p>
      <div
        onClick={() => setOpen(true)}
        className="border-2 border-dashed bg-white px-3 py-2 rounded-lg my-2 border-primary-500 text-center font-medium"
      >
        Anadir Nueva Orden
      </div>
      {open && (
        <div className="flex items-center justify-between">
          <input
            placeholder="Nombre"
            value={name}
            className="bg-white rounded-lg py-2 px-3 outline-none w-10/12"
            onChange={(e) => setName(e.target.value)}
          />
          <BiBookAdd className="text-2xl mr-2" onClick={addOrder} />
        </div>
      )}

      {orders && (
        <div className="bg-white px-3 py-2 rounded-md mt-4 h-36 overflow-y-auto">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`border-b my-2 p-2 ${
                currentOrder?.id === order.id
                  ? "font-bold bg-primary-400 rounded-md text-white"
                  : ""
              }`}
              onClick={() => getProducts(order)}
            >
              {order.name}
            </div>
          ))}
        </div>
      )}

      <div className="overflow-y-auto h-[30rem] mt-2">
        {orderProducts &&
          orderProducts.map((product: ProductsOrdered) => (
            <SmallProduct
              key={product.id}
              id={product.id as string}
              notes={product.notes as string}
              qty={product.qty as string}
            ></SmallProduct>
          ))}
      </div>

      <div className="">{renderButton()}</div>
    </div>
  );
};

export default Checkout;
