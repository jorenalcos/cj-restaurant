// hooks/useOrderSummary.ts
import { useCartStore } from "../store/cartStore";

export const useOrderSummary = () => {
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return {
    items,
    itemCount,
    subtotal,
    deliveryFee,
    total,
  };
};