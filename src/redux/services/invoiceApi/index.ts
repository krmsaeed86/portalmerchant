import { createApi } from "@reduxjs/toolkit/query/react";

import {
  listFactorsResponseType,
  listFactorsParamsType,
  getDetailFactorResponseType,
  getDetailFactorParamsType,
  InvoiceResponseType,
  InvoiceParamsType,
} from "./invoiceApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const invoiceApi = createApi({
  reducerPath: "invoiceApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/invoice"),
  tagTypes: ["getFactor"],

  endpoints: (builder) => ({
    Invoice: builder.mutation<
    InvoiceResponseType,
    InvoiceParamsType
  >({
    query: (args: InvoiceParamsType) => ({
      url: ``,
      method: "POST",
      body: args,
    }),
  }),
    preListInvoice: builder.query<
      listFactorsResponseType,
      listFactorsParamsType
    >({
      query: (args: listFactorsParamsType) => ({
        url: `/pre-list`,
        method: "POST",
        body: args,
      }),
    }),
    listInvoice: builder.query<listFactorsResponseType, listFactorsParamsType>({
      query: (args: listFactorsParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
    }),
    getDetailInvoice: builder.mutation<
      getDetailFactorResponseType,
      getDetailFactorParamsType
    >({
      query: (param: getDetailFactorParamsType) => ({
        url: `/${param.headerId}/showAllInvoice/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),
  
  }),
});

export const {
  useInvoiceMutation,
  usePreListInvoiceQuery,
  useListInvoiceQuery,
  useGetDetailInvoiceMutation,
} = invoiceApi;
