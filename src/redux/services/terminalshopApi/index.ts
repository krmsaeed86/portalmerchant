import { createApi } from "@reduxjs/toolkit/query/react";
import {
  listterminalshopParamsType,
  listterminalshopResponseType,
  listterminalResponseType,
  listterminalParamsType,
} from "./terminalshopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const terminalshopApi = createApi({
  reducerPath: "terminalshopApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth(
    "/cloud/uixmerchant/api/ui/terminalshop"
  ),
  tagTypes: [""],
  endpoints: (builder) => ({
    listTerminalShopSearch: builder.query<
      listterminalshopResponseType,
      listterminalshopParamsType
    >({
      query: (args: listterminalshopParamsType) => ({
        url: `/list/search`,
        method: "POST",
        body: args,
      }),
    }),
    listTerminalShop: builder.query<
      listterminalResponseType,
      listterminalParamsType
    >({
      query: (args: listterminalshopParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { useListTerminalShopQuery, useListTerminalShopSearchQuery } =
  terminalshopApi;
