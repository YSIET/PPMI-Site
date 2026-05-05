"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Beaker,
  Droplet,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { brands } from "@/lib/data";

const BRAND_COLOR = "#7B9EAE";

const services = [
  {
    code: "S/01",
    name: "큐모발 뉴트리션",
    nameEn: "Q-Hair Nutrition",
    icon: Sparkles,
    desc: "모발 한 가닥에서 비타민·미네랄 23종의 균형을 정밀 분석합니다. 식습관·생활습관이 만들어 낸 영양 상태를 데이터로 확인하세요.",
    points: ["비타민·미네랄 23종", "영양 불균형 진단", "맞춤 영양 가이드"],
  },
  {
    code: "S/02",
    name: "큐모발 중금속",
    nameEn: "Q-Hair Heavy Metals",
    icon: Beaker,
    desc: "혈액으로는 잡히지 않는 장기 누적 중금속을 모발에서 추출합니다. 환경 노출도와 해독 우선순위를 한눈에 확인하세요.",
    points: ["수은·납·카드뮴 등", "장기 누적 데이터", "해독 우선순위 제시"],
  },
  {
    code: "S/03",
    name: "큐타액 호르몬검사",
    nameEn: "Q-Saliva Hormone",
    icon: Droplet,
    desc: "타액 샘플로 코르티솔·DHEA·성호르몬 균형을 측정합니다. 스트레스, 수면, 노화 사이클의 진짜 원인을 데이터로 추적합니다.",
    points: ["스트레스 호르몬", "수면·일주기 리듬", "노화·회복 지표"],
  },
  {
    code: "S/04",
    name: "하루가꿈",
    nameEn: "Haru Ga Kkum",
    icon: Pill,
    desc: "검사 결과 기반으로 정확히 부족한 성분만 담은 맞춤 영양제 구독 서비스. 매달 새로 측정된 균형에 맞춰 처방이 업데이트됩니다.",
    points: ["검사→배합 연계", "월간 구독 모델", "데이터 기반 처방 업데이트"],
  },
];

const principles = [
  {
    num: "01",
    title: "정밀 검사",
    titleEn: "Precise Testing",
    desc: "20년 축적된 분석 기술로, 모발과 타액 한 방울에서 수십 가지 생체 지표를 정확히 측정합니다.",
  },
  {
    num: "02",
    title: "데이터 해석",
    titleEn: "Data Interpretation",
    desc: "단순 수치 나열이 아닌, 임상·영양학 맥락에서 의미를 해석한 리포트를 제공합니다.",
  },
  {
    num: "03",
    title: "맞춤 솔루션",
    titleEn: "Personalized Solutions",
    desc: "검사 결과를 영양·생활 가이드, 그리고 맞춤 구독으로 이어지는 한 흐름의 솔루션으로 완결합니다.",
  },
];

