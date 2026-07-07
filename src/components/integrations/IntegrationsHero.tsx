import Image from "next/image";

export default function IntegrationsHero() {
  return (
    <section className="pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-10 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Section: Side by side on large screens */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-8 mb-6 sm:mb-8">
          {/* Heading */}
          <div className="flex-1">
            <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              One System.<br />
              <span 
                className="text-transparent bg-clip-text inline-block" 
                style={{ backgroundImage: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
              >
                Infinite Connections.
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="flex-1">
            <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-lg lg:ml-auto">
              Stop switching between multiple apps to manage customer interactions. Integrate our CRM with your trusted business applications and you can automatically capture leads, streamline communication, and keep every customer conversation in one centralized platform.
            </p>
          </div>
        </div>

        {/* Graphic */}
        <div 
          className="w-full mx-auto flex justify-center rounded-[24px] sm:rounded-[32px] overflow-hidden"
          style={{ background: 'linear-gradient(177.63deg, #1E40AF 10%, #1E40AF 93.3%)' }}
        >
          <Image
            src="/images/integration/Fade.svg"
            alt="Integration connections"
            width={1242}
            height={285}
            className="w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
