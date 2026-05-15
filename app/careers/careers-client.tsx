"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-cream-warm min-h-[60vh]">
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        <h1 className="text-display text-3xl md:text-4xl text-navy mb-6">안내</h1>
        <p className="text-lg text-slate leading-relaxed mb-10">
          현재 공개 채용 공고는 제공하지 않습니다. 회사 소개와 브랜드 정보는 아래
          페이지에서 확인하실 수 있습니다.
        </p>
        <nav className="flex flex-col gap-3 text-ppmi-red font-medium">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <Link href="/about" className="hover:underline">
            회사소개
          </Link>
          <Link href="/ironpet" className="hover:underline">
            아이언펫
          </Link>
          <Link href="/nutty" className="hover:underline">
            너티
          </Link>
        </nav>
      </div>
    </section>
  );
}
