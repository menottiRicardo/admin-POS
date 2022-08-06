import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const PrintOrder = ({ order }: any) => {
  const componentRef = useRef(null);
  const [show, setShow] = useState(true);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const mock = [
    {
      id: 1,
      qty: "2",
      price: 2.99,
      name: "adf",
    },
  ];

  const prodTotal = (qty: string, price: number) => {
    const total = parseInt(qty) * price;

    return total.toFixed(2);
  };

  const getTotal = () => {
    const subtotal = mock.reduce(
      (previousValue, currentValue) =>
        previousValue +
        parseInt(currentValue.qty as any) * (currentValue.price as any),
      0
    );

    const itbms = subtotal * 1.07;
    const total = subtotal + itbms;

    const tenPercent = total * 0.1;
    const fiftPercent = total * 0.15;
    const twentyPercent = total * 0.2;
    return (
      <div className="">
        <div className="grid grid-cols-2 border-t-2 border-dashed py-2 gap-y-2 text-xl ">
          <p className="font-bold">Subtotal</p>
          <p className="text-right">${subtotal.toFixed(2)}</p>
          <p className="font-bold">ITBMS al 7%</p>
          <p className="text-right">${itbms.toFixed(2)}</p>
          <p className="font-bold uppercase">Total</p>
          <p className="text-right">${total.toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-2 border-t-2 border-dashed py-2 text-lg">
          <h1 className="col-span-2 font-bold">Propina Sugerida</h1>
          <p className="font-bold">10%</p>
          <p className="text-right">${tenPercent.toFixed(2)}</p>
          <p className="font-bold">15%</p>
          <p className="text-right">${fiftPercent.toFixed(2)}</p>
          <p className="font-bold uppercase">20%</p>
          <p className="text-right">${twentyPercent.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <button
        className="p-3 bg-primary-300 rounded-md text-white font-medium mt-4"
        onClick={handlePrint}
      >
        Imprimir Precuenta
      </button>
      <div style={{ display: "none" }}>
        <div className="w-[288px] px-4 pb-10" ref={componentRef}>
          <h1 className="mt-4 font-bold text-xl text-center">
            Sunset Beach and Club
          </h1>

          <h2>Precuenta 123123</h2>
          <h2>Cliente Ricardo</h2>

          <p>Productos</p>

          {mock.map((prod) => (
            <div className="my-4">
              <p className="font-medium text-xl">{prod.name}</p>
              <div className="flex justify-between">
                <p>
                  {prod.qty} x {prod.price}
                </p>
                <p>{prodTotal(prod.qty, prod.price)}</p>
              </div>
            </div>
          ))}

          {getTotal()}
        </div>
      </div>
    </>
  );
};

export default PrintOrder;
