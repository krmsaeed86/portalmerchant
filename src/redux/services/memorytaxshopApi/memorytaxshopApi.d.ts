export type memorytaxhopResponseType = {
  content: any;
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
  dossierShop: number;
  memoryTaxCode: string;
  memoryTaxIntaStatus: boolean;
  memoryTaxStatus: boolean;
  creationDateTime: string;
  hasApi: boolean;
  hasFile: boolean;
  hasForm: boolean;
  hasPos: boolean;
};
export type memorytaxhopParamsType = {
  id: number;
};

export type AddMemorytaxhopParamsType = {
  dossierShopId: number;
  memoryTaxCode: any[];
};
export type UpdateMemorytaxhopParamsType = {
  dossierShopId: number;
  memoryTax: any[];
};
export interface listmemorytaxhopParamsType {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  dossierShopId: number;
  memoryTaxCode?: string | null;
}
export type listmemorytaxhopResponseType = {
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
      actionExtraButton: any[{
        name: string;
        method: string;
        title: string;
        icon: string;
      }];
      memoryTaxCode: string;
      memoryTaxStatus: boolean;
      creationDateTime: string;
      memoryTaxIntaStatus: boolean;
      memoryTaxStatus: boolean;
      creationDateTime: string;
      hasApi: boolean;
      hasFile: boolean;
      hasForm: boolean;
      hasPos: boolean;
      hasMobile: boolean;
      hasAgent: boolean;
    }
  ];
};
// export type UpdateMemorytaxhopParamsType=AddMemorytaxhopParamsType;
export interface switchStatusMemoryTaxShopParamsType {
  shopId: number;
  id: number;
}

export interface memorytaxshopRefParamsType {
  name?: string;
  parentId?: number;
  masterId?: number;
  page?: number;
  size?: number;
  sort?: string[];
}
export type memorytaxshopRefResponseType = {
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  content: any[{
    id: number;
    name: string;
  }];
};

export type addMemoryTaxShopParamsType = {
  dossierShopId: number;
  memoryTaxCode: string;
};
