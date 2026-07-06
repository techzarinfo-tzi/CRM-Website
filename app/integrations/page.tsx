
import IntegrationsHero from "@/src/components/integrations/IntegrationsHero";
import IntegrationsFeatures from "@/src/components/integrations/IntegrationsFeatures";
import IntegrationsDashboard from "@/src/components/integrations/IntegrationsDashboard";
import IntegrationsVideo from "@/src/components/integrations/IntegrationsVideo";



export default function IntegrationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFA]">

      <IntegrationsHero />
      <IntegrationsFeatures />
      <IntegrationsDashboard />
      <IntegrationsVideo />

    </main>
  );
}
