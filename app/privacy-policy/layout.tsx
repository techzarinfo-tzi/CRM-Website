import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TZI CRM",
  description: "Read the TZI CRM Privacy Policy to understand how we collect, use, and protect your personal information across our website and services.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
