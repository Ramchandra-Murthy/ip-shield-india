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
import React, { Suspense } from "react";

// Eager load critical pages
import Index from "./pages/Index";
import Trademark from "./pages/Trademark";
import Contact from "./pages/Contact";

// Lazy load non-critical pages
const Copyright = React.lazy(() => import("./pages/Copyright"));
const Patent = React.lazy(() => import("./pages/Patent"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const About = React.lazy(() => import("./pages/About"));
const BrandGenerator = React.lazy(() => import("./pages/BrandGenerator"));
const DomainChecker = React.lazy(() => import("./pages/DomainChecker"));
const Numerology = React.lazy(() => import("./pages/Numerology"));
const DocumentGenerator = React.lazy(() => import("./pages/DocumentGenerator"));
const AIChatbot = React.lazy(() => import("./pages/AIChatbot"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const IPNews = React.lazy(() => import("./pages/IPNews"));
const BrandReport = React.lazy(() => import("./pages/BrandReport"));
const ClassFinder = React.lazy(() => import("./pages/ClassFinder"));
const ObjectionReply = React.lazy(() => import("./pages/ObjectionReply"));
const TrademarkGuide = React.lazy(() => import("./pages/TrademarkGuide"));
const ClientIntake = React.lazy(() => import("./pages/ClientIntake"));
const OppositionNotice = React.lazy(() => import("./pages/OppositionNotice"));
const HearingPrep = React.lazy(() => import("./pages/HearingPrep"));
const Disclaimer = React.lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

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
                <Suspense fallback={<PageLoader />}>
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
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
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