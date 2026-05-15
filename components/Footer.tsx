import Link from "next/link";
import { siteConfig } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 md:py-5">
        <Link href="/" className="flex items-center gap-2 group w-fit">
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
        <p className="mt-2.5 text-xs text-footer-text-soft">
          © 2026 {siteConfig.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
