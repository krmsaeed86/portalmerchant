import type { JSX } from "react";
import type { layoutInputType } from "../../interface";

const MobileLayout = ({ children }: layoutInputType): JSX.Element => {
  return (
    // <div>
    //   mobile
    //   {children}
    // </div>
    <div className="flex min-h-screen flex-row">
      <div className="bg-red-500">asdasd</div>
      <div className="flex w-full flex-col bg-green-500">
        <div className="bg-yellow-100">sadasd</div>
        <div className="h-full bg-white dark:bg-orange-950">{children}</div>
      </div>
    </div>
  );
};

export default MobileLayout;
