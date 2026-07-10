import { PricingSection } from "@/src/components/pricing/PricingSection";



export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <main className="flex-grow">
        <PricingSection />
      </main>
    </div>
  );
}
