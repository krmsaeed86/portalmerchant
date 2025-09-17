export type ListPackagemerchantResponseType = {
  number: number;
  numberOfElements: number;
  size: number;
  totalPages: number;
  content: [
    {
      hasActive: boolean;
      actionBaseButton: string;
      expireTime: string;
      packageContractTime: number;
      actionExtraButton: [
        {
          method: string;
          name: string;
          icon: string;
          title: string;
        }
      ];
      name: string;
      packagePrice: number;
      startTime: string;
      id: number;
      packageName: string;
      packageType: string;
    }
  ];
  totalElements: number;
};
export type ListPackagemerchantParamsType = {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  hasPos: boolean;
  hasApp: boolean;
};
