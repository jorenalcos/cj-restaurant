import Container from "../../components/layout/Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../schemas/checkout.schema";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
	const {register, handleSubmit, formState: { errors },} = useForm<CheckoutFormData>({
		resolver: zodResolver(
				checkoutSchema
		),
	});

	const items =
		useCartStore(
			(state) => state.items
	);

	const subtotal =
		items.reduce(
			(sum, item) => sum + item.price * item.quantity, 0
	);

	const deliveryFee = 50;
	const total = subtotal + deliveryFee;

	const navigate = useNavigate();

	const clearCart = useCartStore((state) => state.clearCart);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const generateOrderNumber = () => {
		const random = Math.floor(1000 + Math.random() * 9000);
		return `ORD-${Date.now()}-${random}`;
	};

	const onSubmit = async (data: CheckoutFormData) => {
		try {
			setIsSubmitting(true);

			await new Promise(
				(resolve) =>
					setTimeout(
						resolve,
						1500
					)
			);

			const orderNumber =
				generateOrderNumber();

			sessionStorage.setItem(
				"orderNumber",
				orderNumber
			);

			clearCart();

			navigate(
				"/order-success"
			);
		} finally {
			setIsSubmitting(false);
		}
	};


	if (!items.length) {
		return (
			<Container>
				<div className="py-20 text-center">
					No items in cart.
				</div>
			</Container>
		);
	}

  return (
    <Container>
      <section className="py-12 grid gap-10 lg:grid-cols-3">
				<h1 className="mb-8 text-4xl font-bold">
					Checkout
				</h1>

				<p className="mb-8 text-gray-500">
					Complete your order details below.
				</p>
				<form
					id="checkout-form"
					onSubmit={handleSubmit(onSubmit)}
					className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm"
				>
					<label className="mb-2 block">
						Full Name
					</label>
					<input
						{...register("fullName")}
						className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#7B4A37] focus:ring-2 focus"
					/>
					<p className="mt-1 text-sm text-red-500">
						{errors.fullName?.message}
					</p>
					<label className="mb-2 mt-6 block">
						Phone Number
					</label>
					<input
						{...register("phone")}
						className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#7B4A37] focus:ring-2 focus"
					/>
					<p className="mt-1 text-sm text-red-500">
						{errors.phone?.message}
					</p>
					<label className="mb-2 mt-6 block">
							Address
						</label>
						<textarea
							{...register("address")}
							rows={4}
							className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#7B4A37] focus:ring-2 focus"
						/>
						<p className="mt-1 text-sm text-red-500">
							{errors.address?.message}
						</p>
						<label className="mb-2 mt-6 block">
							Notes
						</label>
						<textarea
							{...register("notes")}
							rows={3}
							className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-[#7B4A37] focus:ring-2 focus"
						/>
				</form>
				<div
					className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm h-fit"
				>
					<h2 className="mb-6 text-2xl font-bold"></h2>
						Order Summary
						<div className="space-y-4">
							{items.map((item) => (
								<div className="flex justify-between">
									<span>
										{item.name}
										<span className="ml-2 text-gray-500">
											x{item.quantity}
										</span>
									</span>

									<span>
										₱{item.price * item.quantity}
									</span>
								</div>
							))}
						</div>
						<hr className="my-6" />
						<div className="space-y-2">
							<div className="flex justify-between">
								<span>Subtotal</span>
								<span>₱{subtotal}</span>
							</div>
							<div className="flex justify-between">
								<span>Delivery</span>
								<span>₱50</span>
							</div>
							<div className="flex justify-between text-xl font-bold">
								<span>Total</span>
								<span>₱{total}</span>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								form="checkout-form"
								className="
									mt-6
									w-full
									rounded-xl
									bg-[#7B4A37]
									py-3
									text-white
									disabled:opacity-50
								"
							>
								{isSubmitting
									? <>
											<Loader2
												size={18}
												className="
													mr-2
													inline
													animate-spin
												"
											/>
											Processing...
										</>
									: "Place Order"}
							</button>
						</div>
				</div>
      </section>
			
    </Container>
  );
}