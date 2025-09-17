export type listDevicePriceApiResponseType = {
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
        modelCommodity: string;
        hasActive: boolean;
        hasPrinter: boolean;
        hasSerail: boolean;
        osType: number;
      };
    }
  ];
};
export type listDevicePriceParamsType = {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  deviceActive?: number;
};
