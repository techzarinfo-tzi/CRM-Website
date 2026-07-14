import { BlogSummary } from "@/src/types";
import { BlogCard } from "./BlogCard";

export function BlogGrid({ posts }: { posts: BlogSummary[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl border border-dashed border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">No blog posts yet</h3>
        <p className="text-gray-500">Check back soon for fresh articles and updates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}
