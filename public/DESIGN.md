# AI-Driven Working Backwards (ADWB) 설계서

> **프로젝트명:** pixel-perfect-copy
> **버전:** 1.0
> **최종 수정일:** 2026-03-21
> **문서 유형:** 시스템 설계서 (Design Document)

---

## 1. 프로젝트 개요

### 1.1 목적

아마존의 "Working Backwards" 방법론과 AI Vibe Coding을 결합한 **AI-Driven Working Backwards(ADWB)** 방법론을 소개하는 랜딩 페이지.
기존 4~8주 소요되던 IT 요구사항 정의를 **3~4일로 단축**하는 프로세스를 홍보하고, 워크숍 문의를 유도한다.

### 1.2 대상 사용자

| 구분 | 설명 |
|------|------|
| 개발자 | AI 도구 활용 프로토타이핑에 관심 있는 엔지니어 |
| 기획자/PM | 요구사항 왜곡 문제를 해결하고 싶은 프로젝트 관리자 |
| 영업/사업개발 | 고객 대면 데모가 필요한 비즈니스 직군 |
| 경영진 | IT 프로젝트 리드타임 단축에 관심 있는 의사결정자 |

### 1.3 핵심 가치 제안

- 보도자료 → 시각적 요구사항(데모) → RFP까지 3~4일 완료
- 3단계 전달 왜곡(100% → 60% → 30%)을 1단계로 축소
- 데모 기반 피드백으로 추상적 문서 리뷰 대체

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
│  │          10개 섹션 컴포넌트                │       │
│  │  Hero → Problem → Solution → Steps →     │       │
│  │  Positioning → BeforeAfter → Academic →  │       │
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
| **SPA (라우터 없음)** | 원페이지 랜딩이므로 React Router 불필요, 스크롤 네비게이션으로 충분 |
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
├── public/                       # 정적 에셋
├── src/
│   ├── components/
│   │   ├── common/               # 공통 컴포넌트
│   │   │   └── Navbar.tsx        # 고정 네비게이션 바
│   │   ├── sections/             # 페이지 섹션 (10개)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── StepsDetailSection.tsx
│   │   │   ├── PositioningSection.tsx
│   │   │   ├── BeforeAfterSection.tsx
│   │   │   ├── AcademicSection.tsx
│   │   │   ├── ToolStackSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── FooterSection.tsx
│   │   └── ui/                   # shadcn/ui 컴포넌트
│   ├── contexts/
│   │   └── LanguageContext.tsx    # 한/영 언어 컨텍스트
│   ├── hooks/
│   │   ├── use-scroll-reveal.ts  # 스크롤 애니메이션 훅
│   │   └── use-toast.ts          # Toast 훅
│   ├── locales/
│   │   ├── ko.ts                 # 한국어 번역
│   │   └── en.ts                 # 영어 번역
│   ├── lib/
│   │   └── utils.ts              # cn() 유틸리티
│   ├── pages/
│   │   └── Index.tsx             # 메인 페이지
│   ├── App.tsx                   # 루트 컴포넌트 (Provider 래핑)
│   ├── main.tsx                  # 엔트리 포인트
│   └── index.css                 # Tailwind + 커스텀 CSS
├── firebase.json                 # Firebase Hosting 설정
├── .firebaserc                   # Firebase 프로젝트 매핑
├── tailwind.config.ts            # Tailwind 설정
├── vite.config.ts                # Vite 설정
├── tsconfig.json                 # TypeScript 설정
├── components.json               # shadcn/ui 설정
└── web_content.md                # 원본 콘텐츠 기준 문서
```

---

## 5. 컴포넌트 설계

### 5.1 컴포넌트 계층

```
App (Providers)
└── Index (페이지)
    ├── Navbar              # 고정 상단바, 스크롤 감지, 모바일 메뉴
    ├── HeroSection         # 메인 비주얼, CTA 2개
    ├── ProblemSection      # 요구사항 왜곡 문제 제기
    ├── SolutionSection     # 12단계 파이프라인 시각화
    ├── StepsDetailSection  # 3개 영역(A/B/C) 탭 UI
    ├── PositioningSection  # 핵심 메시지 강조
    ├── BeforeAfterSection  # 전후 비교 테이블 (7행)
    ├── AcademicSection     # 학술 근거 5건
    ├── ToolStackSection    # 도구 스택 7개
    ├── CTASection          # 워크숍 문의 유도
    └── FooterSection       # 저작권, LinkedIn 링크
