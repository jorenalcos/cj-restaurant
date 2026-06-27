export default function ProductSkeleton() {
  return (
    <div
      className="
      animate-pulse
      overflow-hidden
      rounded-2xl
      bg-white
      shadow
    "
    >
    <div className="h-48 bg-gray-200" />
      <div className="space-y-3 p-4">
        <div className="h-5 rounded bg-gray-200" />
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-200" />
      </div>
    </div>
  );
}