export default function BlogLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-10 py-6 md:py-10">
        <div className="animate-pulse">
          <div className="h-10 w-2/3 md:w-1/2 bg-gray-100 rounded-xl mb-4" />
          <div className="h-4 w-1/2 md:w-1/3 bg-gray-100 rounded-lg mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl border border-gray-100 overflow-hidden">
                <div className="w-full aspect-[4/3] bg-gray-100" />
                <div className="p-6">
                  <div className="h-3 w-1/3 bg-gray-100 rounded mb-3" />
                  <div className="h-5 w-full bg-gray-100 rounded mb-2" />
                  <div className="h-5 w-2/3 bg-gray-100 rounded mb-4" />
                  <div className="h-4 w-full bg-gray-100 rounded mb-1" />
                  <div className="h-4 w-4/5 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
