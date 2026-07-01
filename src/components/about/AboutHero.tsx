import Link from "next/link";

export function AboutHero() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
      <h1 className="text-4xl md:text-5xl lg:text-[42px] font-semibold text-gray-900 leading-tight mb-6">
        Our Journey Began with One Question:
        <br className="hidden md:block" />
        What If a Platform Became the <span className="text-[#3b82f6]">Growth Engine</span> for the Business?
      </h1>
      <p className="text-gray-600 text-lg md:text-[17px] leading-relaxed mb-8 max-w-3xl mx-auto">
        That question inspired TZI CRM - Your intelligent business growth platform, designed to help organizations streamline customer management, automate workflows, and strengthen client relationships through one unified solution.
      </p>
      <Link 
        href="/contact" 
        className="text-white font-medium px-8 py-3 rounded-full transition-all hover:shadow-lg inline-block hover:opacity-95"
        style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
      >
        Book a Free Demo
      </Link>
    </div>
  );
}
