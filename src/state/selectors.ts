import { selector } from "recoil";
import { Order } from "../API";
import { currentOrderAtom, ordersAtom, ResProducts } from "./atoms";

export const SaveProductAtom = selector({
  key: "SaveProductAtom", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const order = get(currentOrderAtom);
  },
  set: ({ set, get }, newValue) => {
    const currentOrder = get(currentOrderAtom);

    // const otherOrders = orders.filter((order :Order) => order.id !== currentOrderId);
    // const filterOrder = orders.filter(
    //   (order:Order) => order.id === currentOrderId
    // )[0];

    console.warn(newValue, currentOrder.products);

    
    try {
      const editedOrder: Order = {
        ...currentOrder,
        // @ts-ignore: Unreachable code error
        products: currentOrder.products?.items.concat(newValue.product),
      };
  
      set(currentOrderAtom, editedOrder);
    } catch (error) {
      console.log(error)
    }
    
  },
});