```

### 5.2 주요 컴포넌트 상세

#### Navbar (`components/common/Navbar.tsx`)

| 항목 | 설명 |
|------|------|
| 상태 | `scrolled` (스크롤 위치), `menuOpen` (모바일 메뉴) |
| 동작 | 스크롤 시 배경 반투명 → 불투명 전환, smooth scroll to section |
| 반응형 | 데스크톱: 인라인 메뉴 / 모바일: 햄버거 메뉴 |
| 언어 전환 | EN/KR 토글 버튼 |

#### SolutionSection (`components/sections/SolutionSection.tsx`)

12단계 파이프라인을 시각적 플로우로 표현:
- 데스크톱: 5열 wrap 레이아웃 + 화살표 연결
- 모바일: 세로 스택 레이아웃
- 9~10단계: 반복(Iterate) 구간 하이라이트 표시

#### StepsDetailSection (`components/sections/StepsDetailSection.tsx`)

| 항목 | 설명 |
|------|------|
| 상태 | `activeTab` (활성 영역 A/B/C) |
| 구조 | 3개 탭 → 각 탭당 3~4개 카드 |
| Area A | 목표 명확화 (Step 1-3) |
| Area B | 반복 정제 (Step 4-10, 핵심 엔진) |
| Area C | 최종 산출물 (Step 11-12) |

### 5.3 공통 패턴

**스크롤 애니메이션 (useScrollReveal 훅):**
```typescript
// Intersection Observer 기반
// threshold: 0.2 (20% 노출 시 트리거)
// 반환: { ref, isVisible }
// 적용 CSS: animate-fade-up, animate-fade-in + stagger delay
```

**섹션 레이아웃 패턴:**
```
<section id="{sectionId}" className="section-padding py-20">
  <span className="tag">태그</span>
  <h2>제목</h2>
  <div>콘텐츠</div>
</section>
```

---

## 6. 다국어(i18n) 설계

### 6.1 구조

```
LanguageContext (React Context)
├── lang: "ko" | "en"
├── t: Locale (현재 언어 데이터)
└── toggle(): void (언어 전환)
```

### 6.2 언어 감지 및 전환 흐름

```
1. 페이지 로드 → URL ?lang= 파라미터 확인
2. ?lang=en → 영어 / 그 외 → 한국어(기본)
3. 토글 클릭 → lang 상태 변경 + URL history 업데이트 (새로고침 없음)
```

### 6.3 로케일 파일 구조 (`Locale` 타입)

```typescript
interface Locale {
  nav:         { items: string[], menuLabel: string }
  hero:        { tag, headline, highlight, subhead, ctaPrimary, ctaSecondary, ... }
  problem:     { tag, headlinePre, narratives[], distortion[], painPoints[], ... }
  solution:    { tag, headline, pipelineSteps[], ... }
  steps:       { tag, headline, areas: Area[] }   // Area = { label, steps: Step[] }
  positioning: { tag, headline, quote1, quote2..., tagline }
  comparison:  { tag, headline, rows: Row[] }     // Row = { label, before, after }
  academic:    { tag, headline, references: Ref[] }
  tools:       { tag, headline, items: Tool[] }
  cta:         { tag, headline, cards: Card[], button, contactNote }
  footer:      { tagline, copyright }
}
```

---

## 7. 스타일 시스템

### 7.1 디자인 토큰

#### 컬러 팔레트

| 토큰 | HSL 값 | 용도 |
|------|---------|------|
| `--primary` | 213 54% 23% | Navy 기본 (네비, 헤딩) |
| `--secondary` | 216 78% 95% | 하늘색 배경 |
| `--navy-light` | 213 45% 35% | Navy 밝은 변형 |
| `--navy-dark` | 213 60% 15% | Navy 어두운 변형 |
| `--sky` | 216 78% 95% | 하늘색 기본 |
| `--sky-dark` | 216 50% 85% | 하늘색 어두운 변형 |

#### 타이포그래피

| 용도 | 폰트 | 비고 |
|------|------|------|
| 한글 본문 | Noto Sans KR | Google Fonts CDN |
| 영문/UI | Inter | Google Fonts CDN |

### 7.2 커스텀 애니메이션

| 키프레임 | 효과 |
|----------|------|
| `fade-up` | 투명도 0→1 + Y축 24px 이동 + blur 해제 |
| `fade-in` | 투명도 0→1 + blur 해제 |
| `accordion-down/up` | 높이 접기/펼치기 |

### 7.3 반응형 전략

- **모바일 우선** (Tailwind 기본)
- 브레이크포인트: `sm`(640) → `md`(768) → `lg`(1024) → `xl`(1280) → `2xl`(1536)
- Navbar: 모바일 햄버거 / 데스크톱 인라인
- 파이프라인: 모바일 세로 스택 / 데스크톱 5열 wrap
- 한글 줄바꿈: `word-break: keep-all` 전역 적용

---

## 8. 네비게이션 설계

### 8.1 스크롤 기반 네비게이션

라우터 없이 `Element.scrollIntoView({ behavior: 'smooth' })` 사용.

| 메뉴 항목 | 대상 섹션 ID |
|-----------|-------------|
| 문제 정의 | `#problem` |
| 해결 방안 | `#solution` |
| 12단계 상세 | `#steps` |
| 전후 비교 | `#comparison` |
| 문의하기 | `#cta` |

### 8.2 URL 패턴

