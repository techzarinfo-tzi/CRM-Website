import Link from "next/link";

export function AboutHero() {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 mx-auto mb-20">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-[41px] font-semibold text-gray-900 leading-tight mb-6 w-full mx-auto">
        Our Journey Began with One Question:
        <br className="hidden md:block" />
        <span>
          What If a Platform Became the <span className="text-[#3b82f6]">Growth Engine</span> for the Business?
        </span>
      </h1>
      <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed mb-8 max-w-5xl mx-auto">
        That question inspired TZI CRM - Your intelligent business growth platform, designed to help organizations streamline customer management, automate workflows, and strengthen client relationships through one unified solution.
      </p>
      <Link
        href="/contact-us"
        className="text-white font-semibold text-[17px] px-10 py-3.5 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5 inline-block hover:opacity-95"
        style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
      >
        Book a Free Demo
      </Link>
    </div>
  );
}
