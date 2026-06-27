import { products } from "../data/products";

export const productService = {
  getProducts: async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return products;
  },

  getProduct: async (id: number) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return products.find(
      (product) => product.id === id
    );
  },
};