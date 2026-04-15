# AI-Driven Working Backwards (ADWB) 설계서

> **프로젝트명:** pixel-perfect-copy
> **버전:** 2.0
> **최종 수정일:** 2026-04-15
> **문서 유형:** 시스템 설계서 (Design Document)

---

## 1. 프로젝트 개요

### 1.1 목적

아마존의 "Working Backwards" 방법론과 AI Vibe Coding을 결합한 **AI-Driven Working Backwards(ADWB)** 방법론을 소개하는 랜딩 페이지.
기존 4~8주 소요되던 IT 요구사항 정의를 **3~4일로 단축**하는 6단계 파이프라인을 홍보하고, 워크숍 문의를 유도한다.

### 1.2 대상 사용자

| 구분 | 설명 |
|------|------|
| 개발자 | AI 도구 활용 프로토타이핑에 관심 있는 엔지니어 |
| 기획자/PM | 요구사항 왜곡 문제를 해결하고 싶은 프로젝트 관리자 |
| 영업/사업개발 | 고객 대면 목업이 필요한 비즈니스 직군 |
| 경영진 | IT 프로젝트 리드타임 단축에 관심 있는 의사결정자 |

### 1.3 핵심 가치 제안

- 보도자료 → 작동 목업 → 화면 설계서 → RFP까지 3~4일 완료
- 3단계 전달 왜곡(100% → 60% → 30%)을 1단계로 축소
- 목업 기반 피드백으로 추상적 문서 리뷰 대체

---

## 2. 기술 스택

### 2.1 프론트엔드

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 18.3.1 | UI 라이브러리 |
| TypeScript | 5.8.3 | 타입 안전성 |
| Vite | 5.4.19 | 빌드 도구 (SWC 트랜스파일) |
| Tailwind CSS | 3.4.17 | 유틸리티 기반 스타일링 |
| shadcn/ui | - | UI 컴포넌트 (Button, Tooltip, Toast) |
| Radix UI | - | 접근성 보장 headless 컴포넌트 |
| Lucide React | 0.462.0 | 아이콘 시스템 |

### 2.2 인프라/배포

| 기술 | 용도 |
|------|------|
| Firebase Hosting | 정적 사이트 호스팅 |
| GitHub Actions | CI/CD 파이프라인 (main push 시 자동 배포) |
| Node.js 20 | 빌드 환경 |

### 2.3 테스트

| 기술 | 용도 |
|------|------|
| Vitest | 단위 테스트 |
| Playwright | E2E 테스트 |
| Testing Library | React 컴포넌트 테스트 |

---

## 3. 시스템 아키텍처

### 3.1 아키텍처 다이어그램

```
┌─────────────────────────────────────────────────────┐
│                    클라이언트 (SPA)                    │
│                                                     │
│  ┌─────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │  React   │──│  Context API │──│  i18n (KO/EN) │  │
│  │  Pages   │  │  (Language)  │  │  locales/*.ts  │  │
│  └────┬─────┘  └──────────────┘  └───────────────┘  │
│       │                                              │
│  ┌────┴─────────────────────────────────────┐       │
│  │          12개 섹션 컴포넌트                │       │
│  │  Hero → Problem → Solution →             │       │
│  │  WorkingBackwards → Steps →              │       │
│  │  Positioning → MethodologyContext →      │       │
│  │  BeforeAfter → Academic →                │       │
│  │  ToolStack → CTA → Footer               │       │
│  └──────────────────────────────────────────┘       │
│       │                                              │
│  ┌────┴───────┐  ┌──────────────┐                   │
│  │  shadcn/ui │  │  Tailwind CSS │                   │
│  │  + Radix   │  │  + Custom CSS │                   │
│  └────────────┘  └──────────────┘                   │
└──────────────────────┬──────────────────────────────┘
                       │ Vite Build → dist/
                       ▼
              ┌──────────────────┐
              │  Firebase Hosting │
              │  (정적 파일 서빙)  │
              └────────┬─────────┘
                       │
              ┌────────┴─────────┐
              │  GitHub Actions   │
              │  (CI/CD Pipeline) │
              └──────────────────┘
```

### 3.2 아키텍처 결정 사항

| 결정 | 근거 |
|------|------|
| **SPA (라우터 없음)** | 원페이지 랜딩이므로 스크롤 네비게이션으로 충분 |
| **백엔드 없음** | 정적 콘텐츠 전용, 서버사이드 로직 불필요 |
| **Context API** | 전역 상태가 언어 설정 하나뿐이므로 Redux/Zustand 과도 |
| **Firebase Hosting** | 무료 티어 충분, SSL/CDN 기본 제공, CI/CD 연동 용이 |
| **Vite + SWC** | CRA 대비 빌드 속도 10배 이상 향상 |

---

## 4. 디렉토리 구조

