import { ContactInfo } from "@/src/components/contact/ContactInfo";
import { ContactForm } from "@/src/components/contact/ContactForm";



export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 xl:gap-12 items-stretch">
        <ContactInfo />
        <ContactForm />
      </main>

    </div>
  );
}
