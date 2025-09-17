import { createApi } from "@reduxjs/toolkit/query/react";

import {
  RefStuffshopResponseType,
  RefStuffshopParamsType,
} from "./stuffshopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const stuffshopApi = createApi({
  reducerPath: "stuffshopApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/stuffshop"),
  tagTypes: [],
  endpoints: (builder) => ({
    RefStuffshop: builder.query<
      RefStuffshopResponseType,
      RefStuffshopParamsType
    >({
      query: (params: RefStuffshopParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useRefStuffshopQuery } = stuffshopApi;
