/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateIngredientInput = {
  id?: string | null,
  name?: string | null,
  qty?: number | null,
  _version?: number | null,
};

export type ModelIngredientConditionInput = {
  name?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelIngredientConditionInput | null > | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  not?: ModelIngredientConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id: string,
  name?: string | null,
  qty?: number | null,
  products?: ModelProductIngredientConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductIngredientConnection = {
  __typename: "ModelProductIngredientConnection",
  items:  Array<ProductIngredient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProductIngredient = {
  __typename: "ProductIngredient",
  id: string,
  ingredientID: string,
  productID: string,
  ingredient: Ingredient,
  product: Product,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Product = {
  __typename: "Product",
  id: string,
  name?: string | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  categoryID: string,
  Ingredients?: ModelProductIngredientConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateIngredientInput = {
  id: string,
  name?: string | null,
  qty?: number | null,
  _version?: number | null,
};

export type DeleteIngredientInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name?: string | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name?: string | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  categoryID: string,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  categoryID?: string | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateTableInput = {
  id?: string | null,
  full?: boolean | null,
  number?: number | null,
  seats?: string | null,
  _version?: number | null,
};

export type ModelTableConditionInput = {
  full?: ModelBooleanInput | null,
  number?: ModelIntInput | null,
  seats?: ModelStringInput | null,
  and?: Array< ModelTableConditionInput | null > | null,
  or?: Array< ModelTableConditionInput | null > | null,
  not?: ModelTableConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Table = {
  __typename: "Table",
  id: string,
  full?: boolean | null,
  number?: number | null,
  seats?: string | null,
  Orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  name?: string | null,
  total?: number | null,
  status?: Status | null,
  tableID: string,
  products?:  Array<ProductsOrdered | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum Status {
  CREATED = "CREATED",
  ORDERED = "ORDERED",
  PREPARED = "PREPARED",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}


export type ProductsOrdered = {
  __typename: "ProductsOrdered",
  id?: string | null,
  notes?: string | null,
  qty?: string | null,
  price?: number | null,
  status?: Status | null,
};

export type UpdateTableInput = {
  id: string,
  full?: boolean | null,
  number?: number | null,
  seats?: string | null,
  _version?: number | null,
};

export type DeleteTableInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  name?: string | null,
  total?: number | null,
  status?: Status | null,
  tableID: string,
  products?: Array< ProductsOrderedInput | null > | null,
  _version?: number | null,
};

export type ProductsOrderedInput = {
  id?: string | null,
  notes?: string | null,
  qty?: string | null,
  price?: number | null,
  status?: Status | null,
};

export type ModelOrderConditionInput = {
  name?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  tableID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateOrderInput = {
  id: string,
  name?: string | null,
  total?: number | null,
  status?: Status | null,
  tableID?: string | null,
  products?: Array< ProductsOrderedInput | null > | null,
  _version?: number | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductIngredientInput = {
  id?: string | null,
  ingredientID: string,
  productID: string,
  _version?: number | null,
};

export type ModelProductIngredientConditionInput = {
  ingredientID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelProductIngredientConditionInput | null > | null,
  or?: Array< ModelProductIngredientConditionInput | null > | null,
  not?: ModelProductIngredientConditionInput | null,
};

export type UpdateProductIngredientInput = {
  id: string,
  ingredientID?: string | null,
  productID?: string | null,
  _version?: number | null,
};

export type DeleteProductIngredientInput = {
  id: string,
  _version?: number | null,
};

export type ModelIngredientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  and?: Array< ModelIngredientFilterInput | null > | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  not?: ModelIngredientFilterInput | null,
};

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items:  Array<Ingredient | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelTableFilterInput = {
  id?: ModelIDInput | null,
  full?: ModelBooleanInput | null,
  number?: ModelIntInput | null,
  seats?: ModelStringInput | null,
  and?: Array< ModelTableFilterInput | null > | null,
  or?: Array< ModelTableFilterInput | null > | null,
  not?: ModelTableFilterInput | null,
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection",
  items:  Array<Table | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  status?: ModelStatusInput | null,
  tableID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelProductIngredientFilterInput = {
  id?: ModelIDInput | null,
  ingredientID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelProductIngredientFilterInput | null > | null,
  or?: Array< ModelProductIngredientFilterInput | null > | null,
  not?: ModelProductIngredientFilterInput | null,
};

export type ModelSubscriptionIngredientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  qty?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
  or?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTableFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  full?: ModelSubscriptionBooleanInput | null,
  number?: ModelSubscriptionIntInput | null,
  seats?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTableFilterInput | null > | null,
  or?: Array< ModelSubscriptionTableFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  tableID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionProductIngredientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  ingredientID?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductIngredientFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductIngredientFilterInput | null > | null,
};

export type CreateIngredientMutationVariables = {
  input: CreateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  input: UpdateIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  input: DeleteIngredientInput,
  condition?: ModelIngredientConditionInput | null,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTableMutationVariables = {
  input: CreateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type CreateTableMutation = {
  createTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTableMutationVariables = {
  input: UpdateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type UpdateTableMutation = {
  updateTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTableMutationVariables = {
  input: DeleteTableInput,
  condition?: ModelTableConditionInput | null,
};

export type DeleteTableMutation = {
  deleteTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateProductIngredientMutationVariables = {
  input: CreateProductIngredientInput,
  condition?: ModelProductIngredientConditionInput | null,
};

export type CreateProductIngredientMutation = {
  createProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductIngredientMutationVariables = {
  input: UpdateProductIngredientInput,
  condition?: ModelProductIngredientConditionInput | null,
};

export type UpdateProductIngredientMutation = {
  updateProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductIngredientMutationVariables = {
  input: DeleteProductIngredientInput,
  condition?: ModelProductIngredientConditionInput | null,
};

export type DeleteProductIngredientMutation = {
  deleteProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncIngredientsQuery = {
  syncIngredients?:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name?: string | null,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTableQueryVariables = {
  id: string,
};

export type GetTableQuery = {
  getTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTablesQueryVariables = {
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTablesQuery = {
  listTables?:  {
    __typename: "ModelTableConnection",
    items:  Array< {
      __typename: "Table",
      id: string,
      full?: boolean | null,
      number?: number | null,
      seats?: string | null,
      Orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          name?: string | null,
          total?: number | null,
          status?: Status | null,
          tableID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTablesQueryVariables = {
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTablesQuery = {
  syncTables?:  {
    __typename: "ModelTableConnection",
    items:  Array< {
      __typename: "Table",
      id: string,
      full?: boolean | null,
      number?: number | null,
      seats?: string | null,
      Orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          name?: string | null,
          total?: number | null,
          status?: Status | null,
          tableID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      name?: string | null,
      total?: number | null,
      status?: Status | null,
      tableID: string,
      products?:  Array< {
        __typename: "ProductsOrdered",
        id?: string | null,
        notes?: string | null,
        qty?: string | null,
        price?: number | null,
        status?: Status | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      name?: string | null,
      total?: number | null,
      status?: Status | null,
      tableID: string,
      products?:  Array< {
        __typename: "ProductsOrdered",
        id?: string | null,
        notes?: string | null,
        qty?: string | null,
        price?: number | null,
        status?: Status | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductIngredientQueryVariables = {
  id: string,
};

export type GetProductIngredientQuery = {
  getProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductIngredientsQueryVariables = {
  filter?: ModelProductIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductIngredientsQuery = {
  listProductIngredients?:  {
    __typename: "ModelProductIngredientConnection",
    items:  Array< {
      __typename: "ProductIngredient",
      id: string,
      ingredientID: string,
      productID: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name?: string | null,
        qty?: number | null,
        products?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductIngredientsQueryVariables = {
  filter?: ModelProductIngredientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductIngredientsQuery = {
  syncProductIngredients?:  {
    __typename: "ModelProductIngredientConnection",
    items:  Array< {
      __typename: "ProductIngredient",
      id: string,
      ingredientID: string,
      productID: string,
      ingredient:  {
        __typename: "Ingredient",
        id: string,
        name?: string | null,
        qty?: number | null,
        products?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      product:  {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient?:  {
    __typename: "Ingredient",
    id: string,
    name?: string | null,
    qty?: number | null,
    products?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        categoryID: string,
        Ingredients?:  {
          __typename: "ModelProductIngredientConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name?: string | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    categoryID: string,
    Ingredients?:  {
      __typename: "ModelProductIngredientConnection",
      items:  Array< {
        __typename: "ProductIngredient",
        id: string,
        ingredientID: string,
        productID: string,
        ingredient:  {
          __typename: "Ingredient",
          id: string,
          name?: string | null,
          qty?: number | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        product:  {
          __typename: "Product",
          id: string,
          name?: string | null,
          price?: number | null,
          image?: string | null,
          description?: string | null,
          categoryID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        },
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
};

export type OnCreateTableSubscription = {
  onCreateTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
};

export type OnUpdateTableSubscription = {
  onUpdateTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTableSubscriptionVariables = {
  filter?: ModelSubscriptionTableFilterInput | null,
};

export type OnDeleteTableSubscription = {
  onDeleteTable?:  {
    __typename: "Table",
    id: string,
    full?: boolean | null,
    number?: number | null,
    seats?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        name?: string | null,
        total?: number | null,
        status?: Status | null,
        tableID: string,
        products?:  Array< {
          __typename: "ProductsOrdered",
          id?: string | null,
          notes?: string | null,
          qty?: string | null,
          price?: number | null,
          status?: Status | null,
        } | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    name?: string | null,
    total?: number | null,
    status?: Status | null,
    tableID: string,
    products?:  Array< {
      __typename: "ProductsOrdered",
      id?: string | null,
      notes?: string | null,
      qty?: string | null,
      price?: number | null,
      status?: Status | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateProductIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionProductIngredientFilterInput | null,
};

export type OnCreateProductIngredientSubscription = {
  onCreateProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionProductIngredientFilterInput | null,
};

export type OnUpdateProductIngredientSubscription = {
  onUpdateProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionProductIngredientFilterInput | null,
};

export type OnDeleteProductIngredientSubscription = {
  onDeleteProductIngredient?:  {
    __typename: "ProductIngredient",
    id: string,
    ingredientID: string,
    productID: string,
    ingredient:  {
      __typename: "Ingredient",
      id: string,
      name?: string | null,
      qty?: number | null,
      products?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    product:  {
      __typename: "Product",
      id: string,
      name?: string | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      categoryID: string,
      Ingredients?:  {
        __typename: "ModelProductIngredientConnection",
        items:  Array< {
          __typename: "ProductIngredient",
          id: string,
          ingredientID: string,
          productID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
