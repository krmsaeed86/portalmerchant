// import { ResponseType } from '#/schema/Utils';

// export type AddContactUsType = ResponseType<Data>;

export interface ILoginDataResponse {
  token: string;
  menuInfo: any;
  paths: string[];
  tokenRefresh: string;
  userStatus: number;
  //   "token": "string",
  //   "menuInfo": {
  //     "userTitle": "string",
  //     "menu": [
  //       {
  //         "id": 0,
  //         "name": "string",
  //         "title": "string",
  //         "caption": "string",
  //         "showInSideMenu": true,
  //         "showInBottomMenu": true,
  //         "menuType": "string",
  //         "url": "string",
  //         "path": "string",
  //         "order": 0,
  //         "method": "string",
  //         "icon": "string",
  //         "isWithAuth": true,
  //         "element": "string",
  //         "children": [
  //           {
  //             "id": 0,
  //             "name": "string",
  //             "title": "string",
  //             "caption": "string",
  //             "showInSideMenu": true,
  //             "showInBottomMenu": true,
  //             "menuType": "string",
  //             "url": "string",
  //             "path": "string",
  //             "order": 0,
  //             "method": "string",
  //             "icon": "string",
  //             "isWithAuth": true,
  //             "element": "string"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   "paths": [
  //     "string"
  //   ],
  //   "tokenRefresh": "string"
  // }
}

export interface IUserTokrn {
  accountId: number;
  city: string;
  companyId: string;
  fullName: string;
  id: number;
  level: number;
  mobile: string;
  name: string;
  officeId: number;
  status: number;
  userOfficeId: number;
  warehouseId: string;
}

export interface IOtpDataResponse {
  keys: string;
}

export interface IRegisterDataResponse {
  status: number;
  mobile?: string;
}

/* ********************************** */

export type LoginFormParamType = {
  userName: string;
  userPass: string;
  captchaText: string;
  captchaKey: string;
};
export type reLoginFormParamType = {
  ts: string;
  tts: string;
};
export type CheckOtpFormParamType = {
  otp: string;
  otpKey: string;
  captchaText: string;
  captchaKey: string;
};

export type LoginOtpFormParamType = {
  userName: string;
  userMobile: string;
  captchaText: string;
  captchaKey: string;
};

export type RegisterVerifyFormParamType = {
  mobile: string;
  otpCode: string;
  captchaText: string;
  captchaKey: string;
};

export type RegisterLegalFormParamType = {
  mobile: string;
  nationalId: string;
  birthDate: string;
  nationalLegalNumber: string;
  captchaText: string;
  captchaKey: string;
};

export type CaptchaResponseType = {
  hash: string;
  img: string;
};
export type RegisterFormParamType = Omit<
  RegisterLegalFormParamType,
  "nationalLegalNumber"
>;
