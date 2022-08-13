

const SettingProduct = ({ prod }: any) => {

 

  return (
    <div className="bg-white shadow-md rounded-md w-48" key={prod.id}>
      {/* image */}

     

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{prod.name}</h2>

        <div className="flex justify-between">
          <p className="text-gray-500 text-sm my-2">{prod.description}</p>
          <p className="font-bold text-xl">${prod.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingProduct;
