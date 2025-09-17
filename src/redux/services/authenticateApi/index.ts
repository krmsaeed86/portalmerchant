import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CaptchaResponseType,
  CheckOtpFormParamType,
  ILoginDataResponse,
  IOtpDataResponse,
  IRegisterDataResponse,
  LoginFormParamType,
  reLoginFormParamType,
  LoginOtpFormParamType,
  RegisterLegalFormParamType,
  RegisterVerifyFormParamType,
} from "./authenticateApi";

export const authenticateApi = createApi({
  reducerPath: "authenticateApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "/cloud/uixmerchant/api/authenticate",
  }),

  endpoints: (builder) => ({
    login: builder.mutation<ILoginDataResponse, LoginFormParamType>({
      query: (params) => ({
        url: `/login`,
        method: "POST",
        body: params,
      }),
    }),
    reLogin: builder.mutation<ILoginDataResponse, reLoginFormParamType>({
      query: (params) => ({
        url: `/re-login`,
        method: "POST",
        body: params,
      }),
    }),

    loginOtp: builder.mutation<IOtpDataResponse, LoginOtpFormParamType>({
      query: (params) => ({
        url: `/login-otp`,
        method: "POST",
        body: params,
      }),
    }),

    checkOtp: builder.mutation<any, CheckOtpFormParamType>({
      query: (params) => ({
        url: `/check-otp`,
        method: "POST",
        body: params,
      }),
    }),

    register: builder.mutation<
      IRegisterDataResponse,
      RegisterLegalFormParamType
    >({
      query: (params) => ({
        url: `/register`,
        method: "POST",
        body: params,
      }),
    }),

    registerVerify: builder.mutation<any, RegisterVerifyFormParamType>({
      query: (params) => ({
        url: `/register-verify`,
        method: "POST",
        body: params,
      }),
    }),
    captcha: builder.query<CaptchaResponseType, void>({
      query: () => ({
        url: `/captcha`,
        method: "GET",
      }),
    }),
    // getTrackResult: builder.mutation<TrackResultType, { trackCode: string }>({
    //   query: ({ trackCode = '' }) => ({
    //     url: `Contact/GetTrackResult?TrackingCode=${trackCode}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useLoginOtpMutation,
  useCheckOtpMutation,
  useRegisterMutation,
  useRegisterVerifyMutation,
  useCaptchaQuery,
  useReLoginMutation,
} = authenticateApi;
