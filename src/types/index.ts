// Shared TypeScript types and interfaces

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface BlogSummary {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;
  metaDescription: string;
  publishedAt: string;
  createdAt: string;
}

export interface BlogPost extends BlogSummary {
  content: string;
  metaTitle: string;
  metaKeywords: string[];
  schemaMarkup: Record<string, unknown> | null;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}
