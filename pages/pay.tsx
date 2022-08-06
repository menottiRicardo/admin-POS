import {
  DataStore,
  Predicates,
  SortDirection,
  withSSRContext,
} from "aws-amplify";
import { GetServerSideProps } from "next";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import PrintOrder from "../components/PrintOrder";
import OrderListSlider from "../components/SlideOvers/OrderListSlider";
import TableUi from "../components/TableUi";
import { Order } from "../src/API";
import { Table } from "../src/models";

const Pay = () => {
  const [tableId, setTableId] = useState<string>("");
  const [tables, setTables] = useState<Table[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const orderSubscription = DataStore.observeQuery(Table, Predicates.ALL, {
      sort: (t) => t.number(SortDirection.ASCENDING),
    }).subscribe((msg) => {
      console.log(msg.items);
      setTables(msg.items as Table[]);
    });

    return () => {
      orderSubscription.unsubscribe();
    };
  }, []);

  const openSlider = (tableId: string) => {
    setTableId(tableId);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-8 p-4 gap-10">
        <OrderListSlider open={open} setOpen={setOpen} tableId={tableId} />

        {tables.map((table) => (
          <TableUi
            number={table.number}
            full={table.full}
            key={table.id}
            onClick={() => openSlider(table.id)}
          />
        ))}
      </div>
    </>
  );
};

Pay.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};
export default Pay;
