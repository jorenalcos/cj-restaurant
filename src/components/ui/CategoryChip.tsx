interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryChip({
  label,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-5 py-2 shadow transition cursor-pointer
        ${
          active
            ? "bg-[#7B4A37] text-white"
            : "bg-white text-gray-700"
        }
      `}
    >
      {label}
    </button>
  );
}