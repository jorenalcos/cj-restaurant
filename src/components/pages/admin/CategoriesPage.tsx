import { Plus } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Burgers",
    products: 8,
    status: "Active",
  },
  {
    id: 2,
    name: "Pizza",
    products: 6,
    status: "Active",
  },
  {
    id: 3,
    name: "Drinks",
    products: 10,
    status: "Active",
  },
  {
    id: 4,
    name: "Sides",
    products: 5,
    status: "Inactive",
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Categories
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage product categories.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Category
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Products
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
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {category.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {category.products}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={
                        category.status === "Active"
                          ? "rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700"
                          : "rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                      }
                    >
                      {category.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button className="text-sm font-medium hover:underline">
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