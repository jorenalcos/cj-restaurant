import type { RouteObject } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import DashboardPage from "../pages/admin/DashboardPage";
import ProductsPage from "../pages/admin/ProductsPage";
import CategoriesPage from "../pages/admin/CategoriesPage";
import OrdersPage from "../pages/admin/OrdersPage";
import PaymentsPage from "../pages/admin/PaymentsPage";
import UsersPage from "../pages/admin/UsersPage";
import SettingsPage from "../pages/admin/SettingsPage";

export const adminRoutes: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <DashboardPage />,
    },
    {
      path: "products",
      element: <ProductsPage />,
    },
    {
      path: "categories",
      element: <CategoriesPage />,
    },
    {
      path: "orders",
      element: <OrdersPage />,
    },
    {
      path: "payments",
      element: <PaymentsPage />,
    },
    {
      path: "users",
      element: <UsersPage />,
    },
    {
      path: "settings",
      element: <SettingsPage />,
    },
  ],
};