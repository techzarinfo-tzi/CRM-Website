"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


export default function BusinessTools() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5); // Default to center

  useEffect(() => {
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
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  
  const getParallaxStyle = (multiplier: number) => {
    if (!isDesktop) return {};
    // True parallax: offset moves from positive (down) to negative (up)
    const translateY = (0.5 - scrollProgress) * multiplier;
    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 0.9s ease-out"
    };
  };

  return (
    <section className="relative bg-white pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Heading ── */}
        <div className="flex flex-col gap-[16px] w-full lg:w-[1251px] mb-8 sm:mb-12">
          <h2 
            className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium text-gray-900 tracking-tight"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
              lineHeight: '58px',
              letterSpacing: '-1.2px'
            }}
          >
            Bring All Your <span className="text-blue-500">Business Tools</span> Together
          </h2>
          <p 
            className="text-base sm:text-[18px] lg:text-[22px] max-w-3xl"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '-0.3px',
              color: '#555E67'
            }}
          >
            Stop switching between multiple platforms and searching for customer information. TZI CRM unifies your entire sales ecosystem into a single workspace.
          </p>
        </div>
      </div>

      {/* ── Illustration: full-bleed background viewport container ── */}
      <div
        ref={sectionRef}
        className="relative mt-8 sm:mt-10 w-screen left-1/2 -translate-x-1/2 aspect-[548/393] sm:aspect-[1600/720] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 85% at center, #eff6ff 0%, #f0f9ff 35%, #ffffff 65%)",
        }}
      >
        {/* Inner frame: boundaries for wider screens */}
        <div className="relative mx-auto h-full max-w-[1400px]">
          
          {/* Glowing Aura pulse background */}
          <div 
            className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[35%] aspect-square rounded-full blur-[100px] opacity-40 mix-blend-multiply animate-pulse"
            style={{
              background: 'rgba(48, 143, 255, 0.8)',
              zIndex: 1
            }}
          />

          {/* Background network curves and bubbles: Meta_image.svg */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              ...getParallaxStyle(180), // Stronger translation to come from bottom to top
              zIndex: 2
            }}
          >
            <Image 
              src="/images/home_images/Meta_image.svg" 
              alt="Connected network curves" 
              fill 
              className="object-contain scale-105"
              priority 
            />
          </div>

          {/* Center: Integrations panel card */}
          <div
            className="absolute left-1/2 top-[8%] w-[90%] sm:w-[34%] max-w-[720px]"
            style={{
              ...getParallaxStyle(80), // Subtle translation for depth layer separation
              left: '50%',
              transform: `${getParallaxStyle(80).transform || ""} translateX(-50%)`,
              zIndex: 3
            }}
          >
            <Image
              src="/images/home_images/Integrations.svg"
              alt="TZI CRM integrations panel"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              priority
              width={700}
              height={350}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
