import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  Name: string;
  Created_at: string;
  productType: number;
}
export interface ProductType {
  id: number;
  Name: string;
  Created_at: string;
  Updated_at: string;
}
export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/",
  }),
  tagTypes: ["Product", "ProductType"],
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
    getAllProductsTypes: builder.query<Product[], void>({
      query: () => `products-types`,
      providesTags: ["ProductType"],
    }),
    AddProductType: builder.mutation({
      query: (body) => {
        return {
          url: "products-types",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["ProductType"],
    }),
    updateProductType: builder.mutation<ProductType, Omit<Product, "id">>({
      query: (body) => {
        return {
          url: `products-types/${body.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["ProductType"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useGetAllProductsTypesQuery,
  useAddProductTypeMutation,
  useUpdateProductTypeMutation,
} = productsApi;
