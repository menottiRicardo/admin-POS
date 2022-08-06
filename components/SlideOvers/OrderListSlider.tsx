import React, { useEffect } from "react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClockIcon, XIcon } from "@heroicons/react/outline";
import { Order } from "../../src/models";
import { API, DataStore } from "aws-amplify";
import { Status, UpdateOrderInput } from "../../src/API";
import { MdFastfood, MdOutlineCheckCircle } from "react-icons/md";
import { updateOrder } from "../../src/graphql/mutations";

const OrderListSlider = ({
  open,
  setOpen,
  tableId,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tableId: string;
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>(
    undefined
  );

  useEffect(() => {
    const orderSubscription = DataStore.observeQuery(Order, (o) =>
      o.tableID("eq", tableId)
    ).subscribe((msg) => {
      setOrders(msg.items as Order[]);
    });

    return () => {
      orderSubscription.unsubscribe();
    };
  }, [tableId]);

  const renderIcon = (order: Order) => {
    switch (order.status) {
      case Status.PREPARED:
        return <MdFastfood className="text-3xl mt-2 text-primary-700" />;
      case Status.PAID:
        return (
          <MdOutlineCheckCircle className="text-3xl mt-2 text-primary-600" />
        );
      default:
        return <ClockIcon className="mt-2 text-gray-700 w-10" />;
    }
  };

  const payOrder = async () => {
    const created = await DataStore.save(
      Order.copyOf(currentOrder as Order, (co) => {
        co.status = Status.PAID;
      })
    );

    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Cerrar</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Ordenes
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        {orders.map((order) => (
                          <a
                            className="relative block p-8 pb-18 border-t-4 border-primary-600 rounded-sm shadow-xl my-2"
                            key={order.id}
                            onClick={() => setCurrentOrder(order)}
                          >
                            <h5 className="text-xl font-bold">{order.name}</h5>
                            <p className="mt-4 font-medium text-gray-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Repudiandae, provident.
                            </p>

                            <span className="absolute bottom-8 right-8">
                              {renderIcon(order)}
                            </span>
                          </a>
                        ))}
                        {currentOrder !== undefined && (
                          <button
                            className="p-3 bg-primary-300 rounded-md text-white font-medium mt-4"
                            onClick={payOrder}
                          >
                            Pagar {currentOrder.name} Orden
                          </button>
                        )}
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default OrderListSlider;
