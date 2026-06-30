import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

import { useProducts } from "../../hooks/useProducts";

interface Props {
  search: string;
  category: string;
  excludeProductId?: number;
}


export default function ProductGrid({
  search,
  category,
  excludeProductId  
}: Props) {
  const {
    data,
    isLoading,
    isError,
  } = useProducts();

  const filteredProducts = data?.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : product.category === category;

    const notCurrentProduct =
      product.id !== excludeProductId;

    return (
      matchSearch &&
      matchCategory &&
      notCurrentProduct
    );
  }) || [];

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton
            key={index}
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500">
        Failed to load products.
      </div>
    );
  }


  if (!filteredProducts.length) {
    return (
    <div className="py-10 text-center">
      <h3 className="text-xl font-semibold">
        No products found
      </h3>
    </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}