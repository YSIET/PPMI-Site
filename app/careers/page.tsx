"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Rocket,
  Users,
  FlaskConical,
  Database,
  Zap,
  BookOpen,
  Beaker,
  Code2,
  Megaphone,
  Stethoscope,
  Briefcase,
  Coffee,
  Calendar,
  ShieldCheck,
  PawPrint,
  GraduationCap,
  Lightbulb,
  Award,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

const reasons = [
  {
    icon: HeartPulse,
    code: "W/01",
    title: "임팩트",
    titleEn: "Impact",
    desc: "반려동물의 건강에 직접 기여합니다. 코드 한 줄, 분석 한 건이 누군가의 일상을 바꿉니다.",
  },
  {
    icon: Rocket,
    code: "W/02",
    title: "성장",
    titleEn: "Growth",
    desc: "초기 스타트업의 역동성. 큰 결정도 빠르게, 만든 것을 바로 시장에서 검증할 수 있습니다.",
  },
  {
    icon: Users,
    code: "W/03",
    title: "팀",
    titleEn: "Team",
    desc: "MIT, Yale, 연세대 출신과의 협업. 학문적 깊이와 비즈니스 실행력이 한 팀 안에 함께 있습니다.",
  },
  {
    icon: FlaskConical,
    code: "W/04",
    title: "기술",
    titleEn: "Technology",
    desc: "국내 유일 국제공인시험기관 수준의 분석 인프라. 데이터의 출발점을 직접 다루는 환경입니다.",
  },
];

const principles = [
  {
    icon: Database,
    title: "데이터 기반 의사결정",
    titleEn: "Data-Driven",
    desc: "직감이 아닌 데이터로 말합니다. 검사·실험·실험설계 모두 측정 가능한 형태로 정의합니다.",
  },
  {
    icon: Zap,
    title: "빠른 실행",
    titleEn: "Fast Execution",
    desc: "완벽한 계획보다 작동하는 첫 버전. 시장에 빠르게 보내고, 데이터로 다듬어 갑니다.",
  },
  {
    icon: BookOpen,
    title: "학문과 비즈니스의 융합",
    titleEn: "Research × Business",
    desc: "학계의 깊이를 비즈니스 언어로, 비즈니스 가설을 학술적 검증으로 — 양쪽을 자연스럽게 오갑니다.",
  },
];

const positions = [
  {
    code: "P/01",
    title: "분석연구원",
    titleEn: "Analytical Scientist",
    department: "R&D",
    type: "정규직",
    desc: "모발·타액 기반 정밀 분석 프로토콜 설계와 운영. 신규 검사 항목 개발과 기존 라인 고도화.",
    icon: Beaker,
  },
  {
    code: "P/02",
    title: "백엔드 개발자",
    titleEn: "Backend Engineer",
    department: "기술",
    type: "정규직",
    desc: "검사 데이터 파이프라인, 구독·결제 시스템, 사용자 데이터 플랫폼 설계와 구현.",
    icon: Code2,
  },
  {
    code: "P/03",
    title: "마케팅 매니저",
    titleEn: "Marketing Manager",
    department: "마케팅",
    type: "정규직",
    desc: "B2C 브랜드(아이언펫·너티) 마케팅 전략 수립과 채널 운영, 퍼포먼스 캠페인.",
    icon: Megaphone,
  },
  {
    code: "P/04",
    title: "수의사 자문",
    titleEn: "Veterinary Advisor",
    department: "수의",
    type: "파트타임",
    desc: "아이언펫 검사 결과 해석 알고리즘 자문, 너티 푸드 영양 설계 검토, 케이스 리뷰.",
    icon: Stethoscope,
  },
  {
    code: "P/05",
    title: "비즈니스 전략",
    titleEn: "Business Strategy",
    department: "전략",
    type: "정규직",
    desc: "신규 카테고리·해외 진출·파트너십 전략 수립. CFO 직속으로 IR 자료와 사업 계획을 함께.",
    icon: Briefcase,
  },
];

const benefits = [
  { icon: Calendar, label: "유연근무", desc: "코어타임 외 자율 운영" },
  { icon: GraduationCap, label: "학습 지원", desc: "도서·컨퍼런스·온라인 강의" },
  { icon: ShieldCheck, label: "건강검진", desc: "아이언펫·너티 검사 무상 제공" },
  { icon: PawPrint, label: "펫 친화 사무실", desc: "반려동물 동반 출근 가능" },
  { icon: Coffee, label: "스낵·커피 바", desc: "사무실 내 무료 제공" },
  { icon: Award, label: "연구·학술 지원", desc: "논문·세미나 참여 비용" },
  { icon: Lightbulb, label: "사이드 프로젝트", desc: "관심 분야 자율 탐구" },
  { icon: Sparkles, label: "장비 지원", desc: "맥북·모니터·키보드 자유 선택" },
];

