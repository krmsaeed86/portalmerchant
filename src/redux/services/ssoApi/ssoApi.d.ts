export type ssoRegisterParamType = {};
export type ssoRegisterResponseType = {};
export type ssoTokenResponseType = {
  nationalId: string;
  fullName: string;
  mobile: string;
  isIranian: string;
  firstName: string;
  lastName: string;
  trackingNumber: string;
  status: true;
  msg: string;
};
export type ssoTokenParamType = {
  id: string | null;
};
