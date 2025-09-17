import { FieldProps } from "formik";
import React, {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
  useState,
} from "react";

interface InputProps extends FieldProps {
  //value?: string;
  pattern?: string;
  id?: string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  Length?: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler | undefined;
  onFocus?: FocusEventHandler | undefined;
  onBlur?: FocusEventHandler | undefined;
  innerRef?: (instance: unknown) => void;
  icon?: ReactNode;
  iconEnd?: ReactNode;
  hasError?: boolean;
  errorMessage?: string | undefined;
  other?: unknown;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const BaseInput: React.FC<InputProps> = ({
  field,
  //value,
  pattern,
  form,
  type,
  maxLength,
  minLength,
  Length,
  onChange,
  onKeyDown,
  onFocus,
  innerRef,
  icon,
  iconEnd,
  className,
  placeholder,
  disabled,
  ...other
}) => {
  const [val, setVal] = useState<string | undefined>(field.value);

  // const handlerchanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // setVal(e.target.value);
  //   // onChange && onChange(e);
  //   // field.value = field.value;
  // };

  return (
    <>
      <div className="relative w-full">
        {icon && (
          <div className="text-lable-light absolute top-[55%] right-3 flex h-7 w-8 -translate-y-2/4 transform items-center justify-center border-gray-300 pl-2">
            {icon}
          </div>
        )}

        <input
          id={field.name}
          maxLength={Length ? Length : maxLength}
          minLength={Length ? Length : minLength}
          type={type}
          pattern={pattern}
          // value={field.value}

          //
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          //onBlur={onBlur}
          ref={innerRef}
          className={` ${
            className
              ? className
              : "focus:outline-1/2 focus:outline-secondary h-full w-full rounded-md border px-4 py-3 text-right focus:ring-0"
          } ${
            form.touched[field.name] && form.errors[field.name]
              ? "border-danger focus:ring-danger-light"
              : "border-gray-300 focus:ring-blue-300"
          } ${icon ? "pr-12" : "pr-5"} ${iconEnd ? "pl-12" : "pr-5"} ${disabled && "bg-gray-100 opacity-50"} `}
          placeholder={placeholder ? placeholder : ""}
          disabled={disabled}
          {...field}
          value={val}
          onChange={(e) => {
            if (pattern) {
              setVal((prev) =>
                e.target.validity.valid ? e.target.value : prev,
              );
            } else {
              setVal(e.target.value);
            }
            onChange?.(e);
          }}
          {...other}
        />

        {iconEnd && (
          <div
            // className="flex items-center justify-center absolute left-3 top-2/4 transform -translate-y-2/4 text-lable-light border-r h-7 border-gray-300 pr-2 w-8">
            className="text-lable-light absolute top-[55%] left-3 flex h-7 w-8 -translate-y-2/4 transform items-center justify-center border-gray-300 pr-2"
          >
            {iconEnd}
          </div>
        )}
      </div>
      {form.touched[field.name] && (
        <label
          className={`text-danger mt-3 w-full text-xs ${
            !form.values[field.name] ? "block" : "none"
          }`}
        >
          {form.errors[field.name]?.toString()}
        </label>
      )}
    </>
  );
};

export default BaseInput;
