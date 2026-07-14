import { BlogPost, BlogSummary, Pagination } from "@/src/types";

const API_URL = process.env.NEXT_PUBLIC_API_ADMIN_URL || "http://localhost:5001";

// Revalidate blog data periodically so new/edited posts show up without a
// full redeploy, while still benefiting from caching between requests.
const BLOG_REVALIDATE_SECONDS = 60;

export async function getPublishedBlogs(): Promise<{
  blogs: BlogSummary[];
  pagination: Pagination;
}> {
  const res = await fetch(`${API_URL}/api/blogs`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs (${res.status})`);
  }

  return res.json();
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch blog "${slug}" (${res.status})`);
  }

  const data = await res.json();
  return data.blog;
}

export function resolveBlogImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${API_URL}${path}`;
}

// Next.js's image optimizer refuses to proxy images that resolve to a
// private/loopback IP (SSRF protection), which blocks a local backend on
// localhost. Skip optimization only in that case; a real public API host
// still gets full next/image optimization.
const apiHostname = new URL(API_URL).hostname;
export const BLOG_IMAGES_UNOPTIMIZED = ["localhost", "127.0.0.1"].includes(apiHostname);
