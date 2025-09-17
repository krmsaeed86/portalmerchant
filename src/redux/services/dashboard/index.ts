import { createApi } from "@reduxjs/toolkit/query/react";

import {
  getDashboardAmarResponseType,
  getDashboardAmarParamsType,
  getDashboardAmarCountAllResponseType,
  getDashboardAmarTotalSentBillResponseType,
  getDashboardAmarStatusResponseType,
} from "./dashboardApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  //refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/dashboard"),
  tagTypes: ["getFactor"],

  endpoints: (builder) => ({
    getDashboardAmar: builder.mutation<
      getDashboardAmarResponseType,
      getDashboardAmarParamsType
    >({
      query: (param: getDashboardAmarParamsType) => ({
        url: `/amar/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),

    getDashboardAmarTotalSendBill: builder.mutation<
      getDashboardAmarTotalSentBillResponseType,
      getDashboardAmarParamsType
    >({
      query: (param: getDashboardAmarParamsType) => ({
        url: `/amar/totalSentBill/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),

    getDashboardAmarDaily: builder.mutation<
      getDashboardAmarResponseType,
      getDashboardAmarParamsType
    >({
      query: (param: getDashboardAmarParamsType) => ({
        url: `/amar/daily/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),

    getDashboardAmarCountALL: builder.mutation<
      getDashboardAmarCountAllResponseType,
      getDashboardAmarParamsType
    >({
      query: (param: getDashboardAmarParamsType) => ({
        url: `/amar/countAll/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),

    getDashboardAmarStatus: builder.mutation<
      getDashboardAmarStatusResponseType,
      getDashboardAmarParamsType
    >({
      query: (param: getDashboardAmarParamsType) => ({
        url: `/amar/status/${param.shopId}`,
        method: "GET",
        param: param,
      }),
    }),
  }),
});

export const {
  useGetDashboardAmarMutation,
  useGetDashboardAmarTotalSendBillMutation,
  useGetDashboardAmarDailyMutation,
  useGetDashboardAmarCountALLMutation,
  useGetDashboardAmarStatusMutation,
} = dashboardApi;
