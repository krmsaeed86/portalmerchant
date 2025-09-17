import React, { ReactNode, useState } from "react";
import FloatingLabelInput from "../base/inputs/floatingLabelInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FieldProps } from "formik";

interface InputProps extends FieldProps {
  label?: string;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  Length?: number | undefined;
  //onChange?: (value: string) => void;
  icon?: ReactNode;
  hasError?: boolean;
  className?: string;
}

const PasswordInput: React.FC<InputProps> = ({
  field,
  form,
  meta,
  label,
  maxLength,
  minLength,
  Length,
  hasError = false
}) => {
  const [isShow, setIsShow] = useState(false);

  const handlerShow = () => {
    setIsShow(!isShow);
  };

  return (
    <FloatingLabelInput
      field={field}
      form={form}
      meta={meta}
      label={label ? label : "کلمه عیور"}
      type={isShow ? "text" : "password"}
      maxLength={Length ? Length : maxLength}
      minLength={Length ? Length : minLength}
      //onChange={onChange}
      hasError={hasError}
      icon={<FontAwesomeIcon icon={faLock} className="text-lable-light w-5 h-5" />}
      iconEnd={
        <div onClick={handlerShow}>
          <FontAwesomeIcon
            icon={isShow ? faEye : faEyeSlash}
            className="text-lable-light w-5 h-5"
          />
        </div>
      }
    />
  );
};

export default PasswordInput;
