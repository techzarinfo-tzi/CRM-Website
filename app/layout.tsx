import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TZI CRM | AI-Powered Customer Management System",
  description: "TZI CRM helps sales teams track leads, organize follow-ups, and close deals faster. All-in-one CRM built for growing businesses.",
  keywords: "CRM software for Business, CRM software for Small Business, CRM software for lead management, sales lead tracking software, Saas CRM, Saas CRM Software, White Label CRM, AI driven CRM, AI powered CRM, CRM solutions, sales CRM software, best CRM for startups, custom CRM software, customer relationship management software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
