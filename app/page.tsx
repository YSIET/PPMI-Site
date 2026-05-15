import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import BrandShowcase from "@/components/sections/BrandShowcase";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandShowcase />

      {/* 회사 미션 섹션 */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="text-eyebrow text-ppmi-red mb-3">Why PPMI</div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
                AI 시대,
                <br />
                <span className="text-gradient">데이터의 생산자</span>
                <br />
                가 되는 것
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg text-text leading-relaxed">
                AI는 결국 데이터의 게임입니다. PPMI는 단순히 AI를 활용하는 회사가
                아닌,{" "}
                <span className="text-ppmi-red font-semibold">
                  반려동물 생체 데이터를 통합·해석해 브랜드와 서비스로 잇는
                </span>{" "}
                펫 헬스케어 데이터 기업입니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "20년 분석 데이터 자산",
                    desc: "관계사의 KOLAS 인정 분석 인프라에 20년간 축적된 데이터를 PPMI가 펫 헬스케어 자산으로 전환합니다.",
                  },
                  {
                    title: "KOLAS 인정 분석 파트너십",
                    desc: "관계사 (주)와이에스환경기술연구원(인정번호 제364호)의 KOLAS 인정 분석력과 결합합니다.",
                  },
                  {
                    title: "데이터 수직 통합",
                    desc: "분석(관계사) → 데이터 통합·해석(PPMI) → 솔루션(아이언펫·너티)까지, 한 그룹 안에서 완결되는 가치 사슬.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-primary-soft/30 border border-primary/15"
                  >
                    <div className="text-text font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-text-soft leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors"
                >
                  더 자세히 알아보기
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 — 채용 (Tiffany Blue 액센트) */}
      <section className="py-12 md:py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary-dark/40 to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-[40%] h-[60%] bg-gradient-to-tr from-primary-dark/35 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/careers"
              className="group block relative overflow-hidden rounded-2xl border border-white/25 hover:border-white p-7 lg:p-10 transition-all bg-white/[0.06]"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all" />
              <div className="relative">
                <div className="text-eyebrow text-white/90 mb-3">Join Us</div>
                <h3 className="text-display text-3xl lg:text-4xl mb-3">
                  함께할 동료
                  <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                </h3>
                <p className="text-white/85 leading-relaxed">
                  연세대·MIT·Yale 출신과 함께, 데이터로 헬스케어를 바꿉니다. 우리의
                  여정에 동참할 사람을 찾고 있습니다.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}