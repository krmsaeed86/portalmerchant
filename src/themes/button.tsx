import { createTheme } from "flowbite-react";

const Button = createTheme({
  base: "relative flex items-center justify-center rounded-lg text-center font-medium focus:ring-0 focus:outline-none",
  disabled: "pointer-events-none opacity-50",
  fullSized: "w-full",
  grouped:
    "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg",
  pill: "rounded-full",
  size: {
    xs: "h-8 px-3 text-xs",
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-5 text-base",
    xl: "h-[52px] px-6 text-base",
  },
  color: {
    default:
      "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white",
    secondary:
      "bg-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 text-white",
  },
  outlineColor: {
    default:
      "border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border hover:text-white dark:hover:text-white",
    secondary:
      "border-secondary-700 text-secondary-700 hover:border-secondary-800 hover:bg-secondary-800 focus:ring-secondary-300 dark:border-secondary-600 dark:text-secondary-500 dark:hover:secondary-primary-700 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 border hover:text-white dark:hover:text-white",
  },
});

export default Button;
