import { createApi } from "@reduxjs/toolkit/query/react";
import {
  getContractDeviceParamsType,
  getContractDeviceResponseType,
  updateContractDeviceParamsType,
  updateContractDeviceResponseType,
} from "./contractdeviceApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const contractdeviceApi = createApi({
  reducerPath: "contractdeviceApi",
  refetchOnFocus: false,
  baseQuery: createBaseQueryWithReauth(
    "/cloud/uixmerchant/api/ui/contractdevice"
  ),
  tagTypes: ["GetContractDetail"],
  endpoints: (builder) => ({
    getContractDevice: builder.query<
      getContractDeviceResponseType,
      getContractDeviceParamsType
    >({
      query: (params: getContractDeviceParamsType) => ({
        url: `/${params.id}/shop`,
        method: "GET",
        // params: params,
      }),
      providesTags: ["GetContractDetail"],
    }),
    // addContractDevice: builder.mutation<
    //   contractDeviceResponseType,
    //   contractDeviceParamsType
    // >({
    //   query: (args: contractDeviceParamsType) => ({
    //     url: ``,
    //     method: "POST",
    //     body: args,
    //   }),
    // }),

    updateContractDevice: builder.mutation<
      updateContractDeviceResponseType,
      updateContractDeviceParamsType
    >({
      query: (args: updateContractDeviceParamsType) => ({
        url: `${args.id}/shop`,
        method: "PUT",
        body: args,
      }),
      invalidatesTags: ["GetContractDetail"],
    }),
  }),
});

export const { useGetContractDeviceQuery, useUpdateContractDeviceMutation } =
  contractdeviceApi;
