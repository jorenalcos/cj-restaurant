import { useState } from "react";
import Container from "../../components/layout/Container";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  const {
    items,
    increase,
    decrease,
    removeItem,
  } = useCartStore();

  const total =
    items.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );

  const [loadingId, setLoadingId] = useState<number | null>(null);

  if (!items.length) {
  return (
    <Container>
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">Your cart is empty 🛒</h2>

        <p className="mt-3 text-gray-500">
          Add some delicious items to get started.
        </p>
      </div>
    </Container>
  );
}

  return (
    <Container>
      <section className="py-12">
        <h1 className="mb-8 text-4xl font-bold">Cart</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">
                    {item.description}
                  </p>

                  <p className="mt-1 font-bold text-[#7B4A37]">
                    ₱{item.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decrease(item.id)}
                    className="h-10 w-10 rounded-lg border hover:bg-gray-100">
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="h-10 w-10 rounded-lg border hover:bg-gray-100">
                    +
                  </button>

                </div>

               <button
                disabled={loadingId === item.id}
                onClick={async () => {
                  setLoadingId(item.id);
                  await new Promise((resolve) =>
                    setTimeout(resolve, 500)
                  );
                  removeItem(item.id);
                  setLoadingId(null);
                }}
                className="rounded-lg bg-red-500 px-4 py-2 text-white disabled:opacity-50">
                {loadingId === item.id
                  ? "Removing..."
                  : "Remove"}
              </button>
              </div>
            </div>
          ))}

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold"> Order Summary</h2>

            <div className="flex justify-between">
              <span>Items</span>
              <span>{items.length}</span>
            </div>

            <div className="mt-2 flex justify-between">
              <span>Subtotal</span>
              <span>₱{total}</span>
            </div>

            <div className="mt-2 flex justify-between">
              <span>Delivery Fee</span>
              <span>₱50</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₱{total + 50}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="
                mt-6
                w-full
                rounded-xl
                bg-[#7B4A37]
                py-3
                text-white
              "
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
        <div className="mt-8 text-2xl font-bold">
          Total: ₱{total}
        </div>
      </section>
    </Container>
  );
}