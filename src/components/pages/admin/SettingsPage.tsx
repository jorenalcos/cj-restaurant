export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Configure your restaurant administration settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">
            Restaurant Information
          </h2>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Restaurant Name
              </label>

              <input
                defaultValue="CJ Restaurant"
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:border-gray-900"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Contact Number
              </label>

              <input
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:border-gray-900"
                placeholder="Enter contact number"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Address
              </label>

              <textarea
                rows={3}
                className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:border-gray-900"
                placeholder="Restaurant address"
              />
            </div>

            <button className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white">
              Save Changes
            </button>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900">
            Order Settings
          </h2>

          <div className="mt-6 space-y-5">
            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">
                  Accept Orders
                </p>

                <p className="text-xs text-gray-500">
                  Allow customers to place orders.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </label>

            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">
                  Delivery
                </p>

                <p className="text-xs text-gray-500">
                  Enable delivery orders.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </label>

            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">
                  Pickup
                </p>

                <p className="text-xs text-gray-500">
                  Enable customer pickup.
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}