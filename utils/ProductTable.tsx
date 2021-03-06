import React, { useState } from "react";
import { useUpdateProductMutation } from "../features/products/products-service";
function Table({ Headers = [], Data = [] }: any) {
  const [updateProduct] = useUpdateProductMutation();
  const [target, setTarget] = useState(0);
  const [input, setInput] = useState("");
  const [productType, setProductTyoe] = useState("");

  const handleEdit = (id: number) => {
    setTarget(id);
  };
  const handleUpdate = async (id: number) => {
    //change data
    const data: any = {
      id: id,
      Name: input,
      productType: +productType,
    };

    await updateProduct(data);
    setTarget(0);
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto  p-4 shadow-md  sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full  divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {Headers.map((header: any) => (
                        <>
                          <th
                            scope="col"
                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            {header}
                          </th>
                        </>
                      ))}
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {Data.map((data: string) =>
                      // eslint-disable-next-line react/jsx-key
                      target !== data.id ? (
                        <tr
                          key={data["id"]}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data["id"]}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data["Name"]}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            {data["Created_at"]}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data["productType"]}
                          </td>
                          <td
                            onClick={() => handleEdit(data["id"])}
                            //  className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                          >
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <tr
                          key={data["id"]}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data["id"]}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              value={input}
                              // eslint-disable-next-line react/jsx-no-duplicate-props
                              placeholder={data["Name"]}
                              onChange={(evt) => {
                                setInput(evt.target.value);
                              }}
                            />
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            {data["Created_at"]}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <input
                              placeholder={data["productType"]}
                              onChange={(evt) => {
                                setProductTyoe(evt.target.value);
                              }}
                            />
                          </td>
                          <td
                            onClick={() => handleEdit(data["id"])}
                            className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                          >
                            <a
                              href="#"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Edit
                            </a>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleUpdate(data.id)}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
