import {
  DataStore,
  Predicates,
  SortDirection,
  withSSRContext,
} from "aws-amplify";
import { GetServerSideProps } from "next";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import TableUi from "../components/TableUi";
import { Table } from "../src/models";

const Pay = () => {
  const [orderId, setOrderId] = useState("");
  const [tables, setTables] = useState<Table[]>([]);
  console.log(tables);

  useEffect(() => {
    const orderSubscription = DataStore.observeQuery(Table, Predicates.ALL, {
      sort: (t) => t.number(SortDirection.ASCENDING),
    }).subscribe((msg) => {
      setTables(msg.items as Table[]);
    });

    return () => {
      orderSubscription.unsubscribe();
    };
  }, []);

  
  return (
    <div className="grid grid-cols-8 p-4 gap-10">
      {tables.map((table) => (
        <TableUi number={table.number} full={table.full} />
      ))}
    </div>
  );
};

Pay.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};
export default Pay;
