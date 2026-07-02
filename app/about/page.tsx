import { AboutHero } from "@/src/components/about/AboutHero";
import { AboutMission } from "@/src/components/about/AboutMission";
import { AboutDNA } from "@/src/components/about/AboutDNA";
import { AboutFAQ } from "@/src/components/about/AboutFAQ";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow w-full px-6 lg:px-20 py-16 md:py-24">
        <AboutHero />
        <AboutMission />
        <AboutDNA />
        <AboutFAQ />
      </main>
    </div>
  );
}
