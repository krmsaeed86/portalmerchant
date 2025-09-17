import React, { HTMLInputTypeAttribute, ReactNode, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
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

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  iconEnd?: ReactNode;
  hasError?: boolean;
  className?: string;
  disabled?: boolean;
}

const FloatingLabelDateInput: React.FC<InputProps> = ({
  field,
  form,
  label,
  value,
  icon,
  iconEnd,
  className,
  disabled,

}) => {
  const { value: fieldValue, onChange: formOnChange, name } = field; // from Formik
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState<boolean>(false);

  // Convert Formik value string to DateObject
  const dateValue =
    fieldValue && fieldValue !== ""
      ? new DateObject(new Date(fieldValue))
      : null;

  const handlerchanged = (date: DateObject | null) => {
    setHasValue(date != null);
    if (date) {
      // convert DateObject to string in your desired format
      const gregorianDate = date.convert(gregorian, gregorian_en);
      formOnChange(
        // set the value to Formik
        {
          target: {
            name,
            value: gregorianDate.format("YYYY-MM-DDTHH:mm:ss.mmm"),
          },
        } as any
      );
    } else {
      // handle clearing date if needed
      formOnChange({ target: { name, value: "" } } as any);
    }
  };

  return (
    <div className="relative w-full h-[48px]">
      {icon && (
        <div className="flex items-center absolute right-3 top-2/4 transform -translate-y-2/4 text-lable-light border-l h-7 border-gray-300 pl-2 ">
          {icon}
        </div>
      )}

      <input id={name} {...field} type="hidden" />

      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={dateValue} // pass the DateObject here
        onChange={(date) => handlerchanged(date)}
        render={
          <input
            id={name}
            minLength={10}
            maxLength={10}
            type="text"
            onFocus={() => setIsFocused(true)}
            className={`
              ${
                className
                  ? className
                  : "w-full px-4 pt-5 pb-1 text-left rounded-md border focus:outline-1/2 focus:outline-secondary focus:ring-0"
              }
              ${
                form.errors && form.errors[name]
                  ? "border-danger focus:ring-danger-light"
                  : "border-gray-300 focus:ring-blue-300"
              }
              ${icon ? "pr-14" : ""}
              ${iconEnd ? "pl-14" : ""}
              ${disabled && " bg-gray-100 opacity-50 "}  `}
            placeholder=" "
            disabled={disabled}
            // readOnly // to prevent manual editing
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
    // <div className={`relative w-full ${className}`}>

    //   <DatePicker
    //     portal
    //     calendar={persian}
    //     locale={persian_fa}
    //     onChange={(date) => { handlerchanged(date) }}
    //     render=
    //     {
    //       <>
    //         <BaseInput
    //           //label={label ? label : "تاریخ"}
    //           name={name}
    //           value={val}
    //           type={type}
    //           maxLength={Length ? Length : maxLength}
    //           minLength={Length ? Length : minLength}
    //           onChange={(e) => handlerchanged(e)}
    //           onFocus={() => { setIsFocused(true) }}
    //           onBlur={() => { setIsFocused(false) }}
    //           hasError={hasError}
    //           icon={icon}
    //           iconEnd={iconEnd}
    //         className={'w-full px-4 pt-5 pb-1 text-right rounded-md border focus:outline-1/2 focus:outline-secondary focus:ring-0'}
    //         />

    //         <label
    //           className={`absolute right-14 top-2/4 transform -translate-y-2/4 text-lable transition-all duration-200 pointer-events-none
    //               ${value || hasValue || isFocused
    //               ? "top-3 right-11 text-[10px] text-blue-500 px-1"
    //               : "text-base"
    //             }`}
    //         >
    //           {label ? label : "تاریخ"}
    //         </label>
    //       </>
    //     }
    //   />

    //</div >
  );
};

export default FloatingLabelDateInput;
