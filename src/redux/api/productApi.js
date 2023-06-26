import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
