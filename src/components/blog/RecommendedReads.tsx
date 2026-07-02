import Image from "next/image";

const recommendedPosts = [
  {
    id: 1,
    title: "Improve Campaign Performance with CRM",
    author: "Amelia Scott",
    date: "Jun 25, 2026",
    image: "/images/blog/image6.svg",
    avatar: "https://i.pravatar.cc/150?u=amelia1"
  },
  {
    id: 2,
    title: "CRM Dashboards That Drive Decisions",
    author: "Amelia Scott",
    date: "Jun 25, 2026",
    image: "/images/blog/image7.svg",
    avatar: "https://i.pravatar.cc/150?u=amelia2"
  },
  {
    id: 3,
    title: "CRM Strategies for Growing Companies",
    author: "Amelia Scott",
    date: "Jun 25, 2026",
    image: "/images/blog/image8.svg",
    avatar: "https://i.pravatar.cc/150?u=amelia3"
  },
  {
    id: 4,
    title: "Everything You Need to Know About CRM",
    author: "Amelia Scott",
    date: "Jun 25, 2026",
    image: "/images/blog/image9.svg",
    avatar: "https://i.pravatar.cc/150?u=amelia4"
  },
  {
    id: 5,
    title: "The Complete CRM Handbook",
    author: "Amelia Scott",
    date: "Jun 25, 2026",
    image: "/images/blog/image10.svg",
    avatar: "https://i.pravatar.cc/150?u=amelia5"
  }
];

export function RecommendedReads() {
  return (
    <div className="lg:w-1/3">
      <h3 className="text-xl font-bold mb-8">Recommended Reads</h3>
      <div className="flex flex-col gap-12">
        {recommendedPosts.map((post) => (
          <div key={post.id} className="flex items-center gap-5 group cursor-pointer">
            <div className="relative w-28 h-28 shrink-0 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h4 className="font-bold text-sm leading-tight mb-4 group-hover:text-[#3b82f6] transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{post.author}</span>
                </div>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
