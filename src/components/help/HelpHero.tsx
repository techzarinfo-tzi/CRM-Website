import Link from "next/link";

export default function HelpHero() {
  return (
    <section className="bg-white pt-24 sm:pt-32 pb-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
            We're Here Whenever You Need Us
          </h1>
          <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            At TZI CRM, our support goes beyond answering problems. Our CRM includes proactive continuous support, personalized guidance, and driving solutions to keep your business moving forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold text-white rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95"
            style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
