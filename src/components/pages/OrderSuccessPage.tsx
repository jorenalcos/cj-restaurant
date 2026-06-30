import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/Container";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  const orderNumber =
    sessionStorage.getItem("orderNumber");

    if (!orderNumber) {
      navigate("/");
      return null;
    }

    const summary = JSON.parse(
      sessionStorage.getItem("orderSummary") || "{}"
    );

    const itemCount = summary.itemCount || 0;
    const orderTotal = summary.orderTotal || 0;

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     navigate("/");
    //   }, 10000);

    //   return () => clearTimeout(timer);
    // }, []);

  return (
    <Container>
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="mt-6 text-5xl font-bold">
          Order Successful
        </h1>
        <p className="mt-4 text-gray-500">
          Thank you for your order.
        </p>

        {/* <div className="mt-8 rounded-xl border border-green-200 bg-green-50 px-6 py-4">
          Payment received successfully.
        </div> */}

        <div className="mt-8 rounded-xl bg-white px-8 py-5 shadow-sm">
          <p className="text-gray-500">
            Order Number
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {orderNumber}
          </h2>
        </div>

        <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
          <div>
            <p className="text-gray-500">
              Payment Method
            </p>
            <p className="mt-1 font-semibold">
              Cash On Delivery
            </p>
          </div>
          <div className="mt-2 flex justify-between">
            <span>Items</span>
            <span>{itemCount}</span>
          </div>

          <div className="mt-2 flex justify-between">
            <span>Total Paid</span>
            <span>₱{orderTotal}</span>
          </div>
        </div>

        <p className="mt-8 text-lg text-gray-600">
          Estimated delivery:
          <span className="font-bold">
            {" "}
            30-45 mins
          </span>
        </p>

        <div className="text-7xl">
          <CheckCircle2
            size={80}
            className="text-green-500"
          />
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-10 rounded-xl bg-[#7B4A37] px-8 py-3 text-white cursor-pointer"
        >
          Continue Shopping
        </button>
      </section>
    </Container>
  );
}