import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, resolveBlogImageUrl, BLOG_IMAGES_UNOPTIMIZED } from "@/src/lib/api";
import { BlogImage } from "@/src/components/blog/BlogImage";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog post not found" };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    keywords: blog.metaKeywords,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogDetailsPage({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = resolveBlogImageUrl(blog.featuredImage);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow min-w-0 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16">
        {blog.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.schemaMarkup) }}
          />
        )}

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors mb-6 sm:mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-gray-900 mb-4 break-words">
          {blog.title}
        </h1>
        <p className="text-gray-400 text-sm mb-6 sm:mb-8">{formatDate(blog.publishedAt)}</p>

        {imageUrl ? (
          <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 mb-8 sm:mb-10">
            <BlogImage
              src={imageUrl}
              alt={blog.title}
              priority
              unoptimized={BLOG_IMAGES_UNOPTIMIZED}
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="w-full aspect-[16/9] rounded-2xl sm:rounded-3xl mb-8 sm:mb-10"
            style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
          />
        )}

        <div
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-headings:break-words prose-a:text-[#3b82f6] prose-a:break-words prose-img:rounded-xl prose-img:mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </main>
    </div>
  );
}
