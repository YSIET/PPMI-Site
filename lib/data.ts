// 사이트 전체에서 사용하는 콘텐츠 데이터
// 한국어/영어 병행

export const siteConfig = {
    name: "PPMI",
    fullName: "주식회사 피피엠아이",
    fullNameEn: "PPMI Inc.",
    tagline: {
      ko: "데이터의 생산자",
      en: "The Data Creator",
    },
    description: {
      ko: "20년 분석 기술 기반 헬스케어 데이터 기업",
      en: "Healthcare Data Company Based on 20 Years of Analytical Technology",
    },
    url: "https://ppmi.kr",
    email: "contact@ppmi.kr",
  };
  
  export const heroContent = {
    ko: {
      eyebrow: "AI 시대, 데이터의 생산자",
      headline: "검사가 솔루션이 되는\n펫 헬스케어 데이터 기업",
      subheadline:
        "PPMI는 반려동물 생체 데이터를 통합·해석하여 아이언펫과 너티로 잇는 펫 헬스케어 데이터 기업입니다. 정밀 분석은 KOLAS 인정 관계사 (주)와이에스환경기술연구원이 수행합니다.",
    },
    en: {
      eyebrow: "In the Age of AI, We Create the Data",
      headline: "Where Testing\nBecomes Solutions",
      subheadline:
        "PPMI unifies and interprets pet health data for IRONPET and NUT:TY—built on 20 years of analytical partnership with our KOLAS-accredited affiliate lab.",
    },
  };
  
  export const stats = [
    {
      value: 20,
      suffix: "+",
      label: { ko: "20+ 년 분석 데이터 자산", en: "20+ Years of Lab Data Backing" },
    },
    {
      value: 1,
      suffix: "",
      label: { ko: "1 KOLAS 인정 관계사", en: "KOLAS-Accredited Partner" },
    },
    { value: 2, suffix: "", label: { ko: "헬스케어 브랜드", en: "Healthcare Brands" } },
  ];
  
  export const brands = [
    {
      id: "ironpet",
      name: "IRONPET",
      nameKo: "아이언펫",
      tagline: { ko: "건강한 습관의 완성", en: "Completing Healthy Habits" },
      description: {
        ko: "말 못 하는 반려동물이 아프기 전에 관리하는 헬스케어 서비스. 펫 모발검사로 영양 불균형을 조기 발견합니다.",
        en: "Healthcare for pets who can't speak — detect nutritional imbalances early through hair analysis.",
      },
      market: { ko: "반려동물 헬스케어", en: "Pet Healthcare" },
      color: "#D4794A",
      href: "/ironpet",
    },
    {
      id: "nutty",
      name: "NUT:TY",
      nameKo: "너티",
      tagline: { ko: "건강한 한 입, 맛있는 습관", en: "Healthy Bite, Tasty Habit" },
      description: {
        ko: "아이언펫 검사 흐름에서 확인되는 반려동물 영양 상태와 생체 데이터 인사이트를 바탕으로, 더 정밀한 식이 설계를 지향하는 PPMI의 데이터 기반 펫푸드 브랜드.",
        en: "PPMI's data-informed pet food brand, shaping diet design from nutrition and biological insights tied to the IRONPET testing flow.",
      },
      market: { ko: "반려동물 펫푸드", en: "Pet Food" },
      color: "#C9A84C",
      href: "/nutty",
    },
  ];
  
  export const team = [
    {
      name: "이태규",
      nameEn: "Tae-Kyu Lee",
      role: { ko: "대표이사 / CEO", en: "CEO" },
      credentials: { ko: "MIT 석사 · 공학박사 · 연세대 교수", en: "MIT M.S. · Ph.D. · Professor, Yonsei University" },
    },
    {
      name: "김승현",
      nameEn: "Seung-Hyun Kim",
      role: { ko: "최고재무책임자 / CFO", en: "CFO" },
      credentials: { ko: "Yale MBA · BCG 출신", en: "Yale MBA · Ex-BCG" },
    },
    {
      name: "엄유진",
      nameEn: "Yu-Jin Eom",
      role: { ko: "최고기술책임자 / CTO", en: "CTO" },
      credentials: { ko: "연세대 박사 · 분석기술 전문", en: "Ph.D., Yonsei University · Analytical Expert" },
    },
    {
      name: "조영광",
      nameEn: "Young-Kwang Cho",
      role: { ko: "수의 책임자 / CVO", en: "Chief Veterinary Officer" },
      credentials: { ko: "수의사 · 반려동물 건강 전문", en: "DVM · Pet Health Specialist" },
    },
  ];
  
  export const navLinks = [
    { href: "/", label: { ko: "홈", en: "Home" } },
    { href: "/about", label: { ko: "회사소개", en: "About" } },
    { href: "/ironpet", label: { ko: "아이언펫", en: "IRONPET" } },
    { href: "/nutty", label: { ko: "너티", en: "NUT:TY" } },
  ];