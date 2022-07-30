import { atom } from "recoil";
import { Order, Product } from "../API";
import { ProductsOrdered } from "../models";
export type orderType = {
  name: string;
  id: number;
  products: string[];
};
export const ordersAtom = atom({
  key: "orders",
  default: [] as Order[],
});

export const OrderProducstAtom = atom({
  key: "OrderProducstAtom",
  default: [] as ProductsOrdered[]
})

export const ProductListAtom = atom({
  key: "ProductListAtom",
  default: [] as ProductsOrdered[]
});

export const currentOrderAtom = atom({
  key: "currentOrder",
  default: {} as Order,
});

export const ResProducts = atom({
  key: "ResProducts",
  default: [] as Product[],
});
