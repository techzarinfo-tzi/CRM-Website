"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      {/* ════════════════════════
          HERO BODY
      ════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-8 pb-16">

        {/* ── Frame: wraps only the text content above, stops before the dashboard screenshot ── */}
        <div className="relative w-full flex flex-col items-center">
          {/* Dashed border frame */}
          <div className="absolute -top-6 left-[8%] right-[8%] -bottom-6 border border-dashed border-gray-200 pointer-events-none" />

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
          <div className="flex flex-wrap items-center justify-center gap-x-0 mt-1 lg:-mt-2">
            <h1 
              className="font-heading font-bold text-[40px] md:text-[68px] lg:text-[92px] leading-tight lg:leading-[105px] tracking-tight lg:tracking-[-3.6px]"
              style={{
                color: '#1D1F20'
              }}
            >
              into
            </h1>

            {/* Component 1.svg in place of Conversions text */}
            <div className="relative inline-block lg:-mt-2 -ml-2 md:-ml-4 lg:ml-0">
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
            Track every lead, automate follow-ups and close deals faster than ever
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-5 mt-8">
            <Link
              href="#"
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
            <Link
              href="#"
              className="font-semibold text-black transition-all"
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
            </Link>
          </div>
        </div>

        {/* Dashboard screenshot */}
        <div className="mt-8 w-full max-w-5xl mx-auto">
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
    </section>
  );
}
