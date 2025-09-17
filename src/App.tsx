// import { DarkThemeToggle } from "flowbite-react";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { useDispatch, useSelector } from "react-redux";
import * as rdd from "react-device-detect";
import { toggleMenu, setDeviceType } from "./redux/features/themeConfigSlice";

export default function App() {
  const dispatch = useDispatch();
  const themeConfig = useSelector((state: any) => state.themeConfig);

  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    dispatch(toggleMenu(localStorage.getItem("menu") || themeConfig.menu));
    dispatch(setDeviceType(!rdd.isMobile));
  }, [dispatch, themeConfig.menuOpen, themeConfig.deviceType]);

  // const CARDS = [
  //   {
  //     title: "Flowbite React Docs",
  //     description:
  //       "Learn more on how to get started and use the Flowbite React components",
  //     url: "https://flowbite-react.com/",
  //     icon: (
  //       <svg
  //         className="h-9 w-9 text-gray-500"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="1.5"
  //           d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Flowbite Blocks",
  //     description:
  //       "Get started with over 450 blocks to build websites even faster",
  //     url: "https://flowbite.com/blocks/",
  //     icon: (
  //       <svg
  //         className="h-9 w-9 text-gray-500"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="1.5"
  //           d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Flowbite Icons",
  //     description:
  //       "Get started with over 650+ SVG free and open-source icons for your apps",
  //     url: "https://flowbite.com/icons/",
  //     icon: (
  //       <svg
  //         className="h-9 w-9 text-gray-500"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="1.5"
  //           d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Flowbite Illustrations",
  //     description:
  //       "Start using over 50+ SVG illustrations in 3D style to add character to your apps",
  //     url: "https://flowbite.com/illustrations/",
  //     icon: (
  //       <svg
  //         className="h-9 w-9 text-gray-500"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="1.5"
  //           d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Flowbite Pro",
  //     description:
  //       "Upgrade your development stack with more components and templates from Flowbite",
  //     url: "https://flowbite.com/pro/",
  //     icon: <img alt="Flowbite Pro logo" src="/flowbite.svg" />,
  //   },
  //   {
  //     title: "Flowbite Figma",
  //     description:
  //       "Use our Figma Design System to design and collaborate better within your team",
  //     url: "https://flowbite.com/figma/",
  //     icon: <img alt="Figma logo" src="/figma.svg" />,
  //   },
  // ];

  return (
    <>
      {isOffline && (
        <div
          style={{
            backgroundColor: "#ffcccc",
            color: "#990000",
            padding: "10px",
            textAlign: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          شما در حالت آفلاین هستید!
        </div>
      )}
      <RouterProvider router={router()} />
    </>
  );
}
