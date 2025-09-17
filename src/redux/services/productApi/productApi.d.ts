export interface stuffShopListParamsType {
  dossierShopId: number;
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  innerStuffCode: string | null;
  commodityServicesTitle: string | null;
}
export type stuffShopListResponseType = {
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
      commodityServicesCode: string;
      commodityServicesTitle: string,
      innerStuffCode: string;
      stuffDefaultPrice: number,
      stuffStatus: string,
      vatRate: 0
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
