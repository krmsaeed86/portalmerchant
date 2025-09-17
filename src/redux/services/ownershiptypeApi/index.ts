
import { createApi } from "@reduxjs/toolkit/query/react";

import {
  ownershipTypeResponseType,
  ownershipTypeParamsType,
} from "./ownershiptypeApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const ownershiptypeApi = createApi({
  reducerPath: "ownershiptypeApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/ownershiptype"),

  endpoints: (builder) => ({
    listOwnershipType: builder.query<
      ownershipTypeResponseType,
      ownershipTypeParamsType
    >({
      query: (param: ownershipTypeParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: param,
      }),
    }),
  }),
});

export const { useListOwnershipTypeQuery } = ownershiptypeApi;
