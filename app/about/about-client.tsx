"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data";
import { Award, Beaker, GraduationCap, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-primary-soft via-background to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-[60%] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35%] h-[40%] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-3">About PPMI</div>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-text mb-5 leading-[1.05]">
              데이터로
              <br />
              <span className="text-gradient">헬스케어를 다시 정의합니다</span>
            </h1>
            <p className="text-lg text-text-soft leading-relaxed max-w-2xl">
              PPMI는 KOLAS 인정 관계사의 분석력을 기반으로 반려동물 생체 데이터를 통합·해석하는 펫 헬스케어 데이터 기업입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 미션 — 의도적 다크 한 섹션 */}
      <section className="py-14 md:py-16 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[40%] h-[80%] bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="text-eyebrow text-ppmi-red mb-3">Our Mission</div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl">
                미션 &
                <br />
                비전
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="text-ppmi-red text-eyebrow mb-3">Mission</div>
                <p className="text-lg md:text-xl text-white leading-snug font-display">
                  검사가 곧 솔루션이 되는 펫 헬스케어 경험을 만든다.
                </p>
                <p className="mt-2 text-white/60 italic text-sm">
                  Make pet healthcare where testing itself becomes the solution.
                </p>
              </div>
              <div className="border-t border-white/10 pt-8">
                <div className="text-ppmi-red text-eyebrow mb-3">Vision</div>
                <p className="text-lg md:text-xl text-white leading-snug font-display">
                  반려동물의 모든 생체 데이터가 만나는 곳.
                </p>
                <p className="mt-2 text-white/60 italic text-sm">
                  Where every biological signal of pets comes together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 강점 */}
      <section className="py-14 md:py-16 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-3">Our Strengths</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text">
              경쟁사가 따라올 수 없는 진입장벽
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Award,
                title: "KOLAS 인정 분석 파트너십",
                desc: "관계사 (주)와이에스환경기술연구원(인정번호 제364호)의 KOLAS 인정 분석을 통해 반려동물 모발 등 시료 기반 정밀 검사 데이터를 확보합니다.",
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
                desc: "관계사의 분석 → PPMI의 데이터 통합·해석 → 아이언펫·너티 솔루션까지, 한 그룹 안에서 완결되는 가치 사슬.",
                en: "End-to-end vertical integration across the group: testing → data → solutions.",
              },
              {
                icon: GraduationCap,
                title: "연세대 교원창업",
                desc: "이태규 대표(연세대 교수)를 중심으로 한 연구·산업 결합형 스타트업.",
                en: "Spun out from Yonsei University — research-driven from day one.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 lg:p-8 rounded-2xl bg-white border border-border hover:border-ppmi-red/30 hover:shadow-lg hover:shadow-ppmi-red/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-ppmi-red-soft text-ppmi-red flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl text-text font-semibold mb-3">{item.title}</h3>
                  <p className="text-text-soft leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-xs text-text-light italic">{item.en}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 팀 */}
      <section className="py-14 md:py-16 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 max-w-3xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-3">Leadership</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text mb-3">
              세계적 학문, 국내 최고의 비즈니스
            </h2>
            <p className="text-lg text-text-soft leading-relaxed">
              MIT, Yale, 연세대 — 학문과 비즈니스 양쪽에서 검증된 팀이 PPMI를 이끕니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-ppmi-red/30 hover:shadow-lg hover:shadow-ppmi-red/5 transition-all"
                style={{ borderTopColor: "var(--ppmi-red)", borderTopWidth: "3px" }}
              >
                <div className="text-eyebrow text-ppmi-red mb-3">0{i + 1}</div>
                <div className="text-text-soft text-sm tracking-wider mb-1">
                  {member.role.ko}
                </div>
                <div className="text-text-light text-xs tracking-wider uppercase mb-6">
                  {member.role.en}
                </div>
                <div>
                  <div className="text-display text-2xl text-text mb-1">
                    {member.name}
                  </div>
                  <div className="text-text-light text-sm mb-4 italic">
                    {member.nameEn}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-text-soft text-xs leading-relaxed">
                      {member.credentials.ko}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
