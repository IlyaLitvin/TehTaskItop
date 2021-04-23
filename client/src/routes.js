import { lazy } from "react";

const routes = [
  {
    label: "",
    path: "/registration",
    exact: true,
    component: lazy(() => import("./pages/Registration")),
    privated: false,
    restriced: true,
  },
  {
    label: "",
    path: "/login",
    exact: true,
    component: lazy(() => import("./pages/Login")),
    privated: false,
    restriced: true,
  },
  {
    label: "",
    path: "/profiles",
    exact: true,
    component: lazy(() => import("./pages/Profiles")),
    privated: true,
    restriced: true,
  },
  {
    label: "",
    path: "/dashboard",
    exact: true,
    component: lazy(() => import("./pages/Dashboard")),
    privated: true,
    restriced: false,
  },
  {
    label: "",
    path: "/users",
    exact: true,
    component: lazy(() => import("./pages/Users")),
    privated: true,
    restriced: false,
  },
];

export default routes;
