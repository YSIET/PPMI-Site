"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Beaker,
  Layers,
  Rocket,
  Globe,
  Database,
  Send,
  TrendingUp,
} from "lucide-react";
import { team, siteConfig } from "@/lib/data";

const marketStats = [
  {
    value: "6조원+",
    label: "국내 반려동물 시장 규모",
    sub: "2026년 추정 · 펫 헬스케어 포함",
    en: "Korea Pet Market (2026E)",
  },
  {
    value: "~25%",
    label: "글로벌 헬스케어 데이터 시장 CAGR",
    sub: "AI · 정밀의료 · 디지털 헬스 통합 성장률",
    en: "Global Healthcare Data CAGR",
  },
  {
    value: "2조원",
    label: "한국 펫푸드 시장 규모",
    sub: "프리미엄·기능성 라인 가파른 성장세",
    en: "Korea Pet Food Market",
  },
];

const advantages = [
  {
    icon: Award,
    code: "M/01",
    title: "국내 유일 국제공인시험기관",
    titleEn: "KOLAS Certified",
    desc: "분석 스코프 기준 국내 유일. 정부 인증 분석력으로 데이터의 신뢰도를 보증합니다.",
  },
  {
    icon: Beaker,
    code: "M/02",
    title: "20년 분석 기술 축적",
    titleEn: "20 Years of Expertise",
    desc: "단기간 복제 불가능한 분석 노하우와 데이터베이스. 진입장벽이자 운영 자산입니다.",
  },
  {
    icon: Layers,
    code: "M/03",
    title: "검사 → 데이터 → 솔루션 수직통합",
    titleEn: "Vertical Integration",
    desc: "검사 매출 + 구독 매출 + 푸드 매출. 한 사용자가 여러 매출 라인에서 LTV를 만들어냅니다.",
  },
];

const businessLines = [
  {
    code: "Rev/01",
    title: "검사 수익",
    titleEn: "Testing Revenue",
    items: [
      "큐모발 뉴트리션 / 중금속",
      "큐타액 호르몬",
      "아이언펫 펫 모발검사",
    ],
  },
  {
    code: "Rev/02",
    title: "구독 수익",
    titleEn: "Subscription Revenue",
    items: [
      "검사 → 처방 자동 업데이트",
      "월 단위 LTV 누적",
    ],
  },
  {
    code: "Rev/03",
    title: "푸드 매출",
    titleEn: "Food Revenue",
    items: [
      "너티 기능성 펫푸드",
      "데이터 기반 시즈널 라인업",
      "B2C 직판 + 채널 확장",
    ],
  },
];

