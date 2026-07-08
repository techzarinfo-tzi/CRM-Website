"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/techzarinfo-sales/30min";
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1f2937&primary_color=3b82f6`;

const BENEFITS = [
  "Personalized 30-minute walkthrough",
  "See TZI CRM mapped to your workflow",
  "Live Q&A with a product specialist",
  "No commitment, no credit card",
];

interface ScheduleDemoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleDemo({ isOpen, onClose }: ScheduleDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsWidgetReady(false);
      return;
    }

    let cancelled = false;
    let attempts = 0;

    const tryInit = () => {
      if (cancelled) return;
      if (window.Calendly && containerRef.current) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_EMBED_URL,
          parentElement: containerRef.current,
        });
        setIsWidgetReady(true);
        return;
      }
      attempts += 1;
      if (attempts < 50) {
        setTimeout(tryInit, 100);
      }
    };

    tryInit();
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
        style={{ height: "min(680px, 92vh)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-white transition-colors hover:bg-black/20 md:right-5 md:top-5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Brand panel (desktop) */}
        <div
          className="hidden shrink-0 flex-col justify-between p-8 text-white md:flex md:w-[280px] lg:w-[320px]"
          style={{ background: "linear-gradient(160deg, #38BDF8 -10%, #3B82F6 60%, #1d4ed8 110%)" }}
        >
          <div>
            <div className="mb-8 flex items-center gap-2">
              <Image
                src="/images/TZI.png"
                alt="TZI"
                width={36}
                height={36}
                className="object-contain"
                style={{ width: "auto", height: "36px" }}
              />
              <span className="text-xl font-bold">CRM</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-snug">Let&apos;s find your fit</h3>
            <p className="mb-8 text-sm text-white/80">
              Book a live session with our team and see TZI CRM in action.
            </p>
            <ul className="flex flex-col gap-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-white/90">
                  <svg className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-white/60">Trusted by 100+ growing organizations</p>
        </div>

        {/* Compact header (mobile) */}
        <div
          className="flex shrink-0 items-center gap-3 p-5 text-white md:hidden"
          style={{ background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)" }}
        >
          <Image
            src="/images/TZI.png"
            alt="TZI"
            width={28}
            height={28}
            className="object-contain"
            style={{ width: "auto", height: "28px" }}
          />
          <div>
            <p className="text-sm font-bold leading-tight">Schedule a Demo</p>
            <p className="text-xs leading-tight text-white/80">30-minute walkthrough, no commitment</p>
          </div>
        </div>

        {/* Calendly inline widget */}
        <div className="relative min-h-0 flex-1">
          {!isWidgetReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#3b82f6]" />
            </div>
          )}
          <div ref={containerRef} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
