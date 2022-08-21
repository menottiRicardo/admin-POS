import { DataStore } from "aws-amplify";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const PayOrder = ({ order, payOrder }: any) => {
  const componentRef = useRef(null);
  console.log(order);
  const [products, setProducts] = useState([]);

  const pay = async () => {

    await handlePrint()
    await payOrder()
  }
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const prodTotal = (qty: string, price: number) => {
    const total = parseInt(qty) * price;

    return total.toFixed(2);
  };

  const getTotal = () => {
    let subtotalFood = 0;
    let subtotalDrinks = 0;

    for (let index = 0; index < order?.products?.length; index++) {
      const qty = order.products[index]?.qty;
      const price = order.products[index]?.price;
      const category = order.products[index].category;

      if (category === "hola") {
        subtotalDrinks += price * qty;
      } else {
        subtotalFood += price * qty;
      }
    }

    const subtotal = subtotalFood + subtotalDrinks
    const itbms = subtotalFood * 0.07;
    const drinks = subtotalDrinks * 0.10
    const total = subtotal + itbms + drinks

    const tenPercent = subtotal * 0.1;
    const fiftPercent = subtotal * 0.15;
    const twentyPercent = subtotal * 0.2;
    return (
      <div className="mb-10">
        <div className="grid grid-cols-2 border-t-4 border-dashed border-black py-2 gap-y-2 text-xl ">
          <p className="font-bold">Subtotal</p>
          <p className="text-right">${subtotal.toFixed(2)}</p>
          <p className="font-bold">ITBMS al 7%</p>
          <p className="text-right">${itbms.toFixed(2)}</p>
          <p className="font-bold">Impuesto licor 10%</p>
          <p className="text-right">${drinks.toFixed(2)}</p>
          <p className="font-bold uppercase">Total</p>
          <p className="text-right">${total.toFixed(2)}</p>
        </div>

        <div className="grid grid-cols-2 border-t-4 border-dashed border-black py-2 text-lg">
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
        onClick={pay}
      >
       Pagar Orden
      </button>
      <div style={{ display: "none" }}>
        <div className="w-[288px] px-4 pb-10" ref={componentRef}>
          <h1 className="mt-4 font-bold text-xl text-center">
            Sunset Beach and Club
          </h1>

          <h2>Cuenta {order.id}</h2>
          <h2 className="border-b-2 border-dashed">Cliente {order.name}</h2>

          

          {order.products.map((prod :any) => (
            <div className="my-4" key={prod.id}>
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

export default PayOrder;
