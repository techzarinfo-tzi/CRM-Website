"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

const faqsByTab: Record<string, FaqItem[]> = {
  "CRM Software": [
    {
      question: "What is CRM software?",
      answer:
        "CRM is an easy-to-use customer relationship management (CRM) solution that makes it simple for businesses of all sizes to manage leads, customers, sales, and support from one place. CRM streamlines your daily workflow, boosts team productivity, and makes strong relationships with your customers.",
    },
    {
      question: "Why does my business need a CRM?",
      answer:
        "A CRM keeps every lead, deal, and customer conversation in one place so nothing falls through the cracks. It helps your team follow up faster, track performance and make better decisions with real-time data instead of scattered spreadsheets.",
    },
    {
      question: "How is CRM different from ERP?",
      answer:
        "CRM focuses on managing customer-facing activities like sales, marketing and support, while ERP manages internal business operations such as inventory, accounting and supply chain. Many businesses use both together for a complete view of their operations.",
    },
    {
      question: "How do I choose the right CRM?",
      answer:
        "Look for a CRM that matches your team size, industry and workflow. Consider ease of use, integration options, automation features, pricing and the quality of customer support before making a decision.",
    },
    {
      question: "Is there a mobile app for CRM?",
      answer:
        "Yes, TZI CRM is available on both iOS and Android so your sales team can manage leads, track deals and respond to customers on the go.",
    },
  ],
  Integrations: [
    {
      question: "Which platforms does TZI CRM integrate with?",
      answer:
        "TZI CRM connects with Facebook & Instagram Lead Ads, LinkedIn Lead Gen Campaigns, WhatsApp, email, and calendar apps, so leads flow into your CRM automatically from every channel.",
    },
    {
      question: "Can I connect my WhatsApp Business account?",
      answer:
        "Yes, you can link your WhatsApp Business account to send and receive messages, share updates and follow up with customers directly from the CRM.",
    },
    {
      question: "Does TZI CRM support Zapier or API access?",
      answer:
        "TZI CRM offers API access and Zapier support so you can connect it with thousands of other tools and automate workflows across your tech stack.",
    },
    {
      question: "How long does it take to set up an integration?",
      answer:
        "Most integrations take just a few minutes to connect. Simply authorize the platform from the Integrations panel and your leads will start syncing automatically.",
    },
    {
      question: "Will my existing data sync automatically?",
      answer:
        "Yes, once an integration is connected, new leads and updates sync automatically in real time, and you can also import your existing historical data.",
    },
  ],
  Pricing: [
    {
      question: "How much does CRM software cost?",
      answer:
        "TZI CRM prices start at ₹5,999 per year for the Launch plan, ₹11,999 per year for the Cruise plan, and ₹21,999 per year for the Accelerate plan. We also offer a custom-priced Enterprise plan for large organizations.",
    },
    {
      question: "Do you offer annual plans?",
      answer:
        "Yes. All TZI CRM plans are available on an annual subscription. Annual billing provides the best value while ensuring uninterrupted access to updates, support, and new features.",
    },
    {
      question: "Is there a one-time payment option?",
      answer:
        "Yes, TZI CRM can also be purchased as a white-label application, which allows you to put your logo and your own brand identity on the platform as well as the product itself.",
    },
    {
      question: "Are there hidden charges?",
      answer:
        "No. We believe in transparent pricing. You only pay for the plan you choose, and any optional customizations or enterprise requirements, feel free to contact our team at sales@techzarinfo.com for a personalized quote",
    },
    {
      question: "Do integrations cost extra?",
      answer:
        "Yes. Each additional integration is available at ₹1,000 per integration. Our team will discuss your integration requirements in advance, ensuring complete transparency with no unexpected charges.",
    },
  ],
};

const tabs = Object.keys(faqsByTab);

export default function YourQuestions() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = faqsByTab[activeTab];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <h2
          className="text-center text-[32px] sm:text-[44px] lg:text-[52px] font-medium text-gray-900 tracking-tight mb-5 sm:mb-6"
          style={{
            fontFamily: 'Geist, sans-serif',
            fontWeight: 500,
            lineHeight: '58px',
            letterSpacing: '-2px'
          }}
        >
          Your Questions, Our Expert Answers
        </h2>

        {/* ── Tabs Navigation ── */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex flex-wrap justify-center items-center gap-2 rounded-xl border border-gray-100 bg-[#F3F4F6]/50 p-1.5">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  suppressHydrationWarning
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`h-[36px] px-5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center justify-center ${isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-900 bg-transparent"
                    }`}
                  style={
                    isActive
                      ? {
                        background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)",
                        boxShadow: "0px 2px 6px 0px rgba(74, 58, 255, 0.1), inset 0px 1px 1.5px 0px rgba(255, 255, 255, 0.25), inset 0px -1px 1px 0px rgba(0, 0, 0, 0.12)",
                      }
                      : {}
                  }
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Accordion List ── */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <button
                  suppressHydrationWarning
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-start justify-between gap-4 text-left p-5 sm:p-6 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all ${isOpen ? "" : "bg-gray-100"
                      }`}
                    style={
                      isOpen
                        ? {
                          background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)",
                          boxShadow: "0px 2px 6px 0px rgba(74, 58, 255, 0.1), inset 0px 1px 1.5px 0px rgba(255, 255, 255, 0.25), inset 0px -1px 1px 0px rgba(0, 0, 0, 0.12)",
                        }
                        : {}
                    }
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "text-white rotate-90" : "text-gray-500 rotate-0"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
