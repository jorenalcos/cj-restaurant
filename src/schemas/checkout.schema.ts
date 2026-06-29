import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name is required"),

  phone: z
    .string()
    .min(11, "Invalid phone number"),

  address: z
    .string()
    .min(5, "Address is required"),

  notes: z.string().optional(),
});

export type CheckoutFormData =
  z.infer<typeof checkoutSchema>;