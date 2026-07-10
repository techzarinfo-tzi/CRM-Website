import Image from "next/image";
import Link from "next/link";

export function AboutDNA() {
  return (
    <div className="w-full relative flex items-center mb-12 md:mb-24 mt-12 min-h-[300px]">

      {/* Background Blue Banner - shorter than the container to create overlap effect */}
      <div className="absolute inset-y-8 inset-x-0 bg-gradient-to-r from-[#5978c2] to-[#2546a1] rounded-[32px] shadow-xl z-0"></div>

      <div className="w-full flex flex-col xl:flex-row items-center px-6 md:px-12 relative z-10">

        {/* Left side Graphic (TZI DNA) - overflowing top significantly, aligning bottom */}
        <div className="w-full xl:w-[45%] flex justify-center xl:ml-4 z-10 relative self-center xl:self-end mb-4 lg:mb-8 -mt-16 xl:-mt-[120px]">
          <div className="relative w-[85%] sm:w-[60%] xl:w-full max-w-[400px] xl:max-w-[460px] drop-shadow-xl" style={{ perspective: '1200px' }}>
            <style>{`
              .transform-style-3d {
                transform-style: preserve-3d;
              }
              @keyframes spin-true-3d {
                0% { transform: rotateZ(41deg) rotateY(0deg); }
                100% { transform: rotateZ(41deg) rotateY(360deg); }
              }
            `}</style>

            {/* The original background base image, keeping the exact layout size */}
            <Image
              src="/images/about us/image2.png"
              alt="TZI CRM DNA Graphic Base"
              width={480}
              height={480}
              className="w-full h-auto object-contain relative z-10"
              priority
            />

            {/* TRUE 3D CSS DNA SPIRAL - perfectly overlaid diagonally without breaking layout */}
            <div 
              className="absolute inset-0 w-full h-full z-20 flex items-center justify-center pointer-events-none" 
              style={{ 
                perspective: '1000px',
                WebkitMaskImage: 'url("/images/about us/image2.png")',
                WebkitMaskSize: 'contain',
                WebkitMaskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
                maskImage: 'url("/images/about us/image2.png")',
                maskSize: 'contain',
                maskPosition: 'center',
                maskRepeat: 'no-repeat'
              }}
            >
              <div
                className="relative w-[10%] h-[141%] transform-style-3d"
                style={{
                  animation: 'spin-true-3d 8s linear infinite'
                }}
              >
                {Array.from({ length: 55 }).map((_, i) => {
                  const yPos = (i / 54) * 100;
                  const rotation = i * 15;
                  return (
                    <div
                      key={i}
                      className="absolute left-0 w-full h-[1px] bg-[#3B82F6]/40 transform-style-3d shadow-[0_0_2px_rgba(59,130,246,0.4)]"
                      style={{
                        top: `${yPos}%`,
                        transform: `rotateY(${rotation}deg)`
                      }}
                    >
                      <div
                        className="absolute top-1/2 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]"
                        style={{ transform: `rotateY(${-rotation}deg)` }}
                      ></div>
                      <div
                        className="absolute top-1/2 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB] shadow-[0_0_6px_#2563EB]"
                        style={{ transform: `rotateY(${-rotation}deg)` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right side Content */}
        <div className="w-full xl:w-[55%] pb-12 pt-4 lg:py-16 xl:pl-16 text-white flex flex-col items-center xl:items-start text-center xl:text-left justify-center z-10">
          <h2 className="text-[26px] sm:text-[28px] md:text-[32px] xl:text-[40px] font-semibold mb-4 xl:mb-5 tracking-tight leading-tight">
            The Formula Behind TZI CRM
          </h2>

          <ul className="space-y-2 mb-6 xl:mb-8 text-white/95 text-[15px] xl:text-[16px] font-medium leading-relaxed">
            <li>D - Dedication</li>
            <li>N - Next-Gen Innovation</li>
            <li>A - Agility</li>
          </ul>

          <Link
            href="/contact-us"
            className="bg-white text-[#170F49] font-semibold text-[15px] px-7 py-3 rounded-[10px] shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
          >
            See Our DNA in Action
          </Link>
        </div>

      </div>
    </div>
  );
}
