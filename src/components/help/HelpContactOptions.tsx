import Image from "next/image";
import Link from "next/link";

export default function HelpContactOptions() {
  const options = [
    {
      id: 1,
      title: "Phone Support",
      description: "+91 9952885799",
      icon: "/images/help/phone.svg",
      href: "tel:+919952885799"
    },
    {
      id: 2,
      title: "WhatsApp Support",
      description: "+91 9952885799",
      icon: "/images/help/whatsapp.svg",
      href: "https://wa.me/919952885799"
    },
    {
      id: 3,
      title: "Email Support",
      description: "sales@techzarinfo.com",
      icon: "/images/help/email.svg",
      href: "mailto:sales@techzarinfo.com"
    }
  ];

  return (
    <section className="pt-6 md:pt-10 pb-6 md:pb-10 bg-white">
      <div className="mx-auto max-w-[1243px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-[32px] md:text-[46px] font-medium text-[#1A1A1A] leading-[1.2] tracking-[-1.2px] mb-4">
            Choose the Way You Need <span className="text-[#3B82F6]">Help</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[23px] font-normal leading-[1.5] md:leading-[32px] tracking-[-0.3px] text-gray-600 max-w-[1243px] mx-auto md:mx-0">
            No matter how you prefer to connect, our CRM experts are here to answer<br className="hidden lg:block" />
            your questions and resolve issues quickly.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-[36px]">
          {options.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              className="bg-white rounded-[24px] border-[4px] border-[#EDEEF0] p-6 lg:p-[40px] flex flex-col items-center justify-center text-center w-full max-w-[292px] h-auto min-h-[232px] shrink-0 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
            >
              <div className="flex flex-col items-center justify-center gap-[18px]">
                <Image
                  src={option.icon}
                  alt={option.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mb-2"
                />
                <h3 className="text-[16px] font-semibold text-gray-900">{option.title}</h3>
                <p className="text-[14px] text-gray-500 hover:text-blue-600 transition-colors">{option.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
