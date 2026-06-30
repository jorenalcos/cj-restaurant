import type { Product } from "../../types/product";
import { Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();
   const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div
      className="h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="flex items-center gap-1">
          <Star
            size={14}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="text-sm">
            {product.rating}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-[#7B4A37]">
            ₱{product.price}
          </span>

          <button
            disabled={isAdding}
            onClick={async () => {
              setIsAdding(true);

              await new Promise((resolve) =>
                setTimeout(resolve, 500)
              );

              addItem(product, quantity);

              setIsAdding(false);
            }}
            className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#7B4A37] px-5 py-2 text-white disabled:opacity-50 cursor-pointer"
          >
            {isAdding ? (
              <>
                <Loader2
                  size={12}
                  className="animate-spin"
                />
                Adding...
              </>
            ) : (
              "Add"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}