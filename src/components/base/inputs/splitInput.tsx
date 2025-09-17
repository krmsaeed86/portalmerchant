import { FieldProps } from "formik";
import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";

interface OTPInputProps extends FieldProps {
  length: number;
  onKeyDown?: KeyboardEventHandler | undefined;
  onFocus?: FocusEventHandler | undefined;
  onBlur?: FocusEventHandler | undefined;
  hasError?: boolean;
  className?: string;
  isFetching?: boolean;
  innerRef?: (instance: unknown) => void;
  pattern?: string;
}

const SplitInput: React.FC<OTPInputProps> = ({
  field,
  form,
  innerRef,
  length,
  onFocus,
  onBlur,
  isFetching,
  className,
  pattern,
  ...other
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  useEffect(() => {
    setOtp(Array(length).fill(""));
  }, [isFetching]);

  useEffect(() => {
    if (field.value && field.value.length === length) {
      setOtp(field.value.split(""));
    }
  }, [field.value, length]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);
    form.setFieldValue(field.name, newOtp.join(""));
    field.onChange(newOtp.join(""));

    if (value && index < length - 1) {
      const nextInput = document.getElementById(
        `otp-${field.name}-${index + 1}`,
      );
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const prevInput = document.getElementById(
          `otp-${field.name}-${index - 1}`,
        );
        prevInput?.focus();
      }
    }
  };

  return (
    <div className="relative flex h-full flex-row-reverse items-center justify-center">
      <input
        id={field.name}
        {...field}
        value={otp.join("")}
        {...other}
        type="hidden"
      />

      {otp.map((digit, index) => (
        <div className="ml-2 h-full">
          <input
            key={index}
            id={`otp-${field.name}-${index}`}
            type="text"
            maxLength={1}
            pattern={pattern}
            value={digit}
            onChange={(e) => {
              if (pattern) {
                if (e.target.validity.valid)
                  handleChange(e.target.value, index);
              } else {
                handleChange(e.target.value, index);
              }
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={index == 0 ? innerRef : undefined}
            className={`text-center ${
              className
                ? className
                : "focus:outline-secondary h-12 w-12 border-b-2 text-xl font-bold focus:ring-0"
            } ${
              form.touched[field.name]
                ? "border-danger focus:ring-danger-light"
                : "border-gray-300 focus:ring-blue-300"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default SplitInput;
