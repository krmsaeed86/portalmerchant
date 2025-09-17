export type listBranchesResponseType = {
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
      branchShopCode: string;
      branchShopNameEn: string;
      branchShopPhone: string;
      branchShopStatus: number;
      branchShopTel: string;
      branchShopZipCode: string;
      city: {
        id: number;
        name: string;
        cityCode: string;
        citySymbol: string;
        county: string;
      };
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
      ownershipType: {
        id: number;
        name: string;
      };
      rentalContractNo: string;
      rentalEndDate: string;
      createDate: string;
      branchShopAddress: string;
      hasMain: boolean;
      branchShopEmail: string;
      branchShopSite: string;
    }
  ];
};
export type listBranchesParamsType = {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  dossierShopId: number;
  branchShopCode?: string;
  branchShopNameEn?: string;
  branchShopPhone?: string;
  branchShopStatus?: number;
  branchShopTel?: string;
  branchShopZipCode?: string;
  city?: {
    id: number[];
    cityCode: string;
    citySymbol: string;
  };
  ownershipType?: {
    id: number[];
    ownershipTitle: string;
  };
  rentalContractNo?: string;
  fromRentalEndDate?: string;
  toRentalEndDate?: string;
};
export type listRefBranchesParamsType = {
  name?: string;
  parentId?: number;
  masterId?: number;
  page?: number;
  size?: number;
  sort?: string[];
};
export type listRefBranchesResponseType = {
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: [
    {
      id: number;
      name: string;
    }
  ];
};
export type addBranchshopParamsType = {
  memoryTaxShop: {
    id: number;
    name?: {
      id: number;
    };
  };
  branchShopCode: string;
  branchShopEmail: string;
  branchShopName: string;
  branchShopNameEn: string;
  branchShopPhone: string;
  branchShopSite: string;
  branchShopStatus?: number;
  branchShopTel: string;
  branchShopZipCode: string;
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
  dossierShop?: {
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
  ownershipType: {
    id: number;
    name?: {
      id: number;
    };
  };
  shopType: {
    id: number;
    name?: {
      id: number;
    };
  };
  rentalContractNo?: string;
  rentalEndDate?: string;
};
