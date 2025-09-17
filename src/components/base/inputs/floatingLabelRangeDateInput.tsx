import React, { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
//import TimePicker from "react-multi-date-picker/plugins/time_picker";
//import DatePanel from "react-multi-date-picker/plugins/date_panel";

import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian_en from "react-date-object/locales/gregorian_en";

import { FieldProps } from "formik";

interface InputProps extends FieldProps {
  label?: string;
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  Length?: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  iconEnd?: ReactNode;
  hasError?: boolean;
  className?: string;
  disabled?: boolean;
}

const floatingLabelRangeDateInput: React.FC<InputProps> = ({
  field,
  form,
  meta,
  label,
  name,
  value,
  type,
  maxLength,
  minLength,
  Length,
  onChange,
  icon,
  iconEnd,
  hasError = false,
  className,
  disabled,
  ...other
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [val] = useState("");
  //const [state, setState] = useState({ format: "MM/DD/YYYY" })

  const handlerchanged = (e: DateObject[] | null | any) => {
    // console.log("e", [
    //   e[0]
    //     ?.convert(gregorian, gregorian_en)
    //     .format("YYYY-MM-DDT00:00:00.000")
    //     .toString(),
    //   e[1]
    //     ? e[1]
    //         .convert(gregorian, gregorian_en)
    //         .format("YYYY-MM-DDT23:59:59.000")
    //         .toString()
    //     : e[0]
    //         ?.convert(gregorian, gregorian_en)
    //         .format("YYYY-MM-DDT23:59:59.000")
    //         .toString(),
    // ]);
    setHasValue(e != null);
    form.setFieldValue(field.name, [
      e[0]
        ?.convert(gregorian, gregorian_en)
        .format("YYYY-MM-DDT00:00:00.000")
        .toString(),
      e[1]
        ? e[1]
            .convert(gregorian, gregorian_en)
            .format("YYYY-MM-DDT23:59:59.000")
            .toString()
        : e[0]
            ?.convert(gregorian, gregorian_en)
            .format("YYYY-MM-DDT23:59:59.000")
            .toString(),
    ]);
    onChange;
  };

  return (
    <div className="relative w-full h-[48px]">
      {icon && (
        <div className="flex items-center absolute right-3 top-2/4 transform -translate-y-2/4 text-lable-light border-l h-7 border-gray-300 pl-2 ">
          {icon}
        </div>
      )}

      <input id={field.name} {...field} value={val} {...other} type="hidden" />

      <DatePicker
        calendar={persian}
        //numberOfMonths={2}
        //format="MM/DD/YYYY"
        range
        //plugins={[<TimePicker />, <DatePanel markFocused />]}
        maxDate={new DateObject().subtract(0, "days")}
        locale={persian_fa}
        onChange={(date) => {
          handlerchanged(date);
        }}
        render={
          <input
            id={field.name}
            type="text"
            onFocus={() => {
              setIsFocused(true);
            }}
            className={`
              ${
                className
                  ? className
                  : "w-full px-4 pt-4 h-[48px] text-left rounded-md border focus:outline-1/2 focus:outline-secondary focus:ring-0"
              }
              ${
                form.errors[field.name]
                  ? "border-danger focus:ring-danger-light"
                  : "border-gray-300 focus:ring-blue-300"
              }
              ${icon ? "pr-14" : ""}
              ${iconEnd ? "pl-14" : ""}
            ${disabled && " bg-gray-100 opacity-50 "}  `}
            placeholder=" "
            disabled={disabled}
          />
        }
      />

      {iconEnd && (
        <div className="flex items-center absolute left-3 top-2/4 transform -translate-y-2/4 text-lable-light border-r h-7 border-gray-300 pr-2 ">
          {iconEnd}
        </div>
      )}

      {form.errors && (
        <label className="w-full text-xs text-danger my-2">
          {form.errors[field.name]?.toString()}
        </label>
      )}

      <label
        className={`absolute right-14 top-2/4 transform -translate-y-2/4 text-lable transition-all duration-200 pointer-events-none
        text-xs  ${
          value || hasValue || isFocused
            ? "top-3 right-11 text-[10px] text-blue-500 px-1"
            : "text-base"
        } ${icon ? "  right-11 " : "right-4 "}`}
      >
        {label ? label : "تاریخ"}
      </label>
    </div>
  );
};

export default floatingLabelRangeDateInput;
