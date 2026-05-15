import type { Metadata } from "next";
import InvestPage from "./invest-client";

export const metadata: Metadata = {
  title: "문의 안내 | PPMI",
  description:
    "공개 IR 자료는 제공하지 않습니다. 제휴·사업 문의는 공식 연락처로 연락해 주세요.",
  alternates: {
    canonical: "/invest",
  },
};

export default InvestPage;
