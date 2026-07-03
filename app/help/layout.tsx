import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support | Fast & Reliable Customer Assistance",
  description: "Need help? Reach our support team for technical assistance, onboarding guidance, troubleshooting, and expert CRM solutions whenever you need them.",
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
