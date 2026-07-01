import Image from "next/image";
import tziLogo from "@/src/assets/images/TZI.png";
import robot from "@/src/assets/images/robot.png";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mehak S.",
    role: "Product Manager, ByteDash",
    rating: 5,
    quote:
      "Working with this team was a breath of fresh air. They understood our vision instantly and delivered beyond expectations. We've seen a 35% increase in engagement since the revamp.",
    initials: "MS",
    color: "bg-rose-200 text-rose-700",
  },
  {
    name: "Aanya R.",
    role: "Marketing Head, BloomSocial",
    rating: 4,
    quote:
      "Professional, creative, and incredibly easy to work with. They didn't just design—they brought our brand to life. Our clients love the new look!",
    initials: "AR",
    color: "bg-amber-200 text-amber-700",
  },
  {
    name: "Rajeev T.",
    role: "CEO, FinAura",
    rating: 5,
    quote:
      "Working with this team was a breath of fresh air. They understood our vision instantly and delivered beyond expectations. We've seen a 35% increase in engagement since the revamp.",
    initials: "RT",
    color: "bg-sky-200 text-sky-700",
  },
  {
    name: "Tara V.",
    role: "Creative Director, HelloChai",
    rating: 4,
    quote:
      "We've worked with several design teams, but this was a game-changer. They nailed the user experience and aesthetics in one go.",
    initials: "TV",
    color: "bg-emerald-200 text-emerald-700",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < rating ? "fill-blue-500" : "fill-gray-200"}`}
        >
          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.09.99 5.77L10 14.9l-5.18 2.55.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-4 sm:p-5">
      <StarRating rating={t.rating} />
      <p className="mt-3 text-sm text-gray-500 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${t.color}`}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{t.name}</p>
          <p className="text-xs text-gray-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  duration: number;
}) {
  return (
    <div
      className="relative h-[520px] sm:h-[600px] overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col gap-4 sm:gap-5"
        style={{
          animation: `${direction === "up" ? "voice-marquee-up" : "voice-marquee-down"} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function VoiceOfSuccess() {
  return (
    <section className="relative bg-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <style>{`
        @keyframes voice-marquee-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes voice-marquee-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="max-w-2xl">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-extrabold text-gray-900 leading-[1.2] tracking-tight">
            Hear the Voices of <span className="text-blue-500">Success</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Every win has a story. Listen to the voices of success and discover the stories behind remarkable growth.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: Zia assistant card + robot ── */}
          <div className="relative mx-auto lg:mx-0 max-w-sm w-full">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <Image src={tziLogo} alt="TZI" className="h-5 w-auto object-contain" />
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.75a4.5 4.5 0 004.5-4.5V6.75a4.5 4.5 0 00-9 0v7.5a4.5 4.5 0 004.5 4.5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5v1.5a7.5 7.5 0 01-15 0v-1.5M12 19.5v3" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">
                Hi! I&apos;m Zia. Based on feedback from clients, here are the key areas where this CRM can make the biggest impact:
              </p>
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-500">
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">✓</span> 86% Better follow-up consistency
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">✓</span> 74% Faster customer response times
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">✓</span> 68% Higher lead conversion rates
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">✓</span> 91% Improved customer relationship visibility
                </li>
              </ul>
            </div>

            <div className="absolute -bottom-8 -right-4 sm:-right-10 w-[130px] sm:w-[160px]">
              <Image src={robot} alt="Zia AI assistant robot" className="w-full h-auto object-contain" priority />
            </div>
          </div>

          {/* ── Right: scrolling testimonials ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <MarqueeColumn items={[testimonials[0], testimonials[1]]} direction="up" duration={22} />
            <div className="hidden sm:block">
              <MarqueeColumn items={[testimonials[2], testimonials[3]]} direction="down" duration={26} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
