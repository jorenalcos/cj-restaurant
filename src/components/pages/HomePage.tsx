import Container from "../layout/Container";
import SearchBar from "../ui/SearchBar";
import CategoryChip from "../ui/CategoryChip";
import ProductGrid from "../product/ProductGrid";
import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
  useState("All");

  const categories = [
      "All",
      "Coffee",
      "Dessert",
      "Meals",
      "Drinks",
    ];

  return (
    <Container>
      <section className="py-20">
        <h1 className="text-5xl font-extrabold">
          Good Afternoon 👋
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          What are you craving today?
        </p>

        <SearchBar
          value={search}
          onChange={setSearch}
        />
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map((item) => (
            <CategoryChip
              key={item}
              label={item}
              active={category === item}
              onClick={() =>
                setCategory(item)
              }
            />
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Popular Menu
            </h2>
          </div>
          <ProductGrid
            search={search}
            category={category}
          />
        </div>
      </section>
    </Container>
  );
}