export default function ProductDetailSkeleton() {
  return (
    <div className="grid gap-10 py-12 md:grid-cols-2 animate-pulse">
      <div className="h-[450px] rounded-2xl bg-gray-200" />
      <div>
        <div className="h-10 w-2/3 rounded bg-gray-200" />
        <div className="mt-4 h-5 w-full rounded bg-gray-200" />
        <div className="mt-2 h-5 w-3/4 rounded bg-gray-200" />
        <div className="mt-8 h-10 w-32 rounded bg-gray-200" />
        <div className="mt-8 flex gap-3">
          <div className="h-10 w-10 rounded bg-gray-200" />
          <div className="h-10 w-10 rounded bg-gray-200" />
          <div className="h-10 w-10 rounded bg-gray-200" />
        </div>
        <div className="mt-8 h-12 w-48 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
}