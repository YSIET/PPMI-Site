import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PPMI · 데이터의 생산자 | 헬스케어 데이터 기업",
  description:
    "PPMI는 20년 분석 기술을 기반으로 사람과 반려동물의 생체 데이터를 직접 생성하고 해석하는 헬스케어 데이터 기업입니다. 밸런스랩, 아이언펫, 너티 — 검사가 솔루션이 되는 곳.",
  keywords: [
    "PPMI",
    "피피엠아이",
    "헬스케어",
    "밸런스랩",
    "Balance Lab",
    "아이언펫",
    "IRONPET",
    "너티",
    "NUT:TY",
    "모발검사",
    "반려동물 헬스케어",
    "국제공인시험기관",
  ],
  openGraph: {
    title: "PPMI · 헬스케어 데이터 기업",
    description: "검사가 솔루션이 되는, 사람과 반려동물의 데이터 기업",
    type: "website",
    locale: "ko_KR",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}