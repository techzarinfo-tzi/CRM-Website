"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      {/* ── Corner plus markers ── */}
      <span className="absolute top-[62px] left-[52px] text-gray-300 text-xl select-none pointer-events-none">✛</span>
      <span className="absolute top-[62px] right-[52px] text-gray-300 text-xl select-none pointer-events-none">✛</span>
      <span className="absolute bottom-[160px] left-[52px] text-gray-300 text-xl select-none pointer-events-none">✛</span>
      <span className="absolute bottom-[160px] right-[52px] text-gray-300 text-xl select-none pointer-events-none">✛</span>

      {/* ── Dashed border frame ── */}
      <div className="absolute top-[62px] left-[60px] right-[60px] bottom-[160px] border border-dashed border-gray-200 pointer-events-none" />


      {/* ════════════════════════
          HERO BODY
      ════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-8 pb-16">

        {/* Trust badge */}
        <div className="inline-flex items-center border border-gray-200 rounded-full px-5 py-1.5 text-xs text-gray-500 mb-8 bg-white shadow-sm">
          Trusted by 100+ growing organizations
        </div>

        {/* Headline row 1 */}
        <h1 className="text-[56px] md:text-[64px] lg:text-[72px] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
          Transform All Conversations
        </h1>

        {/* Headline row 2 — "into [Conversions]" */}
        <div className="flex items-center justify-center gap-4 mt-1">
          <h1 className="text-[56px] md:text-[64px] lg:text-[72px] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
            into
          </h1>

          {/* Dashed box around "Conversions" + floating 3D Chat */}
          <div className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-sm px-3 py-1">
              <h1 className="text-[56px] md:text-[64px] lg:text-[72px] font-extrabold text-blue-500 leading-[1.05] tracking-tight">
                Conversions
              </h1>
            </div>
            {/* 3D Chat image — top-right of box */}
            <div className="absolute -top-10 -right-14">
              <Image
                src="/images/3D_Chat.png"
                alt="3D Chat"
                width={90}
                height={90}
                className="object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Sub-headline */}
        <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
          Track every lead, automate follow-ups and close deals faster than ever
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-5 mt-8">
          <Link
            href="#"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors"
          >
            Start Your 30 Days Free Trial
          </Link>
        </div>

        {/* Dashboard screenshot */}
        <div className="mt-14 w-full max-w-5xl mx-auto">
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
