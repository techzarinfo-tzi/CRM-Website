export default function IntegrationsFeatures() {
  const features = [
    {
      title: "Centralize Every Customer Interaction",
      description: "All your business calls, emails, chats, forms, and marketplace leads will drop into one CRM."
    },
    {
      title: "Keep Teams on the Same Page",
      description: "Ensure every department works with the same up-to-date customer information & reducing miscommunication."
    },
    {
      title: "Reduce App Switching",
      description: "Access everything from one dashboard instead of juggling multiple applications."
    },
    {
      title: "Gain Complete Business Visibility",
      description: "Monitor your customer journeys, sales activities, and team performance from a single platform."
    }
  ];

  return (
    <section className="pt-6 md:pt-10 pb-6 md:pb-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-[32px] sm:text-[40px] font-medium text-[#1A1A1A] leading-tight tracking-tight">
            Why Business Tool <span className="text-[#3B82F6]">Integration</span> Matters?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-8 sm:p-10 border-[4px] border-[#EDEEF0] hover:border-gray-300 transition-colors text-center flex flex-col items-center justify-center min-h-[240px]"
              >
                <h3 
                  className="text-gray-900 mb-3" 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '-0.3px'
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
