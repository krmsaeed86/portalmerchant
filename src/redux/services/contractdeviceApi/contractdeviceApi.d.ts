export type getContractDeviceResponseType = contractDeviceResponseType;
//export type getContractDeviceResponseType = updateContractDeviceParamsType;
export type getContractDeviceParamsType = { id: number };

export type contractDeviceParamsType = {
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
  deviceRequestType: string;
  appCount: number;
  contractMerchantId: number;
  ownershipType: {
    id: number;
    name?: string;
  };
  shopLicenseEndDate: string;
  shopLicenseStartDate: string;
  shopLicenseNo: string;
  taxCommercialCode: string;
};
export type updateContractDeviceResponseType = {
  saved: boolean;
  // id: number;
  // name: string;
  // deviceCount: number;
  // deviceDesc: string;
  // devicePrices: number;
  // deviceRequestType: number;
  // appCount: number;
  // contractMerchant: {
  //   id: number;
  //   name: string;
  //   contractDesc: string;
  //   contractActive: boolean;
  //   contractExpireDate: string;
  //   contractStartDate: string;
  //   dossierShop: string;
  //   users: string;
  //   wantPos: boolean;
  //   wantApp: boolean;
  //   introduceCode: string;
  // };
  // devicePrice: {
  //   id: number;
  //   name: string;
  //   deviceActive: boolean;
  //   deviceEnd: string;
  //   devicePrice: number;
  //   deviceStart: string;
  //   deviceType: number;
  //   deviceCommodity: {
  //     id: number;
  //     name: string;
  //     commodityType: number;
  //     connectType: number;
  //     modelCommodity: {
  //       id: number;
  //       name: string;
  //       brandCommodity: {
  //         id: number;
  //         name: string;
  //         brandCommodityDesc: string;
  //         brandCommodityName: string;
  //         brandCommodityTitle: string;
  //       };
  //       modelCommodityDesc: string;
  //       modelCommodityName: string;
  //       modelCommodityTitle: string;
  //     };
  //     hasActive: boolean;
  //     hasPrinter: boolean;
  //     hasSerail: boolean;
  //     osType: string;
  //     supplierName: string;
  //   };
  // };
  // ownershipType: {
  //   id: number;
  //   name?: {
  //     id: number;
  //   };
  // };
  // shopLicenseEndDate: string;
  // shopLicenseStartDate: string;
  // shopLicenseNo: string;
  // taxCommercialCode: string;
};
export type updateContractDeviceParamsType = {
  id: number;
  deviceAndCount: any[{
    id: number;
    devices: {
      id: number;
      name?: {
        id: number;
      };
    };
    count: number;
  }];
  deviceRequestType: string;
  contractMerchantId: number;
  appCount: number;
  ownershipType?: {
    id: number;
    name?: {
      id: number;
    };
  };

  shopLicenseEndDate?: string;
  shopLicenseStartDate?: string;
  shopLicenseNo?: string;
  taxCommercialCode?: string;
  wantApp?: boolean;
  wantPos?: boolean;
  shopSubcategory: {
    id: number;
    name?: { id?: number };
    parent?: { id: number };
  };
  shopNameEn: string;
  rentalContractNo?:number;
  rentalEndDate?:string;
};
