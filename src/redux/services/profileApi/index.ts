import { createApi } from "@reduxjs/toolkit/query/react";
import {
  profileResponseType,
  profileParamsType,
  getProfileResponseType,
  sendMobileOtpResponseType,
  changeMobileOtpParamType,
  changeUsernameOtpParamType,
} from "./profileApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const profileApi = createApi({
  reducerPath: "profileApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/profile"),

  endpoints: (builder) => ({
    personProfile: builder.mutation<profileResponseType, profileParamsType>({
      query: (params: profileParamsType) => ({
        url: `/person-profile`,
        method: "POST",
        body: params,
      }),
    }),
    profile: builder.query<getProfileResponseType, void>({
      query: () => ({
        url: `/profile`,
        method: "GET",
      }),
    }),
    sendMobileOtp: builder.mutation<sendMobileOtpResponseType, void>({
      query: () => ({
        url: `/send-mobile-otp`,
        method: "GET",
      }),
    }),
    changeMobileOtp: builder.mutation<boolean, changeMobileOtpParamType>({
      query: (params: changeMobileOtpParamType) => ({
        url: `/change-mobile-otp`,
        method: "POST",
        body: params,
      }),
    }),
    //
    sendUsernameOtp: builder.mutation<sendMobileOtpResponseType, void>({
      query: () => ({
        url: `/send-username-otp`,
        method: "GET",
      }),
    }),
    changeUsernameOtp: builder.mutation<boolean, changeUsernameOtpParamType>({
      query: (params: changeUsernameOtpParamType) => ({
        url: `/change-username-otp`,
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const {
  usePersonProfileMutation,
  useProfileQuery,
  useSendMobileOtpMutation,
  useChangeMobileOtpMutation,
  useSendUsernameOtpMutation,
  useChangeUsernameOtpMutation,
} = profileApi;
