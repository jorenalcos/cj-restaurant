import { BarChart3, ClipboardList, CreditCard, Folder, Settings, ShoppingBag, Users, X } from "lucide-react";
import { NavLink } from "react-router-dom";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: BarChart3,
  },
  {
    label: "Products",
    path: "/admin/products",
    icon: ShoppingBag,
  },
  {
    label: "Categories",
    path: "/admin/categories",
    icon: Folder,
  },
  {
    label: "Orders",
    path: "/admin/orders",
    icon: ClipboardList,
  },
  {
    label: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({
  open,
  onClose,
}: AdminSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64",
          "flex-col border-r bg-white",
          "transition-transform duration-200",
          "lg:static lg:z-auto lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b px-5">
          <div>
            <h1 className="text-lg font-bold text-gray-900">
              CJ Restaurant
            </h1>

            <p className="text-xs text-gray-500">
              Admin Panel
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-lg px-4 py-3",
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  ].join(" ")
                }
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <p className="text-xs text-gray-400">
            CJ Restaurant Admin
          </p>
        </div>
      </aside>
    </>
  );
}