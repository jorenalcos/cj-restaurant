import { Plus, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Burgers",
    price: 180,
    stock: 25,
    status: "Available",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 350,
    stock: 12,
    status: "Available",
  },
  {
    id: 3,
    name: "French Fries",
    category: "Sides",
    price: 120,
    stock: 0,
    status: "Unavailable",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage restaurant products.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        {/* Search */}
        <div className="border-b p-4">
          <div className="relative max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gray-900"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Product
                </th>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Category
                </th>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Price
                </th>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Stock
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {product.category}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    ₱{product.price.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {product.stock}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={
                        product.status === "Available"
                          ? "rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700"
                          : "rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700"
                      }
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button className="text-sm font-medium text-gray-700 hover:text-black">
                      Edit
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