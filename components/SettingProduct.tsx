import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

const SettingProduct = ({ prod }: any) => {
  const [productImage, setProductImage] = useState(prod.image);
  async function setPhoto() {
    const s3Image = await Storage.get(prod.image as string);
    const req = new Request(s3Image);
    setProductImage(req.url);
  }

  useEffect(() => {
    setPhoto();
  }, [prod.image]);

  return (
    <div className="bg-white shadow-md rounded-md w-48 h-44" key={prod.id}>
      {/* image */}

      {prod.image !== "" ? (
        <div className="h-28 w-48 bg-gray-400 rounded-t-md relative">
          <img
            src={productImage ?? ""}
            className="rounded-t-md border-0"
            style={{ objectFit: "fill", width: "20rem", height: "7rem" }}
          />
        </div>
      ) : (
        <div className="h-28 w-48 bg-gray-400 rounded-t-md relative"></div>
      )}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{prod.name}</h2>

        <p className="text-gray-500 text-sm my-2">{prod.description}</p>
        <p className="font-bold text-xl">${prod.price}</p>
      </div>
    </div>
  );
};

export default SettingProduct;
