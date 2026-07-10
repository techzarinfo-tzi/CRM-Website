"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FreeTrial from "./FreeTrial";

export default function HeroSection() {
  const [isFreeTrialOpen, setIsFreeTrialOpen] = useState(false);

  return (
    <section className="py-8 md:py-12 lg:py-16 relative bg-white overflow-hidden">

      {/* ════════════════════════
          HERO BODY
      ════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-4 pb-6">

        <div className="relative w-full flex flex-col items-center">
          {/* Dashed border frame */}
          <div 
            className="absolute -top-6 left-2 right-2 md:left-[4%] md:right-[4%] -bottom-6 border border-dashed border-gray-300 pointer-events-none " 
          />

          {/* Trust badge */}
          <div 
            className="inline-flex mb-4 mt-2 items-center justify-center bg-white font-heading"
            style={{
              width: '261px',
              height: '24px',
              paddingTop: '2px',
              paddingRight: '8px',
              paddingBottom: '2px',
              paddingLeft: '8px',
              gap: '4px',
              borderRadius: '100px',
              border: '1px solid #BED5FF',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '20px',
              letterSpacing: '-0.1px',
              color: '#31373D',
              opacity: 1
            }}
          >
            Trusted by 100+ growing organizations
          </div>

          {/* Headline row 1 */}
          <h1 
            className="font-heading font-bold text-center text-[40px] md:text-[68px] lg:text-[92px] leading-tight lg:leading-[105px] tracking-tight lg:tracking-[-3.6px]"
            style={{
              color: '#1D1F20'
            }}
          >
            Transform All Conversations
          </h1>

          {/* Headline row 2 — "into [Conversions]" */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-0 mt-1 lg:-mt-2 lg:gap-x-0.1">
            <h1 
              className="font-heading font-bold text-[40px] md:text-[68px] lg:text-[92px] leading-tight lg:leading-[105px] tracking-tight lg:tracking-[-3.6px]"
              style={{
                color: '#1D1F20'
              }}
            >
              into
            </h1>

            {/* Component 1.svg in place of Conversions text */}
            <div className="relative inline-block lg:-mt-2 ml-0 lg:-ml-8 mt-0 md:mt-0">
              <Image
                src="/images/Component 1.svg"
                alt="Conversions"
                width={580}
                height={122}
                className="w-[280px] h-auto md:w-[400px] lg:w-[580px] lg:h-[122px] object-contain"
                style={{
                  opacity: 1
                }}
                priority
              />
            </div>
          </div>

          {/* Sub-headline */}
          <p 
            className="mt-6 text-center font-heading max-w-3xl text-[16px] md:text-[20px] lg:text-[24px]"
            style={{
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '-0.3px',
              color: '#31373D'
            }}
          >
            Track every lead, streamline follow-ups and close deals faster than ever
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 w-full sm:w-auto">
            <Link
              href="/contact-us"
              className="font-semibold text-white transition-all shadow-sm"
              style={{
                width: '131.22px',
                height: '40.61px',
                paddingTop: '10.81px',
                paddingRight: '21.61px',
                paddingBottom: '10.81px',
                paddingLeft: '21.61px',
                gap: '9.01px',
                borderRadius: '12px',
                background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)',
                boxShadow: '0px 2px 2px 0px #534FEB40',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                opacity: 1
              }}
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setIsFreeTrialOpen(true)}
              className="font-semibold text-black transition-all cursor-pointer"
              style={{
                width: '243px',
                height: '48px',
                paddingTop: '12px',
                paddingRight: '16px',
                paddingBottom: '12px',
                paddingLeft: '16px',
                gap: '10px',
                borderRadius: '12px',
                border: '1px solid #EDEEF0',
                boxShadow: '0px 0px 4px 0px #edeef0',
                background: '#EDEEF0',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                opacity: 1
              }}
            >
              Start Your 14 Days Free Trial
            </button>
          </div>
        </div>

        {/* Dashboard screenshot */}
        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-gray-50">
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-xl opacity-95">
                <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <Image
              src="/images/Business_dashboard.png"
              alt="Business Dashboard"
              width={1200}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>

      <FreeTrial isOpen={isFreeTrialOpen} onClose={() => setIsFreeTrialOpen(false)} />
    </section>
  );
}
