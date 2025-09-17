import { type JSX } from "react";
import type { layoutInputType } from "../../interface";
import DefaultLayout from "./default";
import PoorLayout from "./poor";

const DesktopLayout = ({
  children,
  layoutType,
  layoutTitle = "",
}: layoutInputType): JSX.Element => {
  if (layoutType == "auth") {
    return <PoorLayout layoutTitle={layoutTitle}>{children}</PoorLayout>;
  } else
    return <DefaultLayout layoutTitle={layoutTitle}>{children}</DefaultLayout>;
};

export default DesktopLayout;
