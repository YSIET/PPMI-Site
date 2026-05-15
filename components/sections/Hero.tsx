"use client";

import { motion } from "framer-motion";
import { heroContent, heroEyebrowKo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-4 md:pt-24 md:pb-6 overflow-hidden bg-gradient-to-br from-primary-soft via-background to-background">
      {/* 부드러운 배경 글로우 */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* 왼쪽: 텍스트 */}
          <div className="lg:col-span-7 lg:pt-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ppmi-red/25 bg-white/70 backdrop-blur-sm mb-3 shadow-sm shadow-ppmi-red/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ppmi-red animate-pulse" />
              <span className="text-eyebrow text-text">{heroEyebrowKo.lead}</span>
              <span className="text-eyebrow text-ppmi-red">{heroEyebrowKo.accent}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-text mb-3 whitespace-pre-line"
            >
              {heroContent.ko.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient md:whitespace-nowrap">{line}</span> : line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-soft leading-snug max-w-2xl"
            >
              {heroContent.ko.subheadline}
            </motion.p>
          </div>

          {/* 오른쪽: 비주얼 카드 — self-start로 텍스트와 윗줄 정렬 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 self-start"
          >
            <div className="relative rounded-2xl bg-white border border-ppmi-red-soft shadow-xl shadow-ppmi-red/5 p-4 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-ppmi-red/8 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-eyebrow text-ppmi-red">PPMI Pipeline</div>
                  <span className="text-[10px] tracking-[0.2em] text-text-light uppercase">
                    Vertical Loop
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      num: "01",
                      label: "검사 / Test",
                      sub: "시료 수집 (PPMI) → 분석 (관계사 KOLAS 시험기관)",
                    },
                    { num: "02", label: "데이터 / Data", sub: "측정 결과를 PPMI가 통합·해석" },
                    { num: "03", label: "솔루션 / Solution", sub: "아이언펫·너티" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                      className="flex items-baseline gap-3 pb-2.5 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-display text-2xl text-ppmi-red tabular-nums">
                        {item.num}
                      </span>
                      <div>
                        <div className="text-text font-medium md:whitespace-nowrap">{item.label}</div>
                        <div className="text-text-soft text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
