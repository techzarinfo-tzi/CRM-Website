"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import integrationsImage from "@/src/assets/images/integrations_image.png";
import Link from "next/link";

export default function IntegrationsDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5); // Default to center
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative scroll progress when section is in view
      const total = rect.height + viewportHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / total;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial layout trigger
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax scroll translations (images rise from bottom-to-top as user scrolls down)
  const getParallaxStyle = (multiplier: number) => {
    if (!isMounted) return {};
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return {};
    // True parallax: offset moves from positive (down) to negative (up)
    const translateY = (0.5 - scrollProgress) * multiplier;
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 0.4s ease-out"
    };
  };

  return (
    <section className="pt-6 md:pt-10 pb-6 md:pb-10 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      </div>

      {/* ── Illustration: full-bleed background, edge-to-edge of the viewport ── */}
      <div
        ref={sectionRef}
        className="relative mt-4 sm:mt-8 w-screen left-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center py-12 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 85% at center, #eff6ff 0%, #f0f9ff 35%, #ffffff 65%)",
        }}
      >
        <style>{`
          .ring-gradient {
            border-radius: 50%;
            background: conic-gradient(from 0deg, #DAECFF 0deg, #007DFF 60deg, #DAECFF 120deg, #DAECFF 180deg, #007DFF 240deg, #DAECFF 300deg, #DAECFF 360deg);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
          @keyframes spin-cw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-ccw {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .animate-spin-cw {
            animation: spin-cw 8s linear infinite;
          }
          .animate-spin-ccw {
            animation: spin-ccw 12s linear infinite;
          }
          .animate-spin-cw-slow {
            animation: spin-cw 16s linear infinite;
          }
          .counter-spin-cw {
            animation: spin-ccw 8s linear infinite;
          }
          .counter-spin-ccw {
            animation: spin-cw 12s linear infinite;
          }
          .counter-spin-cw-slow {
            animation: spin-ccw 16s linear infinite;
          }
        `}</style>

        {/* Inner frame: responsive container maintaining aspect ratio and fitting in viewport */}
        <div className="relative mx-auto w-[min(95%,960px,85vh)] aspect-square flex items-center justify-center">
          
          {/* Ellipse background image */}
          <div className="absolute w-[83.5%] h-[83.5%] opacity-30 pointer-events-none z-0">
            <Image src="/images/integrations_icons/Ellipse 3956.svg" alt="Ellipse" fill className="object-contain" />
          </div>

          {/* MASK WRAPPER 1: Outer Line (Circle 4) - Deep Slow Fade */}
          <div 
            className="absolute -inset-10 md:-inset-16 z-[10] pointer-events-none"
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 10%, black 35%, black 65%, transparent 90%, transparent 100%)' 
            }}
          >
            <div className="absolute inset-10 md:inset-16 pointer-events-none flex items-center justify-center">
              {/* BACKGROUND LINE */}
              <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
                <div className="absolute w-full h-full animate-spin-cw-slow">
                  <div className="ring-gradient w-full h-full p-[3px] md:p-[6px]"></div>
                </div>
              </div>
              {/* ICONS */}
              <div className="absolute inset-0 z-[20] pointer-events-none flex items-center justify-center">
                <div className="absolute w-full h-full animate-spin-cw-slow pointer-events-none">
                  {/* 99 acres */}
                  <div className="absolute pointer-events-auto" style={{ left: '6.7%', top: '25%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw-slow relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center overflow-hidden">
                      <Image src="/images/integrations_icons/99 acres.svg" alt="99 acres" fill className="object-cover" />
                    </div>
                  </div>
                  {/* India Mart */}
                  <div className="absolute pointer-events-auto" style={{ left: '93.3%', top: '25%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw-slow relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px] md:p-[4px]">
                      <Image src="/images/integrations_icons/india mart.svg" alt="India Mart" fill className="object-contain" />
                    </div>
                  </div>
                  {/* Justdial */}
                  <div className="absolute pointer-events-auto" style={{ left: '50%', top: '100%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw-slow relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px] md:p-[4px]">
                      <Image src="/images/integrations_icons/Justdial.svg" alt="Justdial" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MASK WRAPPER 2: Inner Lines (Circles 1, 2, 3) - Normal Subtle Fade */}
          <div 
            className="absolute -inset-10 md:-inset-16 z-[10] pointer-events-none"
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent 2%, black 15%, black 85%, transparent 98%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 2%, black 15%, black 85%, transparent 98%)' 
            }}
          >
            <div className="absolute inset-10 md:inset-16 pointer-events-none flex items-center justify-center">
              {/* BACKGROUND LINES */}
              <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
                {/* Circle 3 */}
                <div className="absolute w-[75%] h-[75%] animate-spin-ccw">
                  <div className="ring-gradient w-full h-full p-[2px] md:p-[4px]"></div>
                </div>
                {/* Circle 2 */}
                <div className="absolute w-[55%] h-[55%] animate-spin-cw">
                  <div className="ring-gradient w-full h-full p-[1.5px] md:p-[3px]"></div>
                </div>
                {/* Circle 1 */}
                <div className="absolute w-[33.1%] h-[33.1%] animate-spin-ccw">
                  <div className="ring-gradient w-full h-full p-[1px] md:p-[2px]"></div>
                </div>
              </div>
              {/* ICONS */}
              <div className="absolute inset-0 z-[20] pointer-events-none flex items-center justify-center">
                {/* Circle 3 Icons (Gmeet, LinkedIn, Sulekha) */}
                <div className="absolute w-[75%] h-[75%] animate-spin-ccw pointer-events-none">
                  {/* Gmeet: 30 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '93.3%', top: '75%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-ccw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px] md:p-[4px]">
                      <Image src="/images/integrations_icons/Gmeet.svg" alt="Google Meet" fill className="object-contain" />
                    </div>
                  </div>
                  {/* LinkedIn: 150 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '6.7%', top: '75%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-ccw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image src="/images/integrations_icons/LinkedIN.svg" alt="LinkedIn" fill className="object-cover" />
                    </div>
                  </div>
                  {/* Sulekha: 270 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '50%', top: '0%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-ccw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden p-[2px] md:p-[4px]">
                      <Image src="/images/integrations_icons/sulekha.svg" alt="Sulekha" fill className="object-contain" />
                    </div>
                  </div>
                </div>

                {/* Circle 2 Icons (Facebook, Whatsapp, Instagram) */}
                <div className="absolute w-[55%] h-[55%] animate-spin-cw pointer-events-none">
                  {/* Facebook: 90 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '50%', top: '100%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Whatsapp: 210 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '6.7%', top: '25%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image src="/images/integrations_icons/Whatsapp.svg" alt="Whatsapp" fill className="object-cover scale-[1.15]" />
                    </div>
                  </div>
                  {/* Instagram: 330 deg */}
                  <div className="absolute pointer-events-auto" style={{ left: '93.3%', top: '25%', transform: 'translate(-50%, -50%)' }}>
                    <div className="counter-spin-cw relative w-[32px] h-[32px] md:w-[64px] md:h-[64px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image src="/images/integrations_icons/Instagram.svg" alt="Instagram" fill className="object-cover scale-[1.15]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Text */}
          <div className="absolute z-[30] w-[90%] md:w-[220px] flex flex-col items-center justify-center text-center pointer-events-none">
            <h2 
              className="font-medium text-[#1A1A1A] text-center text-[16px] sm:text-[18px] md:text-[24px] leading-snug md:leading-[32px] tracking-tight"
            >
              Meet the<br />
              <span className="text-[#3B82F6]">Integrations</span> That<br />
              Powers TZI CRM
            </h2>
          </div>

        </div>
      </div>

      {/* ── Footer text and button ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 text-center">
        <p className="max-w-4xl mx-auto text-[16px] sm:text-[18px] text-gray-700 leading-relaxed mb-8">
          Don't see your preferred business tool? No problem. We can integrate the applications your business already uses with our TZI CRM, ensuring a seamless workflow tailored to your operational needs.
        </p>
        <Link 
          href="/contact-us" 
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all hover:opacity-95"
          style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
        >
          Talk To Our Experts
        </Link>
      </div>
    </section>
  );
}
