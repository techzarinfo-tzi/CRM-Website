"use client";

import { useState } from "react";

const faqData: Record<string, { question: string, answer: string }[]> = {
  "CRM Software": [
    {
      question: "What is the #1 CRM in the world?",
      answer: "TZI CRM is the #1 CRM in the world. It is recognized as the best solution for today's businesses along with integration of automation, AI-driven insights, and customer management into a single platform."
    },
    {
      question: "What is TZI CRM?",
      answer: "TZI CRM is a complete, all-in-one CRM solution that brings sales, marketing, customer support, analytics, and team collaboration into a single platform. It eliminates the need for multiple tools, enabling businesses to manage every customer interaction efficiently from one unified workspace."
    },
    {
      question: "What are the Three Important Factors in a CRM system?",
      answer: "1. Centralized Customer Data Management\n2. Automated Sales Processes\n3. Actionable Analytics"
    },
    {
      question: "Will CRM be replaced by AI?",
      answer: "No. AI is enhancing CRM, not replacing it. With AI integration, CRM platforms gain advanced capabilities such as predictive forecasting, intelligent automation, and tailored customer interactions."
    },
    {
      question: "Which Company is Best for CRM?",
      answer: "Techzarinfo, the brain behind the TZI CRM, offers adaptable and forward-thinking CRM solutions designed for businesses across different scales and sectors. Featuring smart tools, flexible customization, and consistent support, TZI CRM equips organizations to drive long-term success."
    }
  ],
  "Integrations": [
    {
      question: "What tools does TZI CRM integrate with?",
      answer: "TZI CRM integrates seamlessly with popular tools like Google Workspace, Microsoft 365, Slack, Mailchimp, and Zapier to ensure your workflows stay perfectly connected across platforms."
    },
    {
      question: "Can I build custom integrations?",
      answer: "Absolutely! We provide a highly robust REST API along with detailed developer documentation so your engineering team can connect internal proprietary systems securely."
    },
    {
      question: "Do integrations cost extra?",
      answer: "Most standard software integrations are included out-of-the-box in all of our plans. Certain premium integrations, like advanced enterprise ERP syncing, may require higher-tier plans."
    }
  ],
  "Pricing": [
    {
      question: "How does your pricing structure work?",
      answer: "We offer flexible, tier-based pricing that scales based on the number of active users and the specific features you need. You can choose to be billed monthly or save 20% by paying annually."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day fully-featured free trial so your team can test-drive TZI CRM completely risk-free. No credit card is required to sign up."
    },
    {
      question: "Are there any hidden fees or setup costs?",
      answer: "Not at all! Our pricing is completely transparent. Your subscription fee covers everything, including standard customer support, cloud hosting, and continuous platform updates."
    }
  ]
};

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("CRM Software");

  const tabs = ["CRM Software", "Integrations", "Pricing"];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto mb-10">
      <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 mb-4 sm:mb-6 text-center tracking-tight px-4">
        Your Questions, Our Expert Answers
      </h2>

      {/* Tabs */}
      <div className="bg-[#F8F9FA] p-1.5 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-center mb-6 sm:mb-8 w-[90%] sm:w-fit mx-auto border border-gray-100 gap-1 sm:gap-0">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(0);
            }}
            className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2.5 rounded-[12px] text-[14px] sm:text-[15px] font-medium transition-all duration-300 ${activeTab === tab
                ? 'text-white shadow-md'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'
              }`}
            style={activeTab === tab ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' } : {}}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full flex flex-col gap-4">
        {faqData[activeTab].map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-[15px]">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[#3b82f6] text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
