import Image from "next/image";

export default function HelpSupportServices() {
  const services = [
    {
      id: "onboarding",
      title: "Onboarding",
      description: "We'll set you up with the perfect tools for your CRM:",
      bullets: [
        "Personalized account setup",
        "Data migration and import",
        "Customizing user permissions",
        "Integration with existing systems"
      ],
      image: "/images/help/onboarding.svg",
      imageFirst: false
    },
    {
      id: "training",
      title: "Training",
      description: "Help your team with our knowledge base and deep learning sessions:",
      bullets: [
        "Interactive product training",
        "On-demand learning webinars",
        "Role-based training paths for sales",
        "Tips for improved productivity"
      ],
      image: "/images/help/training.svg",
      imageFirst: true
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      description: "When something goes wrong, our support team helps you get back on track quickly:",
      bullets: [
        "Dedicated support desk",
        "Technical problem resolution",
        "Performance optimization",
        "Ongoing assistance and resources"
      ],
      image: "/images/help/troubleshooting.svg",
      imageFirst: false
    },
    {
      id: "product-enhancements",
      title: "Product Enhancements",
      description: "Stay up to date with our CRM enhancements designed to enhance your experience:",
      bullets: [
        "Explore new core CRM features",
        "Custom solutions for your team",
        "Security updates and bug fixes",
        "Share ideas and vote on roadmap"
      ],
      image: "/images/help/product.svg",
      imageFirst: true
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-[32px] sm:text-[40px] font-medium text-[#1A1A1A] leading-tight tracking-tight">
            How We <span className="text-[#3B82F6]">Support</span> You
          </h2>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${service.imageFirst ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-[16px] text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      <span className="text-[15px] text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
