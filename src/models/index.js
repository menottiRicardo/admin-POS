// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "CREATED": "CREATED",
  "ORDERED": "ORDERED",
  "PREPARED": "PREPARED",
  "PAID": "PAID",
  "CANCELLED": "CANCELLED"
};

const { Ingredient, Product, Category, Table, Order, ProductIngredient, ProductsOrdered } = initSchema(schema);

export {
  Ingredient,
  Product,
  Category,
  Table,
  Order,
  ProductIngredient,
  Status,
  ProductsOrdered
};