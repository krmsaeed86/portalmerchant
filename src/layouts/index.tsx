import type { JSX } from "react";
import { useSelector } from "react-redux";

import DesktopLayout from "./desktop";
import MobileLayout from "./mobile";
import type { layoutInputType } from "../interface";

const Layout = ({
  children,
  layoutType,
  layoutTitle = "",
}: layoutInputType): JSX.Element => {
  const themeConfig = useSelector((state: any) => state.themeConfig);

  return (
    <div className="font-iranyekan">
      {themeConfig?.deviceType ? (
        <DesktopLayout layoutTitle={layoutTitle} layoutType={layoutType}>
          {children}
        </DesktopLayout>
      ) : (
        <MobileLayout layoutTitle={layoutTitle} layoutType={layoutType}>
          {children}
        </MobileLayout>
      )}
    </div>
  );
};

export default Layout;
