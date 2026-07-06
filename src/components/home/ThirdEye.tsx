import Image from "next/image";
import thumbsUp from "@/src/assets/images/thumsump.png";
import gauge from "@/src/assets/images/gauge.png";

export default function ThirdEye() {
  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">

          {/* ── Left Column: Heading + bottom-left cards ── */}
          <div className="w-full lg:w-[755px] flex flex-col gap-10">
            {/* Heading */}
            <h2
              className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-medium text-gray-900 tracking-tight"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 500,
                lineHeight: '116%',
                letterSpacing: '-3.5%',
                verticalAlign: 'middle'
              }}
            >
              The Third Ey
              <span className="inline-block align-baseline relative -ml-[0.04em] mr-[0.08em] mt-1" style={{ width: '0.6em', height: '0.6em' }}>
                <Image
                  src="/images/home_images/Vector (1).svg"
                  alt="e"
                  fill
                  className="object-contain mt-1"
                  priority
                />
              </span>
              of TZI CRM Turn Lost Deals Into{" "}
              <span className="inline-flex items-center gap-0.1 align-middle">
                <span className="text-blue-500">Future Wins</span>
                <Image
                  src={thumbsUp}
                  alt="Thumbs up"
                  className="inline-block w-9 h-9 sm:w-11 sm:h-11 lg:w-30 lg:h-30 object-contain align-middle"
                  priority
                />
              </span>
            </h2>

            {/* Bottom-left cards row */}
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              {/* Sales Cycle Gap Detection Card */}
              <div
                className="rounded-[24px] bg-[#F7F8FA] p-6 flex flex-col justify-between w-full sm:w-[60%] lg:w-[445px] lg:h-[456px] lg:shrink-0"
              >
                <div>
                  <h3
                    className="text-gray-900"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '116%',
                      letterSpacing: '-3.5%'
                    }}
                  >
                    Sales Cycle Gap Detection
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '140%',
                      letterSpacing: '-2.5%',
                      color: '#31373D'
                    }}
                  >
                    Streamline your sales process, eliminate delays and improve your deal closures.
                  </p>
                </div>
                <div className="relative mt-4 w-full h-[180px] sm:h-[200px] lg:h-[290px]">
                  <Image
                    src="/images/home_images/Frame 1707479109 (1).svg"
                    alt="Sales Cycle Gap Detection visual"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>

              {/* Loss Pattern Detection Card */}
              <div
                className="rounded-[24px] bg-[#F7F8FA] p-6 flex flex-col justify-between w-full sm:w-[40%] lg:w-[286px] lg:h-[456px] lg:shrink-0"
              >
                <div>
                  <h3
                    className="text-gray-900"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '116%',
                      letterSpacing: '-3.5%'
                    }}
                  >
                    Loss Pattern Detection
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '140%',
                      letterSpacing: '-2.5%',
                      color: '#31373D'
                    }}
                  >
                    Identify recurring sales obstacles across your pipeline.
                  </p>
                </div>
                <div className="relative  w-full h-[180px] sm:h-[200px] lg:h-[290px]">
                  <Image
                    src="/images/home_images/Frame 427319807.svg"
                    alt="Loss Pattern Detection visual"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Win Rate Optimization + Root Cause Analysis ── */}
          <div className="w-full lg:w-[445px] flex flex-col gap-6">
            {/* Win Rate Optimization Card */}
            <div
              className="rounded-[24px] bg-[#F7F8FA] p-6 flex items-start justify-between gap-4 w-full lg:w-[445px] lg:h-[132px] lg:shrink-0"
            >
              <div>
                <h3
                  className="text-gray-900"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '116%',
                    letterSpacing: '-3.5%'
                  }}
                >
                  Win Rate Optimization
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '-2.5%',
                    color: '#31373D'
                  }}
                >
                  Utilize deal-loss insights to strengthen your sales approach, improve close rates and drive sustainable growth.
                </p>
              </div>
              <Image
                src={gauge}
                alt="Win rate gauge"
                className="w-10 h-auto object-contain shrink-0 mt-1"
              />
            </div>

            {/* Root Cause Analysis Card */}
            <div
              className="rounded-[24px] bg-[#F7F8FA] p-6 flex flex-col justify-between w-full lg:w-[445px] lg:h-[626px] lg:shrink-0"
            >
              <div>
                <h3
                  className="text-gray-900"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '116%',
                    letterSpacing: '-3.5%'
                  }}
                >
                  Root Cause Analysis
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '-2.5%',
                    color: '#31373D'
                  }}
                >
                  Gain visibility into customer rejections, pricing concerns, competitor influence and other factors affecting your sales outcomes.
                </p>
              </div>
              <div className="relative mt-4 w-full h-[240px] sm:h-[350px] lg:h-[400px]">
                <Image
                  src="/images/home_images/Route_Analysis.svg"
                  alt="Root Cause Analysis visual"
                  fill
                  className="object-contain object-top border-radius-xl"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
