import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | CRM Tips, Sales Insights & Business Growth",
  description: "Stay updated with the latest CRM trends, sales strategies, automation tips, and business insights. Explore expert articles on SaaS CRM and Custom CRM solutions.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
