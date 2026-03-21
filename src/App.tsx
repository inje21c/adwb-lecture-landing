import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";

const DesignDoc = lazy(() => import("./pages/DesignDoc.tsx"));

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><DesignDoc /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
