import { type JSX } from "react";
import type { layoutInputType } from "../../interface";

const PoorLayout = ({ children }: layoutInputType): JSX.Element => {
  return (
    <div className="h-full min-h-screen w-full justify-items-center bg-white dark:bg-blue-950">
      {children}
    </div>
  );
};

export default PoorLayout;
