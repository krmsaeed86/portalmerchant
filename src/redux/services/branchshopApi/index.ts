import { createApi } from "@reduxjs/toolkit/query/react";

import {
  listBranchesResponseType,
  listBranchesParamsType,
  addBranchshopParamsType,
  listRefBranchesParamsType,
  listRefBranchesResponseType,
} from "./branchshopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const branchshopApi = createApi({
  reducerPath: "branchshopApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/branchshop"),
  tagTypes: ["getBranches"],
  endpoints: (builder) => ({
    listBranches: builder.query<
      listBranchesResponseType,
      listBranchesParamsType
    >({
      query: (args: listBranchesParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
      providesTags: ["getBranches"],
    }),
    addBranchshop: builder.mutation<boolean, addBranchshopParamsType>({
      query: (args: addBranchshopParamsType) => ({
        url: ``,
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["getBranches"],
    }),
    listRefBranchs: builder.query<
      listRefBranchesResponseType,
      listRefBranchesParamsType
    >({
      query: (params: listRefBranchesParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: params,
      }),
    }),
    // showInvoice: builder.mutation<showInvoiceResponseType, paymentInvoiceParamsType>({
    //   query: (param: paymentInvoiceParamsType) => ({
    //     url: `/${param.contractId}/show-invoice`,
    //     method: "GET",
    //     params: param,
    //   }),
    // }),
  }),
});

export const {
  useListBranchesQuery,
  useAddBranchshopMutation,
  useListRefBranchsQuery,
} = branchshopApi;
