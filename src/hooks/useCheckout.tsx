import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

interface CheckoutParams {
  itemCount: number;
  orderTotal: number;
}

export const useCheckout = ({
  itemCount,
  orderTotal,
}: CheckoutParams) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateOrderNumber = () => {
		const random = Math.floor(1000 + Math.random() * 9000);
		return `ORD-${Date.now()}-${random}`;
	};

  const clearCart = useCartStore(
      (state) => state.clearCart
    );

  const submitOrder = async () => {
    try {
      setIsSubmitting(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      const orderNumber = generateOrderNumber();

      sessionStorage.setItem(
        "orderNumber",
        orderNumber
      );

      sessionStorage.setItem(
        "orderSummary",
        JSON.stringify({
          itemCount,
          orderTotal,
        })
      );

      clearCart();

      navigate("/order-success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitOrder,
    isSubmitting,
  };
};