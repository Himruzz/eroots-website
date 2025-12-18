import React from "react";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group flex flex-col h-full bg-[#121a15] rounded-2xl border border-white/5 overflow-hidden hover:border-[#38e07b]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,224,123,0.1)]">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#121a15] to-transparent z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-bold bg-[#38e07b] text-[#0a0f0c] rounded-full uppercase tracking-wide">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={12} /> {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#38e07b] transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto">
          <button className="flex items-center text-sm font-semibold text-[#38e07b] hover:text-white transition-colors group/btn">
            Read Article{" "}
            <ChevronRight
              size={16}
              className="ml-1 group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