| URL | 설명 |
|-----|------|
| `/` | 한국어 기본 |
| `/?lang=en` | 영어 전환 |

---

## 9. 성능 최적화

### 9.1 빌드 최적화

| 항목 | 설정 |
|------|------|
| 트랜스파일러 | SWC (Babel 대비 20배 빠름) |
| 번들러 | Vite (Rollup 기반 트리셰이킹) |
| 코드 스플릿 | Vite 자동 청크 분리 |

### 9.2 캐싱 전략 (Firebase Hosting)

| 리소스 | Cache-Control |
|--------|--------------|
| `/assets/**` | `public, max-age=31536000, immutable` (1년) |
| `**/*.html` | `no-store, max-age=0` (항상 최신) |

### 9.3 런타임 최적화

| 항목 | 방법 |
|------|------|
| 스크롤 애니메이션 | Intersection Observer (scroll event 대비 성능 우수) |
| CSS | Tailwind JIT (사용된 클래스만 빌드) |
| 폰트 | Google Fonts CDN + swap display |

---

## 10. CI/CD 파이프라인

### 10.1 배포 흐름

```
main 브랜치 push
    │
    ▼
GitHub Actions (deploy.yml)
    │
    ├── 1. Checkout 코드
    ├── 2. Node.js 20 설정 (npm 캐시)
    ├── 3. npm ci (의존성 설치)
    ├── 4. npm run build (Vite 프로덕션 빌드)
    └── 5. Firebase Hosting 배포 (live 채널)
```

### 10.2 시크릿/변수 관리

| 항목 | 저장소 | 용도 |
|------|--------|------|
| `FIREBASE_SERVICE_ACCOUNT` | GitHub Secrets | Firebase 인증 |
| `FIREBASE_PROJECT_ID` | GitHub Variables | 프로젝트 식별 |

---

## 11. 콘텐츠 구조 (ADWB 12단계)

### 11.1 전체 파이프라인

```
Area A — 목표 명확화 (Step 1~3)
├── Step 1: 보도자료 작성 (ChatGPT/Claude)
├── Step 2: KPI 정의 (ChatGPT/Claude)
└── Step 3: UI 프롬프트 개발 (ChatGPT + Behance/Dribbble)

Area B — 반복 정제 (Step 4~10, 핵심 엔진)
├── Step 4: UI 생성 (Lovable)
├── Step 5: Push & Clone (GitHub)
├── Step 6: 소스 정리 (Claude Code)
├── Step 7: 데모 기능 구현 (Codex + Claude Code)
├── Step 8: 배포 (Firebase)
├── Step 9: 데모 & 피드백 ← 반복 시작
└── Step 10: 반복 수정 ← 수렴까지 반복

Area C — 최종 산출물 (Step 11~12)
├── Step 11: 설계서 작성 (Claude Code + ChatGPT)
└── Step 12: RFP 작성 (ChatGPT/Claude)
```

### 11.2 도구 스택

| 도구 | 용도 |
|------|------|
| ChatGPT / Claude | 보도자료, KPI, RFP 작성 |
| Behance / Dribbble | UI 레퍼런스 수집 |
| Lovable | AI 기반 UI 생성 |
| GitHub | 버전 관리 |
| Claude Code / Codex | 소스 정리, 기능 구현 |
| Firebase | 호스팅/배포 |
| AWS EC2 | 개발 환경 |

---

## 12. 전후 비교 (Before vs After)

| 항목 | 기존 방식 | ADWB |
|------|-----------|------|
| 첫 산출물 | 4~8주 | 3~4일 |
| 왜곡 단계 | 3단계 (100→60→30%) | 1단계 |
| 피드백 방식 | 문서 리뷰 (추상적) | 데모 (구체적) |
| RFP 정확도 | 모호 | 명확 (실물 기반) |
| 개발 후 CR | 다수 | 최소 |
| 커뮤니케이션 | 문서 기반 | 시각적 데모 기반 |

---

## 13. 향후 고려사항

| 항목 | 설명 | 우선순위 |
|------|------|----------|
| 워크숍 신청 폼 | Google Forms 또는 Supabase 연동 | 중 |
| 분석 도구 | Google Analytics 4 연동 | 중 |
| SEO 강화 | 메타태그, OG 이미지, sitemap.xml | 낮 |
| 다크 모드 | next-themes 의존성 이미 존재 (미적용) | 낮 |
| 추가 언어 | 일본어/중국어 로케일 확장 | 낮 |

---

## 14. 개발 명령어 요약

```bash
npm run dev          # 개발 서버 (localhost:8080)
npm run build        # 프로덕션 빌드 → dist/
npm run build:dev    # 개발 빌드 (소스맵 포함)
npm run lint         # ESLint 검사
npm run test         # 단위 테스트 실행
npm run test:watch   # 테스트 감시 모드
npm run preview      # 빌드 결과 로컬 미리보기
```

---

*이 문서는 pixel-perfect-copy 프로젝트의 현재 상태를 기준으로 작성되었습니다.*
