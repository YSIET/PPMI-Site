import type { Metadata, Viewport } from "next";
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "2ARp9jMswdb7fcLYhaHoyksK-C4W_gdd7Qxn-4aeDWU",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFFFF" },
  ],
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