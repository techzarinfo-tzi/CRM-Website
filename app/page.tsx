import HeroSection from "@/src/components/home/HeroSection";
import ThirdEye from "@/src/components/home/ThirdEye";
import StayOrganized from "@/src/components/home/StayOrganized";
import MeetTheMinds from "@/src/components/home/MeetTheMinds";
import CustomerJourney from "@/src/components/home/CustomerJourney";
import AiPowered from "@/src/components/home/AiPowered";
import BusinessTools from "@/src/components/home/BusinessTools";
import VoiceOfSuccess from "@/src/components/home/VoiceOfSuccess";
import YourQuestions from "@/src/components/home/YourQuestions";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ThirdEye />
      <StayOrganized />
      <MeetTheMinds />
      <CustomerJourney />
      <AiPowered />
      <BusinessTools />
      <VoiceOfSuccess />
      <YourQuestions />
    </main>
  );
}
