export interface shopmemoryRefParamsType {
  name?: string;
  parentId?: number;
  masterId?: number;
  page?: number;
  size?: number;
  sort?: string[];
}
export type shopmemoryRefResponseType = {
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
