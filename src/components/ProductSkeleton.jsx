export function ProductSkeleton() {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-2">
      <div className="h-48 animate-pulse rounded-md bg-gray-200" />

      <div className="mt-3 space-y-2">
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}