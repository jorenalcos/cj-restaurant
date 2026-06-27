import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

  export default function SearchBar({
    value,
    onChange,
  }: Props) {
    return (
      <div className="relative mt-8">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search menu..."
          className="w-full rounded-xl border bg-white py-4 pl-12 pr-4 outline-none focus:border-[#7B4A37] shadow-sm focus:shadow-md"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
}