export default function BalanceLabPage() {
  const otherBrands = brands.filter((b) => b.id !== "balancelab");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div
          className="absolute top-0 right-0 w-[55%] h-[80%] rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR}40, transparent 70%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl" />

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
                <span className="text-eyebrow text-navy">Brand 01 · 사람 헬스케어</span>
              </div>

              <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.02] mb-5">
                Balance
                <br />
                <span style={{ color: BRAND_COLOR }}>Lab.</span>
              </h1>

              <p
                className="text-2xl md:text-3xl mb-4 italic font-light"
                style={{ color: BRAND_COLOR }}
              >
                Find your balance.
              </p>

              <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
                내 몸의 균형을 찾는 가장 과학적인 방법. 정밀 검사부터 맞춤 영양제
                구독까지, 검사 결과가 곧 솔루션이 되는 헬스케어 경험을 만듭니다.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full max-w-sm aspect-square rounded-2xl p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${BRAND_COLOR} 0%, var(--primary-dark) 90%)`,
                }}
              >
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cream/10 blur-3xl" />
                <div className="relative h-full flex flex-col justify-between text-cream">
                  <div className="text-eyebrow text-cream/70">Human Healthcare</div>
                  <div>
                    <div className="text-display text-5xl mb-2">23+</div>
                    <div className="text-cream/80 text-sm">
                      모발·타액으로 측정하는 생체 지표
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 핵심 가치 3단계 — 다크 네이비 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">How We Work</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1]">
              검사가 곧
              <br />
              <span className="text-gradient">솔루션이 되는 흐름</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative p-5 lg:p-7 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:border-ppmi-red/40 transition-colors"
              >
                <div className="text-display text-6xl mb-5" style={{ color: BRAND_COLOR }}>
                  {p.num}
                </div>
                <div className="text-eyebrow text-cream/50 mb-2">{p.titleEn}</div>
                <h3 className="text-2xl lg:text-3xl text-cream font-display mb-4">
                  {p.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 4가지 그리드 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Services</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              네 가지 검사,
              <br />
              하나의 균형
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              사람의 몸에서 측정할 수 있는 데이터를 모두 모아, 영양·해독·호르몬·구독까지
              하나의 라이프스타일 솔루션으로 연결합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.code}
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
                        background: `${BRAND_COLOR}1a`,
                        color: BRAND_COLOR,
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="text-eyebrow text-slate-light">{s.code}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl text-navy font-display mb-2">
                    {s.name}
                  </h3>
                  <p
                    className="text-sm italic mb-5"
                    style={{ color: BRAND_COLOR }}
                  >
                    {s.nameEn}
                  </p>

                  <p className="text-slate leading-relaxed mb-4">{s.desc}</p>

                  <ul className="space-y-2 pt-5 border-t border-navy/5">
                    {s.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-navy/80"
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ background: BRAND_COLOR }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KOLAS 강조 배너 */}
      <section className="py-14 md:py-16 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-dark text-white p-10 lg:p-16"
          >
            <div className="absolute inset-0 bg-noise opacity-40" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-ppmi-red/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl" style={{ background: `${BRAND_COLOR}30` }} />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-2">
                <div className="w-16 h-16 rounded-2xl bg-ppmi-red/15 border border-ppmi-red/30 flex items-center justify-center text-ppmi-red">
                  <ShieldCheck size={28} />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="text-eyebrow text-ppmi-red mb-3">Quality Assurance</div>
                <h3 className="text-display text-3xl lg:text-4xl text-cream leading-snug mb-3">
                  국내 유일 <span className="text-gradient">국제공인시험기관</span>이
                  직접 검사합니다.
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  KOLAS 인증을 받은 PPMI 분석실에서 모발과 타액 샘플을 직접 분석합니다.
                  외주가 아닌 자체 검사이기에, 데이터의 정확도와 일관성을 끝까지 책임집니다.
                </p>
              </div>
              <div className="lg:col-span-3 flex lg:justify-end">
                <div className="text-display text-5xl lg:text-6xl text-gradient whitespace-nowrap">
                  KOLAS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 다른 브랜드 카드 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Other Brands</div>
            <h2 className="text-display text-3xl md:text-4xl text-navy">
              PPMI의 다른 브랜드 보기
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherBrands.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={b.href}
                  className="group block relative h-72 rounded-2xl overflow-hidden bg-primary-dark text-white p-5 lg:p-7"
                  style={{
                    background: `linear-gradient(165deg, ${b.color}cc, var(--primary-dark) 60%)`,
                  }}
                >
                  <div
                    className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-30 blur-3xl"
                    style={{ background: b.color }}
                  />
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-cream/60">
                        {b.market.ko}
                      </span>
                      <span className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-navy group-hover:border-cream transition-all">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-eyebrow mb-2"
                        style={{ color: b.color }}
                      >
                        Brand · {b.nameKo}
                      </div>
                      <div className="text-display text-3xl lg:text-4xl mb-2 group-hover:translate-x-1 transition-transform">
                        {b.name}
                      </div>
                      <p className="text-cream/70 text-sm">{b.tagline.ko}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 CTA — 다크 네이비 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div
          className="absolute top-0 right-0 w-[60%] h-full"
          style={{
            background: `linear-gradient(to left, ${BRAND_COLOR}25, transparent)`,
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-eyebrow text-ppmi-red mb-4">Get Started</div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1]">
                내 몸의 균형,
                <br />
                <span className="text-gradient">데이터로 확인하세요</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-ppmi-red text-white rounded-full font-medium hover:bg-ppmi-red-dark transition-all"
              >
                회사 소개
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/invest"
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-cream/30 text-cream rounded-full font-medium hover:border-cream hover:bg-cream hover:text-navy transition-all"
              >
                투자자 IR
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
