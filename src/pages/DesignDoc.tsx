import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DesignDoc = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/DESIGN.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로
          </Link>
          <span className="text-border">|</span>
          <h1 className="text-sm font-semibold text-foreground">ADWB 설계서</h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-slate prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground prose-a:text-blue-600 prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-[hsl(213,60%,15%)] prose-pre:text-white prose-table:text-sm prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-border prose-th:border-border max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default DesignDoc;
