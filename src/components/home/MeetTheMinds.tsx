import Image from "next/image";
import meetTheMinds from "@/src/assets/images/meet_the_minds.png";
import quickActions from "@/src/assets/images/quick_actions.png";

const features = [
  {
    title: "Deal Analysis & Intelligence",
    description:
      "Analyse potential leads, follow progress across pipeline stages, find the sales weaknesses using scoring models, and track deal status as it evolves. Make your sales team focus on high-value prospects and improve deal conversions.",
  },
  {
    title: "Won Analysis",
    description:
      "Transform closed deals into long term growth. Utilize insights on customer lifetime value (CLV), spot opportunities for upselling and cross-selling, and analyze revenue patterns through an interactive dashboard designed to boost customer retention.",
  },
  {
    title: "Sales Leaderboard",
    description:
      "Make healthy internal competition with a live leaderboard. Monitor individual and team results, highlight top achievers, benchmark key sales metrics, and inspire your team to consistently achieve their goals.",
  },
  {
    title: "Task & Target Management",
    description:
      "Keep your sales team focused and responsible with smart tasks and target management. Distribute assignments, define monthly or quarterly targets, monitor real-time progress, and ensure alignment with broader business objectives.",
  },
  {
    title: "Internal Chat Integration",
    description:
      "Streamline communication within your CRM. Share messages instantly, share deal updates, collaborate on strategies, and coordinate with team members using the integrated chat for enabling quicker decisions and smoother teamwork.",
  },
];

export default function MeetTheMinds() {
  return (
    <>
      {/* ════════════════════════
          MEET THE MINDS (video)
      ════════════════════════ */}
      <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[1251/680] rounded-2xl sm:rounded-3xl overflow-hidden">
            <Image
              src={meetTheMinds}
              alt="Meet the Minds Behind TZI CRM"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════
          WHAT MAKES TZI CRM STAND OUT
      ════════════════════════ */}
      <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* ── Left: heading, intro, feature list ── */}
            <div>
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                What Makes <span className="text-blue-500">TZI CRM</span> Stand Out
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                Every business has unique objectives, and CRM should be built to support them. TZI CRM goes beyond traditional CRM solutions by combining versatile features. TZI CRM provides everything you need to manage your business more efficiently and stay ahead of the competition.
              </p>

              <div className="mt-8 sm:mt-10 space-y-7 sm:space-y-8">
                {features.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: floating product graphic ── */}
            <div className="relative mx-auto w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-xl aspect-[702/746]">
                <Image
                  src={quickActions}
                  alt="Quick actions, deal classification and pipeline statistics widgets"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 600px, 90vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
