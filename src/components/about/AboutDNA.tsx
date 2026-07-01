import Image from "next/image";
import Link from "next/link";

export function AboutDNA() {
  return (
    <div className="w-full relative flex items-center mb-32 mt-12 min-h-[300px]">

      {/* Background Blue Banner - shorter than the container to create overlap effect */}
      <div className="absolute inset-y-8 inset-x-0 bg-gradient-to-r from-[#5978c2] to-[#2546a1] rounded-[32px] shadow-xl z-0"></div>

      <div className="w-full flex flex-col md:flex-row items-center px-6 md:px-12 relative z-10">

        {/* Left side Graphic (TZI DNA) - overflowing top significantly, aligning bottom */}
        <div className="w-full md:w-[45%] flex justify-center md:ml-4 z-10 relative self-end mb-8 -mt-24 md:-mt-[120px]">
          <div className="relative w-[95%] md:w-full max-w-[400px] md:max-w-[460px] drop-shadow-xl">
            <Image
              src="/images/about us/image2.png"
              alt="TZI CRM DNA Graphic Base"
              width={480}
              height={480}
              className="w-full h-auto object-contain"
              priority
            />
            <Image
              src="/images/about us/strand.svg"
              alt="TZI CRM DNA Strand"
              width={480}
              height={480}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
              priority
            />
          </div>
        </div>

        {/* Right side Content */}
        <div className="w-full md:w-[55%] py-12 md:py-16 md:pl-8 lg:pl-16 text-white flex flex-col items-start justify-center z-10">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold mb-5 tracking-tight leading-tight">
            The Formula Behind TZI CRM
          </h2>

          <ul className="space-y-2 mb-8 text-white/95 text-[15px] lg:text-[16px] font-medium leading-relaxed">
            <li>D - Dedication</li>
            <li>N - Next-Gen Innovation</li>
            <li>A - Agility</li>
          </ul>

          <Link
            href="/contact"
            className="bg-white text-[#2a4db5] font-semibold text-[15px] px-7 py-3 rounded-[10px] shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
          >
            See Our DNA in Action
          </Link>
        </div>

      </div>
    </div>
  );
}
