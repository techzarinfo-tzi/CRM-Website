import Image from "next/image";

export function ContactInfo() {
  return (
    <div className="lg:w-1/2 flex flex-col pt-2 lg:pt-8 w-full">
      <h1 className="text-4xl md:text-5xl lg:text-[46px] font-semibold leading-[1.15] text-gray-900 mb-6 tracking-tight">
        Every Great Customer<br />
        Relationship Starts<br />
        with a <span className="text-[#3b82f6]">Conversation</span>
      </h1>
      <p className="text-gray-600 text-[17px] mb-6 max-w-[480px] leading-relaxed">
        Your business is unique, and your CRM should be too. Tell us about your requirements, and our CRM experts will help you find the right solution.
      </p>

      <div className="flex flex-col gap-8 mb-8">
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Image src="/images/contactus/icon1.svg" alt="Private and secure" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold text-gray-900 text-[17px]">Your information stays private and secure.</span>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Image src="/images/contactus/icon2.svg" alt="24 hours response" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold text-gray-900 text-[17px]">We'll respond within 24 business hours.</span>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Image src="/images/contactus/icon3.svg" alt="Transparent process" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <span className="font-semibold text-gray-900 text-[17px]">Transparent Process</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <a href="tel:+919952885799" className="flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg hover:opacity-95" style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +91-9952885799
        </a>
        <a href="mailto:sales@techzarinfo.com" className="flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-lg hover:opacity-95" style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          sales@techzarinfo.com
        </a>
      </div>
    </div>
  );
}
