import { createApi } from "@reduxjs/toolkit/query/react";

import {
  dossiershopResponseType,
  dossiershopParamsType,
  AddDossiershopParamsType,
  AddDossiershopResponseType,
  GetInitialDossiershopResponseType,
  GetInitialDossiershopParamsType,
  UpdateDossiershopResponseType,
  UpdateDossiershopParamsType,
  GetSummaryshopResponseType,
  GetSummaryshopParamsType,
  UpdateSummaryshopParamsType,
  UpdateSummaryshopResponseType,
  paymentDossiershopParamsType,
  paymentDossiershopResponseType,
  GetDashboardResponse,
  GetDashboardPrams,
} from "./dossiershopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const dossiershopApi = createApi({
  reducerPath: "dossiershopApi",
  refetchOnFocus: false,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/dossiershop"),
  tagTypes: ["getDataDossier", "getDataSummaryDossier"],
  endpoints: (builder) => ({
    list: builder.query<dossiershopResponseType, dossiershopParamsType>({
      query: (args: dossiershopParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
    }),
    listMutation: builder.mutation<
      dossiershopResponseType,
      dossiershopParamsType
    >({
      query: (args: dossiershopParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
      }),
    }),
    addDossiershop: builder.mutation<
      AddDossiershopResponseType,
      AddDossiershopParamsType
    >({
      query: (args: AddDossiershopParamsType) => ({
        url: ``,
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["getDataDossier", "getDataSummaryDossier"],
    }),
    getInitialDossiershop: builder.query<
      GetInitialDossiershopResponseType,
      GetInitialDossiershopParamsType
    >({
      query: (params: GetInitialDossiershopParamsType) => ({
        url: `/${params.id}`,
        method: "GET",
        params: params,
      }),
      providesTags: ["getDataDossier"],
    }),
    updateDossiershop: builder.mutation<
      UpdateDossiershopResponseType,
      UpdateDossiershopParamsType
    >({
      query: (args: UpdateDossiershopParamsType) => ({
        url: `/${args.id}`,
        method: "PUT",
        body: args,
      }),
      invalidatesTags: ["getDataDossier", "getDataSummaryDossier"],
    }),
    getSummaryShop: builder.query<
      GetSummaryshopResponseType,
      GetSummaryshopParamsType
    >({
      query: (params: GetSummaryshopParamsType) => ({
        url: `/summary/${params.id}`,
        method: "GET",
      }),
      providesTags: ["getDataSummaryDossier"],
    }),
    updateSummaryShop: builder.mutation<
      UpdateSummaryshopResponseType,
      UpdateSummaryshopParamsType
    >({
      query: (params: UpdateSummaryshopParamsType) => ({
        url: `/summary/${params.id}`,
        method: "PUT",
      }),
    }),
    paymentDossiershop: builder.mutation<
      paymentDossiershopResponseType,
      paymentDossiershopParamsType
    >({
      query: (params: paymentDossiershopParamsType) => ({
        url: `/payment/${params.id}`,
        method: "PATCH",
      }),
    }),
    GetDashboard: builder.query<GetDashboardResponse, GetDashboardPrams>({
      query: (params: GetDashboardPrams) => ({
        url: `/${params.id}/dashboard`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useListQuery,
  useListMutationMutation,
  useAddDossiershopMutation,
  useGetInitialDossiershopQuery,
  useUpdateDossiershopMutation,
  useGetSummaryShopQuery,
  useUpdateSummaryShopMutation,
  usePaymentDossiershopMutation,
  useGetDashboardQuery,
} = dossiershopApi;
