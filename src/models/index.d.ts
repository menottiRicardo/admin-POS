import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Status {
  CREATED = "CREATED",
  ORDERED = "ORDERED",
  PREPARED = "PREPARED",
  PAID = "PAID",
  CANCELLED = "CANCELLED"
}

export declare class ProductsOrdered {
  readonly id?: string | null;
  readonly notes?: string | null;
  readonly qty?: number | null;
  readonly price?: number | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly name?: string | null;
  readonly category?: string | null;
  readonly remaing?: number | null;
  constructor(init: ModelInit<ProductsOrdered>);
}

type DiscountsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductIngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Discounts {
  readonly id: string;
  readonly nam?: string | null;
  readonly code?: string | null;
  readonly percentage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Discounts, DiscountsMetaData>);
  static copyOf(source: Discounts, mutator: (draft: MutableModel<Discounts, DiscountsMetaData>) => MutableModel<Discounts, DiscountsMetaData> | void): Discounts;
}

export declare class Ingredient {
  readonly id: string;
  readonly name?: string | null;
  readonly qty?: number | null;
  readonly products?: (ProductIngredient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ingredient, IngredientMetaData>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}

export declare class Product {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly categoryID: string;
  readonly Ingredients?: (ProductIngredient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Category {
  readonly id: string;
  readonly name?: string | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Table {
  readonly id: string;
  readonly full?: boolean | null;
  readonly number?: number | null;
  readonly seats?: string | null;
  readonly Orders?: (Order | null)[] | null;
  readonly currentOrder?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Table, TableMetaData>);
  static copyOf(source: Table, mutator: (draft: MutableModel<Table, TableMetaData>) => MutableModel<Table, TableMetaData> | void): Table;
}

export declare class Order {
  readonly id: string;
  readonly name?: string | null;
  readonly total?: number | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly tableID: string;
  readonly products?: (ProductsOrdered | null)[] | null;
  readonly paymentId?: string | null;
  readonly mesero?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class ProductIngredient {
  readonly id: string;
  readonly ingredient: Ingredient;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductIngredient, ProductIngredientMetaData>);
  static copyOf(source: ProductIngredient, mutator: (draft: MutableModel<ProductIngredient, ProductIngredientMetaData>) => MutableModel<ProductIngredient, ProductIngredientMetaData> | void): ProductIngredient;
}