import { API, Storage } from "aws-amplify";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Category, CreateProductInput } from "../../src/API";
import { createProduct } from "../../src/graphql/mutations";
import Dropdown from "../Dropdown";

const NewProduct = ({
  open,
  setOpen,
  categories,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>();
  const [category, setCategory] = useState<Category>(categories[0]);
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState("");

  const createNewProduct = async () => {
    const NewProduct: CreateProductInput = {
      name,
      price,
      image: '',
      categoryID: category.id
    };
    console.log(NewProduct)
    

    const created: any = await API.graphql({
      query: createProduct,
      variables: { input: NewProduct },
    });

    setName('')
    setFileName('')
    setOpen(false);
  };

 

  return (
    <>
      {open && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 select-none flex justify-center">
            <div className="rounded-md shadow-xl px-2 py-3 bg-white w-6/12">
              <div className="flex justify-between">
                <h1 className="font-bold text-xl text-center text-primary-600">
                  Nuevo Producto
                </h1>
                <h1 className="font-bold text-xl text-center text-red-600" onClick={() => setOpen(false)}>
                  X
                </h1>
              </div>

              <input
                type="text"
                value={name as string}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border rounded-md px-2 py-3 w-full pl-3 mt-5"
                placeholder="Nombre"
              />

              <div className="flex items-center space-x-2">
                <div className="w-1/2">
                  <Dropdown
                    options={categories}
                    title={category?.name as string}
                    setSelected={setCategory}
                  />
                </div>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="bg-white border rounded-md px-2 py-3 w-1/2 pl-3"
                  placeholder="$4.99"
                />
              </div>

              {/* <div className="flex justify-center">
                <div className="">
                  <input
                    className="block w-full text-md text-gray-500 file:py-2 file:px-6 file:rounded file:border-0 file:bg-primary-600"
                    type="file"
                    id="formFile"
                    onChange={handleFileUpdate}
                  />
                </div>
              </div> */}

              <button
                className="bg-primary-300 px-5 py-2 rounded-md text-white font-medium text-xl mt-6 w-full"
                onClick={createNewProduct}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProduct;
