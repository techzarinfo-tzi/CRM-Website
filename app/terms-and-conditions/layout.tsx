import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | TZI CRM",
  description: "Read the TZI CRM Terms & Conditions covering the SaaS Subscription Agreement and Terms of Purchase and Use for our CRM products and services.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
