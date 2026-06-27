import type  { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Fresh Arabica Coffee",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    category: "Coffee",
    rating: 5,
  },
  {
    id: 2,
    name: "Latte",
    description: "Creamy Milk Coffee",
    price: 170,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    category: "Coffee",
    rating: 5,
  },
  {
    id: 3,
    name: "Cheesecake",
    description: "New York Style",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    category: "Dessert",
    rating: 4.8,
  },
];