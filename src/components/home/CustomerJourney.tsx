"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import customerJourney from "@/src/assets/images/customer_journey.png";
import dealQualificationImg from "@/src/assets/images/deal_qualification.png";
import proposalSentImg from "@/src/assets/images/proposal_sent.png";
import invoiceSent from "@/src/assets/images/invoice_sent.png";
import invoiceSentAnimi from "@/src/assets/images/Invoice sent_animi.png";
import dealWonAnimation from "@/src/assets/images/Deal won Animation start.png";
import leadCaptureIcon from "@/src/assets/images/lead_capture_icon.png";
import dealQualificationIcon from "@/src/assets/images/deal_qualification_icon.png";
import proposalSentIcon from "@/src/assets/images/proposalsent_icon.png";

const tabs = [
  {
    icon: leadCaptureIcon,
    title: "Lead Capture",
    description:
      "Once the client fills out a form from any of your marketing channels, their details are automatically captured and added to the CRM.",
  },
  {
    icon: dealQualificationIcon,
    title: "Deal Qualification",
    description:
      "In this stage, your sales team can evaluate lead potential and determine whether the opportunity is worth pursuing.",
  },
  {
    icon: proposalSentIcon,
    title: "Proposal Sent / Negotiation",
    description:
      "Next, you can share proposals, discuss requirements, and negotiate terms to move deals forward.",
  },
];

const stages = [
  { tab: 0, image: customerJourney, alt: "Lead capture dashboard", button: null as null | "invoice" | "won" },
  { tab: 1, image: dealQualificationImg, alt: "Deal qualification details", button: null },
  { tab: 2, image: proposalSentImg, alt: "Proposal sent form", button: "invoice" },
  { tab: 2, image: invoiceSent, alt: "Invoice sent, closed won deal", button: "won" },
];

const STAGE_INTERVAL = 3200;

export default function CustomerJourney() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % stages.length);
    }, STAGE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const activeTab = stages[stageIndex].tab;

  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="max-w-2xl">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-extrabold text-gray-900 leading-[1.2] tracking-tight">
            Stay Connected Every Step of the{" "}
            <span className="text-blue-500">Customer Journey</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            TZI CRM solutions help businesses streamline customer interactions, organize sales activities and improve team productivity.
          </p>
        </div>

        {/* ── Journey card: everything happens in this one card ── */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8">
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={tab.title}
                  type="button"
                  onClick={() =>
                    setStageIndex(stages.findIndex((s) => s.tab === index))
                  }
                  className={
                    "text-left w-full cursor-pointer " +
                    (index === 0
                      ? "pb-6 sm:pb-0 sm:pr-8"
                      : index === tabs.length - 1
                      ? "pt-6 sm:pt-0 sm:pl-8"
                      : "py-6 sm:py-0 sm:px-8")
                  }
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={tab.icon}
                      alt=""
                      className="w-4 h-4 object-contain shrink-0"
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                      {tab.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {tab.description}
                  </p>
                  <span
                    className={`mt-4 block h-[3px] rounded-full bg-blue-500 transition-all duration-500 ${
                      isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Status pill: sits in its own dedicated space, centered, clear of the text above and the card below */}
          <div className="mt-3 sm:mt-4 h-[70px] sm:h-[84px] flex items-center justify-center">
            <div className="relative w-[200px] sm:w-[240px] h-[56px] sm:h-[68px]">
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                  stages[stageIndex].button === "invoice" ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={invoiceSentAnimi}
                  alt="Invoice sent"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                  stages[stageIndex].button === "won" ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={dealWonAnimation}
                  alt="Deal won"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Auto-swapping product screenshot */}
          <div className="relative aspect-[1026/400] rounded-xl overflow-hidden bg-gray-50">
            {stages.map((stage, index) => (
              <div
                key={stage.alt}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === stageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
