"use client";

export default function BlogDetailsError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow min-w-0 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Couldn&apos;t load this post</h1>
        <p className="text-gray-500 mb-6">Something went wrong while fetching this article. Please try again.</p>
        <button
          onClick={reset}
          className="px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all hover:shadow-lg hover:opacity-95 cursor-pointer"
          style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
        >
          Try again
        </button>
      </main>
    </div>
  );
}
