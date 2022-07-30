import { API, graphqlOperation, Storage } from "aws-amplify";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Category,
  CreateProductInput,
  CreateTableInput,
  ListTablesQuery,
} from "../../src/API";
import { createProduct, createTable } from "../../src/graphql/mutations";
import { listTables } from "../../src/graphql/queries";
import Dropdown from "../Dropdown";

const NewTable = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [seats, setSeats] = useState("");
  const [number, setNumber] = useState(0);

  const createNewTable = async () => {
    const newTable: CreateTableInput = {
      full: false,
      seats,
      number,
    };
    console.log(newTable);
    
    const created: any = await API.graphql({
      query: createTable,
      variables: { input: newTable },
    });

    setSeats("");
    setNumber(0);
    setOpen(false);
  };

  useEffect(() => {
    const getLatestTable = async () => {
      const item: any = await API.graphql<ListTablesQuery>(
        graphqlOperation(listTables)
      );
      console.log(item.data.listTables.items.length);
      setNumber(item.data.listTables.items.length);
    };
    getLatestTable();
  }, []);

  return (
    <>
      {open && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 select-none flex justify-center">
            <div className="rounded-md shadow-xl px-2 py-3 bg-white w-6/12">
              <div className="flex justify-between">
                <h1 className="font-bold text-xl text-center text-primary-600">
                  Nueva Mesa
                </h1>
                <h1
                  className="font-bold text-xl text-center text-red-600"
                  onClick={() => setOpen(false)}
                >
                  X
                </h1>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value))}
                  className="bg-white border rounded-md px-2 py-3 w-1/2 pl-3 mt-6"
                  placeholder="Numero de Mesa"
                />

                <div className="w-1/2">
                  <label className="text-gray-600 font-medium">
                    Cantidad de Sillas
                  </label>
                  <input
                    type="number"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    className="bg-white border rounded-md px-2 py-3 w-full pl-3"
                    placeholder="4"
                  />
                </div>
              </div>

              <button
                className="bg-primary-300 px-5 py-2 rounded-md text-white font-medium text-xl mt-6 w-full"
                onClick={createNewTable}
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

export default NewTable;
