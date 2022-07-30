import React, { ReactElement, useEffect, useState } from "react";

import { BiFoodMenu } from "react-icons/bi";
import Product from "../components/Product";
import Checkout from "../components/Checkout";
import { useSetRecoilState } from "recoil";
import { ResProducts } from "../src/state/atoms";
import LeftMenu from "../components/Layout/LeftMenu";
import MenuCategory from "../components/MenuCategory";
import { API, graphqlOperation, withSSRContext } from "aws-amplify";
import { Category, ModelIDInput, Product as ProductType } from "../src/API";
import { listCategories, listProducts } from "../src/graphql/queries";

const getProducts = async (
  id: string,
  products: ProductType[]
): Promise<ProductType[]> => {
  switch (id) {
    case "999":
      return products;

    default:
      const newList = products.filter((product) => product.categoryID === id);
      return newList;
  }
};

const Table = ({ categories, products }: any) => {
  console.log(categories);
  const [selected, setSelected] = useState("999");
  const [productList, setProductsList] = useState<ProductType[]>(products);
  const setProducts = useSetRecoilState(ResProducts);

  useEffect(() => {
    const loadProducts = async () => {
      const newProducts = await getProducts(selected, products);

      setProductsList(newProducts);
    };
    loadProducts();
  }, [selected]);

  useEffect(() => {
    setProducts(products);
  }, []);
  
  return (
    <div className="flex w-full pl-3">
      <div className="w-3/4 ">
        <div className="flex mt-2 py-4 overflow-x-auto ">
          <MenuCategory
            title="Todo"
            icon={<BiFoodMenu size={"1.5em"} />}
            selected={selected}
            tableId={"tableId"}
            setSelected={setSelected}
            id="999"
          />
          {categories.map((category: Category) => (
            <MenuCategory
              title={category.name as string}
              icon={<BiFoodMenu size={"1.5em"} />}
              selected={selected}
              tableId={"tableId"}
              key={category.id}
              id={category.id}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div className="overflow-scroll h-[42rem] w-full">
          <div className="grid grid-cols-3">
            {productList.map((product: ProductType) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-1/3 px-2">
        <Checkout />
      </div>
    </div>
  );
};

export async function getStaticProps({ req }: any) {
  const SSR = withSSRContext({ req });

  const rawCategory: any = await SSR.API.graphql(
    graphqlOperation(listCategories)
  );
  const categories = await rawCategory.data.listCategories.items;

  const rawProduct: any = await SSR.API.graphql(graphqlOperation(listProducts));

  const products = await rawProduct.data.listProducts.items;
  console.log(products);
  return {
    props: {
      categories,
      products,
    },
  };
}

Table.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default Table;
