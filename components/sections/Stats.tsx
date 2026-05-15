"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="pt-5 pb-5 md:pt-7 md:pb-6 bg-primary-soft/40 relative overflow-hidden">
      {/* 얇은 격자 패턴 */}
      <div className="absolute inset-0 bg-grid-soft" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-5"
        >
          <div className="text-eyebrow text-ppmi-red mb-2">By the Numbers</div>
          <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text max-w-3xl mx-auto">
            숫자로 증명하는
            {" "}
            <span className="text-gradient">PPMI의 기술력</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center px-2 py-2 md:py-2.5 lg:py-3 lg:border-l lg:border-text/10 first:lg:border-l-0"
            >
              <div className="text-display text-4xl md:text-5xl lg:text-6xl text-ppmi-red mb-1 leading-none tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text font-medium text-sm md:text-base mb-0.5 leading-tight">
                {stat.label.ko}
              </div>
              <div className="text-text-light text-[10px] md:text-xs tracking-wider uppercase leading-tight">
                {stat.label.en}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
