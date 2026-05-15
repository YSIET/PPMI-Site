"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brands } from "@/lib/data";

export default function BrandShowcase() {
  return (
    <section className="pt-2 pb-7 md:pt-3 md:pb-9 bg-background relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-2 md:mb-3"
        >
          <div className="text-eyebrow text-ppmi-red mb-1.5">Our Brands</div>
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text mb-0">
            하나의 기술,{" "}
            <span className="text-gradient">두 개의 브랜드</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full min-h-0"
            >
              <Link
                href={brand.href}
                className="group flex flex-col h-full min-h-0 relative rounded-2xl bg-white border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
                style={{
                  borderTopWidth: "4px",
                  borderTopColor: brand.color,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-light leading-tight">
                    {brand.market.ko}
                  </span>
                  <span className="relative w-8 h-8 shrink-0 rounded-full border border-border flex items-center justify-center text-text-soft transition-colors duration-300 group-hover:border-transparent group-hover:text-white overflow-hidden">
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: brand.color }}
                    />
                    <ArrowUpRight size={14} className="relative z-10" />
                  </span>
                </div>

                <div
                  className="text-eyebrow mb-1"
                  style={{ color: brand.color }}
                >
                  Brand 0{i + 1}
                </div>
                <h3 className="text-display text-2xl md:text-3xl lg:text-4xl text-text mb-1 group-hover:translate-x-0.5 transition-transform lg:whitespace-nowrap">
                  {brand.name}
                </h3>
                <p className="text-sm text-text-soft mb-2 leading-tight">
                  {brand.nameKo}
                </p>

                <p className="text-text leading-snug text-sm mb-2 line-clamp-4 flex-1 min-h-0 break-keep">
                  {brand.description.ko}
                </p>

                <div className="mt-auto pt-2 border-t border-border">
                  <span className="text-[11px] italic text-text-light leading-snug block prose-latin">
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
