import { createApi } from "@reduxjs/toolkit/query/react";

import {
  shopmemoryRefResponseType,
  shopmemoryRefParamsType,
} from "./shopmemoryApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const shopmemoryApi = createApi({
  reducerPath: "shopmemoryApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/shopmemory"),

  endpoints: (builder) => ({
    shopmemoryRef: builder.query<
      shopmemoryRefResponseType,
      shopmemoryRefParamsType
    >({
      query: (params: shopmemoryRefParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useShopmemoryRefQuery } = shopmemoryApi;
