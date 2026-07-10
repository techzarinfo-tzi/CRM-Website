import Image from "next/image";

export default function AnimatedOrbits() {
  return (
    <div className="relative w-full h-[285px] sm:h-[350px] mx-auto flex justify-center items-end rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gradient-to-r from-[#5978c2] to-[#2546a1]">
      {/* TZI Logo in the center bottom */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/images/footer logo.png"
          alt="TZI Logo"
          width={150}
          height={60}
          className="w-[120px] sm:w-[150px] h-auto object-contain"
        />
      </div>

      {/* Orbits Container - Centered at bottom-center */}
      <div className="absolute bottom-0 left-1/2 w-0 h-0 z-10 flex items-center justify-center">

        {/* Inner Orbit (Meta, LinkedIn) */}
        <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border-[4px] border-white/40">

          {/* Meta wrapper */}
          <div className="absolute inset-0 animate-[sweep_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-full h-full flex items-center justify-center animate-[counter-sweep_10s_linear_infinite]">
                <Image src="/images/integration/meta.svg" width={28} height={28} alt="Meta" className="object-contain w-3/5 h-3/5" />
              </div>
            </div>
          </div>

          {/* LinkedIn wrapper */}
          <div className="absolute inset-0 animate-[sweep_10s_linear_infinite] [animation-delay:-5s]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-full h-full flex items-center justify-center animate-[counter-sweep_10s_linear_infinite] [animation-delay:-5s]">
                <Image src="/images/integration/linkedin.svg" width={28} height={28} alt="LinkedIn" className="object-contain w-3/5 h-3/5" />
              </div>
            </div>
          </div>

        </div>

        {/* Outer Orbit (Phone, WhatsApp) */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border-[4px] border-white/40">

          {/* Phone wrapper */}
          <div className="absolute inset-0 animate-[sweep_14s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-full h-full flex items-center justify-center animate-[counter-sweep_14s_linear_infinite]">
                <Image src="/images/integration/phone.svg" width={24} height={24} alt="Phone" className="object-contain w-3/5 h-3/5" />
              </div>
            </div>
          </div>

          {/* WhatsApp / IndiaMart slot */}
          <div className="absolute inset-0 animate-[sweep_14s_linear_infinite] [animation-delay:-7s]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-full h-full flex items-center justify-center animate-[counter-sweep_14s_linear_infinite] [animation-delay:-7s]">
                <Image src="/images/integration/whatsapp.svg" width={28} height={28} alt="WhatsApp" className="object-contain w-3/5 h-3/5" />
              </div>
            </div>
          </div>

        </div>

        {/* Extra Decorative Orbits */}
        <div className="absolute w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] rounded-full border-[4px] border-white/20 animate-[sweep_20s_linear_infinite]"></div>
      </div>
    </div>
  );
}
