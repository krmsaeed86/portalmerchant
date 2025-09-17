import { FieldProps } from "formik";
import TaksaIcon from "../../taksa/icon";
import { HTMLInputTypeAttribute, ReactNode, useEffect, useState } from "react";

interface InputProps extends FieldProps {
  value: number | string | null;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  Length?: number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  icon?: ReactNode;
  iconEnd?: ReactNode;
  hasError?: boolean;
  className?: string;
  disabled?: boolean;
  title: string;
  name: string;
  setValue?: unknown;
  setFieldValue: unknown;
  isLoading: boolean;
  data: unknown;
  defualtValue?: number | string | null;
  require?: boolean;
}

const FloatingLabelSelect: React.FC<InputProps> = ({
  field,
  value,
  form,
  label,
  onChange,
  icon,
  name,
  setValue,
  isLoading,
  data,
  defualtValue,
  disabled,
  require,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState<boolean>();
  const [val, setVal] = useState(value);

  const handlerchanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    form.setFieldValue(field.name, typeof value === "number" ? +value : value);
    setHasValue(e.target.value !== "");
    setVal(value);
    field.value = value;
    onChange && onChange(e);
  };

  useEffect(() => {
    form.setFieldValue(field.name, value);
    setVal(value);
  }, [value]);

  return (
    <div className={`did-floating-label-content`}>
      {icon && (
        <div className="text-lable-light absolute top-2/4 right-3 flex h-7 w-8 -translate-y-2/4 transform items-center justify-center border-l border-gray-300 pl-2">
          <TaksaIcon src={icon?.toString() ?? ""} />
        </div>
      )}

      <select
        id={name}
        name={name}
        disabled={disabled}
        className={`did-floating-select rounded-md pt-5 pb-1 ${!icon && "pr-4"} ${disabled ? "bg-gray-100 opacity-50" : ""} ${val == "" ? "text-lable" : ""} `}
        onChange={(e) => {
          handlerchanged(e);
          setValue(e.target.value);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        value={defualtValue ? defualtValue : val !== null ? val : ""}
      >
        {isLoading ? (
          <option disabled>در انتظار دریافت اطلاعات...</option>
        ) : data && data?.length > 0 && !isLoading ? (
          <>
            <option value={val === 0 ? 0 : ""} selected disabled></option>
            {data
              ?.filter((y: any) => (typeof y.id === "number" ? y.id > 0 : y.id))
              ?.map((item: any) => (
                <option className="font-iransans" value={item.id}>
                  {item.name}
                </option>
              ))}
          </>
        ) : (
          <></>
        )}
      </select>

      <label
        className={`text-lable pointer-events-none absolute top-2/4 right-14 -translate-y-2/4 transform text-xs transition-all duration-200 ${
          field.value || hasValue || isFocused
            ? "top-3 px-1 text-[10px] text-blue-500"
            : "text-base"
        } ${icon ? "right-11" : "right-4"}`}
      >
        {label}
        {` را انتخاب کنید ${require ? `*` : ""}`}
      </label>
    </div>
  );
};

export default FloatingLabelSelect;
