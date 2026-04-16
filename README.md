# AI-Driven Working Backwards — 방법론 소개 랜딩 페이지

**이 저장소는 "AI-Driven Working Backwards" 방법론의 산출물이자 증거입니다.**
방법론을 설명하는 웹사이트 자체를 이 방법론의 6단계로 만들었습니다.

🌐 **라이브 사이트:** https://ai-rfp-maker.web.app

---

## 이 프로젝트란

Amazon Working Backwards + AI 바이브코딩을 결합한 6단계 IT 기획 방법론을 소개하는
단일 페이지(SPA) 랜딩 웹사이트입니다.

기존 4~8주 소요되던 요구사항 정의를 **3~4일로 단축**하는 방법론을 다룹니다.

---

## 방법론 6단계 파이프라인

```
Phase 1: 보도자료 작성  →  Phase 2: KPI 역산
Phase 3: 프롬프트 설계  →  Phase 4: 목업 제작
Phase 5: 설계서 생성    →  Phase 6: RFP 작성
```

이 웹사이트는 위 파이프라인을 직접 따라 만들었습니다.

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| UI | React 18 + TypeScript + Vite |
| 스타일 | Tailwind CSS + shadcn/ui |
| 다국어 | 한국어 / 영어 (Context API + 로케일 파일) |
| 배포 | Firebase Hosting |
| CI/CD | GitHub Actions (main push → 자동 배포) |

---

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # 프로덕션 빌드
npm run test       # 단위 테스트
```

---

## 산출물 문서

- [`public/DESIGN.md`](./public/DESIGN.md) — 시스템 설계서 (Phase 5 산출물)

---

## 제작자

**현철민** | 정보관리기술사 | AI-Driven Working Backwards 방법론 개발자

- LinkedIn: [linkedin.com/in/cheolmin-hyun-90852568](https://www.linkedin.com/in/cheolmin-hyun-90852568/)
- 강의 문의: https://ai-rfp-maker.web.app/#cta

---

*기술은 도구이고, 사람이 중심입니다.*
