export interface listterminalshopParamsType {
  page: number;
  size: number;
  sort: string[];
  name?: string;
}
export type listterminalshopResponseType = {
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
      terminalShopNumber: string;
      terminalStatus: number;
      terminalRequestDate: "2025-04-05T16:10:28.263Z";
      terminalActiveDate: "2025-04-05T16:10:28.263Z";
      deviceSerial: string;
      pspId: number;
      acceptorShopNumber: string;
      uiDeviceCommodityParentResponse: {
        id: number;
        name: string;
        commodityType: number;
        connectType: number;
        modelCommodity: string;
        hasActive: boolean;
        hasPrinter: boolean;
        hasSerail: boolean;
        osType: number;
      };
      uiContractDeviceParentResponse: {
        id: number;
        name: string;
        deviceCount: number;
        devicePrices: number;
        deviceRequestType: number;
        contractMerchant: string;
        devicePrice: string;
        appCount: number;
        ownershipType: {
          id: number;
          name: {
            id: number;
          };
        };
        shopLicenseEndDate: "2025-04-05T16:10:28.263Z";
        shopLicenseStartDate: "2025-04-05T16:10:28.263Z";
        shopLicenseNo: string;
        taxCommercialCode: string;
      };
      uiBranchShopParentResponse: {
        id: number;
        name: string;
        branchShopCode: string;
        branchShopNameEn: string;
        branchShopPhone: string;
        branchShopStatus: number;
        branchShopTel: string;
        branchShopZipCode: string;
        city: string;
        dossierShop: string;
        ownershipType: string;
        rentalContractNo: string;
        rentalEndDate: "2025-04-05T16:10:28.263Z";
      };
    }
  ];
};

export type listterminalResponseType = {
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
      terminalShopNumber: string;
      terminalStatus: string;
      terminalRequestDate: string;
      terminalActiveDate: string;
      deviceSerial: string;
      pspId: number;
      acceptorShopNumber: string;
      uiDeviceCommodityParentResponse: {
        id: number;
        name: string;
        commodityType: number;
        connectType: number;
        modelCommodity: string;
        hasActive: boolean;
        hasPrinter: boolean;
        hasSerail: boolean;
        osType: number;
      };
      uiContractDeviceParentResponse: {
        id: number;
        name: string;
        deviceCount: number;
        devicePrices: number;
        deviceRequestType: number;
        contractMerchant: string;
        devicePrice: string;
        appCount: number;
        ownershipType: {
          id: number;
          name: {
            id: number;
          };
        };
        shopLicenseEndDate: string;
        shopLicenseStartDate: string;
        shopLicenseNo: string;
        taxCommercialCode: string;
      };
      uiBranchShopParentResponse: {
        id: number;
        name: string;
        branchShopCode: string;
        branchShopNameEn: string;
        branchShopPhone: string;
        branchShopStatus: number;
        branchShopTel: string;
        branchShopZipCode: string;
        city: string;
        dossierShop: string;
        ownershipType: string;
        rentalContractNo: string;
        rentalEndDate: string;
      };
    }
  ];
};
export interface listterminalParamsType {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  dossierShopId: number;
  terminalShopNumber?: string;
  terminalStatus?: number;
  fromTerminalRequestDate?: string;
  toTerminalRequestDate?: string;
  fromTerminalActiveDate?: string;
  toTerminalActiveDate?: string;
  deviceSerial?: string;
  pspId?: number;
  acceptorShopNumber?: string;
}
// export type UpdateMemorytaxhopParamsType=AddMemorytaxhopParamsType;
