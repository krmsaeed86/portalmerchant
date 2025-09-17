import type { JSX } from "react";

export type layoutInputType = {
  layoutTitle: string;
  layoutType?: "auth" | "private";
  children: React.ReactNode;
};

export type routeType = {
  path: string;
  element: JSX.Element;
  //layout: string;
  children?: routeType[];
};
