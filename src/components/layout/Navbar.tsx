import { Menu, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#17a562] text-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#7B4A37] font-bold">
                CJ
            </div>

            <span className="hidden md:block text-xl font-semibold">
                Restaurant
            </span>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">Orders</a>
        </nav>

        <div className="flex items-center gap-4">

          <ShoppingCart className="cursor-pointer" />

          <button className="md:hidden">
            <Menu />
          </button>

        </div>

      </div>
    </header>
  );
}