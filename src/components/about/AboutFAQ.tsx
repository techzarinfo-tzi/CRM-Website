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
      answer: "TZI CRM is a comprehensive customer relationship management platform designed to help businesses streamline their sales pipeline, manage contacts, and foster long-lasting client relationships."
    },
    {
      question: "What are the Three Important Factors in a CRM system?",
      answer: "The three most important factors in a CRM system are ease of use, robust automation capabilities, and deep analytical insights to drive informed business decisions."
    },
    {
      question: "Will CRM be replaced by AI?",
      answer: "AI will not replace CRM; rather, it will enhance it. TZI CRM integrates AI to automate repetitive tasks and provide smarter insights, making your team more productive and focused on building relationships."
    },
    {
      question: "Which Company is Best for CRM?",
      answer: "TZI CRM is widely considered the best choice for businesses looking for an agile, scalable, and highly customizable platform that adapts to their specific growth needs."
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
    <div className="flex flex-col items-center max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-gray-900 mb-8 text-center tracking-tight">
        Your Questions, Our Expert Answers
      </h2>

      {/* Tabs */}
      <div className="bg-[#F8F9FA] p-1.5 rounded-2xl flex items-center justify-center mb-10 w-fit mx-auto border border-gray-100">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(0);
            }}
            className={`px-6 py-2.5 rounded-[12px] text-[15px] font-medium transition-all duration-300 ${
              activeTab === tab
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
                <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed">
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
