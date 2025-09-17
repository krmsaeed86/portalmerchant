
export type RefStuffshopParamsType = {
  name?: string;
  parentId?: number;
  masterId?: number;
  page?: number;
  size?: number;
  sort?: string[];
};
export type RefStuffshopResponseType = {
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

