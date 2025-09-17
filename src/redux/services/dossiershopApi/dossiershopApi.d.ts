export type dossiershopResponseType = {
  main: any;
  subCompany: any;
  thirdUser: any;
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
        },
      ];
      shopType: {
        id: number;
        name: string;
      };
      city: {
        id: number;
        name: string;
        cityCode: string;
        citySymbol: string;
        county: string;
      };
      shopSubcategory: {
        id: number;
        name: string;
        shopCategory: string;
        shopSubCategoryCode: string;
      };
      shopUnion: {
        id: number;
        name: string;
      };
      shopNameEn: string;
      shopPhone: string;
      shopTaxPayerCode: string;
      shopTel: string;
      shopZipCode: string;
      memoryTaxShopCodes: string;
    },
  ];
  defaultDossierShopId: number | null;
};
export type dossiershopParamsType = {
  page: number;
  size: number;
  sort: string[];
  id: number[];
  shopName: string;
};

export type AddDossiershopParamsType = {
  shopType: {
    id: number;
    name?: {
      id: number;
    };
  };
  city: {
    id: number;
    name?: {
      id: number;
    };
    parent?: {
      id: number;
    };
    masters?: {
      id: number;
    };
    roots?: {
      id: number;
    };
  };
  // shopSubcategory: {
  //   id: number;
  //   name?: {
  //     id: number;
  //   };
  //   parent?: {
  //     id: number;
  //   };
  // };
  shopUnion: {
    id: number;
    name?: {
      id: number;
    };
  };
  shopCode: string;
  shopEmail: string;
  shopName: string;
  // shopNameEn: string;
  shopPhone: string;
  shopSite: string;
  shopTel: string;
  shopZipCode: string;
  taxCommercialCode: string;
  shopAddress: string;
};
export type AddDossiershopResponseType = {
  id: number;
  name: string;
  ownershipType: {
    id: number;
    name: string;
    ownershipTitle: string;
  };
  shopType: {
    id: number;
    name: string;
    shopTypeTitle: string;
  };
  city: {
    id: number;
    name: string;
    cityCode: string;
    citySymbol: string;
    cityTitle: string;
    county: {
      id: number;
      name: string;
      countyCode: string;
      countyTitle: string;
      province: {
        id: number;
        name: string;
        country: {
          id: number;
          name: string;
          countryCode: string;
          countryPrephone: string;
          countrySymbol: string;
          countryTitle: string;
        };
        provinceCode: string;
        provincePrephone: string;
        provinceSymbol: string;
        provinceTitle: string;
      };
    };
  };
  // shopSubcategory: {
  //   id: number;
  //   name: string;
  //   shopCategory: {
  //     id: number;
  //     name: string;
  //     shopCategoryTitle: string;
  //   };
  //   shopSubCategoryCode: string;
  //   shopSubCategoryTitle: string;
  // };
  shopUnion: {
    id: number;
    name: string;
    shopUnionTitle: string;
  };
  shopEmail: string;
  shopName: string;
  // shopNameEn: string;
  shopPhone: string;
  shopSite: string;
  shopTaxAddvalueCode: string;
  shopTaxPayerCode: string;
  shopTel: string;
  shopZipCode: string;
  taxCommercialCode: string;
};

export type GetInitialDossiershopParamsType = {
  id: number;
};
export type GetInitialDossiershopResponseType = AddDossiershopResponseType;
export type UpdateDossiershopParamsType = AddDossiershopParamsType & {
  id: number;
};
export type UpdateDossiershopResponseType = AddDossiershopResponseType;
export type GetSummaryshopParamsType = {
  id: number;
};
export type GetSummaryshopResponseType = {
  id: numer;
  name: string;
  actionBaseButton: string;
  actionExtraButton: [
    {
      name: string;
      method: string;
      title: string;
      icon: string;
    },
  ];
  shopName: string;
  shopNameEn: string;
  shopCode: string;
  shopUnion: {
    id: numer;
    name: string;
  };
  shopSubcategory: {
    id: numer;
    name: string;
    shopCategory: { id: number; name: string };
    shopSubCategoryCode: string;
  };

  shopType: {
    id: numer;
    name: string;
  };
  city: {
    id: numer;
    name: string;
    cityCode: string;
    citySymbol: string;
    cityTitle: string;
    county: {
      id: numer;
      name: string;
      countyCode: string;
      countyTitle: string;
      province: {
        id: numer;
        name: string;
        country: {
          id: numer;
          name: string;
          countryCode: string;
          countryPrephone: string;
          countrySymbol: string;
          countryTitle: string;
        };
        provinceCode: string;
        provincePrephone: string;
        provinceSymbol: string;
        provinceTitle: string;
      };
    };
  };
  shopZipCode: string;
  shopAddress: string;
  shopTel: string;
  shopLicenseNo: string;
  shopLicenseStartDate: string;
  shopLicenseEndDate: string;
  shopTaxPayerCode: string;
  memoryTaxCode: any[{
    id: numer;
    name: string;
    dossierShop: string;
    memoryTaxCode: string;
    memoryTaxIntaStatus: numer;
    memoryTaxStatus: numer;
  }];
  contractMerchantResponses: {
    id: numer;
    name: string;
    contractDesc: string;
    contractActive: boolean;
    contractDuration: numer;
    contractExpireDate: string;
    contractStartDate: string;
    dossierShop: string;
    wantPos: boolean;
    wantApp: boolean;
    introduceCode: string;
    appCount: numer;
    deviceRequestType: string;
    packageMerchantResponse: {
      id: numer;
      name: string;
      packageName: string;
      packagePrice: numer;
      appPrice: numer;
      hasActive: boolean;
      startTime: string;
      expireTime: string;
      packageType: string;
      packageContractTime: numer;
    };
  };
  contractDeviceResponses: any[{
    id: numer;
    name: string;
    deviceCount: numer;
    devicePrices: numer;
    deviceRequestType: numer;
    contractMerchant: string;
    devicePrice: any[];
    appCount: numer;
    ownershipType: {
      id: numer;
      name: {
        id: numer;
      };
    };
    shopLicenseEndDate: string;
    shopLicenseStartDate: string;
    shopLicenseNo: string;
    taxCommercialCode: string;
  }];
  discountCode: string;
  discountPrice: numer;
};
export type UpdateSummaryshopResponseType = {
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
    },
  ];
};
export type UpdateSummaryshopParamsType = {
  id: number;
};
export type discountResponseType = {
  discountCode: string;
  discountPrice: number;
};
export type discountParamsType = {
  discountId: number;
  id: number;
  name?: string;
  discountCode: string | null;
};
export type paymentDossiershopParamsType = {
  id: number;
};
export type paymentDossiershopResponseType = {
  url: string;
  token: string;
};
export type GetDashboardResponse = {
  id: number;
  name: string;
  shopCode: string;
};
export interface GetDashboardPrams {
  id: number;
}
