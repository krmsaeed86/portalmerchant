
import { createApi, } from "@reduxjs/toolkit/query/react";
import {
  callbacResponseType,
  callbackParamsType
} from "./paymentApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/psp"),
  endpoints: (builder) => ({

    // PaymentInquiry: builder.mutation<callbacResponseType, callbackParamsType>({
    //   query: (params: callbackParamsType) => ({
    //     url: `/callback`,
    //     method: "POST",
    //     body: params,
    //   }),

    PaymentInquiry: builder.query<
      callbacResponseType,
      callbackParamsType
    >({
      query: (args: callbackParamsType) => ({
        url: `/payment-inquiry`,
        method: "POST",
        body: args,
      }),
    }),

  }),
});

export const {
  usePaymentInquiryQuery,
} = paymentApi;
