import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ssoRegisterParamType,
  ssoRegisterResponseType,
  ssoTokenResponseType,
  ssoTokenParamType,
} from "./ssoApi";

export const ssoApi = createApi({
  reducerPath: "ssoApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "/cloud/uixmerchant/api/sso",
  }),

  endpoints: (builder) => ({
    ssoRegister: builder.mutation<
      ssoRegisterResponseType,
      ssoRegisterParamType
    >({
      query: (params) => ({
        url: `/register`,
        method: "POST",
        body: params,
      }),
    }),

    ssoToken: builder.query<ssoTokenResponseType, ssoTokenParamType>({
      query: (params: ssoTokenParamType) => ({
        url: `/token`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useSsoRegisterMutation, useSsoTokenQuery } = ssoApi;
