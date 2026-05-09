import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PPMI · 데이터의 생산자 | 헬스케어 데이터 기업",
  description:
    "PPMI는 KOLAS 인정 관계사의 정밀 분석 데이터를 통합·해석하여 반려동물 헬스케어 솔루션을 제공하는 펫 헬스케어 데이터 기업입니다. 아이언펫과 너티 — 검사가 솔루션이 되는 곳.",
  keywords: [
    "PPMI",
    "피피엠아이",
    "펫 헬스케어",
    "반려동물 모발검사",
    "아이언펫",
    "IRONPET",
    "너티",
    "NUT:TY",
    "펫푸드",
    "반려동물 영양",
    "KOLAS",
  ],
  openGraph: {
    title: "PPMI · 헬스케어 데이터 기업",
    description: "검사가 솔루션이 되는, 반려동물 헬스케어 데이터 기업",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    description: "검사가 솔루션이 되는, 반려동물 헬스케어 데이터 기업",
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
