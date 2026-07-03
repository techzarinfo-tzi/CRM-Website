import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get CRM Expert Consultation",
  description: "Any queries about TZI CRM? Contact our experts for product demos, pricing, support, or Custom CRM development. We're here to help your business.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
