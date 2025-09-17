export type ownershipTypeResponseType = {
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
export type ownershipTypeParamsType = {
  name: string;
  parentId: number;
  masterId: number;
};
