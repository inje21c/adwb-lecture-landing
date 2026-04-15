const ko = {
  nav: {
    items: [
      { label: "문제", href: "problem" },
      { label: "해법", href: "solution" },
      { label: "상세 단계", href: "steps" },
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
      "명확한 RFP까지 도달하는 6단계 파이프라인.",
    ],
    phases: [
      { phase: 1, title: "보도자료 작성", tool: "ChatGPT · Claude · Gemini", tag: "1~2일 소요" },
      { phase: 2, title: "KPI 역산", tool: "AI 대화형 구체화", tag: "기능 목록화" },
      { phase: 3, title: "프롬프트 설계", tool: "레퍼런스 조합 (역설계)", tag: "UI/UX 요구사항" },
      { phase: 4, title: "목업 제작", tool: "Lovable · Stitch · Figma", tag: "단계별/컴포넌트" },
      { phase: 5, title: "설계서 생성", tool: "Codex · Claude Code", tag: "기능/화면 설계서" },
      { phase: 6, title: "RFP 작성", tool: "AI 문서 자동화", tag: "확장 발주 방식" },
    ],
    summary: "총 소요 기간: 업무 1인 기준 3~4 영업일 (기존 대비 80~90% 단축)",
  },

  workingBackwards: {
    tag: "Working Backwards란?",
    headline: "Amazon이 개발한 제품 개발 철학",
    origin: "2004년 아마존 내부에서 시작된 방법론 — 제품을 만들기 전에 먼저 고객의 관점에서 생각합니다.",
    description:
      "Working Backwards는 '완성된 제품이 출시되는 날'을 상상하고, 그 시점의 보도자료를 먼저 작성하는 것에서 시작합니다. 이 과정이 팀이 무엇을 만들어야 하는지 명확히 정렬하게 합니다.",
    corePrinciple: "결과(보도자료)를 먼저 정의하고, 거꾸로 거슬러 올라가 개발을 시작합니다.",
    steps: [
      {
        num: "01",
        name: "보도자료 작성",
        description:
          "출시 당일 고객이 읽을 보도자료를 먼저 씁니다. 제품의 가치와 고객 이익을 한 페이지로 압축합니다.",
      },
      {
        num: "02",
        name: "FAQ 작성",
        description:
          "고객과 내부 이해관계자가 물을 모든 질문에 미리 답합니다. 모호한 가정을 제거합니다.",
      },
      {
        num: "03",
        name: "사용자 경험 시각화",
        description:
          "실제 고객이 제품을 사용하는 여정을 구체적으로 그립니다. 이 시점부터 개발이 시작됩니다.",
      },
    ],
    connection:
      "기존 Working Backwards는 텍스트 문서(보도자료 + FAQ)로 수렴합니다. ADWB는 여기서 한 발 더 나아가 — AI 바이브코딩으로 실제 동작하는 데모를 만들어 팀을 시각적으로 정렬합니다.",
  },

  steps: {
    tag: "상세 단계",
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

  methodologyContext: {
    tag: "방법론적 맥락",
    headline: "소프트웨어공학이 이미 알고 있던 것",
    intro:
      "Evolutionary Prototyping, Throwaway Prototyping, Participatory Design — SE에는 이미 유사한 개념들이 있습니다. ADWB는 새로운 발명이 아닙니다. 그러나 세 가지 차원에서 분명하게 구별됩니다.",
    labelTraditional: "기존",
    labelAdwb: "ADWB",
    differentiators: [
      {
        dimension: "시작점",
        traditional: "요구사항이 확정된 이후 시작. 개발 착수의 도구.",
        adwb: "요구사항이 없는 상태에서 시작. 비기술 언어(보도자료)로부터 요구사항을 직접 생성.",
      },
      {
        dimension: "실행 주체",
        traditional: "전문 개발자 필요. 진입 비용이 높아 조달 전 단계에 적용하기 어려움.",
        adwb: "비개발자가 AI 도구로 직접 실행. 현업 담당자가 자연어로 접근하여 시각화까지 수행.",
      },
      {
        dimension: "산출물 목적",
        traditional: "프로토타입 → 개발 착수. 내부 팀 정렬이 목적.",
        adwb: "목업 → RFP + 조달. 이해관계자 설득·예산 확보·발주 프로세스에 특화.",
      },
    ],
    honestPositioning:
      "새로운 발명이 아닙니다. 기존 SE 개념을 조달·발주 맥락에 재적용하고, AI가 실행 비용을 낮춘 것입니다. IEEE Software 2025(Borg et al.)가 이미 같은 방향을 가리킵니다. 이것이 오히려 신뢰의 근거입니다.",
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

  contactForm: {
    title: "강의 문의하기",
    description: "아래 정보를 입력해 주시면 빠르게 연락드리겠습니다.",
    nameLabel: "이름",
    namePlaceholder: "홍길동",
    orgLabel: "소속 / 회사",
    orgPlaceholder: "(선택) 회사 또는 소속",
    contactLabel: "연락처 (이메일 또는 전화)",
    contactPlaceholder: "email@example.com 또는 010-0000-0000",
    messageLabel: "문의 내용",
    messagePlaceholder: "워크숍에 대해 궁금한 점을 적어주세요.",
    submitButton: "문의 보내기",
    sendingButton: "전송 중...",
    successMessage: "문의가 접수되었습니다. 빠르게 연락드리겠습니다!",
    fallbackMessage: "이메일 앱이 열립니다. 내용을 확인 후 전송해 주세요.",
  },

  footer: {
    tagline: "기술은 도구이고, 사람이 중심입니다.",
    copyright: "© 2026. AI-Driven Working Backwards Methodology.",
  },
} as const;

type Widen<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends readonly (infer U)[] ? Widen<U>[] :
  T extends object ? { [K in keyof T]: Widen<T[K]> } :
  T;

export type Locale = Widen<typeof ko>;
export { ko };
