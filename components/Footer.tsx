import Link from "next/link";
import { siteConfig, navLinks, brands } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
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
            <p className="text-sm leading-relaxed text-footer-text-soft max-w-md">
              주식회사 피피엠아이(PPMI)는 KOLAS 인정 관계사의 분석 데이터를 기반으로 반려동물 헬스케어 솔루션을 만드는 펫 헬스케어 데이터 기업입니다.
            </p>
            <p className="text-xs text-footer-text-soft/80 mt-3 leading-relaxed">
              검사 · 데이터 · 솔루션
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-eyebrow text-primary-light mb-3">Brands</h4>
            <ul className="space-y-2">
              {brands.map((b) => (
                <li key={b.id}>
                  <Link
                    href={b.href}
                    className="text-sm text-footer-text hover:text-primary-light transition-colors flex items-baseline gap-2"
                  >
                    <span>{b.name}</span>
                    <span className="text-footer-text-soft text-xs">· {b.nameKo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-eyebrow text-primary-light mb-3">Company</h4>
            <ul className="space-y-2">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-text hover:text-primary-light transition-colors"
                  >
                    {link.label.ko}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-eyebrow text-primary-light mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-footer-text hover:text-primary-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-footer-text-soft">서울특별시</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-footer-border flex flex-col md:flex-row justify-between gap-4 text-xs text-footer-text-soft">
          <div>© 2026 {siteConfig.fullName}. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span className="text-primary-light">PPMI Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
