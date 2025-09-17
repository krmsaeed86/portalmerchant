
import { createApi } from "@reduxjs/toolkit/query/react";

import {
  ListPackagemerchantResponseType,
  ListPackagemerchantParamsType,
} from "./packagemerchantApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const packagemerchantApi = createApi({
  reducerPath: "packagemerchantApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/packagemerchant"),

  endpoints: (builder) => ({
    listPackagemerchant: builder.query<
      ListPackagemerchantResponseType,
      ListPackagemerchantParamsType
    >({
      query: (args: ListPackagemerchantParamsType) => ({
        url: `/find`,
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { useListPackagemerchantQuery } = packagemerchantApi;
