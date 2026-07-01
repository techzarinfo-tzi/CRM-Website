export default function IntegrationsFeatures() {
  const features = [
    {
      title: "Centralize Every Customer Interaction",
      description: "All your business calls, emails, chats, forms, and marketplace leads will drop into one CRM."
    },
    {
      title: "Keep Teams on the Same Page",
      description: "Ensure every department works with the same up-to-date customer information, reducing miscommunication."
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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 leading-tight">
            Why Business Tool <span className="text-blue-500">Integration Matters?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#FAFAFA] rounded-[20px] p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-[16px] sm:text-[18px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
