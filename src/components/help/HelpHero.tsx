import Link from "next/link";

export default function HelpHero() {
  return (
    <section className="pt-12 md:pt-20 lg:pt-24 pb-6 md:pb-10 bg-white text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1243px] mx-auto flex flex-col items-center justify-center gap-6">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-bold text-[#1A1A1A] leading-[1.2] lg:leading-[1.1] tracking-tight px-4 sm:px-0">
            We're Here Whenever You Need Us
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[23px] font-normal tracking-[-0.3px] leading-[26px] md:leading-[32px] text-gray-600 w-full max-w-[1243px] text-center px-4 sm:px-0">
            At TZI CRM, our support goes beyond solving problems. Our CRM experts provide continuous support,<br className="hidden md:block" />
            personalized guidance, and timely solutions to keep your business moving forward.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-semibold text-white rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 mt-2"
            style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
          >
            Report an Issue
          </Link>
        </div>
      </div>
    </section>
  );
}
