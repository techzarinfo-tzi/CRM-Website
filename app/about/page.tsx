import { AboutHero } from "@/src/components/about/AboutHero";
import { AboutMission } from "@/src/components/about/AboutMission";
import { AboutDNA } from "@/src/components/about/AboutDNA";
import { AboutFAQ } from "@/src/components/about/AboutFAQ";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <AboutHero />
        <AboutMission />
        <AboutDNA />
        <AboutFAQ />
      </main>
    </div>
  );
}
