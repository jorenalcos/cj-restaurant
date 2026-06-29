import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { useCartStore } from "../../store/cartStore";
import Container from "../../components/layout/Container";
import ProductGrid from "../product/ProductGrid";
import { Star } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductDetailSkeleton from "../../components/product/ProductDetailSkeleton";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const {
  data: product,
  isLoading,
} = useProduct(Number(id));

const navigate = useNavigate();

const addItem =
  useCartStore((state) => state.addItem);

if (isLoading) {
  return (
    <div className="p-10">
      <ProductDetailSkeleton />
    </div>
  );
}

if (!product) {
  return (
    <div className="p-10">
      Product not found.
    </div>
  );
}

const totalPrice =
  quantity * product.price;

return (
  <Container>
    <button
      onClick={() => navigate(-1)}
      className="mb-6 mt-3 flex items-center gap-2 cursor-pointer"
    >
      <ArrowLeft size={18} />
      Back
    </button>
    <section className="py-12 grid gap-10 md:grid-cols-2">
      <img
        src={product.image}
        alt={product.name}
        className="h-[450px] w-full rounded-2xl object-cover"
      />
      <div>
        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>
        <p className="mt-4 text-gray-500">
          {product.description}
        </p>
        <div className="mt-3 flex items-center gap-2">
        <Star
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />
        <span>{product.rating}</span>
      </div>
        <div className="mt-6 text-3xl font-bold text-[#7B4A37]">
          ₱{product.price}
        </div>

        <div className="mt-4 text-xl font-bold">
          Total: ₱{totalPrice}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() =>
              setQuantity((prev) =>
                Math.max(
                  1,
                  prev - 1
                )
              )
            }
            className="h-10 w-10 rounded-lg border hover:bg-gray-100 cursor-pointer"
          >
            -
          </button>

          <span className="text-xl font-semibold">
            {quantity}
          </span>
          <button
            onClick={() =>
              setQuantity(
                (prev) =>
                  prev + 1
              )
            }
            className="h-10 w-10 rounded-lg border hover:bg-gray-100 cursor-pointer"
          >
            +
          </button>
        </div>

        <button
          onClick={() =>
            addItem(product, quantity)
          }
          className="mt-8 rounded-xl bg-[#7B4A37] px-8 py-3 text-white cursor-pointer"
        >
          Add To Cart
        </button>
      </div>
    </section>

    <h2 className="mb-6 text-2xl font-bold">
      Related Products
    </h2>

   <ProductGrid
      search=""
      category={product.category}
      excludeProductId={product.id}
    />
  </Container>
  );
}