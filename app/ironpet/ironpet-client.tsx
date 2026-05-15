"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  PawPrint,
  Scissors,
  FlaskConical,
  LineChart,
  HeartPulse,
  Clock,
  DollarSign,
  Stethoscope,
  Check,
  X,
} from "lucide-react";

const BRAND_COLOR = "#D4794A";

const IRONPET_DASHBOARD = "https://ironpet.kr/dashboard";
const IRONPET_STORE = "https://www.ironpet.store/";

const painPoints = [
  {
    icon: Stethoscope,
    title: "병원이 너무 무서워요",
    desc: "동물병원만 가면 떨고 숨고 짖는 아이. 검사 자체가 또 다른 스트레스가 됩니다.",
  },
  {
    icon: DollarSign,
    title: "검사 비용이 부담돼요",
    desc: "혈액검사·영상촬영을 정기적으로 받기에는 시간도 비용도 만만치 않습니다.",
  },
  {
    icon: Clock,
    title: "건강 관리, 자꾸 미루게 돼요",
    desc: "지금 당장 아픈 곳이 없으니까 — 그렇게 미루는 사이 신호는 쌓입니다.",
  },
];

const process = [
  {
    num: "01",
    title: "모발 채취",
    titleEn: "Hair Sampling",
    desc: "집에서 보호자가 직접, 통증 없이 모발 샘플을 채취합니다.",
    icon: Scissors,
  },
  {
    num: "02",
    title: "정밀 분석",
    titleEn: "Lab Analysis",
    desc: "KOLAS 인정 관계사 (주)와이에스환경기술연구원에서 수십 가지 지표를 측정합니다.",
    icon: FlaskConical,
  },
  {
    num: "03",
    title: "데이터 해석",
    titleEn: "Interpretation",
    desc: "수의사·영양 전문가가 함께 만든 알고리즘이 결과를 풀어 설명합니다.",
    icon: LineChart,
  },
  {
    num: "04",
    title: "건강 가이드",
    titleEn: "Care Guide",
    desc: "영양 보충부터 식단 변경, 다음 검사 시점까지 구체적 액션을 제시합니다.",
    icon: HeartPulse,
  },
];

const compareBefore = [
  "아플 때만 동물병원 방문",
  "혈액검사·영상검사로 침습적 진단",
  "회당 수십만 원 비용 부담",
  "병원 스트레스로 검사 회피",
  "데이터가 흩어져 추적 어려움",
];

const compareAfter = [
  "정기적 모발검사로 사전 관리",
  "집에서 무통·비침습 샘플 채취",
  "합리적 가격으로 반복 가능",
  "스트레스 없이 정기 점검",
  "내 아이만의 데이터 히스토리 축적",
];

