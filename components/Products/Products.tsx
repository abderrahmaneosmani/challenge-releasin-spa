import React, { useState } from "react";
import Table from "../../utils/ProductTable";
const headers = ["Id", "Product Name", "CreatedAt", "ProductType"];
import { useGetAllProductsQuery } from "../../features/products/products-service";
import { useAddProductMutation } from "../../features/products/products-service";

function Products() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  let myProducts: any = [];
  const [show, setShow] = useState(false);
  const { isSuccess, data, isLoading } = useGetAllProductsQuery();
  const [addProduct] = useAddProductMutation();
  if (isSuccess) {
    myProducts = data;
  }
  //save product
  const handleSaveProduct = () => {
    const product = {
      Name: productName,
      productType: +productType,
    };
    addProduct(product);
    setProductName("");
    setProductType("");
    setShow(!show);
  };

  return (
    <div>
      <h2 className="text text-center m-4 text-4xl">Product </h2>
      <div className="max-w-2xl mx-auto ">
        <button className="text text-center m-4" onClick={() => setShow(!show)}>
          Add Product <span className="m-4">&#10011;</span>
        </button>
        {show ? (
          <div>
            <div className="text-gray-700">
              <div>
                <label
                  className="block mb-1"
                  htmlFor="forms-labelOverInputCode"
                >
                  Product Name
                </label>
                <input
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  className="block mb-1"
                  htmlFor="forms-labelOverInputCode"
                >
                  Product Type
                </label>
                <input
                  required
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="number"
                  placeholder="Type"
                  onChange={(e) => setProductType(e.target.value)}
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
                  <Table Headers={headers} Data={myProducts} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
