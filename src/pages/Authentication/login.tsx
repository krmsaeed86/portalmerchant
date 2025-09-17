import Logo from "./../../assets/logo.svg";
import ImgLogin from "./../../assets/img/login.svg";
import { Field, Formik } from "formik";
import * as yup from "yup";
import FloatingLabelInput from "../../components/base/inputs/floatingLabelInput";
import TaksaIcon from "../../components/taksa/icon";
import CaptchaInput from "../../components/inputs/captchaInput";
import LoadingButton from "../../components/base/loadingButton";
import { useEffect, useRef, useState } from "react";
import type { LoginOtpFormParamType } from "../../redux/services/authenticateApi/authenticateApi";
import { useLoginOtpMutation } from "../../redux/services/authenticateApi";
import { useNavigate } from "react-router-dom";
import Otp from "./otp";
import { FormatTime } from "../../tools/time";

const Login = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [otpToken, setOtpToken] = useState("");
  const [mobile, setMobile] = useState("");
  const [loginOtp, { isLoading }] = useLoginOtpMutation();
  const [captchaToken, setCaptchaToken] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [expireOtp, setExpireOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  const iranianMobileRegex = /^(?:\+98|0)?9\d{9}$/;

  const validationSchema = yup.object().shape({
    userMobile: yup
      .string()
      .length(11, "تعداد ارقام موبایل بایستی 11 رقم باشد.")
      .required("شماره موبایل خود را وارد کنید.")
      .matches(iranianMobileRegex, "فرمت موبایل را رعایت کنید."),
    userName: yup
      .string()
      .required("شماره ملی یا شناسه ملی را وارد کنید.")
      .min(10, "شماره ملی باید حداقل 10 رقم باشد.")
      .matches(/^\d+$/, "شماره ملی باید فقط شامل اعداد باشد."),
    captchaText: yup
      .string()
      .required("کد امنیتی تصویر را وارد کنید.")
      .min(4, "کد امنیتی باید حداقل 4 رقم باشد.")
      .matches(/^\d+$/, "کدامنیت باید فقط شامل اعداد باشد."),
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowOTP(false);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const cancelOTP = () => {
    setShowOTP(false);
    setTimeLeft(0);
  };
  return (
    <>
      <div className="container mx-60 grid h-screen grid-cols-12 gap-4">
        <div className="col-span-6 grid w-full grid-cols-6 flex-col justify-center gap-4">
          <div className="col-span-4 col-start-2 flex flex-col justify-center space-y-10">
            <img src={Logo} className="h-[44px]" />
            <div className="text-center text-lg">
              ورود به سامانه معتمد هوشمند تکسا
            </div>
            <p className="text-sm text-gray-500">
              اشخاص حقیقی جهت ورود به سامانه، اطلاعات خود و اشخاص حقوقی اطلاعات
              مدیر عامل را وارد نمایند.
            </p>
            <div className="flex items-center justify-center">
              <div className="flex w-full flex-col self-center">
                {!showOTP ? (
                  <>
                    <Formik
                      initialValues={{
                        userName: "",
                        userMobile: "",
                        captchaText: "",
                        captchaKey: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values: LoginOtpFormParamType, actions) => {
                        values.captchaKey = captchaToken;
                        loginOtp(values)
                          .unwrap()
                          .then((res) => {
                            if (res.keys === "-1") {
                              navigate("/auth/loginUserPass", {
                                replace: true,
                              });
                            } else {
                              setOtpToken(res.keys);
                              setMobile(values.userMobile);
                              actions.resetForm();
                              setShowOTP(true);
                            }
                          })
                          .catch(() => {
                            setExpireOtp(true);
                            values.captchaText = "";
                          });
                      }}
                    >
                      {({ handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="pb-4">
                            <Field
                              id="userMobile"
                              name="userMobile"
                              type="text"
                              pattern="\d{0,11}"
                              label="شماره موبایل"
                              maxLength={11}
                              //icon={<TaksaIcon icon={"is-profile-tick"} />}
                              component={FloatingLabelInput}
                              innerRef={inputRef}
                              baseClassName="text-center"
                            />
                          </div>

                          <div className="pb-4">
                            <Field
                              id="userName"
                              name="userName"
                              type="text"
                              pattern="\d{0,12}"
                              label="کد ملی / شناسه ملی"
                              maxLength={12}
                              minLength={0}
                              //icon={<TaksaIcon icon={"is-profile-tick"} />}
                              component={FloatingLabelInput}
                              baseClassName="text-center"
                            />
                          </div>

                          <Field
                            id="captchaText"
                            name="captchaText"
                            type="text"
                            pattern="\d"
                            label="captchaText"
                            length={4}
                            icon={<TaksaIcon icon={"icon-shield-keyhole"} />}
                            component={CaptchaInput}
                            setToken={setCaptchaToken}
                            setExpireOtp={setExpireOtp}
                            expireOtp={expireOtp}
                            className="pb-4"
                          />

                          <div className="flex items-center justify-end pt-10">
                            <LoadingButton
                              title={"ورود"}
                              disabled={
                                isLoading ||
                                errors.userMobile ||
                                errors.userName ||
                                errors.captchaText
                                  ? true
                                  : false
                              }
                              isloading={isLoading}
                            />
                          </div>
                        </form>
                      )}
                    </Formik>
                  </>
                ) : (
                  <>
                    <Otp
                      mobile={mobile}
                      type="login"
                      otpKey={otpToken}
                      cancelOTP={cancelOTP}
                    />
                    <div className="mt-10 flex flex-col-reverse items-center justify-center lg:flex-row">
                      <p className="text-xs text-[#6F6F6F] lg:ml-2">
                        <span className="text-primary pl-1">
                          {FormatTime(timeLeft)}
                        </span>
                        تا ارسال مجدد کد
                      </p>
                      <a
                        onClick={() => setShowOTP(false)}
                        className="mb-4 text-xs text-[#EC6725] no-underline lg:mb-0 lg:underline"
                      >
                        تغییر شماره موبایل{" "}
                      </a>
                    </div>
                  </>
                )}
                {!showOTP && (
                  <div className="mt-10 flex items-center justify-center">
                    <p className="pl-2 text-sm text-[#6F6F6F]">
                      حساب کاربری ندارید؟
                    </p>
                    <a
                      href="/auth/register"
                      className="text-sm text-[#EC6725] underline"
                    >
                      ثبت نام
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 flex w-full flex-col justify-center">
          <div className="rounded-3xl bg-gray-200">
            <img
              src={ImgLogin}
              className={`left-10 w-full fill-red-600 transition-all duration-500 ease-in-out`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