export default function IronpetPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-6 md:pt-24 md:pb-9 relative overflow-hidden bg-cream-warm">
        <div className="absolute inset-0 bg-noise" />
        <div
          className="absolute top-0 right-0 w-[60%] h-[80%] rounded-full blur-3xl opacity-40"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR}50, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[60%] rounded-full blur-3xl opacity-25"
          style={{
            background: `radial-gradient(circle, ${BRAND_COLOR}40, transparent 60%)`,
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-end"
          >
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-navy/15 bg-cream-warm/60 backdrop-blur-sm mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: BRAND_COLOR }}
                />
                <span className="text-eyebrow text-navy">Brand 01 · 반려동물 헬스케어</span>
              </div>

              <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[0.95] mb-2 tracking-tight">
                <span style={{ color: BRAND_COLOR }}>IRON</span>PET
              </h1>

              <p className="text-xl md:text-2xl text-navy mb-2 font-display leading-tight">
                건강한 습관의 완성.
              </p>

              <p className="text-base md:text-lg text-slate leading-snug max-w-2xl">
                말 못 하는 아이의 몸이 보내는 신호를, 데이터로 먼저 듣습니다.
                병원에 가지 않아도, 집에서 모발 한 가닥이면 충분합니다.
              </p>

              <p className="text-sm text-slate-light mt-2 max-w-2xl leading-snug">
                검사 신청과 제품 확인은 아이언펫 공식 채널에서 진행됩니다.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href={IRONPET_DASHBOARD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 shrink-0 min-w-fit px-4 py-2 text-sm bg-ppmi-red text-white rounded-full font-medium hover:bg-ppmi-red-dark transition-colors shadow-md shadow-ppmi-red/15 lg:whitespace-nowrap w-full sm:w-auto"
                >
                  아이언펫 검사 시작하기
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                  />
                </a>
                <a
                  href={IRONPET_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 shrink-0 min-w-fit px-4 py-2 text-sm border-2 border-navy/20 text-navy rounded-full font-medium hover:border-navy hover:bg-navy hover:text-cream transition-all lg:whitespace-nowrap w-full sm:w-auto"
                >
                  아이언펫 스토어 보기
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                  />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 flex justify-end"
            >
              <div
                className="relative w-full max-w-sm aspect-square rounded-2xl p-5 overflow-hidden text-cream"
                style={{
                  background: `linear-gradient(160deg, ${BRAND_COLOR}, #8b3f1e 90%)`,
                }}
              >
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cream/15 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-dark/30 blur-3xl" />
                <div className="relative h-full flex flex-col justify-between">
                  <PawPrint size={40} className="opacity-80" />
                  <div>
                    <div className="text-eyebrow text-cream/70 mb-2">Pet Healthcare</div>
                    <div className="text-display text-2xl md:text-3xl mb-0 leading-tight">
                      비대면, 비침습,
                      <br />
                      반복 가능한 검사
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YouTube 영상 */}
      <section className="pb-8 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 max-w-3xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-2">Watch</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.1]">
              아이언펫이 만드는
              <br />
              <span style={{ color: BRAND_COLOR }}>새로운 펫 헬스케어</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-primary-dark"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/cfofajmybbY"
              title="IRONPET 소개 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* 페인포인트 — 오렌지 톤 배경 */}
      <section
        className="py-8 md:py-10 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${BRAND_COLOR} 0%, #b6612e 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-cream">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-5"
          >
            <div className="text-eyebrow text-cream/70 mb-2">The Problem</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05] mb-3">
              동물병원,
              <br />
              자주 가시나요?
            </h2>
            <p className="text-base md:text-lg text-cream/85 leading-snug max-w-2xl">
              많은 보호자가 이 세 가지 이유로 정기 건강 관리를 미루고 있습니다.
              아이언펫은 이 장벽을 데이터로 풉니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {painPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="p-4 rounded-2xl bg-cream/10 border border-cream/15 backdrop-blur-sm hover:bg-cream/15 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-cream/15 text-cream flex items-center justify-center mb-2">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-display text-cream mb-1.5">{p.title}</h3>
                  <p className="text-cream/80 leading-snug">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 솔루션 헤드라인 + 프로세스 */}
      <section className="py-8 md:py-10 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-5"
          >
            <div className="text-eyebrow text-ppmi-red mb-2">Our Solution</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-3">
              펫 모발검사로
              <br />
              <span style={{ color: BRAND_COLOR }}>비대면 · 저비용</span> 사전 관리
            </h2>
            <p className="text-base md:text-lg text-slate leading-snug">
              집에서 보호자가 직접 채취한 모발 한 가닥. 관계사 시험기관의 측정 결과를 바탕으로
              PPMI가 그 안에 담긴 영양 균형, 중금속 노출, 스트레스 신호를 데이터로 풀어냅니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-4 md:p-5 rounded-2xl bg-cream border border-navy/5"
                >
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary-dark/15" />
                  )}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-2"
                    style={{
                      background: `${BRAND_COLOR}1a`,
                      color: BRAND_COLOR,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div
                    className="text-display text-2xl mb-1"
                    style={{ color: BRAND_COLOR }}
                  >
                    {p.num}
                  </div>
                  <div className="text-eyebrow text-slate-light mb-1">{p.titleEn}</div>
                  <h3 className="text-base text-navy font-semibold mb-1.5 lg:whitespace-nowrap">{p.title}</h3>
                  <p className="text-sm text-slate leading-snug">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After 비교 */}
      <section className="py-8 md:py-10 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div
          className="absolute -top-40 right-0 w-[60%] h-[80%] rounded-full blur-3xl opacity-25"
          style={{ background: `${BRAND_COLOR}50` }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-5"
          >
            <div className="text-eyebrow text-ppmi-red mb-2">Before / After</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              아이언펫이 바꾸는
              <br />
              <span className="text-gradient">보호자의 일상</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="p-4 rounded-2xl border border-cream/10 bg-cream/[0.02]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                  <X size={18} className="text-cream/60" />
                </div>
                <div className="text-eyebrow text-cream/60">Before — 기존 방식</div>
              </div>
              <h3 className="text-xl font-display text-cream mb-3">
                동물병원에만 의존
              </h3>
              <ul className="space-y-3">
                {compareBefore.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-cream/70 text-sm leading-snug"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cream/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-4 rounded-2xl relative overflow-hidden"
              style={{
                background: `linear-gradient(160deg, ${BRAND_COLOR}, var(--primary-dark) 100%)`,
              }}
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cream/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center">
                    <Check size={18} className="text-cream" />
                  </div>
                  <div className="text-eyebrow text-cream/80">After — 아이언펫</div>
                </div>
                <h3 className="text-xl font-display text-cream mb-3">
                  데이터 기반 사전 관리
                </h3>
                <ul className="space-y-3">
                  {compareAfter.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-cream text-sm leading-snug"
                    >
                      <Check size={14} className="mt-1 text-cream shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-10 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl p-5 md:p-6 text-cream"
            style={{
              background: `linear-gradient(135deg, var(--primary-dark) 0%, ${BRAND_COLOR} 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
              <div className="lg:col-span-10 space-y-2">
                <div>
                  <h2 className="text-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">
                    아이언펫 공식 채널에서 시작하세요
                  </h2>
                  <p className="text-cream/85 leading-snug max-w-2xl text-xs md:text-sm">
                    아이언펫 검사 신청과 관련 제품 확인은 공식 채널에서 진행됩니다. 검사
                    데이터가 펫푸드 설계로 이어지는 이야기는 PPMI 사이트의{" "}
                    <Link href="/nutty" className="text-gold hover:text-gold-light underline-offset-4 hover:underline font-medium">
                      너티
                    </Link>
                    페이지에서도 이어집니다.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={IRONPET_DASHBOARD}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 shrink-0 min-w-fit px-3 py-1.5 bg-cream text-navy rounded-full text-xs font-medium hover:bg-gold transition-colors lg:whitespace-nowrap w-full sm:w-auto"
                  >
                    아이언펫 검사 시작하기
                    <ArrowUpRight size={14} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                  <a
                    href={IRONPET_STORE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 shrink-0 min-w-fit px-3 py-1.5 border border-cream/40 text-cream rounded-full text-xs font-medium hover:bg-cream/10 transition-colors lg:whitespace-nowrap w-full sm:w-auto"
                  >
                    아이언펫 스토어 보기
                    <ArrowUpRight size={14} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
