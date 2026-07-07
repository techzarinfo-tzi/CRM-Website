import Link from "next/link";

export default function HelpCTA() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white text-center">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-[36px] font-medium text-gray-900 leading-tight mb-8">
          No matter where you are in your <span className="font-bold">CRM</span> journey,<br className="hidden sm:block" />
          you'll always have a team that's ready to listen,<br className="hidden sm:block" />
          guide and help you succeed.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 text-[15px] font-semibold text-white rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95"
          style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}
        >
          Contact Sales
        </Link>
      </div>
    </section>
  );
}
