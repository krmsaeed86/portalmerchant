export type getDashboardAmarParamsType = {
  shopId: number;
};

export interface getDashboardAmarCountAllResponseType {
  countBranchShopCode: number;
  countMemoryTaxCode: number;
  countTaxCommodityServicesCode: number;
  countTerminalNum: number;
  dossierShopId: number;
}

export interface getDashboardAmarTotalSentBillResponseType {
  countBill: number;
  id: number;
  totalSentBill: number;
}

export interface getDashboardAmarStatusResponseType {
  status: string;
  count: number;
  amount: number;
  vat: number;
}

export interface getDashboardAmarResponseType {
  id: number[];
  data: [
    { id: number; status: string; count: number; amount: number; vat: number }
  ];
}
