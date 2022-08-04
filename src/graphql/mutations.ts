/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      name
      qty
      products {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      name
      qty
      products {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      name
      qty
      products {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      Products {
        items {
          id
          name
          price
          image
          description
          categoryID
          Ingredients {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      Products {
        items {
          id
          name
          price
          image
          description
          categoryID
          Ingredients {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      Products {
        items {
          id
          name
          price
          image
          description
          categoryID
          Ingredients {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      price
      image
      description
      categoryID
      Ingredients {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      price
      image
      description
      categoryID
      Ingredients {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      price
      image
      description
      categoryID
      Ingredients {
        items {
          id
          ingredientID
          productID
          ingredient {
            id
            name
            qty
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          product {
            id
            name
            price
            image
            description
            categoryID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
      id
      full
      number
      seats
      Orders {
        items {
          id
          name
          total
          status
          tableID
          products {
            id
            notes
            qty
            price
            status
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
      id
      full
      number
      seats
      Orders {
        items {
          id
          name
          total
          status
          tableID
          products {
            id
            notes
            qty
            price
            status
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
      id
      full
      number
      seats
      Orders {
        items {
          id
          name
          total
          status
          tableID
          products {
            id
            notes
            qty
            price
            status
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      name
      total
      status
      tableID
      products {
        id
        notes
        qty
        price
        status
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      name
      total
      status
      tableID
      products {
        id
        notes
        qty
        price
        status
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      name
      total
      status
      tableID
      products {
        id
        notes
        qty
        price
        status
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProductIngredient = /* GraphQL */ `
  mutation CreateProductIngredient(
    $input: CreateProductIngredientInput!
    $condition: ModelProductIngredientConditionInput
  ) {
    createProductIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      productID
      ingredient {
        id
        name
        qty
        products {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        price
        image
        description
        categoryID
        Ingredients {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProductIngredient = /* GraphQL */ `
  mutation UpdateProductIngredient(
    $input: UpdateProductIngredientInput!
    $condition: ModelProductIngredientConditionInput
  ) {
    updateProductIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      productID
      ingredient {
        id
        name
        qty
        products {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        price
        image
        description
        categoryID
        Ingredients {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProductIngredient = /* GraphQL */ `
  mutation DeleteProductIngredient(
    $input: DeleteProductIngredientInput!
    $condition: ModelProductIngredientConditionInput
  ) {
    deleteProductIngredient(input: $input, condition: $condition) {
      id
      ingredientID
      productID
      ingredient {
        id
        name
        qty
        products {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        price
        image
        description
        categoryID
        Ingredients {
          items {
            id
            ingredientID
            productID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
