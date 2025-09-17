import { createApi } from "@reduxjs/toolkit/query/react";
import {
  uploadFileListParamsType,
  uploadFileListResponseType,
  sendReqFileListParamsType,
  uploadfileResponseType,
  infoReqFileListParamsType,
  infoReqFileListResponseType,
  UploadFileArgs,
} from "./uploadfileApi";
import { createBaseQueryWithReauth } from "../../createBaseQueryWithReauth";

export const uploadfileApi = createApi({
  reducerPath: "uploadfileApi",
  refetchOnFocus: true,
  baseQuery: createBaseQueryWithReauth("/cloud/uixmerchant/api/ui/uploadfile"),
  tagTypes: ["uploadList"],
  endpoints: (builder) => ({
    uploadFileList: builder.query<
      uploadFileListResponseType,
      uploadFileListParamsType
    >({
      query: (args: uploadFileListParamsType) => ({
        url: `/list`,
        method: "POST",
        body: args,
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: ["uploadList"],
    }),
    sendReqFileList: builder.mutation<boolean, sendReqFileListParamsType>({
      query: (params: sendReqFileListParamsType) => ({
        url: `${params.id}`,
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["uploadList"],
    }),
    removeReqFileList: builder.mutation<boolean, sendReqFileListParamsType>({
      query: (params: sendReqFileListParamsType) => ({
        url: `${params.id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["uploadList"],
    }),
    infoReqFileList: builder.mutation<
      infoReqFileListResponseType,
      infoReqFileListParamsType
    >({
      query: (params: infoReqFileListParamsType) => ({
        url: `/${params.id}/cartable/${params.shopId}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    // uploadfile: builder.mutation<uploadfileResponseType, uploadfileParamsType>({
    //   query: (args: uploadfileParamsType) => ({
    //     url: "",
    //     method: "POST",
    //     body: args,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }),
    // }),
    uploadfile: builder.mutation<uploadfileResponseType, UploadFileArgs>({
      query: ({ formData }) => {
        return {
          url: "",
          method: "POST",
          body: formData,
          headers: { "setContent-Type": "None" }, //Dont Use it for Send File
        };
      },
      invalidatesTags: ["uploadList"],
    }),
  }),
});

export const {
  useUploadFileListQuery,
  useSendReqFileListMutation,
  useRemoveReqFileListMutation,
  useInfoReqFileListMutation,
  useUploadfileMutation,
} = uploadfileApi;
