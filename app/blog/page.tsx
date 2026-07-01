import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { BlogHeader } from "@/src/components/blog/BlogHeader";
import { MainPosts } from "@/src/components/blog/MainPosts";
import { RecommendedReads } from "@/src/components/blog/RecommendedReads";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">


      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-20">
        <BlogHeader />

        <div className="flex flex-col lg:flex-row gap-16">
          <MainPosts />
          <RecommendedReads />
        </div>
      </main>

      <Footer />
    </div>
  );
}
