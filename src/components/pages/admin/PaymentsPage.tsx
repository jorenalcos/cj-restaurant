const payments = [
  {
    reference: "PAY-1001",
    order: "ORD-1001",
    method: "GCASH",
    amount: 850,
    status: "PAID",
  },
  {
    reference: "PAY-1002",
    order: "ORD-1002",
    method: "CASH",
    amount: 1250,
    status: "PAID",
  },
  {
    reference: "PAY-1003",
    order: "ORD-1003",
    method: "MAYA",
    amount: 620,
    status: "PENDING",
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Payments
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Monitor restaurant payment transactions.
        </p>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">
                  Reference
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Order
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Method
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Amount
                </th>

                <th className="px-6 py-4 font-medium text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {payments.map((payment) => (
                <tr key={payment.reference}>
                  <td className="px-6 py-4 font-medium">
                    {payment.reference}
                  </td>

                  <td className="px-6 py-4">
                    {payment.order}
                  </td>

                  <td className="px-6 py-4">
                    {payment.method}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    ₱{payment.amount.toLocaleString()}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      {payment.status}
                    </span>
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