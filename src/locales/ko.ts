const ko = {
  nav: {
    items: [
      { label: "문제", href: "problem" },
      { label: "해법", href: "solution" },
      { label: "12단계", href: "steps" },
      { label: "비교", href: "comparison" },
      { label: "강의", href: "cta" },
    ],
    menuLabel: "메뉴",
  },

  hero: {
    tag: "AI-Driven Working Backwards",
    headline: "보도자료에서 RFP까지,",
    highlight: "3~4일.",
    subhead: "Amazon Working Backwards + AI 바이브코딩",
    subheadCont: "= 현업이 직접 만드는 시각적 요구사항",
    ctaPrimary: "방법론 알아보기",
    ctaSecondary: "강의 문의하기",
    scrollLabel: "아래로 스크롤",
  },

  problem: {
    tag: "문제 정의",
    headlinePre: "IT 프로젝트의 80%는 ",
    headlineHighlight: "기술이 아닌 요구사항",
    headlinePost: "에서 실패합니다.",
    narratives: [
      "현업은 자기가 원하는 것을 텍스트, 혹여 PPT 정도로밖에 표현하지 못합니다.",
      "그 문서를 기획자가 듣고 → 문서로 만들고 → IT가 해석합니다.\n3단계를 거치면서 원래 의도의 절반은 사라지고, 나머지 절반은 왜곡됩니다.",
      "RFP는 텍스트로 가득 차 있고,\n개발업체마다 이걸 다르게 읽고,\n견적은 2배씩 차이가 나고,\n개발이 끝나면 서로 \"약속이 달랐다\"고 합니다.",
      "요구공학에서 말하는 전형적인 페인포인트들입니다.",
    ],
    distortion: [
      { label: "현업의 말", pct: "100%" },
      { label: "기획자 문서", pct: "60%" },
      { label: "IT 해석", pct: "30%" },
    ],
    distortionNote: "→ 3단계를 거치며 원래 의도의 절반은 사라지고, 나머지 절반은 왜곡됩니다.",
    painPoints: [
      { title: "텍스트 중심 RFP", desc: "업체마다 다르게 해석하는 모호한 문서" },
      { title: "견적 2배 차이", desc: "범위 불명확으로 인한 비용 편차" },
      { title: "3단계 왜곡", desc: "현업→기획자→IT를 거치며 의도 소실" },
      { title: "개발 후 분쟁", desc: "\"약속이 달랐다\" — 반복되는 CR" },
    ],
  },

  solution: {
    tag: "해법",
    headline: "Amazon은 20년 전에 답을 알고 있었습니다.",
    quote: "\"제품을 만들기 전에 보도자료를 먼저 써라.\" — Working Backwards",
    aiIntro: "저는 여기에 AI를 결합했습니다.",
    descTitle: "AI-Driven Working Backwards:",
    descLines: [
      "보도자료에서 시작하여, AI 바이브코딩으로 목업을 만들고,",
      "현업이 직접 체험하고 피드백하는 반복 사이클을 거쳐,",
      "명확한 RFP까지 도달하는 12단계 파이프라인.",
    ],
    pipelineSteps: [
      "보도자료", "KPI", "프롬프트", "Lovable", "GitHub",
      "Claude Code", "데모", "배포", "시연", "반복", "설계서", "RFP",
    ],
    repeatNote: "Step 9~10은 요구사항이 수렴될 때까지 ",
    repeatHighlight: "반복",
    repeatSuffix: "됩니다.",
    repeatEngine: "이 반복 사이클이 방법론의 핵심 엔진입니다.",
    iterateLabel: "반복",
  },

  steps: {
    tag: "12단계 상세",
    headline: "3개 영역으로 보는 방법론",
    areas: [
      {
        key: "A", label: "영역 A", subtitle: "목표 선명화 + 프롬프트 설계",
        steps: [
          { num: 1, name: "보도자료 작성", purpose: "고객가치 정의", tool: "ChatGPT / Claude" },
          { num: 2, name: "KPI 구체화", purpose: "성공 기준 정의", tool: "ChatGPT / Claude" },
          { num: 3, name: "UI 생성 프롬프트 개발", purpose: "시각화 설계도 확보", tool: "ChatGPT + Behance/Dribbble" },
        ],
      },
      {
        key: "B", label: "영역 B", subtitle: "반복적 구체화 — 핵심 엔진",
        steps: [
          { num: 4, name: "Lovable UI 생성", purpose: "화면 가시화", tool: "Lovable" },
          { num: 5, name: "GitHub 푸시·클론", purpose: "코드 확보", tool: "GitHub" },
          { num: 6, name: "소스 정리", purpose: "반복 가능 구조화", tool: "Claude Code" },
          { num: 7, name: "데모 기능 구현", purpose: "실행 가능성 부여", tool: "Codex + Claude Code" },
          { num: 8, name: "Firebase 배포", purpose: "시연 가능 상태", tool: "Firebase" },
          { num: 9, name: "시연 및 피드백", purpose: "요구사항 탐색", tool: "사람 + 데모" },
          { num: 10, name: "반복 수정", purpose: "요구사항 수렴", tool: "Claude Code" },
        ],
      },
      {
        key: "C", label: "영역 C", subtitle: "산출물 확정",
        steps: [
          { num: 11, name: "설계서 작성", purpose: "최종 구조 문서화", tool: "Claude Code + ChatGPT" },
          { num: 12, name: "RFP 작성", purpose: "발주 준비", tool: "ChatGPT / Claude" },
        ],
      },
    ],
  },

  positioning: {
    tag: "핵심 포지셔닝",
    headline: "바이브코딩은 개발 도구만이 아닙니다.",
    quote1: "\"엔터프라이즈 시스템을 처음부터 끝까지 바이브코딩만으로 개발하는 것은 현실적이지 않습니다.",
    quote2Pre: "그러나 현업의 생각을 ",
    quote2Highlight: "'보이게'",
    quote2Mid: " 만들고, 반복적으로 정제하여 명확한 RFP까지 도달하는 데 쓰면 — ",
    quote2Bold: "매우 효율적입니다.",
    quote2End: "\"",
    tagline: "기술은 도구이고, 사람이 중심입니다.",
  },

  comparison: {
    tag: "비교",
    headline: "기존 방식 vs AI-Driven Working Backwards",
    colLabel: "비교 항목",
    colBefore: "기존 방식",
    colAfter: "AI-Driven WB",
    rows: [
      { label: "요구사항 전달", before: "현업→기획자→IT (3단계 왜곡)", after: "현업이 데모를 직접 보고 피드백 (1단계)" },
      { label: "1차 산출물", before: "4~8주", after: "3~4일" },
      { label: "요구사항 정제", before: "문서 검토 회의 (추상적)", after: "데모 시연→피드백→수정 반복 (구체적)" },
      { label: "RFP 형태", before: "텍스트 중심, 범위 모호", after: "데모 URL + 목업 + 설계서 첨부" },
      { label: "견적 편차", before: "업체 간 2배 이상 차이", after: "목업 기반 범위 명확, 편차 최소화" },
      { label: "개발 후 CR", before: "빈번 (\"원했던 게 아닌데\")", after: "최소화 (데모로 사전 합의)" },
      { label: "비용", before: "기획 컨설팅 수천만원", after: "AI 도구 月 수만원 + 내부 인력" },
    ],
  },

  academic: {
    tag: "학술적 근거",
    headline: "IEEE와 학계가 주목하는 방향",
    references: [
      { source: "IEEE Software", author: "Borg, Bjarnason & Hedin (2025)", summary: "바이브코딩을 요구공학 관점의 프로토타이핑 도구로 분석" },
      { source: "Empirical Software Engineering", author: "Bjarnason et al. (2023)", summary: "프로토타이핑 측면 모델(PAM) 5가지 측면 제시" },
      { source: "IET Software", author: "Pacheco & Garcia (2018)", summary: "시나리오+프로토타이핑 결합이 요구사항 결함 예방에 효과적" },
      { source: "The Pragmatic Engineer", author: "구독자 100만+ 매체 (2025)", summary: "바이브코딩은 프로토타이핑에 가장 적합" },
      { source: "Martin Fowler Blog", author: "Martin Fowler (2025)", summary: "바이브코딩의 '좁지만 유용한 활용 사례' 인정" },
    ],
  },

  tools: {
    tag: "실무 도구 스택",
    headline: "파이프라인을 구성하는 도구들",
    items: [
      { role: "기획/사고 정리" },
      { role: "UI 레퍼런스" },
      { role: "UI 생성" },
      { role: "코드 관리" },
      { role: "개발/수정" },
      { role: "배포/시연" },
      { role: "인프라" },
    ],
  },

  cta: {
    tag: "강의 안내",
    headline: "이 방법론을 직접 배워보세요.",
    cards: [
      { title: "1일 워크숍 (8시간)", desc: "하루 만에 보도자료에서 RFP까지 — End-to-End 파이프라인을 직접 체험합니다." },
      { title: "수강 후 가져가는 것", desc: "확정 보도자료 + KPI 정의서, Lovable 목업 + 구조화된 소스 코드, 작동하는 데모 사이트 (Firebase URL), 설계서 + RFP 초안" },
      { title: "대상", desc: "개발자: 바이브코딩을 요구사항 구체화 도구로 활용하고 싶은 분 · 비개발자: 자기 생각을 시각적 목업으로 만들고 싶은 기획/영업/PM · 리더: AI 시대의 IT 조달 프로세스 혁신에 관심 있는 분" },
    ],
    button: "강의 문의하기",
    contactNote: "DM 또는 이메일로 문의해 주세요.",
  },

  footer: {
    tagline: "기술은 도구이고, 사람이 중심입니다.",
    copyright: "© 2026. AI-Driven Working Backwards Methodology.",
  },
} as const;

export type Locale = typeof ko;
export { ko };
