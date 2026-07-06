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

      <div className="py-8">
        <VoiceOfSuccess />
      </div>

      <div className="py-8">
        <AboutFAQ />
      </div>
    </div>
  );
}
