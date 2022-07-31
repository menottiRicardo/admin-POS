import { DataStore } from "aws-amplify";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import NewProduct from "../components/Modals/NewProduct";
import SettingProduct from "../components/SettingProduct";
import CategorySlider from "../components/SlideOvers/CategorySlider";
import { Category as CategoryType, Product as ProductType } from "../src/API";

import { Category, Product } from "../src/models";

const MenuSettings = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [openCategorySlider, setOpenCategorySlider] = useState<boolean>(false);
  const [openNewProduct, setOpenNewProduct] = useState<boolean>(false);

  useEffect(() => {
    const categories = DataStore.observeQuery(Category).subscribe((msg) =>
      setCategories(msg.items as any)
    );

    const products = DataStore.observeQuery(Product).subscribe((msg) =>
      setProducts(msg.items as any)
    );
    return () => {
      categories.unsubscribe();
      products.unsubscribe();
    };
  }, []);

  return (
    <div className="p-4">
      <CategorySlider
        open={openCategorySlider}
        setOpen={setOpenCategorySlider}
      />
      <NewProduct
        open={openNewProduct}
        setOpen={setOpenNewProduct}
        categories={categories}
      />
      {/* categories */}
      <div className="flex">
        <div
          className={`flex flex-col justify-center items-center rounded-md p-4 bg-gray-300 shadow-sm text-gray-500 border-2 border-gray-100 mx-2 w-20 h-20 border-dashed text-xl`}
          onClick={() => setOpenCategorySlider(true)}
        >
          +
        </div>

        {categories.length > 0 &&
          categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col justify-center items-center rounded-md p-4 bg-primary-300 shadow-sm text-gray-100 border-2 border-gray-100 mx-2 w-20 h-20 text-xl`}
            >
              {category.name}
            </div>
          ))}
      </div>

      {/* products */}
      <div className="mt-10 flex">
        <div className="grid grid-cols-4 gap-4">
          <div
            className="bg-gray-300 text-gray-500 shadow-md rounded-md w-48 h-44 flex items-center justify-center text-4xl border-dashed border-2"
            onClick={() => setOpenNewProduct(true)}
          >
            +
          </div>


          {products.length > 0 &&
            products.map((prod) => (
              <SettingProduct prod={prod} key={prod.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

MenuSettings.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default MenuSettings;
