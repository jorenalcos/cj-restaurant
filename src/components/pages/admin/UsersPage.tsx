import { Plus } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Administrator",
    email: "admin@cjrestaurant.com",
    role: "ADMIN",
    status: "Active",
  },
  {
    id: 2,
    name: "Restaurant Manager",
    email: "manager@cjrestaurant.com",
    role: "MANAGER",
    status: "Active",
  },
  {
    id: 3,
    name: "Restaurant Staff",
    email: "staff@cjrestaurant.com",
    role: "STAFF",
    status: "Active",
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Users
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage admin panel users and roles.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  User
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Email
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Role
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 font-medium">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button className="font-medium hover:underline">
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