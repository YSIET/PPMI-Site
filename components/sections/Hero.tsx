"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden bg-gradient-to-br from-primary-soft via-background to-background">
      {/* 부드러운 배경 글로우 */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* 왼쪽: 텍스트 */}
          <div className="lg:col-span-7 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ppmi-red/25 bg-white/70 backdrop-blur-sm mb-5 shadow-sm shadow-ppmi-red/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ppmi-red animate-pulse" />
              <span className="text-eyebrow text-ppmi-red">{heroContent.ko.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-text mb-4 whitespace-pre-line"
            >
              {heroContent.ko.headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? <span className="text-gradient">{line}</span> : line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-soft leading-relaxed mb-6 max-w-2xl"
            >
              {heroContent.ko.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-ppmi-red text-white rounded-full font-medium hover:bg-ppmi-red-dark transition-colors shadow-md shadow-ppmi-red/15"
              >
                회사 소개 보기
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-text/20 text-text rounded-full font-medium hover:border-text hover:bg-text hover:text-white transition-all"
              >
                채용 안내
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* 오른쪽: 비주얼 카드 — self-start로 텍스트와 윗줄 정렬 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 self-start"
          >
            <div className="relative rounded-2xl bg-white border border-ppmi-red-soft shadow-xl shadow-ppmi-red/5 p-6 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-ppmi-red/8 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-eyebrow text-ppmi-red">PPMI Pipeline</div>
                  <span className="text-[10px] tracking-[0.2em] text-text-light uppercase">
                    Vertical Loop
                  </span>
                </div>

                <div className="space-y-3.5">
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
                      className="flex items-baseline gap-4 pb-3.5 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-display text-2xl text-ppmi-red tabular-nums">
                        {item.num}
                      </span>
                      <div>
                        <div className="text-text font-medium">{item.label}</div>
                        <div className="text-text-soft text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border text-xs leading-relaxed text-text-soft">
                  KOLAS 인정 분석 파트너 (주)와이에스환경기술연구원 (인정번호 제364호)
                  <br />
                  <span className="text-ppmi-red font-medium">
                    KOLAS-Accredited Partner — YS Institute of Environmental Technology (No. 364)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