```
pixel-perfect-copy/
├── .github/workflows/
│   └── deploy.yml                # CI/CD 파이프라인
├── public/
│   └── DESIGN.md                 # 설계서 (DesignDoc 페이지에서 렌더링)
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Navbar.tsx
│   │   ├── sections/             # 페이지 섹션 (12개)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── WorkingBackwardsSection.tsx
│   │   │   ├── StepsDetailSection.tsx
│   │   │   ├── PositioningSection.tsx
│   │   │   ├── MethodologyContextSection.tsx
│   │   │   ├── BeforeAfterSection.tsx
│   │   │   ├── AcademicSection.tsx
│   │   │   ├── ToolStackSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── FooterSection.tsx
│   │   └── ui/
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── hooks/
│   │   ├── use-scroll-reveal.ts
│   │   └── use-toast.ts
│   ├── locales/
│   │   ├── ko.ts
│   │   └── en.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── DesignDoc.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── firebase.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## 5. 컴포넌트 설계

### 5.1 컴포넌트 계층

```
App (Providers)
└── Index (페이지)
    ├── Navbar                  # 고정 상단바, 스크롤 감지, 모바일 메뉴
    ├── HeroSection             # 메인 비주얼, CTA 2개
    ├── ProblemSection          # 요구사항 왜곡 문제 제기
    ├── SolutionSection         # 6단계 파이프라인 카드 그리드
    ├── WorkingBackwardsSection # Working Backwards 방법론 설명
    ├── StepsDetailSection      # 3개 Phase 그룹 탭 UI
    ├── PositioningSection      # 핵심 메시지 강조
    ├── MethodologyContextSection # SE 방법론 비교
    ├── BeforeAfterSection      # 전후 비교 테이블
    ├── AcademicSection         # 학술 근거 5건
    ├── ToolStackSection        # 도구 스택
    ├── CTASection              # 워크숍 문의
    └── FooterSection           # 저작권, LinkedIn 링크
```

### 5.2 주요 컴포넌트 상세

#### SolutionSection

6단계 파이프라인을 카드 그리드로 표현:
- 데이터: `t.solution.phases[]` — `{ phase, title, tool, tag }`
- 레이아웃: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- 각 카드: Phase 뱃지 + 제목 + 도구(tool-agnostic) + tag chip
- 하단: `t.solution.summary` (총 소요 기간 안내)

#### StepsDetailSection

| 항목 | 설명 |
|------|------|
| 상태 | `activeTab` ("12" \| "34" \| "56") |
| 탭 구조 | phaseRange + label + subtitle |
| 탭 콘텐츠 | description 인용구 + 2개 Phase 카드 |
| Phase 1&2 | 목표의 선명화 (The Forcing Function) |
| Phase 3&4 | 상상의 시각화 (Visualizing Thought) |
| Phase 5&6 | 설계 및 RFP 자동 생성 (Automated Blueprinting) |

### 5.3 공통 패턴

**스크롤 애니메이션 (useScrollReveal 훅):**
```typescript
// Intersection Observer 기반, threshold: 0.2
// 반환: { ref, isVisible }
```

---

## 6. 다국어(i18n) 설계

### 6.1 구조

```
LanguageContext (React Context)
├── lang: "ko" | "en"
├── t: Locale (현재 언어 데이터)
└── toggle(): void
```

### 6.2 언어 감지 및 전환 흐름

```
1. 페이지 로드 → URL ?lang= 파라미터 확인
2. ?lang=en → 영어 / 그 외 → 한국어(기본)
3. 토글 클릭 → lang 상태 변경 + URL history 업데이트
```

### 6.3 로케일 파일 구조

```typescript
// ko.ts — as const + Widen<T> 타입으로 en.ts 호환성 확보
type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : ...
export type Locale = Widen<typeof ko>;

interface Locale {
  nav:        { items: { label, href }[], menuLabel }
  hero:       { tag, headline, highlight, subhead, ctaPrimary, ctaSecondary, ... }
  problem:    { tag, narratives[], distortion[], painPoints[], ... }
  solution:   {
    tag, headline, quote, aiIntro, descTitle, descLines[],
    phases: { phase, title, tool, tag }[],
    summary
  }
  steps:      {
    tag, headline,
    areas: { key, phaseRange, label, subtitle, description, steps: Step[] }[]
  }
  positioning:     { tag, headline, quote1, quote2..., tagline }
  methodologyContext: { tag, headline, differentiators[], honestPositioning }
  comparison:  { tag, headline, colLabel, colBefore, colAfter, rows: { label, before, after }[] }
  academic:    { tag, headline, references[] }
  tools:       { tag, headline, items[] }
  cta:         { tag, headline, cards[], button, contactNote }
  contactForm: { title, description, ... }
  footer:      { tagline, copyright }
}
```

---

## 7. 스타일 시스템

### 7.1 디자인 토큰

| 토큰 | HSL 값 | 용도 |
|------|---------|------|
| `--primary` | 213 54% 23% | Navy 기본 |
| `--secondary` | 216 78% 95% | 하늘색 배경 |
| `--navy-dark` | 213 60% 15% | 어두운 Navy |

#### 타이포그래피

| 용도 | 폰트 |
|------|------|
| 한글 본문 | Noto Sans KR |
| 영문/UI | Inter |

### 7.2 반응형 전략

- 모바일 우선 (Tailwind 기본)
- 브레이크포인트: `sm`(640) → `md`(768) → `lg`(1024)
- 한글 줄바꿈: `word-break: keep-all` 전역 적용

---

## 8. 네비게이션 설계

### 8.1 스크롤 기반 네비게이션

| 메뉴 항목 | 대상 섹션 ID |
|-----------|-------------|
| 문제 | `#problem` |
| 해법 | `#solution` |
| 상세 단계 | `#steps` |
| 비교 | `#comparison` |
| 강의 | `#cta` |

