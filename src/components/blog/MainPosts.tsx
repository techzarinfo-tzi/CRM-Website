"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

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
      <div className="flex items-center justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all cursor-pointer ${
              currentPage === page
                ? "text-white hover:opacity-90 hover:shadow-md hover:-translate-y-0.5"
                : "text-gray-700 hover:bg-gray-100 hover:shadow-sm hover:-translate-y-0.5"
            }`}
            style={
              currentPage === page
                ? { background: 'linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)' }
                : undefined
            }
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
