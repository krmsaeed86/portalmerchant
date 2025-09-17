export interface uploadFileListParamsType {
  dossierShopId: number;
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  uploadFileName: string | null;
  fromUploadCreateDate: string | null;
  toUploadCreateDate: string | null;
  uploadHeaderCount: number | null;
  uploadStatus: string | null;
}
export type uploadFileListResponseType = {
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: [
    {
      id: number;
      name: string;
      actionBaseButton: string;
      actionExtraButton: [
        {
          name: string;
          method: string;
          title: string;
          icon: string;
        }
      ];
      saveCorrectCount: number;
      uploadCorrectCount: number;
      uploadCreateDate: string;
      uploadHeaderCount: number;
      saveErrorCount: number;
      loadErrorCount: number;
      uploadStatus: string;
      uploadFileName: string;
      fileInvoiceType: string;
    }
  ];
};
export interface sendReqFileListParamsType {
  id: number;
}
export type uploadfileResponseType = {
  id: number;
  name: string;
  saveCorrectCount: number;
  saveFileName: string;
  uploadCorrectCount: number;
  uploadCreateDate: string;
  uploadFileType: string;
  uploadHeaderCount: number;
  uploadName: string;
  uploadPaymentCount: number;
  uploadStatus: string;
  fileInvoiceType: string;
};
interface UploadFileArgs {
  formData: FormData;
  options?: {
    onUploadProgress?: (progressEvent: ProgressEvent) => void;
  };
}
export interface infoReqFileListParamsType {
  id: number;
  shopId: number;
}

export type infoReqFileListResponseType = {
  id: number;
  name: string;
  saveCorrectCount: number;
  saveErrorCount: number;
  saveFileName: string;
  saveFilePath: string;
  uploadBodyCount: number;
  uploadCorrectCount: number;
  uploadCreateDate: string;
  uploadFileName: string;
  uploadFilePattern: number;
  uploadFileSize: number;
  uploadFileType: string;
  uploadHeaderCount: number;
  uploadName: string;
  uploadPaymentCount: number;
  uploadStatus: string;
  fileInvoiceType: string;
  memoryTaxCode: string;
  userAcceptor: {
    id: number;
    name: string;
    accessBo: boolean;
    accountId: string;
    merchantId: string;
    officeId: string;
    personId: string;
    usersActive: boolean;
    usersAdminLevel: number;
    usersEmail: string;
    usersFailure: number;
    usersGuidDate: string;
    usersInactiveTime: string;
    usersMobile: string;
    usersStatus: number;
    usersWsActive: boolean;
    usersWsName: string;
  };
  userAcceptorDate: string;
};
