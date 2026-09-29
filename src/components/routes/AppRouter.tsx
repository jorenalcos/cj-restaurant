import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./AdminRoutes";
import { mainRoutes } from "./MainRoutes";

export const router = createBrowserRouter([
  mainRoutes,
  adminRoutes,
]);