const departmentColor: Record<string, string> = {
  "R&D": "var(--gold)",
  "기술": "#7B9EAE",
  "마케팅": "#D4794A",
  "수의": "#7B9EAE",
  "전략": "var(--gold)",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-0 right-0 w-[55%] h-[80%] bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-navy/8 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Careers at PPMI</div>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-navy mb-5 leading-[1.02]">
              함께 만드는
              <br />
              <span className="text-gradient">헬스케어의 미래</span>
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-3xl mb-3">
              검사가 곧 솔루션이 되는 헬스케어를, 같이 만들 사람을 찾습니다. 데이터에
              호기심이 있고, 직접 쌓인 경험을 사랑하는 사람이라면.
            </p>
            <p className="text-base text-slate-light italic">
              Build the future of healthcare with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why PPMI */}
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
            <div className="text-eyebrow text-ppmi-red mb-4">Why PPMI</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              여기서 일해야 하는
              <br />
              네 가지 이유
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="group relative p-5 lg:p-7 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:border-ppmi-red/40 transition-colors overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-ppmi-red/5 blur-3xl group-hover:bg-ppmi-red/15 transition-all" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-ppmi-red/15 text-ppmi-red flex items-center justify-center">
                        <Icon size={26} />
                      </div>
                      <span className="text-eyebrow text-cream/30">{r.code}</span>
                    </div>
                    <div className="text-eyebrow text-ppmi-red mb-2">{r.titleEn}</div>
                    <h3 className="text-2xl lg:text-3xl font-display text-cream mb-4">
                      {r.title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 우리의 일하는 방식 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">How We Work</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              우리의
              <br />
              일하는 방식
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              세 가지 원칙이 PPMI의 의사결정과 협업을 관통합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="p-5 lg:p-7 rounded-2xl bg-cream border border-navy/5 hover:border-ppmi-red/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <div className="text-eyebrow text-slate-light mb-2">{p.titleEn}</div>
                  <h3 className="text-lg text-navy font-semibold mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 오픈 포지션 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          >
            <div className="max-w-2xl">
              <div className="text-eyebrow text-ppmi-red mb-4">Open Positions</div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
                지금 채용 중인
                <br />
                포지션
              </h2>
              <p className="text-lg text-slate leading-relaxed">
                지원 자격에 일부만 해당되더라도 일단 보내주세요. 가능성 있는 분이라면
                기꺼이 만나뵙고 싶습니다.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy/20 text-navy rounded-full font-medium hover:border-navy hover:bg-primary-dark hover:text-cream transition-all whitespace-nowrap self-start md:self-auto"
            >
              일반 지원 메일
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>

          <div className="space-y-4">
            {positions.map((p, i) => {
              const Icon = p.icon;
              const accent = departmentColor[p.department] ?? "var(--gold)";
              return (
                <motion.a
                  key={p.code}
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    `[지원] ${p.title} (${p.titleEn})`
                  )}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group block p-6 lg:p-8 rounded-2xl bg-cream border border-navy/5 hover:border-navy/30 hover:bg-cream-warm transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-1 flex lg:justify-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${accent}1f`,
                          color: accent,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-2 text-eyebrow text-slate-light mb-2">
                        <span>{p.code}</span>
                        <span>·</span>
                        <span style={{ color: accent }}>{p.department}</span>
                      </div>
                      <div className="text-2xl text-navy font-display leading-tight">
                        {p.title}
                      </div>
                      <div className="text-sm text-slate-light italic mt-1">
                        {p.titleEn}
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4">
                      <span className="text-xs px-3 py-1.5 rounded-full bg-primary-dark/5 text-navy/80 border border-navy/10">
                        {p.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-navy font-medium group-hover:text-ppmi-red transition-colors whitespace-nowrap">
                        지원하기
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 복지·문화 그리드 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -top-40 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-gold/12 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Benefits & Culture</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              일하기 좋은
              <br />
              조건들
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-6 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:border-ppmi-red/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-ppmi-red/15 text-ppmi-red flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <div className="text-cream font-medium mb-1">{b.label}</div>
                  <div className="text-cream/50 text-xs leading-relaxed">{b.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-dark text-white p-10 lg:p-16"
          >
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-ppmi-red/15 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="text-eyebrow text-ppmi-red mb-4">Apply Now</div>
                <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1] mb-4">
                  데이터로 헬스케어를
                  <br />
                  바꾸는 일에 합류하세요
                </h2>
                <p className="text-cream/75 leading-relaxed max-w-xl">
                  딱 맞는 포지션이 없어도 괜찮습니다. 우리가 함께 만들 수 있는 일이
                  무엇일지, 먼저 이야기 나눠봅시다.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    "[PPMI] 채용 문의"
                  )}`}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-ppmi-red text-white rounded-full font-medium hover:bg-ppmi-red-dark transition-all"
                >
                  지원 메일 보내기
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-cream/30 text-cream rounded-full font-medium hover:border-cream hover:bg-cream hover:text-navy transition-all"
                >
                  회사 더 알아보기
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
