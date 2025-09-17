import { createApi } from "@reduxjs/toolkit/query/react";

import {
  AddMemorytaxhopParamsType,
  listmemorytaxhopParamsType,
  listmemorytaxhopResponseType,
  memorytaxhopParamsType,
  memorytaxhopResponseType,
  switchStatusMemoryTaxShopParamsType,
  UpdateMemorytaxhopParamsType,
  memorytaxshopRefResponseType,
  memorytaxshopRefParamsType,
  addMemoryTaxShopParamsType,
} from "./memorytaxshopApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const memorytaxshopApi = createApi({
  reducerPath: "memorytaxshopApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/memorytaxshop"),
  tagTypes: ["getDataMemorytaxShop", "getDataMemorytaxShopMain"],
  endpoints: (builder) => ({
    listMemorytaxhopMain: builder.query<
      listmemorytaxhopResponseType,
      listmemorytaxhopParamsType
    >({
      query: (args: listmemorytaxhopParamsType) => ({
        url: `list`,
        method: "POST",
        body: args,
      }),
      providesTags: ["getDataMemorytaxShopMain"],
    }),
    listMemorytaxhop: builder.query<
      memorytaxhopResponseType,
      memorytaxhopParamsType
    >({
      query: (param: memorytaxhopParamsType) => ({
        url: `/${param.id}/shop`,
        method: "GET",
      }),
      providesTags: ["getDataMemorytaxShop"],
    }),
    addMemorytaxhop: builder.mutation<boolean, AddMemorytaxhopParamsType>({
      query: (args: AddMemorytaxhopParamsType) => ({
        url: ``,
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["getDataMemorytaxShop"],
    }),
    updateMemorytaxhop: builder.mutation<boolean, UpdateMemorytaxhopParamsType>(
      {
        query: (args: UpdateMemorytaxhopParamsType) => ({
          url: ``,
          method: "PUT",
          body: args,
        }),
        invalidatesTags: ["getDataMemorytaxShop"],
      }
    ),
    switchStatusMemoryTaxShop: builder.mutation<
      boolean,
      switchStatusMemoryTaxShopParamsType
    >({
      query: (params: switchStatusMemoryTaxShopParamsType) => ({
        url: `/${params.id}/change-status/${params.shopId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["getDataMemorytaxShopMain"],
    }),
    memorytaxshopRef: builder.query<
      memorytaxshopRefResponseType,
      memorytaxshopRefParamsType
    >({
      query: (params: memorytaxshopRefParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: params,
      }),
    }),
    addMemoryTaxShop: builder.mutation<boolean, addMemoryTaxShopParamsType>({
      query: (args: addMemoryTaxShopParamsType) => ({
        url: `/add`,
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["getDataMemorytaxShopMain"],
    }),
  }),
});

export const {
  useListMemorytaxhopMainQuery,
  useListMemorytaxhopQuery,
  useAddMemorytaxhopMutation,
  useUpdateMemorytaxhopMutation,
  useSwitchStatusMemoryTaxShopMutation,
  useMemorytaxshopRefQuery,
  useAddMemoryTaxShopMutation
} = memorytaxshopApi;
