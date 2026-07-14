import Image from "next/image";
import Link from "next/link";
import { BlogSummary } from "@/src/types";
import { resolveBlogImageUrl, BLOG_IMAGES_UNOPTIMIZED } from "@/src/lib/api";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogSummary }) {
  const imageUrl = resolveBlogImageUrl(post.featuredImage);

  return (
    <div className="flex flex-col rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white group">
      <Link href={`/blog/${post.slug}`} className="relative w-full aspect-[4/3] bg-gray-100 block">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            unoptimized={BLOG_IMAGES_UNOPTIMIZED}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
          />
        )}
      </Link>
      <div className="flex flex-col flex-grow p-6">
        <span className="text-sm text-gray-400 mb-2">{formatDate(post.publishedAt)}</span>
        <h2 className="text-xl font-bold mb-3 line-clamp-2 leading-tight text-gray-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#3b82f6] transition-colors">
            {post.title}
          </Link>
        </h2>
        {post.metaDescription && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">{post.metaDescription}</p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] group-hover:gap-3 transition-all w-fit"
        >
          Read More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
