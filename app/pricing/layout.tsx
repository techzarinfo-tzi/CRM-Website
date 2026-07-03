import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Pricing Plans | Affordable SaaS & Custom CRM Solutions",
  description: "Explore TZI CRM pricing plans designed for businesses of all sizes. Compare features, choose the right SaaS CRM or Custom CRM solution, and grow with confidence.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
