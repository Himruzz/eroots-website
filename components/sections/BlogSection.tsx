import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import SectionBadge from "@/components/shared/SectionBadge";
import BlogCard from "@/components/shared/BlogCard";
import { blogPosts } from "@/lib/data/blog-posts";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 px-6 bg-[#0d120f] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38e07b]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <SectionBadge text="Latest Insights" />
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Updates from the <span className="text-[#38e07b]">Lab</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
              <BookOpen size={16} className="text-[#38e07b]" />
              Powered by GitHub CMS
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#38e07b] hover:text-white transition-colors group">
            View All Posts{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
