import React, { ReactNode, useEffect, useState } from "react";
import SplitInput from "../base/inputs/splitInput";
import { FieldProps } from "formik";
import { useCaptchaQuery } from "../../redux/services/authenticateApi";
import TaksaIcon from "../taksa/icon";

interface InputProps extends FieldProps {
  value: string;
  length?: number;
  pattern?: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  hasError?: boolean;
  setToken?: unknown;
  setExpireOtp?: unknown;
  expireOtp?: boolean;
}

const CaptchaInput: React.FC<InputProps> = ({
  field,
  form,
  meta,
  length = 4,
  pattern,
  icon,
  setToken,
  setExpireOtp,
  expireOtp,
}) => {
  // const [captcha, setCaptcha] = useState("");
  // const [isFetching, setIsFetching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { data, isFetching, refetch } = useCaptchaQuery();

  useEffect(() => {
    if (typeof setToken === "function") {
      setToken(data?.hash!);
    }
    // isFetching && setExpireOtp(true);
  }, [isFetching]);

  useEffect(() => {
    if (expireOtp) {
      setExpireOtp(false);
      refetch();
    }
  }, [expireOtp]);

  // const handleRefreshCaptchaImage = async () => {
  // try {
  //   setIsFetching(true);
  //   await fetch(url).then(async (_res) => {
  //     let _result = await _res.json();
  //     setCaptcha(_result.img);
  //     setToken(_result.hash);
  //   });
  // } catch (error) {}
  // setIsFetching(false);
  // };

  // useImperativeHandle(
  //   myref,
  //   () => ({
  //     handleRefreshCaptchaImage,
  //   }),
  //   []
  // );

  // useEffect(() => {
  //   const getData = async () => {
  //     await handleRefreshCaptchaImage();
  //   };

  //   getData();
  // }, []);

  return (
    <div
      className={`relative flex rounded-xl border px-4 py-1.5 focus:outline ${isFocused ? "border-secondary" : "focus:outline-gray-300"} ${
        form.touched[field.name] && form.errors[field.name]
          ? "border-danger focus:ring-danger-light"
          : "border-gray-300 focus:ring-blue-300"
      } ${isFetching ? "pointer-events-none opacity-50" : ""} focus:ring-0`}
    >
      {icon && (
        <div className="text-lable-light absolute top-[55%] right-3 flex h-7 w-8 -translate-y-2/4 transform items-center justify-center border-gray-300 pl-2">
          {icon ? icon : <TaksaIcon icon={"icon-shield-keyhole"} />}
        </div>
      )}

      <div className="mr-8 ml-40 flex h-10 w-full justify-center">
        <div className="h-10 w-52">
          <SplitInput
            field={field}
            form={form}
            meta={meta}
            pattern={pattern}
            length={length}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            isFetching={isFetching}
            //hasError={hasError}
            className={`focus:border-b-secondary flex h-full w-full justify-center border-b text-lg font-bold focus:ring-0 focus:outline-none ${form.errors[field.name] ? "border-danger" : "border-gray-300"}`}
          />
        </div>
      </div>
      <span className="absolute top-1/2 left-10 h-[40px] w-[123px] -translate-y-1/2 rounded-md border border-gray-300">
        {data && data.img !== "" ? (
          <img
            id="img-captcha"
            src={data?.img}
            className="h-[36px] w-[130px]"
          />
        ) : (
          <div role="status" className="h-full w-full animate-pulse">
            <div className="mb-4 h-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        )}
      </span>

      {icon && (
        <div
          onClick={() => {
            refetch();
            const thistInput = document.getElementById(`otp-${field.name}-0`);
            thistInput?.focus();
          }}
          className="text-lable-light absolute top-2/4 left-3 flex w-8 -translate-y-2/4 transform items-center justify-center pr-2"
        >
          <TaksaIcon icon={"is-refresh-square"} />
        </div>
      )}
    </div>
  );
};

export default CaptchaInput;
