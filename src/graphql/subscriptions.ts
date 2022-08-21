/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDiscounts = /* GraphQL */ `
  subscription OnCreateDiscounts {
    onCreateDiscounts {
      id
      nam
      code
      percentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDiscounts = /* GraphQL */ `
  subscription OnUpdateDiscounts {
    onUpdateDiscounts {
      id
      nam
      code
      percentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDiscounts = /* GraphQL */ `
  subscription OnDeleteDiscounts {
    onDeleteDiscounts {
      id
      nam
      code
      percentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
  subscription OnCreateCategory {
    onCreateCategory {
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
  subscription OnUpdateCategory {
    onUpdateCategory {
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
  subscription OnDeleteCategory {
    onDeleteCategory {
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
  subscription OnCreateProduct {
    onCreateProduct {
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
  subscription OnUpdateProduct {
    onUpdateProduct {
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
  subscription OnDeleteProduct {
    onDeleteProduct {
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
  subscription OnCreateTable {
    onCreateTable {
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
            name
            category
            remaing
          }
          paymentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      currentOrder
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable {
    onUpdateTable {
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
            name
            category
            remaing
          }
          paymentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      currentOrder
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable {
    onDeleteTable {
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
            name
            category
            remaing
          }
          paymentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      currentOrder
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
        name
        category
        remaing
      }
      paymentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
        name
        category
        remaing
      }
      paymentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
        name
        category
        remaing
      }
      paymentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateProductIngredient = /* GraphQL */ `
  subscription OnCreateProductIngredient {
    onCreateProductIngredient {
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
  subscription OnUpdateProductIngredient {
    onUpdateProductIngredient {
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
  subscription OnDeleteProductIngredient {
    onDeleteProductIngredient {
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
