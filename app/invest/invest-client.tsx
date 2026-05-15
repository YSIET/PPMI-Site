"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function InvestPage() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-cream-warm min-h-[48vh]">
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        <h1 className="text-display text-3xl md:text-4xl text-navy mb-4">
          문의 안내
        </h1>
        <p className="text-xl text-slate leading-snug mb-5">
          현재 공개 IR 자료는 제공하지 않습니다. 제휴·사업 문의는 공식 연락처로 연락해
          주세요.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 text-ppmi-red font-medium hover:underline min-w-0 break-anywhere"
        >
          <Mail size={18} aria-hidden />
          {siteConfig.email}
        </a>
        <p className="mt-6">
          <Link href="/" className="text-[0.9375rem] text-slate-light hover:text-navy">
            ← 홈으로
          </Link>
        </p>
      </div>
    </section>
  );
}
