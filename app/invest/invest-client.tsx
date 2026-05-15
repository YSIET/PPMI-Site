"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function InvestPage() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-cream-warm min-h-[60vh]">
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        <h1 className="text-display text-3xl md:text-4xl text-navy mb-6">
          문의 안내
        </h1>
        <p className="text-lg text-slate leading-relaxed mb-8">
          현재 공개 IR 자료는 제공하지 않습니다. 제휴·사업 문의는 공식 연락처로 연락해
          주세요.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 text-ppmi-red font-medium hover:underline"
        >
          <Mail size={18} aria-hidden />
          {siteConfig.email}
        </a>
        <p className="mt-10">
          <Link href="/" className="text-sm text-slate-light hover:text-navy">
            ← 홈으로
          </Link>
        </p>
      </div>
    </section>
  );
}
