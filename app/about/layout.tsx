import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Saas & Custom CRM Experts",
  description: "Learn about TZI CRM, our mission, vision, and the team behind our innovative SaaS CRM and Custom CRM solutions designed to help businesses build stronger customer relationships.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
