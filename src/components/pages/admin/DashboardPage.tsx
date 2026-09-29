import { ClipboardList, Clock, DollarSign, Package } from "lucide-react";

const stats = [
  {
    label: "Total Orders",
    value: "250",
    icon: ClipboardList,
  },
  {
    label: "Total Revenue",
    value: "₱850,450",
    icon: DollarSign,
  },
  {
    label: "Total Products",
    value: "35",
    icon: Package,
  },
  {
    label: "Pending Orders",
    value: "12",
    icon: Clock,
  },
];

const bestSellingProducts = [
  {
    name: "Chicken Burger",
    sales: "120 sold",
  },
  {
    name: "Cheese Pizza",
    sales: "98 sold",
  },
  {
    name: "French Fries",
    sales: "76 sold",
  },
  {
    name: "Iced Coffee",
    sales: "65 sold",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Overview of your restaurant operations.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-100 p-3">
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main dashboard */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Sales */}
        <div className="rounded-xl border bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6">
            <h2 className="font-semibold text-gray-900">
              Sales Overview
            </h2>

            <p className="text-sm text-gray-500">
              Sales performance over time.
            </p>
          </div>

          <div className="flex h-72 items-center justify-center rounded-lg bg-gray-50">
            <p className="text-sm text-gray-400">
              Sales chart will be connected to the API.
            </p>
          </div>
        </div>

        {/* Best selling */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="font-semibold text-gray-900">
              Best Selling Products
            </h2>

            <p className="text-sm text-gray-500">
              Top products by sales.
            </p>
          </div>

          <div className="space-y-4">
            {bestSellingProducts.map(
              (product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold">
                      {index + 1}
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {product.name}
                    </span>
                  </div>

                  <span className="text-xs text-gray-500">
                    {product.sales}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}