/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncIngredients = /* GraphQL */ `
  query SyncIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
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
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTables = /* GraphQL */ `
  query SyncTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getProductIngredient = /* GraphQL */ `
  query GetProductIngredient($id: ID!) {
    getProductIngredient(id: $id) {
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
export const listProductIngredients = /* GraphQL */ `
  query ListProductIngredients(
    $filter: ModelProductIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ingredientID
        productID
        ingredient {
          id
          name
          qty
          products {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProductIngredients = /* GraphQL */ `
  query SyncProductIngredients(
    $filter: ModelProductIngredientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ingredientID
        productID
        ingredient {
          id
          name
          qty
          products {
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
      nextToken
      startedAt
    }
  }
`;
