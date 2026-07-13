import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Integrations | Connect TZI CRM with Your Business Tools",
  description: "Lets Integrate our TZI CRM with your existing business applications to streamline workflows, streamline processes, and manage customer data from one platform.",
};

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

