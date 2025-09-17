export interface listFactorsResponseType {
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
      serialInnerNumber: string;
      taxId: string;
      invoiceIssueDateTime: string;
      invoiceCreateDateTime: string;
      invoiceSubject: string;
      invoicePattern: string;
      invoiceType: string;
      insertType: string;
      taxErrors: string;
      invoiceStatus: string;
      taxErrorsDesc: string;
      memoryCode: string;
    }
  ];
}
export type listFactorsParamsType = {
  page: number;
  size: number;
  sort: string[];
  id?: number[];
  serialInnerNumber?: string;
  taxId?: string;
  fromInvoiceIssueDateTime?: string;
  toInvoiceIssueDateTime?: string;
  fromInvoiceCreateDateTime?: string;
  toInvoiceCreateDateTime?: string;
  invoiceSubject?: string;
  invoiceStatus?: string;
  dossierShopId: number;
};
export interface getDetailFactorResponseType {
  ////////
  id: number;
  name: string;
  serialInnerNumber: string;
  taxId: string;
  invoiceIssueDateTime: string;
  invoiceCreateDateTime: string;
  invoiceSubject: string;
  invoiceType: string;
  invoicePattern: string;
  insertType: string;
  invoiceStatus: string;
  invoiceNote: string;
  invoiceNumber: number;
  invoiceReferenceTaxId: string;
  userAcceptDate: string;
  userAcceptId: number;
  // processStatus: number;
  // taksaStatus: number;
  // taxStatus: number;
  // taxWarnings: string;

  seller: {
    sellerBranchCode: string;
    sellerTaxIdentificationNumber: string;
  };

  financials: {
    tax17: number;
    cashPayment: number;
    installmentPayment: number;
    settlementType: string;
  };
  contractHeader: {
    contractRegistrationNumber: string;
  };
  buyer: {
    buyerBranchCode: string;
    buyerId: string;
    buyerPassportNumber: string;
    buyerPostalCode: string;
    buyerTaxIdentificationNumber: string;
    typeOfBuyer: string;
  };
  flyHeader: {
    flightType: string;
    travelAgencyNumericCommercial: string;
  };
  shippingHeader: {
    ladingNumber: string;
    ladingReferenceNumber: string;
    ladingType: string;
    transferId: string;
    driverId: string;
    receiverId: string;
    consignmentNumber: string;
    destinationCity: string;
    destinationCountry: string;
    originCity: string;
    originCountry: string;
  };
  exportHeader: {
    customsDeclarationCottageDate: string;
    customsDeclarationCottageNumber: string;
    sellerCustomsLicenceNumber: string;
    sellerCustomsCode: string;
    totalNetWeight: number;
  };
  billingHeader: {
    billingId: string;
  };
  totalHeader: {
    totalAfterDiscount: number;
    totalBill: number;
    totalCurrencyValue: number;
    totalDiscount: number;
    totalNetWeight: number;
    totalOtherDutyAmount: number;
    totalPreDiscount: number;
    totalRialValue: number;
    totalVatAmount: number;
    totalVatOfPayment: number;
  };
  stockHeader: {
    announcementSalesDate: string;
    announcementSalesNumber: string;
  };
  insuranceHeader: {
    insuranceUniqueNumber: string;
    insuranceAnnexNumber: string;
  };
  invoiceBodyResponses: [
    {
      id: number;
      name: string;
      stockPattern: {};
      shippingPattern: {};
      exportPattern: {
        serviceStuffCurrencyValue: number;
        serviceStuffRialValue: number;
        netWeight: number;
      };
      flyPattern: {};
      billPattern: {
        billId: number;
      };
      contractPattern: { contractRegistrationNumber: string };
      goldPattern: {
        brokerSalary: number;
        constructProfitBrokerSalary: number;
        constructProfitBrokerNumber: number;
        brokerSalaryRegisterNumber: string;
        goldKarat: number;
        sellerProfit: number;
        constructionFee: number;
      };
      currencyPattern: {
        currencyPrice: number;
        sourceVat: number;
      };
      buyPattern: {};
      fee: number;
      currencyFee: number;
      exchangeRate: number;
      currencyType: string;
      afterDiscount: number;
      amount: number;
      cashPayment: number;
      discount: number;
      measurementUnitId: string;
      serviceStuffId: string;
      otherLegalAmount: number;
      otherLegalTitle: string;
      overDutyTitle: string;
      otherLegalRate: number;
      overDutyAmount: number;
      overDutyRate: number;
      preDiscount: number;
      totalServiceStuffAmount: number;
      vatAmount: number;
      vatOfPayment: number;
      vatRate: number;
    }
  ];
  invoiceShippingResponses: [
    {
      id: number;
      name: string;
      shippingStuffId: string;
      shippingStuffTitle: string;
    }
  ];
  invoicePaymentResponses: [
    {
      id: number;
      name: string;
      acceptorNumber: string;
      iinNumber: string;
      payerCardNumber: string;
      payerId: string;
      paymentDateTime: string;
      paymentMethod: number;
      paymentValue: number;
      terminalNumber: string;
      trackingPspNumber: string;
    }
  ];
}
export type getDetailFactorParamsType = {
  headerId: number;
  shopId: number;
};

