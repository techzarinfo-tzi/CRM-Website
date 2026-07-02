import Image from "next/image";

export default function HelpContactOptions() {
  const options = [
    {
      id: 1,
      title: "Phone Support",
      description: "Call us anytime",
      icon: "/images/help/phone.svg"
    },
    {
      id: 2,
      title: "WhatsApp Support",
      description: "Chat with us",
      icon: "/images/help/whatsapp.svg"
    },
    {
      id: 3,
      title: "Email Support",
      description: "Send us an email",
      icon: "/images/help/email.svg"
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-medium text-[#1A1A1A] leading-tight tracking-tight mb-4">
            Choose the Way You Need <span className="text-[#3B82F6]">Help</span>
          </h2>
          <p className="text-[16px] text-gray-600 max-w-3xl">
            No matter how you prefer to reach out, our CRM team is here to answer<br className="hidden sm:block" />
            your questions and resolve issues quickly.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-6 lg:gap-8">
          {options.map((option) => (
            <div 
              key={option.id}
              className="bg-white rounded-[24px] border-[1.5px] border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col items-center justify-center text-center w-full sm:w-auto sm:flex-1 max-w-[280px]"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                <Image 
                  src={option.icon} 
                  alt={option.title} 
                  width={28} 
                  height={28} 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-gray-900 mb-1">{option.title}</h3>
              <p className="text-[14px] text-gray-500">{option.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
