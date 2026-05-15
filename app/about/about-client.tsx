"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { team } from "@/lib/data";
import { Award, Beaker, GraduationCap, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-5 md:pt-24 md:pb-7 bg-gradient-to-br from-primary-soft via-background to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-[60%] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35%] h-[40%] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-2">About PPMI</div>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-text mb-2 leading-[1.05]">
              데이터로
              <br />
              <span className="text-gradient">헬스케어를 다시 정의합니다</span>
            </h1>
            <p className="text-[1.0625rem] md:text-lg text-text-soft leading-snug max-w-3xl lg:max-w-[42rem] lg:text-[1.125rem]">
              PPMI는 KOLAS 인정 관계사의 분석력을 기반으로 반려동물 생체 데이터를 통합·해석하는 펫 헬스케어 데이터 기업입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 미션 — 의도적 다크 한 섹션 */}
      <section className="py-7 md:py-9 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[40%] h-[80%] bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
            <div className="lg:col-span-5">
              <div className="text-eyebrow text-ppmi-red mb-2">Our Mission</div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-4xl xl:text-5xl lg:whitespace-nowrap">
                미션 & 비전
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-3 md:space-y-4">
              <div>
                <div className="text-ppmi-red text-eyebrow mb-2">Mission</div>
                <p className="text-lg md:text-xl text-white leading-snug font-display">
                  검사가 곧 솔루션이 되는 펫 헬스케어 경험을 만든다.
                </p>
                <p className="mt-1 text-white/60 italic text-base leading-snug prose-latin">
                  Make pet healthcare where testing itself becomes the solution.
                </p>
              </div>
              <div className="border-t border-white/10 pt-3 md:pt-4">
                <div className="text-ppmi-red text-eyebrow mb-2">Vision</div>
                <p className="text-lg md:text-xl text-white leading-snug font-display">
                  반려동물의 모든 생체 데이터가 만나는 곳.
                </p>
                <p className="mt-1 text-white/60 italic text-base leading-snug prose-latin">
                  Where every biological signal of pets comes together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 강점 */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 max-w-3xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-1.5">Our Strengths</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text">
              경쟁사가 따라올 수 없는 진입장벽
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2.5 lg:gap-3">
            {(
              [
                {
                  icon: Award,
                  title: "KOLAS 인정 분석 파트너십",
                  desc: (
                    <>
                      관계사 (주)와이에스환경기술연구원(인정번호 제364호)의 KOLAS 인정 분석을 통해{" "}
                      <br className="hidden sm:inline" />
                      반려동물 모발 등 시료 기반 정밀 검사 데이터를 확보합니다.
                    </>
                  ),
                  en: "KOLAS-accredited testing through our partner, YS Institute of Environmental Technology.",
                },
                {
                  icon: Beaker,
                  title: "20년 분석 데이터 자산",
                  desc: "관계사가 20년간 축적한 KOLAS 인정 분석 데이터와 노하우를 PPMI가 펫 헬스케어 솔루션의 자산으로 활용합니다. 단기간에 복제될 수 없는 진입장벽입니다.",
                  en: "20 years of cumulative lab data — irreplicable.",
                },
                {
                  icon: TrendingUp,
                  title: "데이터 수직 통합",
                  desc: (
                    <>
                      관계사의 분석 → PPMI의 데이터 통합·해석 → 아이언펫·너티 솔루션까지,{" "}
                      <br className="hidden sm:inline" />
                      한 그룹 안에서 완결되는 가치 사슬.
                    </>
                  ),
                  en: "End-to-end vertical integration across the group: testing → data → solutions.",
                },
                {
                  icon: GraduationCap,
                  title: "연세대 교원창업",
                  desc: "이태규 대표(연세대 교수)를 중심으로 한 연구·산업 결합형 스타트업.",
                  en: "Spun out from Yonsei University — research-driven from day one.",
                },
              ] as {
                icon: typeof Award;
                title: string;
                desc: ReactNode;
                en: string;
              }[]
            ).map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`rounded-2xl bg-white border border-border hover:border-ppmi-red/30 hover:shadow-lg hover:shadow-ppmi-red/5 transition-all min-w-0 ${
                    i === 1 ? "p-3 md:p-3.5 lg:p-4" : "p-3.5 md:p-4"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-ppmi-red-soft text-ppmi-red flex items-center justify-center mb-2">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl text-text font-semibold mb-1.5 lg:whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p
                    className={`text-text-soft leading-snug mb-1.5 break-keep ${
                      i === 1
                        ? "text-[0.875rem] md:text-[0.8125rem] lg:text-[0.9375rem] xl:text-base"
                        : "text-[0.9375rem] md:text-base"
                    }`}
                  >
                    {item.desc}
                  </p>
                  <p className="text-xs text-text-light italic leading-snug prose-latin mt-0.5">
                    {item.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-5 md:py-7 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-stretch">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col h-full p-3 md:p-4 rounded-2xl bg-white border border-border hover:border-ppmi-red/30 hover:shadow-lg hover:shadow-ppmi-red/5 transition-all"
                style={{ borderTopColor: "var(--ppmi-red)", borderTopWidth: "3px" }}
              >
                <div className="text-eyebrow text-ppmi-red mb-1.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-text-soft text-[0.9375rem] tracking-wide mb-2">
                  {member.role.ko}
                </div>
                <div className="text-display text-2xl text-text mb-2">
                  {member.name}
                </div>
                <div className="mt-auto pt-2 border-t border-border">
                  <p className="text-text-soft text-sm leading-snug whitespace-pre-line">
                    {member.credentials.ko}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
