import { Search } from "lucide-react";

const orders = [
  {
    id: "ORD-1001",
    customer: "Juan Dela Cruz",
    total: 850,
    payment: "GCASH",
    status: "PREPARING",
  },
  {
    id: "ORD-1002",
    customer: "Maria Santos",
    total: 1250,
    payment: "CASH",
    status: "READY",
  },
  {
    id: "ORD-1003",
    customer: "Pedro Reyes",
    total: 620,
    payment: "MAYA",
    status: "DELIVERED",
  },
];

const statusStyles: Record<string, string> = {
  PENDING:
    "bg-yellow-100 text-yellow-700",
  CONFIRMED:
    "bg-blue-100 text-blue-700",
  PREPARING:
    "bg-purple-100 text-purple-700",
  READY:
    "bg-indigo-100 text-indigo-700",
  OUT_FOR_DELIVERY:
    "bg-orange-100 text-orange-700",
  DELIVERED:
    "bg-green-100 text-green-700",
  CANCELLED:
    "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Orders
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage customer orders and order status.
        </p>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b p-4 sm:flex-row">
          <div className="relative max-w-sm flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search orders..."
              className="w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gray-900"
            />
          </div>

          <select className="rounded-lg border px-4 py-2.5 text-sm">
            <option value="">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="PREPARING">Preparing</option>
            <option value="READY">Ready</option>
            <option value="DELIVERED">Delivered</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Order
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Customer
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Total
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Payment
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    ₱{order.total.toLocaleString()}
                  </td>

                  <td className="px-6 py-4">
                    {order.payment}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        statusStyles[order.status]
                      }`}
                    >
                      {order.status.replaceAll("_", " ")}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button className="font-medium hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}