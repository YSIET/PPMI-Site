import Link from "next/link";
import { siteConfig } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-6 pb-5 md:pt-8 md:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <div className="md:col-span-7 lg:col-span-8">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <Logo size={36} showText={false} />
              <div className="leading-tight">
                <div className="text-footer-text font-black text-base tracking-tight group-hover:text-primary-light transition-colors">
                  PPMI
                </div>
                <div className="text-[10px] text-footer-text-soft tracking-wider">
                  Precision &amp; Personalized Medicine Inc.
                </div>
              </div>
            </Link>
            <p className="text-sm leading-snug text-footer-text-soft max-w-xl">
              주식회사 피피엠아이(PPMI)는 KOLAS 인정 관계사의 분석 데이터를 기반으로
              반려동물 헬스케어 솔루션을 만드는 펫 헬스케어 데이터 기업입니다.
            </p>
          </div>

          <div className="md:col-span-5 lg:col-span-4 md:text-right">
            <h4 className="text-eyebrow text-primary-light mb-2 md:text-right whitespace-nowrap">
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-footer-text hover:text-primary-light transition-colors inline-block"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-footer-border text-xs text-footer-text-soft">
          © 2026 {siteConfig.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
