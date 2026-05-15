"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Leaf,
  Zap,
  ShieldCheck,
  Database,
  Apple,
  Sparkles,
  Star,
} from "lucide-react";

const BRAND_COLOR = "#C9A84C";

const features = [
  {
    icon: Heart,
    code: "F/01",
    title: "기호성",
    titleEn: "Palatability",
    desc: "까다로운 아이도 한 입에 사로잡는 풍미. 천연 재료의 향을 그대로 살린 레시피 설계.",
  },
  {
    icon: Leaf,
    code: "F/02",
    title: "영양 밸런스",
    titleEn: "Balanced Nutrition",
    desc: "검사 데이터 기반 영양소 배합. 단백질·지방·미량영양소까지 부족함도 과함도 없이.",
  },
  {
    icon: Zap,
    code: "F/03",
    title: "기능성",
    titleEn: "Functional",
    desc: "관절·피부·장 건강 등 목적에 맞춘 기능성 라인. 데이터로 본 결핍을 푸드로 메웁니다.",
  },
  {
    icon: ShieldCheck,
    code: "F/04",
    title: "안전성",
    titleEn: "Safety",
    desc: "원재료 단계부터 중금속·잔류물 검사. KOLAS 인정 관계사 검증으로 끝까지 책임집니다.",
  },
];

const roadmap = [
  {
    phase: "Phase 01",
    status: "현재 / NOW",
    title: "기능성 펫푸드 · 간식",
    desc: "아이언펫 검사 데이터를 기반으로 설계한 첫 번째 라인업. 기능성 사료와 데일리 간식으로 시작합니다.",
    active: true,
  },
  {
    phase: "Phase 02",
    status: "예정 / NEXT",
    title: "펫 영양제 라인업",
    desc: "검사 결과에 따라 부족한 성분만 보충하는 맞춤 영양제. 반려동물 대상 구독 모델.",
    active: false,
  },
  {
    phase: "Phase 03",
    status: "장기 / FUTURE",
    title: "개인 맞춤형 펫 헬스케어 솔루션",
    desc: "검사 → 푸드 → 영양제 → 모니터링까지, 한 마리 아이의 데이터로 모든 솔루션이 자동 조율되는 헬스케어 플랫폼.",
    active: false,
  },
];

