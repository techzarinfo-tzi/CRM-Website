import Image from "next/image";

export function AboutMission() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
      
      {/* Left Column - Text Blocks */}
      <div className="lg:w-1/2 flex flex-col gap-8">
        
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Our Story:</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Every great innovation begins with a challenge. TZI CRM was born from a simple idea: every kind of business deserves a smarter way to make their sales journey & grow with confidence. We created a platform that transforms everyday customer interactions into strong business opportunities.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Our Mission:</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our mission is to help businesses to overcome challenges in managing their clients with an intelligent CRM built for efficiency, collaboration, and growth.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Our Vision:</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            To redefine business growth through intelligent CRM, where every connection creates value, every insight drives action, and every opportunity leads to success.
          </p>
        </div>

      </div>

      {/* Right Column - Video Thumbnail */}
      <div className="lg:w-1/2 w-full relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg">
        <Image 
          src="/images/about us/image1.svg" 
          alt="TZI CRM Video" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
          priority
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-colors">
          <div className="w-16 h-16 bg-[#36393e]/70 backdrop-blur-sm flex items-center justify-center rounded-full group-hover:bg-[#36393e]/90 transition-all shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>
        
        {/* Progress Bar (Decorative based on screenshot) */}
        <div className="absolute bottom-6 left-6 right-6 h-[2px] bg-white/30 overflow-hidden">
          <div className="h-full bg-white w-24"></div>
        </div>
      </div>

    </div>
  );
}
