import Image from "next/image";

const mainPosts = [
  {
    id: 1,
    title: "10 CRM Features Every Sales Team Needs",
    author: "Emily Foster",
    date: "Jun 25, 2026",
    image: "/images/blog/image1.svg",
    avatar: "https://i.pravatar.cc/150?u=emily1"
  },
  {
    id: 2,
    title: "Best Practices for Managing Leads",
    author: "Liam Taylor",
    date: "Jun 25, 2026",
    image: "/images/blog/image2.svg",
    avatar: "https://i.pravatar.cc/150?u=liam1"
  },
  {
    id: 3,
    title: "Sales Pipeline Management Made Simple",
    author: "Emily Foster",
    date: "Jun 25, 2026",
    image: "/images/blog/image4.svg",
    avatar: "https://i.pravatar.cc/150?u=emily2"
  },
  {
    id: 4,
    title: "Building a High-Performing Sales Process",
    author: "Emily Foster",
    date: "Jun 25, 2026",
    image: "/images/blog/image5.svg",
    avatar: "https://i.pravatar.cc/150?u=emily3"
  }
];

export function MainPosts() {
  return (
    <div className="lg:w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mainPosts.map((post) => (
          <div key={post.id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h2 className="text-xl font-bold mb-4 line-clamp-2 leading-tight pr-4">
              {post.title}
            </h2>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-gray-700">{post.author}</span>
              </div>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-16 gap-2">
        <button className="w-10 h-10 rounded-full text-white flex items-center justify-center font-medium transition-colors" style={{ background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }}>
          1
        </button>
        <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-700 flex items-center justify-center font-medium transition-colors">
          2
        </button>
        <button className="w-10 h-10 rounded-full hover:bg-gray-100 text-gray-700 flex items-center justify-center font-medium transition-colors">
          3
        </button>
      </div>
    </div>
  );
}
