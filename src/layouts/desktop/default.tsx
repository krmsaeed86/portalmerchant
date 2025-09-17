import { DarkThemeToggle } from "flowbite-react";
import { useState, type JSX } from "react";
import Logo from "./../../assets/logo.svg";
import FolderCard from "../../pages/Folder/Card";
import TaksaIcon from "../../components/taksa/icon";
import type { layoutInputType } from "../../interface";
import IconButton from "../../pages/Profile/IconButton";

const DefaultLayout = ({
  children,
  layoutTitle = "",
}: layoutInputType): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  //const handleClose = () => setIsOpen(false);

  return (
    <div className="flex min-h-screen flex-row">
      <div
        className={`relative overflow-hidden border border-gray-200 bg-white transition-all duration-500 ease-in-out dark:border-gray-800 dark:bg-gray-900 ${isOpen ? "w-[320px]" : "w-[0px]"}`}
      >
        <div
          className={`absolute w-[270px] transition-all duration-500 ease-in-out ${isOpen ? "-left-0" : "left-10"}`}
        >
          <div className="justify-items-center bg-inherit py-2">
            <div className="container flex flex-row justify-between gap-2.5">
              <div className="container flex flex-row justify-between gap-2.5">
                <div className="flex w-full flex-col justify-items-center py-1">
                  <img src={Logo} className="h-[44px]" />
                </div>
                <div className="flex flex-col items-end justify-center">
                  <div className="flex flex-row gap-2">
                    <button
                      type="button"
                      className="bg-text-link-interactive text-other-blue-gray-light h-[44px] rounded-r-xl px-1"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <TaksaIcon
                        icon="icon-arrow-right"
                        className="flex w-2 flex-row justify-center"
                        color={"text-white"}
                        fontSize={"18px"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <FolderCard />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="justify-items-center border-b border-b-gray-200 bg-white py-2 dark:border-b-gray-800 dark:bg-gray-900">
          <div
            className={`absolute my-1 transition-all ease-in-out ${!isOpen ? "right-0 duration-1000" : "right-[-18px] duration-100"}`}
          >
            <button
              type="button"
              className="bg-text-link-interactive text-other-blue-gray-light h-[44px] rounded-l-xl px-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <img src={IconUser} className="fill-red-600" /> */}
              <TaksaIcon
                icon="icon-arrow-left"
                className="flex w-2 flex-row justify-center"
                color={"text-white"}
                fontSize={"18px"}
              />
            </button>
          </div>
          <div className="container flex flex-row justify-between gap-2.5">
            <div
              className={`flex flex-col justify-center transition-all duration-500 ease-in-out ${!isOpen ? "w-[270px]" : "w-[0px]"}`}
            >
              <img
                src={Logo}
                className={`border-text-secondary h-[40px] ${!isOpen && "border-l"}`}
              />
            </div>

            <div className="flex min-h-[56px] w-full flex-row justify-items-start py-4">
              <div>{layoutTitle}</div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-row gap-2">
                <DarkThemeToggle className="bg-other-blue-gray-light text-text-primary h-[42px] w-[42px] rounded-full focus:ring-0" />
                <button
                  type="button"
                  className="bg-other-blue-gray-light hover:text-other-blue-gray-light hover:bg-text-primary h-[42px] w-[42px] flex-col rounded-full p-2.5 text-center text-sm text-red-600"
                >
                  <TaksaIcon
                    icon="icon-bell"
                    className={"h-full"}
                    color={"text-gray-500"}
                    fontSize={"20px"}
                  />
                </button>
                {/* <button
                  type="button"
                  className="bg-other-blue-gray-light text-text-primary h-[42px] w-[42px] flex-col rounded-full p-2.5 text-center text-sm hover:bg-gray-700 focus:ring-gray-300 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <TaksaIcon
                    icon="icon-user"
                    className={"h-full"}
                    color={"text-gray-500"}
                    fontSize={"20px"}
                  />
                </button> */}
                <IconButton />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full justify-items-center bg-white p-2 dark:bg-blue-950">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
