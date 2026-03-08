import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Trademark from "./pages/Trademark";
import Copyright from "./pages/Copyright";
import Patent from "./pages/Patent";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BrandGenerator from "./pages/BrandGenerator";
import DomainChecker from "./pages/DomainChecker";
import Numerology from "./pages/Numerology";
import DocumentGenerator from "./pages/DocumentGenerator";
import AIChatbot from "./pages/AIChatbot";
import Blog from "./pages/Blog";
import ClassFinder from "./pages/ClassFinder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trademark" element={<Trademark />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/patent" element={<Patent />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand-generator" element={<BrandGenerator />} />
          <Route path="/domain-checker" element={<DomainChecker />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/documents" element={<DocumentGenerator />} />
          <Route path="/ai-advisor" element={<AIChatbot />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/class-finder" element={<ClassFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
