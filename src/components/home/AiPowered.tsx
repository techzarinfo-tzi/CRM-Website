"use client";

import { useState } from "react";
import Image from "next/image";
import clientDetails from "@/src/assets/images/client_details.png";
import whatsappDeals from "@/src/assets/images/whatsapp_deals.png";
import voiceCommands from "@/src/assets/images/voice_commands.png";

const tabs = [
  {
    label: "Client Details",
    title: "Client Details",
    description:
      "Get complete customer information, lead history, and ongoing deal updates instantly with text on chatbots.",
    image: clientDetails,
  },
  {
    label: "Whatsapp & Phone Calls",
    title: "WhatsApp & Phone Calls",
    description:
      "Sales people can make direct WhatsApp messages and phone calls to customers without leaving the CRM platform.",
    image: whatsappDeals,
  },
  {
    label: "Voice Commands",
    title: "Voice Commands",
    description:
      'Use voice commands such as "Show me this customer\'s details" or "What\'s the status of this deal?" and get instant responses from the AI assistant.',
    image: voiceCommands,
  },
];

export default function AiPowered() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="max-w-2xl">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-extrabold text-gray-900 leading-[1.2] tracking-tight">
            Our <span className="text-blue-500">AI Powered</span> CRM Make Every Task Smarter
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Need information about a specific client? Our AI-driven CRM comes with an intelligent chatbot that helps you instantly access client details without searching through multiple screens.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8 border-b border-gray-100">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`relative pb-3 text-sm sm:text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-px h-0.5 w-full bg-gray-900" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Tab content ── */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="relative w-full max-w-[400px] sm:w-[380px] lg:w-[440px] aspect-[401/342] rounded-3xl overflow-hidden shrink-0">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover scale-110"
              sizes="440px"
            />
          </div>

          <div className="text-center sm:text-left max-w-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {active.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
