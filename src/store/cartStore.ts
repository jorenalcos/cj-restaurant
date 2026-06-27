import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

interface CartStore {
  items: CartItem[];

  addItem: (
    product: Product,
    quantity?: number
  ) => void;

  removeItem: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore =
  create<CartStore>()(
    persist(
      (set) => ({
        items: [],

        addItem: (
          product,
          quantity = 1
        ) =>
          set((state) => {
            const existing =
              state.items.find(
                (item) =>
                  item.id === product.id
              );

            if (existing) {
              return {
                items:
                  state.items.map((item) =>
                    item.id === product.id
                      ? {
                          ...item,
                          quantity:
                            item.quantity +
                            quantity,
                        }
                      : item
                  ),
              };
            }

            return {
              items: [
                ...state.items,
                {
                  ...product,
                  quantity,
                },
              ],
            };
          }),

        removeItem: (id) =>
          set((state) => ({
            items:
              state.items.filter(
                (item) =>
                  item.id !== id
              ),
          })),

        increase: (id) =>
          set((state) => ({
            items:
              state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        item.quantity + 1,
                    }
                  : item
              ),
          })),

        decrease: (id) =>
          set((state) => ({
            items:
              state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        Math.max(
                          1,
                          item.quantity - 1
                        ),
                    }
                  : item
              ),
          })),

        clearCart: () =>
          set({ items: [] }),
      }),
      {
        name: "cart-storage",
      }
    )
  );