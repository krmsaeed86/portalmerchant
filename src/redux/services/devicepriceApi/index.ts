import { createApi } from "@reduxjs/toolkit/query/react";

import {
  listDevicePriceParamsType,
  listDevicePriceApiResponseType,
} from "./devicepriceApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const devicepriceApi = createApi({
  reducerPath: "devicepriceApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/deviceprice"),

  endpoints: (builder) => ({
    findDevicePrice: builder.query<
      listDevicePriceApiResponseType,
      listDevicePriceParamsType
    >({
      query: (args: listDevicePriceParamsType) => ({
        url: `/find`,
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { useFindDevicePriceQuery } = devicepriceApi;
