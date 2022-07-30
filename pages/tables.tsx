import { API, graphqlOperation } from "aws-amplify";
import { ReactElement, useEffect, useState } from "react";
import {
  CreateTableInput,
  ListTablesQuery,
  ModelIDInput,
  Table,
} from "../src/API";
import { createTable } from "../src/graphql/mutations";
import { listTables } from "../src/graphql/queries";
import { useRouter } from "next/dist/client/router";
import LeftMenu from "../components/Layout/LeftMenu";
import TableUi from "../components/TableUi";
import NewTable from "../components/Modals/NewTable";

const Tables = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [open, setOpen] = useState(false)
  const router = useRouter();


  const getTables = async () => {
    const item: any = await API.graphql<ListTablesQuery>(
      graphqlOperation(listTables)
    );
    setTables(item.data.listTables.items);
  };

  useEffect(() => {
    getTables();
  }, [open]);

 

  return (
    <div className="">
      {/* tables */}
      <NewTable open={open} setOpen={setOpen}/>
      <div className="grid grid-cols-8 p-4 gap-10">
        <div
          className={`w-20 h-20 bg-gray-400 shadow-md rounded-md cursor-pointer border-2 border-dashed`}
          onClick={() => setOpen(true)}
        >
          <p
            className={`flex items-center justify-center h-full text-gray-500 font-medium text-2xl`}
          >
            +
          </p>
        </div>

        {tables.length > 0 &&
          tables.map((table) => (
            <div
              key={table.id}
              onClick={() =>
                router.push(
                  `/menu?tableId=${table.id}&tableNumber=${table.number}`
                )
              }
            >
              <TableUi full={table.full} number={table.number} />
            </div>
          ))}
      </div>
    </div>
  );
};

Tables.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default Tables;
