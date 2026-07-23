import { MetadataRoute } from "next";
import { BLOG_REVALIDATE_SECONDS, getPublishedBlogs } from "@/src/lib/api";
import { SITE_URL } from "@/src/lib/site";

// Keep the sitemap's own cache in step with the blog fetch cache so a newly
// published post shows up here without a redeploy or manual regeneration.
export const revalidate = BLOG_REVALIDATE_SECONDS;

const STATIC_ROUTES = ["", "/about-us", "/pricing", "/integrations", "/help", "/contact-us", "/blog"];

const BLOG_PAGE_LIMIT = 50;

async function getAllPublishedBlogs() {
  const first = await getPublishedBlogs(1, BLOG_PAGE_LIMIT);
  const blogs = [...first.blogs];

  for (let page = 2; page <= first.pagination.pages; page++) {
    const next = await getPublishedBlogs(page, BLOG_PAGE_LIMIT);
    blogs.push(...next.blogs);
  }

  return blogs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getAllPublishedBlogs();
    blogEntries = blogs.map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: new Date(blog.publishedAt || blog.createdAt),
    }));
  } catch {
    // Blog API unreachable at build time — fall back to static routes only.
  }

  return [...staticEntries, ...blogEntries];
}
