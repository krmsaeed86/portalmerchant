import * as yup from "yup";
import { jwtDecode } from "jwt-decode";
import { Field, Formik } from "formik";
import { useEffect, useRef, type JSX } from "react";

import {
  useCheckOtpMutation,
  useRegisterVerifyMutation,
} from "../../redux/services/authenticateApi";
import SplitInput from "../../components/base/inputs/splitInput";
import appConfig from "./../../../app.config";
import { Success } from "./../../components/notifications/sweetaler2";
import LoadingButton from "../../components/base/loadingButton";
//import { useListMutationMutation } from "../../redux/services/dossiershopApi";
import type { CheckOtpFormParamType } from "../../redux/services/authenticateApi/authenticateApi";

type inputType = {
  mobile?: string;
  type: string;
  otpKey?: string;
};

type tokenType = {
  userToken: string;
};

const Otp = ({ mobile, type, otpKey }: inputType): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const validationSchema = yup.object().shape({
    otpCode: yup.number().required("اجباری"),
  });

  //const [getDataFolder] = useListMutationMutation({});

  const [registerVerify, { isLoading: isLoadingRegisterVerify }] =
    useRegisterVerifyMutation();
  const [checkOtp, { isLoading: isLoadingCheckOtp }] = useCheckOtpMutation();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handlerLogin = async (nuser: CheckOtpFormParamType) => {
    try {
      const res = await checkOtp(nuser).unwrap();

      if (res) {
        const _token = res?.token;
        const _refreshToken = res?.tokenRefresh;
        const _userToken = JSON.stringify(
          jwtDecode<tokenType>(_token)?.userToken,
        );

        localStorage.setItem(appConfig.token, _token);
        localStorage.setItem(appConfig.tokenRef, _refreshToken);
        localStorage.setItem(appConfig.userToken, _userToken);

        document.location.replace("/dashboard");

        return true;
      } else {
        // cancelOTP();
      }
    } catch (ex) {
      //  cancelOTP();
      // Consider adding user feedback for errors here
      console.log(ex);
      throw ex;
    }
  };

  return (
    <>
      <p className="text-md mx-auto mb-4 text-center text-gray-600">
        لطفاً کد تایید ارسال شده به شماره {mobile} را وارد نمایید.
      </p>
      <Formik
        initialValues={{
          otpCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          //values.captchaKey = captchaToken;
          switch (type) {
            case "login":
              values.otpKey = otpKey?.toString() || "";
              handlerLogin(values);
              break;
            //******************** */
            case "register":
              values.mobile = mobile?.toString() || "";
              registerVerify(values)
                .unwrap()
                .then((res) => {
                  if (res.status === 0) {
                    Success("ثبت نام با موفقیت انجام شد.");
                    document.location.replace("/auth/login");
                    //navigate("/auth/login");
                  }
                })
                .catch(() => {});
              break;
            //******************** */
            default:
              console.log("other");
              break;
          }
        }}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="pb-4">
              <Field
                id="otpCode"
                name="otpCode"
                innerRef={inputRef}
                type="text"
                label="otpCode"
                pattern="\d"
                length={4}
                component={SplitInput}
              />
            </div>

            <div className="mt-16 flex items-center justify-end">
              <LoadingButton
                title={"تایید"}
                disabled={
                  isLoadingRegisterVerify || isLoadingCheckOtp || errors.otpCode
                    ? true
                    : false
                }
                isloading={isLoadingRegisterVerify || isLoadingCheckOtp}
              />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Otp;