export type InvoiceResponseType = {
  trackingResponse: string;
  trackingRequest: string;
  errorMessage: string;
};
export type InvoiceParamsType = {
  shopMemoryId: number;
  header: {
    invoiceIssueDateTime: string;
    invoiceType: string;
    serialInnerNumber: string;
    invoicePattern: string;
    settlementType: string;
    branchShopId: number;
    contractHeader: null | {
      contractRegistrationNumber: string;
    };
    buyer: null | {
      typeOfBuyer: string;
      buyerTaxIdentificationNumber: string;
      buyerId: string;
      buyerPostalCode: string;
      buyerBranchCode: string;
      buyerPassportNumber: string;
    };
    cashPayment: number;
    installmentPayment: number;
    totalVatOfPayment: number;
    tax17: number;
    exportHeader: null | {
      sellerCustomsLicenceNumber: string;
      sellerCustomsCode: string;
      customsDeclarationCottageNumber: string;
      customsDeclarationCottageDate: string;
    };
    billingHeader: null | {
      billingId: string;
    };
    flyingHeader: null | {
      flightType: string;
      travelAgencyNumericCommercial: string;
    };
    shippingHeader: null | {
      ladingType: string;
      ladingNumber: string;
      ladingReferenceNumber: string;
      originCountry: string;
      originCity: string;
      destinationCountry: string;
      destinationCity: string;
      transferId: string;
      receiverId: string;
      driverId: string;
      consignmentNumber: string;
    };
    shippingGoods:
      | null
      | any[{
          shippingGoodId: string;
          shippingGoodTitle: string;
          shippingDesc: string;
        }];
    stockHeader: null | {
      announcementSalesDate: string;
      announcementSalesNumber: string;
    };
    invoiceNote: string;
  };
  body: [
    {
      serviceStuffId: number;
      measurementUnitId: number;
      amount: number;
      fee: number;
      currency: null | {
        currencyFee: number;
        currencyTypeCurrency: string;
        exchangeRateCurrency: number;
        currencyPrice: number;
        sourceVat: number;
      };
      discount: number;
      vatRate: number;
      others: {
        overDutyTitle: string;
        overDutyRate: number;
        overDutyAmount: number;
        otherLegalTitle: string;
        otherLegalRate: number;
        otherLegalAmount: number;
      };
      gold: null | {
        constructionFee: number;
        sellerProfit: number;
        goldKarat: number;
        brokerSalary: number;
        brokerSalaryRegisterNumber: string;
      };
      cashOfPayment: number;
      vatOfPayment: number;
      export: null | {
        currencyTypeExport: string;
        exchangeRateExport: number;
        netWeight: number;
        serviceStuffCurrencyValue: number;
        serviceStuffRialValue: number;
      };
      bodyNote: string;
    }
  ];
  payment:
    | null
    | [
        {
          acceptorNumber?: string;
          terminalNumber?: string;
          trackingNumber?: string;
          payerCardNumber?: string;
          payerId?: string;
          payDateTime?: string;
          paymentValue?: number;
          paymentMethod?: number;
          desc?: string;
          iinNumber?: string;
        }
      ];
};
