import React from "react";
import SectionBadge from "@/components/shared/SectionBadge";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6 bg-[#0a0f0c]">
      <div className="max-w-7xl mx-auto">
        <SectionBadge text="Innovation Store" />
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-16">
          Our <span className="text-[#38e07b]">Products</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              desc={product.desc}
              icon={product.icon}
              color={product.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
