export type callbackParamsType = {
  id?: string;
  type?: number;
  check?: string;
};

export type callbacResponseType = {
  status: number;
  id: string;
  price: number;
  rrn: string;
  transactionDate: string;
  transactionId: number;
  desc: string;
};
