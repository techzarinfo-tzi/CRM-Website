import Image from "next/image";
import pipeline from "@/src/assets/images/pipeline.png";
import leadsManagement from "@/src/assets/images/Leads_management.png";
import notification from "@/src/assets/images/Notification.png";

export default function StayOrganized() {
  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="max-w-2xl">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            What Your Sales Team Needs to{" "}
            <span className="text-blue-500">Stay Organized</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Managing leads across spreadsheets, emails, messaging apps, and multiple tools can slow down your sales process and also create unnecessary confusion among the team.
          </p>
        </div>

        {/* ── Full-width pipeline card ── */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:w-[30%] shrink-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Complete Sales Pipeline Visibility
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              Monitor every stage of the customer journey - from lead capture to deal closure with real-time insights and performance tracking.
            </p>
          </div>
          <div className="relative flex-1 aspect-[826/464] rounded-xl overflow-hidden">
            <Image
              src={pipeline}
              alt="Complete sales pipeline visibility board"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>

        {/* ── Two cards: Lead Management + Follow-Ups ── */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Centralized Lead Management
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              Capture, assign, and track every lead from one dashboard. No more lost contacts or scattered customer information.
            </p>
            <div className="relative mt-6 flex-1 aspect-[606/360] rounded-xl overflow-hidden">
              <Image
                src={leadsManagement}
                alt="Centralized lead management dashboard"
                fill
                className="object-contain object-top"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Follow-Ups &amp; Reminders
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              Advanced lead tracking software will never miss an opportunity with automated emails, task reminders and follow-up notifications that keep deals moving forward.
            </p>
            <div className="relative mt-6 flex-1 aspect-[606/359] rounded-xl overflow-hidden">
              <Image
                src={notification}
                alt="Deal follow-up reminders list"
                fill
                className="object-contain object-top"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
