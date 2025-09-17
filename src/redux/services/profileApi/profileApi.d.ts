export type getProfileResponseType = {
  title: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  birthDate: string;
  userMobile: string;
  userName: string;
  password: string;
  userEmail: string;
  zipCode: string;
  address: string;
  merchantType: string;
  officeName: string;
  officeNationalLegalCode: string;
  officeRegisterDate: string;
  officeRegisterNumber: string;
  officeZipCode: string;
  officeAddress: string;
  officeUserName	:string|null
};
export type profileResponseType = {
  status: number;
  userStatus: number;
  tokenRefresh: string;
  token: string;
};

export type profileParamsType = {
  userName?: string;
  userPass?: string;
  userRePass?: string;
  personEmail?: string;
  personZipCode?: string;
  firstName?: string;
  lastName?: string;
  passportNumber?: string;
  passportExpireDate?: string;
};
export type sendMobileOtpResponseType = {
  otpKey: string;
};
export type changeMobileOtpParamType = {
  otpCode: string;
  otpKey: string;
  mobile: string;
};
export type changeUsernameOtpParamType = {
  otpCode: string;
  otpKey: string;
  username: string;
};