### 8.2 URL 패턴

| URL | 설명 |
|-----|------|
| `/` | 한국어 기본 |
| `/?lang=en` | 영어 전환 |
| `/design` | 설계서 페이지 |

---

## 9. 성능 최적화

| 항목 | 설정 |
|------|------|
| 트랜스파일러 | SWC |
| 번들러 | Vite (Rollup 트리셰이킹) |
| 스크롤 애니메이션 | Intersection Observer |
| 캐싱 `/assets/**` | `max-age=31536000, immutable` |
| 캐싱 `*.html` | `no-store` |

---

## 10. CI/CD 파이프라인

```
main 브랜치 push
    │
    ▼
GitHub Actions (deploy.yml)
    ├── 1. Checkout
    ├── 2. Node.js 20 설정
    ├── 3. npm ci
    ├── 4. npm run build
    └── 5. Firebase Hosting 배포
```

| 시크릿 | 용도 |
|--------|------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase 인증 |
| `FIREBASE_PROJECT_ID` | 프로젝트 식별 |

---

## 11. 콘텐츠 구조 (ADWB 6단계 파이프라인)

### 11.1 전체 파이프라인

```
Phase 1 & 2 — 목표의 선명화 (The Forcing Function)
├── Phase 1: 보도자료 작성 (ChatGPT · Claude · Gemini)
└── Phase 2: KPI 역산 (AI 대화형 구체화)

Phase 3 & 4 — 상상의 시각화 (Visualizing Thought)
├── Phase 3: 프롬프트 설계 (레퍼런스 조합, 역설계)
└── Phase 4: 목업 제작 (Lovable · Stitch · Figma)

Phase 5 & 6 — 설계 및 RFP 자동 생성 (Automated Blueprinting)
├── Phase 5: 설계서 생성 (Codex · Claude Code)
└── Phase 6: RFP 작성 (AI 문서 자동화)
```

총 소요 기간: 업무 1인 기준 3~4 영업일 (기존 대비 80~90% 단축)

### 11.2 도구 스택 (tool-agnostic 원칙)

각 Phase는 특정 도구에 종속되지 않고 대표 도구를 예시로 제시한다.

| Phase | 역할 | 대표 도구 예시 |
|-------|------|--------------|
| 1 | 보도자료 작성 | ChatGPT · Claude · Gemini |
| 2 | KPI 역산 | AI 대화형 구체화 |
| 3 | 프롬프트 설계 | 레퍼런스 조합 (역설계) |
| 4 | 목업 제작 | Lovable · Stitch · Figma |
| 5 | 설계서 생성 | Codex · Claude Code |
| 6 | RFP 작성 | AI 문서 자동화 |

---

## 12. 전후 비교 (Before vs After)

| 항목 | 기존 방식 | ADWB |
|------|-----------|------|
| 요구사항 도출 | 현업→기획자→IT (3단계, 의미 왜곡) | 보도자료로 강제 선명화 → 목업으로 직접 확인 |
| 1차 산출물 도달 | 4~8주 | 3~4일 (6단계 파이프라인) |
| 요구사항 정제 | 문서 검토 회의 (추상적) | 목업 체험→피드백→수정 반복 |
| RFP 형태 | 텍스트 중심, 해석 여지 다분 | 작동 목업 + 화면 설계서 + RFP 초안 |
| 견적 편차 | 업체 간 2배 이상 차이 | 설계서 기반, 해석 오차 최소화 |
| 개발 후 CR | 빈번 ("원했던 게 아닌데") | 최소화 (목업으로 사전 합의) |
| 도입 비용 | 기획 컨설팅 수천만원 | AI 도구 구독 + 내부 인력 |

---

## 13. 향후 고려사항

| 항목 | 설명 | 우선순위 |
|------|------|----------|
| 분석 도구 | Google Analytics 4 연동 | 중 |
| SEO 강화 | 메타태그, OG 이미지, sitemap.xml | 중 |
| 다크 모드 | Tailwind dark: 클래스 활성화 | 낮 |
| 추가 언어 | 일본어/중국어 로케일 확장 | 낮 |

---

## 14. 개발 명령어

```bash
npm run dev       # 개발 서버 (localhost:8080)
npm run build     # 프로덕션 빌드 → dist/
npm run lint      # ESLint 검사
npm run test      # 단위 테스트
npm run preview   # 빌드 결과 로컬 미리보기
```

---

*v2.0 — 6단계 파이프라인 및 Phase-pair 그룹 구조 반영*
