import { createApi } from "@reduxjs/toolkit/query/react";

import {
  RefUnitMeasurementResponseType,
  RefUnitMeasurementParamsType,
} from "./unitmeasurementApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const unitmeasurementApi = createApi({
  reducerPath: "unitmeasurementApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth(
    "/cloud/uixmerchant/api/ui/unitmeasurement"
  ),
  tagTypes: [],
  endpoints: (builder) => ({
    RefUnitMeasurement: builder.query<
      RefUnitMeasurementResponseType,
      RefUnitMeasurementParamsType
    >({
      query: (params: RefUnitMeasurementParamsType) => ({
        url: `/ref`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useRefUnitMeasurementQuery } = unitmeasurementApi;