const growth = [
  {
    phase: "NOW",
    title: "2개 브랜드 안착",
    desc: "아이언펫 · 너티 — 검사부터 솔루션까지 수직통합 구조의 시장 검증.",
    color: "var(--gold)",
  },
  {
    phase: "NEXT",
    title: "해외 진출",
    desc: "검사 인프라와 분석 데이터를 자산화하여 일본·동남아 펫 헬스케어 시장으로 확장.",
    color: "#7B9EAE",
  },
  {
    phase: "FUTURE",
    title: "헬스케어 데이터 플랫폼",
    desc: "반려동물의 생체 데이터를 잇는 통합 플랫폼. AI 시대의 인프라 레이어.",
    color: "#D4794A",
  },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-cream-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-0 right-0 w-[55%] h-[80%] bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-navy/8 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Investor Relations</div>
            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl text-navy mb-5 leading-[1.02]">
              투자자 IR
              <br />
              <span className="text-gradient">Investor Relations</span>
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-3xl mb-4">
              초기 스타트업의 역동성과 폭발적 성장 가능성. 검사·데이터·솔루션을 한 회사
              안에서 완결하는, 한국 헬스케어의 새로운 카테고리를 만듭니다.
            </p>
            <p className="text-base text-slate-light italic">
              The dynamism of an early-stage startup, with the depth of a 20-year lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 시장 기회 — 대형 숫자 */}
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
            <div className="text-eyebrow text-ppmi-red mb-4">Market Opportunity</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              시장은 이미
              <br />
              <span className="text-gradient">달려가고 있습니다</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="px-2 lg:px-8 py-10 border-l border-cream/10 first:border-l-0 md:border-l"
              >
                <div className="text-display text-6xl lg:text-5xl md:text-6xl text-gradient mb-4 leading-none">
                  {stat.value}
                </div>
                <div className="text-cream font-medium text-lg mb-2">{stat.label}</div>
                <div className="text-cream/50 text-sm leading-relaxed mb-3">
                  {stat.sub}
                </div>
                <div className="text-cream/30 text-xs tracking-wider uppercase">
                  {stat.en}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 경쟁 우위 4가지 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Competitive Moat</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              경쟁사가 따라올 수 없는
              <br />
              세 가지 진입장벽
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              자본만으로는 만들 수 없는, 시간과 인증으로만 쌓이는 자산을 보유합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="group relative p-5 lg:p-7 rounded-2xl bg-primary-dark text-white overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-ppmi-red/10 blur-3xl group-hover:bg-ppmi-red/20 transition-all" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-xl bg-ppmi-red/15 text-ppmi-red flex items-center justify-center">
                        <Icon size={26} />
                      </div>
                      <span className="text-eyebrow text-cream/40">{a.code}</span>
                    </div>
                    <div className="text-eyebrow text-ppmi-red mb-2">{a.titleEn}</div>
                    <h3 className="text-2xl lg:text-3xl font-display text-cream mb-4">
                      {a.title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 비즈니스 모델 다이어그램 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Business Model</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              하나의 사용자,
              <br />
              <span className="text-gradient">세 갈래 매출</span>
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              검사로 만난 한 명의 사용자가 구독과 푸드까지 이어지는 다층 매출 구조.
              한 회사 안에서 LTV가 누적됩니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {businessLines.map((line, i) => (
              <motion.div
                key={line.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-5 lg:p-7 rounded-2xl bg-cream border border-navy/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ppmi-red/15 text-ppmi-red flex items-center justify-center">
                    <TrendingUp size={22} />
                  </div>
                  <span className="text-eyebrow text-slate-light">{line.code}</span>
                </div>
                <div className="text-eyebrow text-slate-light mb-2">{line.titleEn}</div>
                <h3 className="text-2xl text-navy font-display mb-5">{line.title}</h3>
                <ul className="space-y-3 pt-5 border-t border-navy/5">
                  {line.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-navy/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-dark text-white p-8 lg:p-12"
          >
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:justify-center">
                <div className="w-20 h-20 rounded-2xl bg-ppmi-red/15 border border-ppmi-red/30 flex items-center justify-center text-ppmi-red">
                  <Database size={32} />
                </div>
              </div>
              <div className="lg:col-span-9">
                <div className="text-eyebrow text-ppmi-red mb-3">The Compounding Loop</div>
                <p className="text-lg text-cream leading-snug font-display">
                  검사가 데이터를 만들고, 데이터가 솔루션을 만들고,
                  <br />
                  솔루션이 다시 검사로 사용자를 끌어옵니다.
                </p>
                <p className="mt-3 text-cream/60 italic text-sm">
                  Testing → Data → Solutions → back to Testing. Every loop strengthens
                  the moat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 성장 전략 3단계 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -top-40 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Growth Strategy</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05]">
              3단계 성장 로드맵
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {growth.map((g, i) => {
              const icons = [Rocket, Globe, Database];
              const Icon = icons[i];
              return (
                <motion.div
                  key={g.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative p-5 lg:p-7 rounded-2xl border border-cream/10 bg-cream/[0.02] hover:border-cream/25 transition-colors"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `${g.color}20`,
                      color: g.color,
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <div className="text-eyebrow mb-3" style={{ color: g.color }}>
                    {g.phase}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display text-cream mb-4">
                    {g.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">{g.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 팀 신뢰성 */}
      <section className="py-16 md:py-20 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Leadership</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
              팀이 곧 신뢰입니다
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              MIT, Yale, 연세대 — 학문과 비즈니스 양쪽에서 검증된 리더십이 PPMI를 이끕니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-cream border border-navy/5 hover:border-ppmi-red/30 transition-colors"
              >
                <div className="text-eyebrow text-ppmi-red mb-3">0{i + 1}</div>
                <div className="text-xl font-display text-navy mb-1">{member.name}</div>
                <div className="text-xs text-slate-light italic mb-4">
                  {member.nameEn}
                </div>
                <div className="text-sm font-medium text-navy mb-2">
                  {member.role.ko}
                </div>
                <p className="text-xs text-slate leading-relaxed pt-3 border-t border-navy/5">
                  {member.credentials.ko}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 투자 문의 폼 — 다크 네이비 */}
      <section className="py-16 md:py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -top-40 left-0 w-[60%] h-[80%] bg-gradient-to-br from-gold/15 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="text-eyebrow text-ppmi-red mb-4">Contact IR</div>
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.05] mb-4">
              투자 문의
            </h2>
            <p className="text-lg text-cream/70 leading-relaxed">
              초기 단계의 헬스케어 데이터 카테고리 리더와 함께할 파트너를 찾고 있습니다.
              아래 양식을 통해 연락 주시면, IR 자료와 함께 빠르게 회신드립니다.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="p-8 lg:p-12 rounded-2xl border border-cream/15 bg-cream/[0.03] backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label
                  htmlFor="ir-name"
                  className="text-eyebrow text-cream/60 mb-3 block"
                >
                  이름 / Name
                </label>
                <input
                  id="ir-name"
                  type="text"
                  placeholder="홍길동"
                  className="w-full bg-transparent border-b border-cream/20 focus:border-gold focus:outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="ir-company"
                  className="text-eyebrow text-cream/60 mb-3 block"
                >
                  소속 / Company
                </label>
                <input
                  id="ir-company"
                  type="text"
                  placeholder="Acme Capital"
                  className="w-full bg-transparent border-b border-cream/20 focus:border-gold focus:outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="ir-email"
                className="text-eyebrow text-cream/60 mb-3 block"
              >
                이메일 / Email
              </label>
              <input
                id="ir-email"
                type="email"
                placeholder="you@firm.com"
                className="w-full bg-transparent border-b border-cream/20 focus:border-gold focus:outline-none py-3 text-cream placeholder:text-cream/30 transition-colors"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="ir-message"
                className="text-eyebrow text-cream/60 mb-3 block"
              >
                메시지 / Message
              </label>
              <textarea
                id="ir-message"
                rows={4}
                placeholder="관심 단계, 검토 펀드 사이즈, 미팅 가능 일정 등을 적어주세요."
                className="w-full bg-transparent border-b border-cream/20 focus:border-gold focus:outline-none py-3 text-cream placeholder:text-cream/30 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-cream/40">
                전송 대신 직접 메일을 선호하시면{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ppmi-red hover:text-ppmi-red-dark underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-ppmi-red text-white rounded-full font-medium hover:bg-ppmi-red-dark transition-all"
              >
                IR 문의 보내기
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="py-14 md:py-16 bg-cream-warm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/about"
              className="group p-5 lg:p-7 rounded-2xl bg-cream border border-navy/5 hover:border-navy/20 transition-all"
            >
              <div className="text-eyebrow text-ppmi-red mb-3">About PPMI</div>
              <h3 className="text-2xl lg:text-3xl font-display text-navy mb-4">
                회사 소개와 미션
              </h3>
              <span className="inline-flex items-center gap-2 text-navy font-medium group-hover:text-ppmi-red transition-colors">
                자세히 보기
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
            <Link
              href="/careers"
              className="group p-5 lg:p-7 rounded-2xl bg-cream border border-navy/5 hover:border-navy/20 transition-all"
            >
              <div className="text-eyebrow text-ppmi-red mb-3">Join Us</div>
              <h3 className="text-2xl lg:text-3xl font-display text-navy mb-4">
                함께할 동료를 찾습니다
              </h3>
              <span className="inline-flex items-center gap-2 text-navy font-medium group-hover:text-ppmi-red transition-colors">
                채용 페이지
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
