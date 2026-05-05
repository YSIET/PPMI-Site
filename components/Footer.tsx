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
              {siteConfig.fullName}는 20년 분석 기술과 국내 유일 국제공인시험기관
              인증을 기반으로 사람과 반려동물의 생체 데이터를 직접 생산하고 해석하는
              헬스케어 데이터 기업입니다.
            </p>
            <p className="text-xs text-footer-text-soft/80 mt-3 leading-relaxed">
              검사 · 데이터 · 솔루션
              <br />
              사람과 반려동물을 잇는 헬스케어 데이터 비즈니스
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
              <li>
                <Link
                  href="/careers"
                  className="text-footer-text hover:text-primary-light transition-colors"
                >
                  채용 안내
                </Link>
              </li>
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
