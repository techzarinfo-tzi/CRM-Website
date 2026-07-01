"use client";

import { useState } from "react";

const faqs = [
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
];

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
        Let's Answer Your Questions
      </h2>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => {
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
