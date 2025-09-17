import { createApi } from "@reduxjs/toolkit/query/react";
import { InfoResponseType, InfoParamType } from "./uiApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const uiApi = createApi({
  reducerPath: "uiApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui"),

  endpoints: (builder) => ({
    getCountry: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/country/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getProvince: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/province/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getCounty: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/county/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getCity: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/city/ref`,
        method: "GET",
        params: args,
      }),
    }),

    getShopUnion: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/shopunion/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getShopcategory: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/shopcategory/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getShopsubcategory: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/shopsubcategory/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getShopType: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/shoptype/ref`,
        method: "GET",
        params: args,
      }),
    }),
    getTaxCommodityList: builder.query<InfoResponseType, InfoParamType>({
      query: (args: InfoParamType) => ({
        url: `/taxcommodityservices/ref`,
        method: "GET",
        params: args,
      }),
    }),
  }),
});

export const {
  useGetCountryQuery,
  useGetCityQuery,
  useGetProvinceQuery,
  useGetCountyQuery,
  useGetShopUnionQuery,
  useGetShopcategoryQuery,
  useGetShopsubcategoryQuery,
  useGetShopTypeQuery,
  useGetTaxCommodityListQuery,
} = uiApi;
