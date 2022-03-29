import React, { useState } from "react";
import ProuductTypeTable from "../../utils/ProductTypeTable";
import { useGetAllProductsTypesQuery } from "../../features/products/products-service";
import { useAddProductTypeMutation } from "../../features/products/products-service";

function ProductsTypes({ products }: any) {
  const headers = ["Id", "Product Name", "CreatedAt", "ProductType"];

  const [Name, settName] = useState("");
  let myProducts: any = [];
  const [show, setShow] = useState(false);
  const { isSuccess, data, isLoading } = useGetAllProductsTypesQuery();
  const [addProductType] = useAddProductTypeMutation();
  if (isSuccess) {
    myProducts = data;
  }
  //save product type
  const handleSaveProduct = () => {
    const product = {
      Name: Name,
    };
    addProductType(product);
    settName("");
    setShow(!show);
  };

  return (
    <div>
      <h2 className="text text-center m-4 text-4xl">Product Type</h2>
      <div className="max-w-2xl mx-auto ">
        <button className="text text-center m-4" onClick={() => setShow(!show)}>
          Add Product Type <span className="m-4">&#10011;</span>
        </button>
        {show ? (
          <div>
            <div className="text-gray-700">
              <div>
                <label
                  className="block mb-1"
                  htmlFor="forms-labelOverInputCode"
                >
                  Product Type Name
                </label>
                <input
                  value={Name}
                  onChange={(e) => settName(e.target.value)}
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div>
                <button
                  onClick={handleSaveProduct}
                  className="m-4 h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                >
                  Save
                </button>{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                {isLoading ? (
                  "Loading..."
                ) : (
                  <ProuductTypeTable Headers={headers} Data={myProducts} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsTypes;
