import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  Name: string;
  Created_at: string;
  productType: number;
}
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `products`,
      providesTags: ["Product"],
    }),
    AddProduct: builder.mutation({
      query: (body) => {
        return {
          url: "products",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<Product, Omit<Product, "id">>({
      query: (body) => {
        return {
          url: `products/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
} = productsApi;
