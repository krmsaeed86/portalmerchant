import { lazy } from "react";
import { Outlet } from "react-router-dom";
import type { routeType } from "../interface";

const Dashboard = lazy(() => import("../pages/Dashboard"));

// import ManageFile from "../pages/Dashboard/manageFile";

// //const Index = lazy(() => import("../pages/index"));
// const TaxSso = lazy(() => import("../pages/GatePages/taxSso"));
const Login = lazy(() => import("../pages/Authentication/login"));
const Logout = lazy(() => import("../pages/Authentication/logout"));
// const _404 = lazy(() => import("../pages/Error/404"));
// const LoginUserPass = lazy(
//   () => import("../pages/Authentication/loginUserPass")
// );
// const ForgotPassword = lazy(
//   () => import("../pages/Authentication/forgotPassword")
// );
// const Register = lazy(() => import("../pages/Authentication/register"));
// const Profile = lazy(() => import("../pages/Profile"));
// const ChangeMobile = lazy(() => import("../pages/Authentication/changeMobile"));
// const ChangeUserName = lazy(
//   () => import("../pages/Authentication/changeUserName")
// );
// const Folders = lazy(() => import("../pages/Folders"));
// const NewFolder = lazy(() => import("../pages/Folders/newFolder"));
// const UserInfo = lazy(() => import("../pages/UserInfo"));

// const Report = lazy(() => import("../pages/Dashboard/report"));
// const Contract = lazy(() => import("../pages/Dashboard/contract"));
// const DetailContract = lazy(
//   () => import("../pages/Dashboard/contract/detailContract")
// );
// const Support = lazy(() => import("../pages/Dashboard/support"));
// const Invoice = lazy(() => import("../pages/Dashboard/invoice"));
// const Transaction = lazy(() => import("../pages/Dashboard/transaction"));
// const Memories = lazy(() => import("../pages/Dashboard/memories"));
// const Branches = lazy(() => import("../pages/Dashboard/branches"));
// const Devices = lazy(() => import("../pages/Dashboard/devices"));
// const Callback = lazy(() => import("../pages/Payments/callback"));

const routes: routeType[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // {
  //   path: "/logout",
  //   element: <Logout />,
  //   layout: "default",
  // },
  // {
  //   path: "/dashboard",
  //   element: <Outlet />,
  //   children: [
  //     { path: ":id", element: <Dashboard /> },
  //     { path: ":id/report", element: <Report /> },
  //     { path: ":id/contract", element: <Contract /> },
  //     { path: ":id/support", element: <Support /> },
  //     { path: ":id/invoice", element: <Invoice /> },
  //     { path: ":id/transaction", element: <Transaction /> },
  //     { path: ":id/memories", element: <Memories /> },
  //     { path: ":id/branches", element: <Branches /> },
  //     { path: ":id/devices", element: <Devices /> },
  //     { path: ":id/manageFile", element: <ManageFile /> },
  //   ],
  //   layout: "dashboard",
  // },
  // {
  //   path: "/dashboard",
  //   element: <Outlet />,
  //   children: [
  //     {
  //       path: ":id/contract/:contractId",
  //       element: <DetailContract />,
  //     },
  //   ],
  //   layout: "default",
  // },
  // {
  //   path: "/profile",
  //   element: <Outlet />,
  //   children: [
  //     { index: true, element: <Profile /> },
  //     { path: "userInfo", element: <UserInfo /> },
  //   ],
  //   layout: "profile",
  // },
  // {
  //   path: "/folders",
  //   element: <Outlet />,
  //   children: [
  //     { index: true, element: <Folders /> },
  //     { path: "/folders/:id", element: <NewFolder /> },
  //   ],
  //   layout: "default",
  // },
  // {
  //   path: "/callback",
  //   element: <Outlet />,
  //   children: [{ path: "", element: <Callback /> }],
  //   layout: "blank",
  // },
  // {
  //   path: "*",
  //   element: <_404 />,
  //   layout: "blank",
  // },
];

// const publicRoutes = [
//   {
//     path: "/",
//     element: <Login />,
//     layout: "blank",
//   },
//   {
//     path: "/auth",
//     element: <Outlet />,
//     children: [
//       { path: "", element: <Login /> },
//       { path: "login", element: <Login /> },
//       { path: "loginUserPass", element: <LoginUserPass /> },
//       { path: "forgotPassword", element: <ForgotPassword /> },
//       { path: "register", element: <Register /> },
//     ],
//     layout: "blank",
//   },
//   {
//     path: "*",
//     element: <_404 />,
//     layout: "blank",
//   },
// ];

const autRoutes = [
  //   { path: "/sso/:id", element: <TaxSso />, layout: "gate" },
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "", element: <Login /> },
      { path: "auth", element: <Login /> },
      { path: "auth/login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      // { path: "loginUserPass", element: <LoginUserPass /> },
      // { path: "forgotPassword", element: <ForgotPassword /> },
      // { path: "register", element: <Register /> },
      // { path: "changeMobile", element: <ChangeMobile /> },
      // { path: "changeUserName", element: <ChangeUserName /> },
    ],
  },
  //   {
  //     path: "",
  //     element: <Outlet />,
  //     children: [{ path: "/", element: <Dashboard /> }],
  //     layout: "dashboard",
  //   },
  //   {
  //     path: "/dashboard",
  //     element: <Outlet />,
  //     children: [
  //       { path: ":id", element: <Dashboard /> },
  //       { path: ":id/report", element: <Report /> },
  //       { path: ":id/contract", element: <Contract /> },
  //       { path: ":id/support", element: <Support /> },
  //       { path: ":id/invoice", element: <Invoice /> },
  //       { path: ":id/transaction", element: <Transaction /> },
  //       { path: ":id/memories", element: <Memories /> },
  //       { path: ":id/branches", element: <Branches /> },
  //       { path: ":id/devices", element: <Devices /> },
  //       { path: ":id/manageFile", element: <ManageFile /> },
  //     ],
  //     layout: "dashboard",
  //   },
  //   {
  //     path: "/dashboard",
  //     element: <Outlet />,
  //     children: [
  //       {
  //         path: ":id/contract/:contractId",
  //         element: <DetailContract />,
  //       },
  //     ],
  //     layout: "default",
  //   },
  //   {
  //     path: "/profile",
  //     element: <Outlet />,
  //     children: [
  //       { index: true, element: <Profile /> },
  //       { path: "userInfo", element: <UserInfo /> },
  //     ],
  //     layout: "profile",
  //   },
  //   {
  //     path: "/folders",
  //     element: <Outlet />,
  //     children: [
  //       { index: true, element: <Folders /> },
  //       { path: ":id", element: <NewFolder /> },
  //     ],
  //     layout: "default",
  //   },
  //   {
  //     path: "/callback",
  //     element: <Outlet />,
  //     children: [{ path: ":type/:id/:check", element: <Callback /> }],
  //     layout: "profile",
  //   },
  //   {
  //     path: "*",
  //     element: <_404 />,
  //     layout: "blank",
  //   },
];

//export { routes, autRoutes, publicRoutes };
export { autRoutes, routes };
