"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import integrationsImage from "@/src/assets/images/integrations_image.png";
import Link from "next/link";

export default function IntegrationsDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 sm:translate-y-28"
    }`;

  return (
    <section className="relative bg-white pt-8 sm:pt-12 lg:pt-32 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="mb-4">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-[#1A1A1A] leading-tight tracking-tight">
            Meet the <span className="text-[#3B82F6]">Integrations</span> That Powers <br className="hidden sm:block" /> TZI CRM
          </h2>
        </div>
      </div>

      {/* ── Illustration: full-bleed background, edge-to-edge of the viewport ── */}
      <div
        ref={sectionRef}
        className="relative mt-4 sm:mt-8 w-screen left-1/2 -translate-x-1/2 aspect-[548/393] sm:aspect-[1600/720]"
        style={{
          background:
            "radial-gradient(ellipse 60% 85% at center, #eff6ff 0%, #f0f9ff 35%, #ffffff 65%)",
        }}
      >
        {/* Inner frame: caps how far apart the icons spread on ultra-wide screens */}
        <div className="relative mx-auto h-full max-w-[1400px]">
          
          {/* Background network curves and bubbles: Meta_image.svg */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          >
            <Image 
              src="/images/home_images/Meta_image.svg" 
              alt="Connected network curves" 
              fill 
              className="object-contain scale-105"
              priority 
            />
          </div>
          {/* Center: Integrations panel */}
          <div
            className={`absolute left-1/2 top-[8%] -translate-x-1/2 w-[90%] sm:w-[34%] max-w-[720px] ${reveal("delay-150")}`}
          >
            <Image
              src={integrationsImage}
              alt="TZI CRM integrations panel connecting Facebook, Instagram and LinkedIn lead ads"
              className="w-full h-auto object-contain drop-shadow-xl rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Footer text and button ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 text-center">
        <p className="max-w-4xl mx-auto text-[16px] sm:text-[18px] text-gray-700 leading-relaxed mb-8">
          Don't see your preferred business tool? No problem. We can integrate the applications your business already uses with our TZI CRM, ensuring a seamless workflow tailored to your operational needs.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all hover:opacity-95"
          style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
        >
          Talk To Our Experts
        </Link>
      </div>
    </section>
  );
}
