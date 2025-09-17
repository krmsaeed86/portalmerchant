import { createBrowserRouter } from "react-router-dom";
import Layout from "./../layouts";
import { autRoutes, routes } from "./routes";
import type { routeType } from "../interface";
import appConfig from "../../app.config";

const FinalRoutes = () => {
  const token: string | null = localStorage.getItem(appConfig.token);

  const _layoutType: routeType[] = token ? routes : autRoutes;

  const finalRoutes = _layoutType.map((route: routeType) => {
    return {
      ...route,
      element: (
        <Layout layoutTitle={"dfsfdd"} layoutType={token ? "private" : "auth"}>
          {route.element}
        </Layout>
      ),
    };
  });

  return createBrowserRouter(finalRoutes);
};

export default FinalRoutes;
