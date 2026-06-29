import { useNavigate } from "react-router-dom";

import Container from "../../components/layout/Container";

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  const orderNumber =
    sessionStorage.getItem("orderNumber");

    if (!orderNumber) {
      navigate("/");
      return null;
    }

  return (
    <Container>
      <section
        className="
          flex
          min-h-[70vh]
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div className="text-7xl">
          🎉
        </div>

        <h1
          className="
            mt-6
            text-5xl
            font-bold
          "
        >
          Order Successful
        </h1>

        <p
          className="
            mt-4
            text-gray-500
          "
        >
          Thank you for your order.
        </p>

        <div
          className="
            mt-8
            rounded-xl
            border
            border-green-200
            bg-green-50
            px-6
            py-4
          "
        >
          Payment received successfully.
        </div>

        <div
          className="
            mt-8
            rounded-xl
            bg-white
            px-8
            py-5
            shadow-sm
          "
        >
          <p className="text-gray-500">
            Order Number
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-bold
            "
          >
            {orderNumber}
          </h2>
        </div>

        <p
          className="
            mt-8
            text-lg
            text-gray-600
          "
        >
          Estimated delivery:
          <span className="font-bold">
            {" "}
            30-45 mins
          </span>
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            mt-10
            rounded-xl
            bg-[#7B4A37]
            px-8
            py-3
            text-white
          "
        >
          Continue Shopping
        </button>
      </section>
    </Container>
  );
}