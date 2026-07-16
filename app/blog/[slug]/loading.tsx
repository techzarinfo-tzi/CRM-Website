export default function BlogDetailsLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow min-w-0 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16 animate-pulse">
        <div className="h-4 w-24 bg-gray-100 rounded mb-6 sm:mb-8" />
        <div className="h-8 sm:h-9 w-full bg-gray-100 rounded-xl mb-3" />
        <div className="h-8 sm:h-9 w-2/3 bg-gray-100 rounded-xl mb-4" />
        <div className="h-4 w-32 bg-gray-100 rounded mb-6 sm:mb-8" />
        <div className="w-full aspect-[16/9] rounded-2xl sm:rounded-3xl bg-gray-100 mb-8 sm:mb-10" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-4/5 bg-gray-100 rounded" />
        </div>
      </main>
    </div>
  );
}
