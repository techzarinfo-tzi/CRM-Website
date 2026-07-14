import { BlogHeader } from "@/src/components/blog/BlogHeader";
import { BlogGrid } from "@/src/components/blog/BlogGrid";
import { getPublishedBlogs } from "@/src/lib/api";

export default async function BlogPage() {
  const { blogs } = await getPublishedBlogs();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-10 py-6 md:py-10">
        <BlogHeader />
        <BlogGrid posts={blogs} />
      </main>
    </div>
  );
}
