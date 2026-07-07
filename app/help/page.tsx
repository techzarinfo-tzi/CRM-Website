import VoiceOfSuccess from "@/src/components/home/VoiceOfSuccess";
import { AboutFAQ } from "@/src/components/about/AboutFAQ";
import HelpHero from "@/src/components/help/HelpHero";
import HelpContactOptions from "@/src/components/help/HelpContactOptions";
import HelpSupportServices from "@/src/components/help/HelpSupportServices";
import HelpCTA from "@/src/components/help/HelpCTA";



export default function HelpPage() {
  return (
    <div className="bg-white">
      <HelpHero />
      <HelpContactOptions />
      {/* <HelpSupportServices /> */}
      {/* <HelpCTA /> */}

      <VoiceOfSuccess />

      <div className="mt-12 md:mt-20 lg:mt-24">
        <AboutFAQ />
      </div>
    </div>
  );
}
