"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/data";

export default function BrandShowcase() {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-background relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-8 md:mb-10"
        >
          <div className="text-eyebrow text-ppmi-red mb-3">Our Brands</div>
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text mb-4">
            하나의 기술,{" "}
            <span className="text-gradient">두 개의 브랜드</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={brand.href}
                className="group block relative rounded-2xl bg-white border border-border p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
                style={{
                  borderTopWidth: "4px",
                  borderTopColor: brand.color,
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-light">
                    {brand.market.ko}
                  </span>
                  <span className="relative w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-soft transition-colors duration-300 group-hover:border-transparent group-hover:text-white overflow-hidden">
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: brand.color }}
                    />
                    <ArrowUpRight size={16} className="relative z-10" />
                  </span>
                </div>

                <div
                  className="text-eyebrow mb-2"
                  style={{ color: brand.color }}
                >
                  Brand 0{i + 1}
                </div>
                <h3 className="text-display text-3xl lg:text-4xl text-text mb-2 group-hover:translate-x-0.5 transition-transform">
                  {brand.name}
                </h3>
                <p className="text-sm text-text-soft mb-5">{brand.nameKo}</p>

                <p className="text-text leading-relaxed text-sm mb-5 line-clamp-3">
                  {brand.description.ko}
                </p>

                <div className="pt-4 border-t border-border">
                  <span className="text-xs italic text-text-light">
                    {brand.tagline.en}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
