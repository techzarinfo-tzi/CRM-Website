import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Called by the admin backend right after a blog is created, updated,
// deleted, published, or drafted, so the public site reflects the change
// immediately instead of waiting out the fetch cache's revalidate window.
export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const slugs: string[] = Array.isArray(body.slugs) ? body.slugs.filter(Boolean) : [];

  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  for (const slug of slugs) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({ revalidated: true, slugs });
}