export default function NuttyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 relative overflow-hidden bg-cream-warm">
        <div className="absolute inset-0 bg-noise" />
        <div
          className="absolute top-0 right-0 w-[60%] h-[80%] rounded-full blur-3xl opacity-35"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR}55, transparent 70%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-navy/8 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/15 bg-cream-warm/60 backdrop-blur-sm mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: BRAND_COLOR }}
                />
                <span className="text-eyebrow text-navy">Brand 02 · 반려동물 펫푸드</span>
              </div>

              <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[0.95] mb-5 tracking-tight">
                NUT
                <span style={{ color: BRAND_COLOR }}>:</span>TY
              </h1>

              <p className="text-2xl md:text-3xl text-navy mb-4 font-display leading-tight">
                건강한 한 입, 맛있는 습관.
              </p>

              <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
                너티는 아이언펫 검사 흐름에서 확인되는 반려동물의 영양 상태와 생체 데이터
                인사이트를 바탕으로, 더 정밀한 식이 설계를 지향하는 PPMI의 데이터 기반
                펫푸드 브랜드입니다.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 flex justify-end"
            >
              <div
                className="relative w-full max-w-sm aspect-square rounded-2xl p-8 overflow-hidden text-navy"
                style={{
                  background: `linear-gradient(160deg, ${BRAND_COLOR}, #d4b96a 100%)`,
                }}
              >
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cream/30 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-dark/15 blur-3xl" />
                <div className="relative h-full flex flex-col justify-between">
                  <Apple size={48} className="opacity-90" />
                  <div>
                    <div className="text-eyebrow text-navy/70 mb-3">Pet Food</div>
                    <div className="text-display text-2xl md:text-3xl mb-2 leading-tight">
                      아이언펫 데이터에서 출발한
                      <br />
                      펫푸드, 너티
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 데이터 → 푸드 연결 도식 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Data → Food</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              검사 데이터가
              <br />
              <span className="text-gradient">푸드 설계로 이어지는 흐름</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-stretch">
            {[
              {
                icon: Database,
                tag: "Step 01",
                title: "아이언펫 모발검사",
                desc: "아이언펫 모발검사에서 확인된 비타민·미네랄·중금속·스트레스 지표 등을 바탕으로 아이의 영양 상태를 데이터로 정리합니다.",
              },
              {
                icon: Sparkles,
                tag: "Step 02",
                title: "결핍·과잉 패턴 분석",
                desc: "수의사·영양 전문가의 알고리즘이 어떤 영양소가 부족하고 어떤 게 과한지 패턴을 도출합니다.",
              },
              {
                icon: Apple,
                tag: "Step 03",
                title: "너티 푸드 설계",
                desc: "분석된 결핍을 메우고 과잉을 줄이는 방향으로 사료·간식의 원재료 비율을 조정합니다.",
              },
            ].map((step, i, arr) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.tag}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative p-5 lg:p-7 rounded-2xl border border-cream/10 bg-cream/[0.02] flex flex-col"
                >
                  {i < arr.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-ppmi-red/20 border border-gold/40 items-center justify-center z-10">
                      <ArrowRight size={14} className="text-gold" />
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${BRAND_COLOR}25`, color: BRAND_COLOR }}
                  >
                    <Icon size={26} />
                  </div>
                  <div className="text-eyebrow text-cream/50 mb-3">{step.tag}</div>
                  <h3 className="text-2xl font-display text-cream mb-3">{step.title}</h3>
                  <p className="text-cream/70 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-cream/50 text-sm italic max-w-2xl mx-auto leading-relaxed">
              IRONPET insights, NUT:TY recipes — testing signals and diet design in one
              connected flow from sample to bowl.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 제품 특징 4가지 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Product Pillars</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              너티가 지키는
              <br />
              네 가지 약속
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              맛있게 먹어야 의미 있는 영양이 됩니다. 너티는 기호성과 영양, 기능성과
              안전성 — 어느 하나도 양보하지 않습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="group relative p-5 lg:p-7 rounded-2xl bg-cream border border-navy/5 hover:border-navy/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${BRAND_COLOR}1f`,
                        color: BRAND_COLOR,
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="text-eyebrow text-slate-light">{f.code}</span>
                  </div>
                  <div className="text-eyebrow text-slate-light mb-2">{f.titleEn}</div>
                  <h3 className="text-2xl lg:text-3xl text-navy font-display mb-4">
                    {f.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 향후 확장 로드맵 — 타임라인 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Roadmap</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05]">
              너티가 그리는
              <br />
              <span style={{ color: BRAND_COLOR }}>다음 단계</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="hidden md:block absolute left-6 top-6 bottom-6 w-px"
              style={{ background: `${BRAND_COLOR}40` }}
            />

            <div className="space-y-6">
              {roadmap.map((r, i) => (
                <motion.div
                  key={r.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative md:pl-20"
                >
                  <div
                    className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full items-center justify-center font-display text-lg z-10"
                    style={{
                      background: r.active ? BRAND_COLOR : "var(--cream)",
                      color: r.active ? "var(--primary-dark)" : BRAND_COLOR,
                      border: `2px solid ${BRAND_COLOR}`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={`p-5 lg:p-7 rounded-2xl border transition-all ${
                      r.active
                        ? "bg-cream border-navy/15 shadow-sm"
                        : "bg-cream/60 border-navy/5"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-eyebrow"
                        style={{ color: BRAND_COLOR }}
                      >
                        {r.phase}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] text-slate-light uppercase">
                        · {r.status}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl text-navy font-display mb-3">
                      {r.title}
                    </h3>
                    <p className="text-slate leading-relaxed max-w-3xl">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 차별점 강조 — 다크 네이비 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div
          className="absolute -top-40 -right-40 w-[60%] h-[80%] rounded-full blur-3xl opacity-30"
          style={{ background: `${BRAND_COLOR}40` }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7">
              <div className="text-eyebrow text-ppmi-red mb-4">Why NUT:TY</div>
              <p className="text-eyebrow text-cream/70 mb-2 tracking-wide">
                Data-Informed Pet Food Design
              </p>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05] mb-4">
                검사 데이터에서 출발하는 펫푸드
              </h2>
              <p className="text-lg text-cream/75 leading-relaxed max-w-2xl mb-5">
                너티는 아이언펫 검사 흐름에서 확인되는 반려동물의 영양 상태와 생체 데이터
                인사이트를 바탕으로, 더 정밀한 식이 설계를 지향하는 PPMI의 데이터 기반
                펫푸드 브랜드입니다. 일반적인 영양 가이드라인만 따르는 사료와 달리, 검사
                과정에서 정리·통합된 신호를 레시피 방향의 출발점으로 삼습니다.
              </p>
              <Link
                href="/ironpet"
                className="group inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors"
              >
                아이언펫 검사 자세히 보기
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-square rounded-2xl p-10 overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${BRAND_COLOR}, var(--primary-dark) 80%)`,
                }}
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cream/15 blur-3xl" />
                <div className="relative h-full flex flex-col justify-between text-cream">
                  <Star size={40} className="opacity-80" />
                  <div>
                    <div className="text-eyebrow text-cream/70 mb-3">
                      Data-Informed Pet Food Design
                    </div>
                    <p className="text-display text-2xl md:text-3xl font-display mb-4 leading-snug">
                      아이언펫 검사 흐름과 연결되는 데이터 기반 펫푸드
                    </p>
                    <p className="text-cream/85 text-sm leading-relaxed">
                      검사에서 정리된 영양·생체 신호가 식이 설계로 이어지도록, 아이언펫과
                      너티가 한 데이터 루프 안에서 맞물려 돌아갑니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ironpet"
              className="group relative h-64 rounded-2xl overflow-hidden bg-primary-dark text-white p-10 flex flex-col justify-between"
              style={{
                background: `linear-gradient(165deg, #D4794Acc, var(--primary-dark) 60%)`,
              }}
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-30 blur-3xl bg-[#D4794A]" />
              <div className="relative flex items-center justify-between">
                <span className="text-eyebrow text-cream/70">아이언펫</span>
                <span className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-navy group-hover:border-cream transition-all">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="relative">
                <div className="text-display text-3xl lg:text-4xl mb-2">
                  검사로 시작하기
                </div>
                <p className="text-cream/70 text-sm">
                  너티 푸드의 시작점, 아이언펫 모발검사
                </p>
              </div>
            </Link>

            <Link
              href="/ironpet"
              className="group relative h-64 rounded-2xl overflow-hidden bg-primary-dark text-white p-10 flex flex-col justify-between"
              style={{
                background: `linear-gradient(165deg, #D4794Acc, var(--primary-dark) 60%)`,
              }}
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-30 blur-3xl bg-[#D4794A]" />
              <div className="relative flex items-center justify-between">
                <span className="text-eyebrow text-cream/70">Start with Precision Testing</span>
                <span className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-navy group-hover:border-cream transition-all">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="relative flex flex-col gap-3">
                <div className="text-display text-3xl lg:text-4xl mb-1">
                  정밀 검사로 시작하기
                </div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  우리 아이의 영양 상태가 궁금하다면, 모발 한 가닥으로 시작하는 아이언펫 정밀
                  검사부터 만나보세요. 너티는 그 데이터에서 출발합니다.
                </p>
                <span className="inline-flex items-center gap-1 font-medium text-cream group-hover:translate-x-0.5 transition-transform">
                  아이언펫 알아보기 →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
