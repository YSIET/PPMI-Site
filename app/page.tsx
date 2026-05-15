import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import BrandShowcase from "@/components/sections/BrandShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BrandShowcase />

      {/* 회사 미션 섹션 */}
      <section className="pt-6 md:pt-8 pb-4 md:pb-5 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <header className="max-w-4xl mb-5 md:mb-6">
            <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              AI 시대,{" "}
              <span className="text-gradient">데이터의 생산자</span>
              가 되는 것
            </h2>
            <p className="mt-2 text-lg text-text leading-snug">
              AI는 결국 데이터의 게임입니다. PPMI는 단순히 AI를 활용하는 회사가
              아니라,{" "}
              <span className="text-ppmi-red font-semibold">
                반려동물 생체 데이터를 통합·해석해 브랜드와 서비스로 잇는
              </span>{" "}
              펫 헬스케어 데이터 기업입니다.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
                className="flex flex-col h-full p-4 md:p-5 rounded-xl bg-primary-soft/30 border border-primary/15"
              >
                <div className="text-text font-semibold mb-1.5 lg:whitespace-nowrap">
                  {item.title}
                </div>
                <div className="text-sm text-text-soft leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
