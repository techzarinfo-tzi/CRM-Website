"use client";

import { useState } from "react";

const faqData: Record<string, { question: string, answer: string }[]> = {
  "CRM Software": [
    {
      question: "What is CRM software?",
      answer: "CRM is an easy-to-use customer relationship management (CRM) solution that makes it simple for businesses of all sizes to manage leads, customers, sales, and support from one place. CRM streamlines your daily workflow, boosts team productivity, and makes strong relationships with your customers."
    },
    {
      question: "Why does my business need a CRM?",
      answer: "As your business grows, managing customer data manually becomes difficult. With TZI CRM, leads are automatically managed, effective customer interactions, improving productivity and building stronger customer relationships."
    },
    {
      question: "How is CRM different from ERP?",
      answer: "A CRM focuses on managing customer relationships, sales, and marketing, whereas an ERP manages internal operations like finance, inventory, and procurement. CRM helps businesses strengthen customer engagement and drive sales growth."
    },
    {
      question: "How do I choose the right CRM?",
      answer: "The right CRM should fit your business processes, help fuel growth, and work with your existing tools. TZI CRM has fully-customizable features, easy integrations, and scalable solutions to accommodate businesses of any size."
    },
    {
      question: "Is there a mobile app for CRM?",
      answer: "Yes! With our TZI CRM, you can handle leads, update customer info, proper follow-ups, and track sales activities at any time and from anywhere using their smartphone or tablet."
    }
  ],
  "Integrations": [
    {
      question: "Which applications can be integrated with CRM?",
      answer: "CRM can integrate with popular business tools such as Meta Ads, WhatsApp, Gmail, Website Forms, Google Meet, LinkedIn, IndiaMART, Justdial, 99acres, Sulekha, and many other third party apps."
    },
    {
      question: "Can I connect Meta Ads?",
      answer: "Yes. TZI CRM has the integration of meta ads that can automatically fetch leads from your Meta Ads (Facebook & Instagram) and add them right away on your CRM for quick follow-ups."
    },
    {
      question: "Can Website Forms be Integrated with CRM?",
      answer: "Yes! When someone fills out a form on your site, their enquiry gets automatically added to your TZI CRM, so your team can respond without manual data entry."
    },
    {
      question: "Can you integrate my business tools with TZI CRM?",
      answer: "Yes. We can integrate our TZI CRM with the business tools you already use, helping you manage everything from one place."
    },
    {
      question: "Will all customer conversations appear in one place?",
      answer: "Yes. TZI CRM collects customer conversations from connected platforms into one dashboard, so you can easily view customer details and track every interaction in one place."
    }
  ],
  "Pricing": [
    {
      question: "How much does CRM software cost?",
      answer: "TZI CRM prices start at ₹5,999 per year for the Launch plan, ₹11,999 per year for the Cruise plan, and ₹21,999 per year for the Accelerate plan. We also offer a custom-priced Enterprise plan for large organizations."
    },
    {
      question: "Do you offer annual plans?",
      answer: "Yes. All TZI CRM plans are available on an annual subscription. Annual billing provides the best value while ensuring uninterrupted access to updates, support, and new features."
    },
    {
      question: "Is there a one-time payment option?",
      answer: "Yes, TZI CRM can also be purchased as a white-label application, which allows you to put your logo and your own brand identity on the platform as well as the product itself."
    },
    {
      question: "Are there hidden charges?",
      answer: "No. We believe in transparent pricing. You only pay for the plan you choose, and any optional customizations or enterprise requirements, feel free to contact our team at sales@techzarinfo.com for a personalized quote"
    },
    {
      question: "Do integrations cost extra?",
      answer: "Yes. Each additional integration is available at ₹1,000 per integration. Our team will discuss your integration requirements in advance, ensuring complete transparency with no unexpected charges."
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
                <div 
                  className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all ${isOpen ? 'text-white' : 'bg-gray-100 text-gray-400'}`}
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
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
