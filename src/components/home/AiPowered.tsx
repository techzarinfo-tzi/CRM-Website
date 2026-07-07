"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "Client Details",
    title: "Client Details",
    description:
      "Get complete customer information, lead history and ongoing deal updates instantly with text on chatbots.",
    image: "/images/home_images/Client_Details.svg",
  },
  {
    label: "Whatsapp & Phone Calls",
    title: "WhatsApp & Phone Calls",
    description:
      "Sales people can make direct WhatsApp messages and phone calls to customers without leaving the CRM platform.",
    image: "/images/home_images/Whatsapp (2).svg",
  },
  {
    label: "Voice Commands",
    title: "Voice Commands",
    description:
      'Use voice commands such as "Show me this customer\'s details" or "What\'s the status of this deal?" and get instant responses from the AI assistant.',
    image: "/images/home_images/Voice_Commands.svg",
  },
];

export default function AiPowered() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  // Automate tab cycling with reset-on-interaction support
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section className="py-12 md:py-20 lg:py-24 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Heading ── */}
        <div className="flex flex-col gap-[16px] w-full lg:w-[1251px] mb-12 sm:mb-16">
          <h2 
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium text-gray-900 tracking-tight"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
              lineHeight: '58px',
              letterSpacing: '-1.2px'
            }}
          >
            Our <span className="text-blue-500">AI Powered</span> CRM <br className="hidden sm:inline" />
            make Every Task Smarter
          </h2>
          <p 
            className="text-base sm:text-[18px] lg:text-[22px] max-w-3xl"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '-0.3px',
              color: '#31373D'
            }}
          >
            Need information about a specific client? Our AI-driven CRM comes with an intelligent chatbot that helps you instantly access client details without searching through multiple screens.
          </p>
        </div>

        {/* ── Main Tab Card Container ── */}
        <div className="rounded-[24px] border border-gray-100 bg-[#F7F8FA] shadow-sm p-6 sm:p-8 lg:p-10 w-full max-w-[1251px] mx-auto min-h-[410px] flex flex-col justify-between">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-b border-gray-200/80 pb-3">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  suppressHydrationWarning
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`relative pb-3 text-sm sm:text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-gray-950 font-semibold"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-px h-[3px] w-full bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            
            {/* Left: Illustration Image */}
            <div className="relative w-full max-w-[450px] aspect-[401/342] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
            </div>

            {/* Right: Content Text */}
            <div className="flex-1 text-left max-w-xl">
              <h3 
                className="text-gray-900"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '-0.4px'
                }}
              >
                {active.title}
              </h3>
              <p 
                className="mt-4 leading-relaxed"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#555E67'
                }}
              >
                {active.description}
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
