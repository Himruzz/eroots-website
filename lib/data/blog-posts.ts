export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of Solid State Batteries",
    excerpt:
      "Why solid-state technology is the next big leap for EV range and safety. A deep dive into our latest lab research.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Understanding BMS Architecture",
    excerpt:
      "Battery Management Systems are the brain of any EV. Learn how we train students to design and debug them.",
    date: "Sep 28, 2023",
    readTime: "8 min read",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Kerala's EV Infrastructure Growth",
    excerpt:
      "How local charging networks are expanding and the opportunities for new entrepreneurs in the sector.",
    date: "Sep 15, 2023",
    readTime: "4 min read",
    category: "Industry News",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
  },
];
