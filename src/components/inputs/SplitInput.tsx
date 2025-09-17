import React, {
  ReactNode,
  Ref,
  useState,
} from "react";
import SplitInput from "../base/inputs/splitInput";
import { FieldProps } from "formik";

interface InputProps extends FieldProps{
  value: string;
  length?: number;
  onChange: (value: string) => void;
  icon?: ReactNode;
  hasError?: boolean;
  myref?: Ref<any> | undefined;
  url: string;
  setToken: any;
}

const SplitInputs: React.FC<InputProps> = ({
  field,
  form,
  meta,
  length = 4,

  hasError = false,

}) => {
  const [isFocused, setIsFocused] = useState(false);




  return (
    <div
    className={`relative px-4 h-[48px] rounded-md border focus:outline
    ${isFocused ? "border-secondary" : "focus:outline-gray-300"}
      ${
        hasError
          ? "border-danger focus:ring-danger-light"
          : "border-gray-300 focus:ring-blue-300"
      }
      focus:ring-0`}
    >
 

      <div className="py-3 pl-[110px]">
        <SplitInput
          field={field}
          form={form}
          meta={meta}
          length={length}
          
          onFocus={() => { setIsFocused(true) }}
          onBlur={() => { setIsFocused(false) }}
          hasError={hasError}
          className={`w-6 h-6 text-xs font-bold border-b focus:border-b-secondary focus:outline-none focus:ring-0
          ${hasError ? 'border-danger' : 'border-gray-300'}`} /> 
      </div>

    </div>
  );
};

export default SplitInputs;
