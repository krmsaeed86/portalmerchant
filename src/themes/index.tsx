import { createTheme } from "flowbite-react";
import Tab from "./tab";
import Button from "./button";

//const Theme = createTheme({ tablist: Tablist });

const Theme = createTheme({
  tabs: Tab,
  button: Button,
  buttonGroup: Button,
  //   tablist: {
  //     base: "flex text-center",
  //     variant: {
  //       underline:
  //         "-mb-px flex-wrap border-b border-blue-200 dark:border-gray-700",
  //     },
  //     tabitem: {
  //       base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
  //       variant: {
  //         underline: {
  //           base: "rounded-t-lg",
  //           active: {
  //             on: "border-secondary-600 text-secondary-600 dark:border-primary-500 dark:text-primary-500 rounded-t-lg border-b-2",
  //             off: "border-b-2 border-transparent text-yellow-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
  //           },
  //         },
  //       },
  //       //icon: "mr-2 h-5 w-5",
  //     },
  //   },
  //   tabitemcontainer: {
  //     base: "",
  //     variant: {
  //       default: "",
  //       underline: "",
  //       pills: "",
  //       fullWidth: "",
  //     },
  //   },
  //   tabpanel: "bg-red-500 py-3",
});

export default Theme;
