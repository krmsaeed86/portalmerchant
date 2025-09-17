import { createApi } from "@reduxjs/toolkit/query/react";

import {
  AddContractmerchantParamsType,
  AddContractmerchantResponseType,
  contractmerchantParamsType,
  contractmerchantResponseType,
  getContractMerchantParamsType,
  getContractMerchantResponseType,
  UpdateContractmerchantParamsType,
  UpdateContractmerchantResponseType,
  fullDataResponseType,
  fullDataParamsType,
  contractextensionResponseType,
  contractextensionParamsType,
  paymentInvoiceParamsType,
  showInvoiceResponseType,
  paymentInvoiceResponseType,
} from "./contractmerchantApi";
import {
  discountParamsType,
  discountResponseType,
} from "../dossiershopApi/dossiershopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const contractmerchantApi = createApi({
  reducerPath: "contractmerchantApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth(
    "/cloud/uixmerchant/api/ui/contractmerchant"
  ),
  tagTypes: ["getContractMerchant"],
  endpoints: (builder) => ({
    getContractMerchant: builder.query<
      getContractMerchantResponseType,
      getContractMerchantParamsType
    >({
      query: (params: getContractMerchantParamsType) => ({
        url: `/${params.id}/shop`,
        method: "GET",
        // params: params,
      }),
      providesTags: ["getContractMerchant"],
    }),
    listContractmerchant: builder.query<
      contractmerchantResponseType,
      contractmerchantParamsType
    >({
      query: (args: contractmerchantParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
    }),
    addContractmerchant: builder.mutation<
      AddContractmerchantResponseType,
      AddContractmerchantParamsType
    >({
      query: (args: AddContractmerchantParamsType) => ({
        url: ``,
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["getContractMerchant"],
    }),
    updateContractmerchant: builder.mutation<
      UpdateContractmerchantResponseType,
      UpdateContractmerchantParamsType
    >({
      query: (args: UpdateContractmerchantParamsType) => ({
        url: ``,
        method: "PUT",
        body: args,
      }),
      invalidatesTags: ["getContractMerchant"],
    }),
    discount: builder.mutation<discountResponseType, discountParamsType>({
      query: (args: discountParamsType) => ({
        url: `/${args.discountId}/shop/discount`,
        method: "PATCH",
        body: { id: args.id, discountCode: args.discountCode },
      }),
    }),
    fullData: builder.query<fullDataResponseType, fullDataParamsType>({
      query: (param: fullDataParamsType) => ({
        url: `/${param.id}/full`,
        method: "GET",
        params: param,
      }),
    }),
    contractextension: builder.mutation<
      contractextensionResponseType,
      contractextensionParamsType
    >({
      query: (args: contractextensionParamsType) => ({
        url: `/${args.contractId}/shop/contractextension`,
        method: "PUT",
        body: args,
      }),
    }),
    paymentInvoice: builder.mutation<
      paymentInvoiceResponseType,
      paymentInvoiceParamsType
    >({
      query: (param: paymentInvoiceParamsType) => ({
        url: `/${param.contractId}/payment-invoice`,
        method: "POST",
        params: param,
      }),
    }),
    showInvoice: builder.mutation<
      showInvoiceResponseType,
      paymentInvoiceParamsType
    >({
      query: (param: paymentInvoiceParamsType) => ({
        url: `/${param.contractId}/show-invoice`,
        method: "GET",
        params: param,
      }),
    }),
  }),
});

export const {
  useGetContractMerchantQuery,
  useListContractmerchantQuery,
  useAddContractmerchantMutation,
  useUpdateContractmerchantMutation,
  useDiscountMutation,
  useFullDataQuery,
  useContractextensionMutation,
  usePaymentInvoiceMutation,
  useShowInvoiceMutation,
} = contractmerchantApi;
