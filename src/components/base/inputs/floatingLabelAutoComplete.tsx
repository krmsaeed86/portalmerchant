import { FieldProps } from "formik";
import TaksaIcon from "../../taksaIcon";
import { HTMLInputTypeAttribute, ReactNode, useEffect, useState } from "react";
import React, { useRef } from "react";

type OptionType = {
  id: number;
  name: string;
};

interface InputProps extends FieldProps {
  value: number | string | null;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  icon?: ReactNode;
  hasError?: boolean;
  disabled?: boolean;
  isLoading: boolean;
  require?: boolean;
  inputValue: any;
  setInputValue: any;
  page: any;
  setPage: any;
  refetch: any;
}

const floatingLabelAutoComplete: React.FC<InputProps> = ({
  field,
  //value,
  form,
  label,
  icon,
  isLoading,
  disabled,
  require,
  inputValue,
  setInputValue,
  page,
  setPage,
  refetch,
}) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Fetch data when page or inputValue changes
  useEffect(() => {
    // Trigger fetch
    if (isOpen) {
      setLoading(true);
      refetch().then((response: any) => {
        const fetchedData = response?.data;
        if (fetchedData) {
          if (page === 0) {
            setOptions(fetchedData?.content);
          } else {
            setOptions((prev) => [...prev, ...fetchedData?.content]);
          }
          setHasMore(fetchedData?.content?.length >= 20);
        }
        setLoading(false);
      });
    }
  }, [page, inputValue, isOpen, refetch]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    setInputValue(val);
    setPage(0);
    setHasMore(true);
    setOptions([]);
    setIsOpen(true);
  };

  // Handle focus
  const handleFocus = () => {
    setIsOpen(!isOpen);
    setPage(0);
    setHasMore(true);
    setOptions([]);
  };
  const handleClear = () => {
    setInputValue("");
    setPage(0);
    setIsOpen(false);
    form.setFieldValue(field.name, 0);
  };
  // Handle scroll for infinite loading
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.scrollTop + target.clientHeight >= target.scrollHeight - 10 &&
      hasMore &&
      !loading
    ) {
      setPage((prev: any) => prev + 1);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="did-floating-label-content items-center" ref={containerRef}>
      {icon && (
        <div
          className="flex items-center justify-center
         absolute right-3 top-2/4 
         transform -translate-y-2/4
          text-lable-light border-l h-7
           border-gray-300 pl-2 w-8
           "
        >
          <TaksaIcon src={icon?.toString() ?? ""} />
        </div>
      )}
      {/* Input box */}
      <label
        htmlFor="searchText"
        className={`absolute px-3 pr-14 text-xs font-thin text-gray-400 top-4
          ${inputValue && "top-[3px]"} `}
        onClick={() => {
          !disabled && setIsOpen(true);
        }}
      >{`${label} ${`را انتخاب کنید${require ? `*` : ""}`} `}</label>
      <input
        type="text"
        name="searchText"
        className="w-full border border-gray-300 h-[48px] rounded-md
        pl-3 pr-14 pt-4 focus:outline-none 
         focus:border-gray-300
         "
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        disabled={disabled}
      />

      {/* Options dropdown */}
      {isOpen && options?.length > 0 && (
        <div
          className=" absolute z-50 mt-1 max-h-60
           overflow-y-auto border border-gray-300
            rounded bg-white w-full text-right"
          onScroll={handleScroll}
        >
          {options
            ?.filter((option) =>
              option.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option) => (
              <div
                key={option.id}
                className="px-3 py-2 text-xs text-gray-400
                 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setInputValue(option.name);
                  setIsOpen(false);
                  form.setFieldValue(
                    field.name,
                    typeof option.id === "number" ? +option.id : option.id
                  );
                }}
              >
                {option.name}
              </div>
            ))}
          {(loading || isLoading) && (
            <div className="px-3 py-2 text-gray-500 text-xs">
              در حال بارگزاری...
            </div>
          )}
          {!hasMore && (
            <div className="px-3 text-xs py-2 text-gray-500">
              مورد دیگری یافت نشد!
            </div>
          )}
        </div>
      )}
      <div className="absolute top-3.5 left-4">
        {inputValue ? (
          <button
            type="button"
            className="mt-1.5 hover:shadow-none"
            onClick={handleClear}
          >
            <TaksaIcon src={"icon-xmark"} fontSize="8px" color="text-danger" />
          </button>
        ) : (
          <TaksaIcon
            src={!isOpen ? "icon-angle-down" : "icon-chevron-up"}
            fontSize="6px"
            color="text-gray-600"
          />
        )}
      </div>
    </div>
  );
};
export default floatingLabelAutoComplete;
