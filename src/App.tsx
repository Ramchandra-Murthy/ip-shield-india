import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import BlogPost from "./pages/BlogPost";
import IPNews from "./pages/IPNews";
import BrandReport from "./pages/BrandReport";
import ClassFinder from "./pages/ClassFinder";
import ObjectionReply from "./pages/ObjectionReply";
import TrademarkGuide from "./pages/TrademarkGuide";
import ClientIntake from "./pages/ClientIntake";
import OppositionNotice from "./pages/OppositionNotice";
import HearingPrep from "./pages/HearingPrep";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <ScrollToTop />
              <main className="flex-1 pt-16">
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
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/ip-news" element={<IPNews />} />
                  <Route path="/brand-report" element={<BrandReport />} />
                  <Route path="/class-finder" element={<ClassFinder />} />
                  <Route path="/objection-reply" element={<ObjectionReply />} />
                  <Route path="/trademark-guide" element={<TrademarkGuide />} />
                  <Route path="/client-intake" element={<ClientIntake />} />
                  <Route path="/opposition-notice" element={<OppositionNotice />} />
                  <Route path="/hearing-prep" element={<HearingPrep />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;