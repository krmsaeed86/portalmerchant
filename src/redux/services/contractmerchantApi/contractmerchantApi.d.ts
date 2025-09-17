export type AddContractmerchantParamsType = {
  dossierShopId: number;
  wantPos: boolean;
  wantApp: boolean;
  merchantPackage: {
    id: number;
    name?: {
      id: number;
    };
  };
  introduceCode: string;
  contractDuration: number;
  invoiceCountPerYear?: number;
  invoiceBillPerYear?: number;
};
export type AddContractmerchantResponseType = {
  id: number;
  name: string;
  contractDesc: string;
  contractExpireDate: string;
  contractStartDate: string;
  contractStatus: string;
  dossierShop: number;
  wantPos: boolean;
  wantApp: boolean;
  introduceCode: string;
  contractDuration: number;
  invoiceCountPerYear: number;
  invoiceBillPerYear: number;
};

export type UpdateContractmerchantParamsType = {
  id?: number;
  name?: string;
  creator?: string;
  creationDateTime?: string;
  modifier?: string;
  lastModificationDateTime?: string;
  dossierShopId: number;
  wantPos: boolean;
  wantApp: boolean;
  merchantPackage: {
    id: number;
    name?: {
      id: number;
    };
  };
  introduceCode?: string;
  contractDuration?: number;
  invoiceCountPerYear?: number;
  invoiceBillPerYear?: number;
};
export type UpdateContractmerchantResponseType =
  AddContractmerchantResponseType;

export type contractmerchantResponseType = {
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: [
    {
      contractDraftNumber: string;
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
      contractExpireDate: string;
      contractNumber: string;
      contractStartDate: string;
      contractStatus: string;
      serviceStartDate: string;
      contractDuration: number;
      wantPos: boolean;
      wantApp: boolean;
      finalPrice: number;
    }
  ];
};
export type contractmerchantParamsType = {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  toContractExpireDate?: string;
  contractNumber?: string;
  contractStatus?: number;
  dossierShopId?: number;
};

export type getContractMerchantResponseType = {
  id: number;
  name: string;
  contractActive: boolean;
  contractDesc: string;
  contractExpireDate: string;
  contractNumber: string;
  contractStartDate: string;
  contractStatus: string;
  dossierShop: {
    id: number;
    name: string;
    ownershipType: string;
    shopType: string;
    shopCategory: string;
    city: string;
    shopSubcategory: string;
    shopUnion: string;
    shopNameEn: string;
    shopPhone: string;
    shopTaxPayerCode: string;
    shopTel: string;
    shopZipCode: string;
    taxCommercialCode: string;
  };
  packageMerchant: {
    id: number;
    name: string;
    packageName: string;
    packagePrice: number;
    hasActive: boolean;
    startTime: string;
    expireTime: string;
    packageType: string;
    packageContractTime: number;
  };
  wantPos: boolean;
  wantApp: boolean;
  introduceCode: string;
  contractDuration: number;
  invoiceCountPerYear: number;
  invoiceBillPerYear: number;
};
export type getContractMerchantParamsType = { id: number };
export type fullDataResponseType = {
  id: number;
  name: string;
  contractDesc: string;
  contractNumber: string;
  contractStartDate: string;
  contractExpireDate: string;
  contractDuration: number;
  wantPos: boolean;
  wantApp: boolean;
  appCount: number;

  packageMerchant: {
    id: number;
    name: string;
    packageName: string;
    packagePrice: number;
    appPrice: number;
    hasActive: boolean;
    startTime: string;
    expireTime: string;
    packageType: string;
    packageContractTime: number;
  };
  contractDevice: [
    {
      id: number;
      devicePrice: {
        id: number;
        name: string;
        deviceActive: boolean;
        deviceEnd: string;
        devicePrice: number;
        deviceStart: string;
        deviceType: number;
        deviceCommodity: {
          id: number;
          name: string;
          commodityType: number;
          connectType: number;
          modelCommodity: {
            id: number;
            name: string;
            brandCommodity: {
              id: number;
              name: string;
              brandCommodityDesc: string;
              brandCommodityName: string;
              brandCommodityTitle: string;
            };
            modelCommodityDesc: string;
            modelCommodityName: string;
            modelCommodityTitle: string;
          };
          hasActive: boolean;
          hasPrinter: boolean;
          hasSerail: boolean;
          osType: string;
          supplierName: string;
        };
      };
      count: number;
    }
  ];
};
export type fullDataParamsType = {
  id: number;
};

export type contractextensionResponseType = {
  id: number;
  name: string;
  contractActive: boolean;
  contractDesc: string;
  contractExpireDate: string;
  contractNumber: string;
  contractStartDate: string;
  contractStatus: string;
  dossierShop: {
    id: number;
    name: string;
    ownershipType: string;
    shopType: string;
    shopCategory: string;
    city: string;
    shopSubcategory: string;
    shopUnion: string;
    shopNameEn: string;
    shopPhone: string;
    shopTaxPayerCode: string;
    shopTel: string;
    shopZipCode: string;
    taxCommercialCode: string;
  };
  packageMerchant: {
    id: number;
    name: string;
    packageName: string;
    packagePrice: number;
    appPrice: number;
    hasActive: boolean;
    startTime: string;
    expireTime: string;
    packageType: string;
    packageContractTime: number;
  };
  wantPos: boolean;
  wantApp: boolean;
  introduceCode: string;
  contractDuration: number;
  invoiceCountPerYear: number;
  invoiceBillPerYear: number;
  discountResponse: {
    discountCode: string;
    discountPrice: number;
  };
  appCount: number;
};
export type contractextensionParamsType = {
  contractId: number;
  dossierShopId: number;
  changeWantPos: boolean;
  changeWantApp: boolean;
  changeMerchantPackage: {
    id: number;
    name?: {
      id: number;
    };
  };
  changeDiscountCode?: string | null;
  changeContractDuration: number;
  changeAppCount: number;
  changeDeviceAndCount: any[{
    id: number;
    devices: {
      id: number;
      name?: {
        id: number;
      };
    };
    count: number;
  }];
  changeIntroduceCode?: string;
};

export type paymentInvoiceParamsType = {

  contractId:number
};
export type paymentInvoiceResponseType={
    token: string;
  url: string;
}
export type showInvoiceResponseType = {
  sumAllDevicePrices: number;
  sumAllAppPrices: number;
  sumAllPackagePrices: number;
  beforePrice: number;
  discountPrice: number;
  finalPrice: number;
  details: [
    {
      title: string;
      fee: number;
      count: number;
      sum: number;
    }
  ];
};
