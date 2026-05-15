import type { Metadata } from "next";
import CareersPage from "./careers-client";

export const metadata: Metadata = {
  title: "안내 | PPMI",
  description:
    "공개 채용 공고는 제공하지 않습니다. 회사와 브랜드 정보는 홈페이지에서 확인할 수 있습니다.",
  alternates: {
    canonical: "/careers",
  },
};

export default CareersPage;
