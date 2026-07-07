import Image from "next/image";

export default function IntegrationsVideo() {
  return (
    <section className="pt-6 md:pt-10 pb-12 md:pb-20 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">



        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto rounded-[16px] sm:rounded-[24px] overflow-hidden group cursor-pointer drop-shadow-xl border border-gray-200">
          {/* The Image Graphic */}
          <Image
            src="/images/integration/image1.svg"
            alt="Video Thumbnail"
            width={1251}
            height={738}
            className="w-full h-auto object-cover transition-opacity duration-300"
          />

        </div>

      </div>
    </section>
  );
}
