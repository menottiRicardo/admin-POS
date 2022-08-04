/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onCreateIngredient(filter: $filter) {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onUpdateIngredient(filter: $filter) {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient(
    $filter: ModelSubscriptionIngredientFilterInput
  ) {
    onDeleteIngredient(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateTable = /* GraphQL */ `
  subscription OnCreateTable($filter: ModelSubscriptionTableFilterInput) {
    onCreateTable(filter: $filter) {
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
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable($filter: ModelSubscriptionTableFilterInput) {
    onUpdateTable(filter: $filter) {
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
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable($filter: ModelSubscriptionTableFilterInput) {
    onDeleteTable(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateProductIngredient = /* GraphQL */ `
  subscription OnCreateProductIngredient(
    $filter: ModelSubscriptionProductIngredientFilterInput
  ) {
    onCreateProductIngredient(filter: $filter) {
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
export const onUpdateProductIngredient = /* GraphQL */ `
  subscription OnUpdateProductIngredient(
    $filter: ModelSubscriptionProductIngredientFilterInput
  ) {
    onUpdateProductIngredient(filter: $filter) {
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
export const onDeleteProductIngredient = /* GraphQL */ `
  subscription OnDeleteProductIngredient(
    $filter: ModelSubscriptionProductIngredientFilterInput
  ) {
    onDeleteProductIngredient(filter: $filter) {
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
