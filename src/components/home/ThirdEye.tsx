import Image from "next/image";
import salesCycles from "@/src/assets/images/sales_cycles.png";
import lossPattern from "@/src/assets/images/loss_pattern.png";
import rootCause from "@/src/assets/images/root_cause.png";
import thumbsUp from "@/src/assets/images/thumsump.png";
import gauge from "@/src/assets/images/gauge.png";

export default function ThirdEye() {
  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* ── Heading ── */}
          <div className="lg:col-span-8">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
              The Third Eye of TZI CRM Turn Lost Deals Into{" "}
              <span className="inline-flex items-center gap-2 align-middle">
                <span className="text-blue-500">Future Wins</span>
                <Image
                  src={thumbsUp}
                  alt="Thumbs up"
                  className="inline-block w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain align-middle"
                  priority
                />
              </span>
            </h2>
          </div>

          {/* ── Right column: Win Rate Optimization + Root Cause Analysis + image ── */}
          <div className="lg:col-span-4 lg:row-span-2 flex flex-col gap-6">
            {/* Win Rate Optimization */}
            <div className="rounded-2xl bg-gray-50 p-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Win Rate Optimization
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Turn your losses into future revenue opportunities. Utilize deal-loss insights to strengthen your sales approach, improve close rates, and drive sustainable growth.
                </p>
              </div>
              <Image
                src={gauge}
                alt="Win rate gauge"
                className="w-10 h-auto object-contain shrink-0 mt-1"
              />
            </div>

            {/* Root Cause Analysis */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Root Cause Analysis
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Know exactly why deals were lost. Gain visibility into customer rejections, pricing concerns, competitor influence, and other factors affecting your sales outcomes.
              </p>
            </div>

            {/* Root cause visual */}
            <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-0">
              <Image
                src={rootCause}
                alt="High-value lost deals breakdown"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* ── Bottom-left cards: Sales Cycle Gap Detection + Loss Pattern Detection ── */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Sales Cycle Gap Detection */}
            <div className="rounded-2xl bg-gray-50 p-6 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Sales Cycle Gap Detection
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Identify stages where opportunities frequently fall or drop off. Streamline your sales process, eliminate delays and improve your deal closures.
              </p>
              <div className="relative mt-6 flex-1 min-h-[220px] sm:min-h-[260px]">
                <Image
                  src={salesCycles}
                  alt="Stage analysis - where deals are lost"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* Loss Pattern Detection */}
            <div className="rounded-2xl bg-gray-50 p-6 flex flex-col">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Loss Pattern Detection
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Identify recurring sales obstacles across your pipeline. Analyze historical deal data to uncover trends, bottlenecks, and areas that need improvement.
              </p>
              <div className="relative mt-6 flex-1 min-h-[220px] sm:min-h-[260px]">
                <Image
                  src={lossPattern}
                  alt="Loss pattern insight cards"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
