"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Deal Analysis & Intelligence",
    description:
      "Analyse potential leads, follow progress across pipeline stages, find the sales weaknesses using scoring models, and track deal status as it evolves. Make your sales team focus on high-value prospects and improve deal conversions.",
  },
  {
    title: "Won Analysis",
    description:
      "Transform closed deals into long term growth. Utilize insights on customer lifetime value (CLV), spot opportunities for upselling and cross-selling, and analyze revenue patterns through an interactive dashboard designed to boost customer retention.",
  },
  {
    title: "Sales Leaderboard",
    description:
      "Make healthy internal competition with a live leaderboard. Monitor individual and team results, highlight top achievers, benchmark key sales metrics, and inspire your team to consistently achieve their goals.",
  },
  {
    title: "Task & Target Management",
    description:
      "Keep your sales team focused and responsible with smart tasks and target management. Distribute assignments, define monthly or quarterly targets, monitor real-time progress, and ensure alignment with broader business objectives.",
  },
  {
    title: "Internal Chat Integration",
    description:
      "Streamline communication within your CRM. Share messages instantly, share deal updates, collaborate on strategies, and coordinate with team members using the integrated chat for enabling quicker decisions and smoother teamwork.",
  },
];

export default function MeetTheMinds() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // Disable parallax/spread scrolling effect on tablet and laptop viewports under 1280px (xl breakpoint)
      if (window.innerWidth < 1280) {
        setScrollProgress(0);
        return;
      }

      const element = document.getElementById("stand-out-graphics");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative scroll progress when the section is in view
      const start = rect.top - viewportHeight;
      const total = rect.height + viewportHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / total;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial load execution
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll-triggered layout positions for desktop, while keeping them static on mobile/tablet
  const quickActionsTransform = `rotate(2.46deg) translate(${-scrollProgress * 85}px, ${-scrollProgress * 85}px)`;
  const classificationTransform = `rotate(-2.13deg) translate(${scrollProgress * 85}px, ${-scrollProgress * 85}px)`;
  const barChartTransform = `rotate(4.74deg) translate(${scrollProgress * 45}px, ${scrollProgress * 65}px)`;

  return (
    <>
      {/* ════════════════════════
          MEET THE MINDS (video)
      ════════════════════════ */}
      <section className="py-8 md:py-12 lg:py-16 relative bg-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[1251/680] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl">
            <video
              src="/images/home_images/meet the minds.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════
           WHAT MAKES TZI CRM STAND OUT
      ════════════════════════ */}
      <section id="features" className="py-8 md:py-12 lg:py-16 relative bg-white overflow-hidden scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Top: Full-Width Heading & Description ── */}
          <div className="flex flex-col gap-[16px] w-full xl:w-[770px] xl:h-[202px] mb-12 sm:mb-16">
            <h2
              className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium text-gray-900 tracking-tight"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 500,
                lineHeight: '58px',
                letterSpacing: '-1.2px'
              }}
            >
              What Makes <span className="text-blue-500">TZI CRM</span> Stand Out
            </h2>
            <p
              className="text-base sm:text-[18px] lg:text-[22px]"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 400,
                lineHeight: '32px',
                letterSpacing: '-0.3px',
                color: '#555E67'
              }}
            >
              Every business has unique objectives, and CRM should be built to support them. TZI CRM goes beyond traditional CRM solutions by combining versatile features. It provides everything you need to manage your business more efficiently and stay ahead of the competition.
            </p>
          </div>

          {/* ── Bottom Grid: Feature List (Left) + Floating Graphics (Right) ── */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">

            {/* Left Column: Feature List */}
            <div className="xl:col-span-6 flex flex-col gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-[19px] w-full xl:w-[507px] xl:min-h-[137px]"
                >
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '100%',
                      color: '#000000'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '169%',
                      color: '#818181'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Floating Graphics Stack */}
            <div className="xl:col-span-6 w-full flex justify-center xl:justify-end overflow-visible md:ml-18">
              <div
                id="stand-out-graphics"
                className="relative w-full max-w-[550px] xl:max-w-none h-[340px] min-[400px]:h-[410px] min-[500px]:h-[480px] sm:h-[540px] md:h-[600px] xl:h-[600px] scale-[0.58] min-[400px]:scale-[0.7] min-[500px]:scale-[0.85] sm:scale-90 md:scale-100 origin-top xl:origin-center mr-20"
              >
                {/* Background Blue Card */}
                <div
                  className="absolute hidden xl:block"
                  style={{
                    width: '512.85px',
                    height: '604.28px',
                    transform: 'rotate(-6.04deg)',
                    opacity: 1,
                    top: '-1.37px',
                    left: '16.88px',
                    borderRadius: '32px',
                    background: '#E9F2FF',
                    zIndex: 0
                  }}
                />

                {/* 1. Quick Actions image */}
                <div
                  className="absolute shadow-xl overflow-hidden bg-white transition-transform duration-100 ease-out"
                  style={{
                    width: '383.92px',
                    height: '426.97px',
                    transform: quickActionsTransform,
                    borderRadius: '32px',
                    top: '44px',
                    left: '1%',
                    zIndex: 10
                  }}
                >
                  <Image
                    src="/images/home_images/Quick Actions.svg"
                    alt="Quick Actions"
                    fill
                    className="object-contain p-[28px]"
                    style={{ left: "-7%" }}
                    priority
                  />
                </div>

                {/* 2. Classification image */}
                <div
                  className="absolute shadow-xl overflow-hidden bg-white transition-transform duration-100 ease-out z-30"
                  style={{
                    width: '292.99px',
                    height: '283.99px',
                    transform: classificationTransform,
                    borderRadius: '20px',
                    top: '148px',
                    left: '42%'
                  }}
                >
                  <Image
                    src="/images/home_images/Classification.svg"
                    alt="Classification"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>

                {/* 3. Basic Bar Chart image */}
                <div
                  className="absolute shadow-xl overflow-hidden bg-white transition-transform duration-100 ease-out z-20"
                  style={{
                    width: '350.68px',
                    height: '235.70px',
                    transform: barChartTransform,
                    borderRadius: '16px',
                    top: '350px',
                    left: '20%'
                  }}
                >
                  <Image
                    src="/images/home_images/Basic Bar Chart.svg"
                    alt="Basic Bar Chart"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
