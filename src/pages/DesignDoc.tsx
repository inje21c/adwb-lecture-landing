import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const terminalLines = [
  { prompt: true,  text: 'claude "ADWB 랜딩페이지 현황 파악"' },
  { prompt: false, text: '  Analyzing project structure...' },
  { prompt: false, text: '  Reading 14 source files' },
  { prompt: false, text: '' },
  { prompt: false, text: '  ✓ 12개 섹션 컴포넌트 확인' },
  { prompt: false, text: '  ✓ ko.ts / en.ts 로케일 파일' },
  { prompt: false, text: '  ✓ GitHub Actions CI/CD 파이프라인' },
  { prompt: false, text: '' },
  { prompt: true,  text: 'claude "SolutionSection 6단계 파이프라인으로 재설계"' },
  { prompt: false, text: '  Replacing flat 12-step array → 6-phase card grid' },
  { prompt: false, text: '' },
  { prompt: false, text: '  ✓ phases[0]: 보도자료 작성 — ChatGPT · Claude · Gemini' },
  { prompt: false, text: '  ✓ phases[1]: KPI 역산 — AI 대화형 구체화' },
  { prompt: false, text: '  ✓ phases[2]: 프롬프트 설계 — 레퍼런스 조합 (역설계)' },
  { prompt: false, text: '  ✓ phases[3]: 목업 제작 — Lovable · Stitch · Figma' },
  { prompt: false, text: '  ✓ phases[4]: 설계서 생성 — Codex · Claude Code' },
  { prompt: false, text: '  ✓ phases[5]: RFP 작성 — AI 문서 자동화' },
  { prompt: false, text: '' },
  { prompt: true,  text: 'claude "StepsDetailSection 3개 Phase 그룹으로 재설계"' },
  { prompt: false, text: '  Restructuring A/B/C → phase-pair groups' },
  { prompt: false, text: '' },
  { prompt: false, text: '  ✓ Phase 1&2: 목표의 선명화 (The Forcing Function)' },
  { prompt: false, text: '  ✓ Phase 3&4: 상상의 시각화 (Visualizing Thought)' },
  { prompt: false, text: '  ✓ Phase 5&6: 설계 및 RFP 자동 생성 (Automated Blueprinting)' },
  { prompt: false, text: '' },
  { prompt: true,  text: 'claude "비교 섹션 맥락 정렬"' },
  { prompt: false, text: '  "데모" → "목업" 표현 통일' },
  { prompt: false, text: '  RFP 형태: 작동 목업 + 화면 설계서 + RFP 초안' },
  { prompt: false, text: '  ✓ 7개 비교 항목 업데이트 완료' },
  { prompt: false, text: '' },
  { prompt: true,  text: 'git commit -m "feat: 6-phase pipeline redesign"' },
  { prompt: false, text: '  [main a61beb6] 6 files changed' },
  { prompt: false, text: '' },
  { prompt: true,  text: 'claude "설계서 v2.0 최신화"' },
  { prompt: false, text: '  Updating DESIGN.md...' },
  { prompt: false, text: '  ✓ Done' },
  { prompt: false, text: '' },
];

const TerminalBackground = () => (
  <div className="absolute inset-0 overflow-hidden p-8 md:p-16 font-mono text-xs md:text-sm leading-relaxed select-none">
    {terminalLines.map((line, i) => (
      <div
        key={i}
        className="whitespace-pre opacity-0"
        style={{ animation: `fadeIn 0.3s ease forwards`, animationDelay: `${i * 80}ms` }}
      >
        {line.prompt ? (
          <span>
            <span className="text-[#e06c75]">➜</span>
            <span className="text-[#61afef]"> ~/pixel-perfect-copy</span>
            <span className="text-[#98c379]"> git:(main)</span>
            <span className="text-white"> {line.text}</span>
          </span>
        ) : (
          <span className={line.text.includes('✓') ? 'text-[#98c379]' : 'text-[#abb2bf]'}>
            {line.text}
          </span>
        )}
      </div>
    ))}
    {/* blinking cursor */}
    <div
      className="inline-block w-2 h-4 bg-[#528bff] opacity-0"
      style={{ animation: 'fadeIn 0.1s ease forwards, blink 1s step-end infinite', animationDelay: `${terminalLines.length * 80}ms` }}
    />
  </div>
);

const DesignDoc = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/DESIGN.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Terminal background */}
      <div className="fixed inset-0 bg-[#282c34] z-0">
        <TerminalBackground />
        {/* vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#282c34]/40 via-transparent to-[#282c34]/60 pointer-events-none" />
      </div>

      {/* Scrollable content layer */}
      <div className="relative z-10 min-h-screen py-8 px-4 md:px-8">
        {/* Back nav */}
        <div className="max-w-4xl mx-auto mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로
          </Link>
        </div>

        {/* Floating document card */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          {/* macOS-style window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#21252b] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-white/40 font-mono">DESIGN.md — ADWB 설계서 v2.0</span>
          </div>

          {/* Document body */}
          <article className="bg-white px-6 md:px-12 py-10 prose max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h1:text-2xl prose-h1:mb-2
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
            prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
            prose-h4:text-sm
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-strong:text-gray-900
            prose-li:text-gray-700
            prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-[#282c34] prose-pre:text-[#abb2bf] prose-pre:text-xs prose-pre:leading-relaxed
            prose-table:text-sm
            prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:px-4 prose-th:py-2 prose-th:font-semibold
            prose-td:text-gray-700 prose-td:px-4 prose-td:py-2
            prose-blockquote:border-gray-300 prose-blockquote:text-gray-500
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>

        <p className="text-center text-white/20 text-xs font-mono mt-6 mb-4">
          © 2026 AI-Driven Working Backwards Methodology
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default DesignDoc;
