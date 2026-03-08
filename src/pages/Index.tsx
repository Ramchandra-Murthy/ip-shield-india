import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Lightbulb, Search, ArrowRight, CheckCircle, Sparkles, Globe, Hash, Bot, FileDown } from "lucide-react";

const services = [
  { icon: Shield, title: "Trademark Registration", desc: "Protect your brand identity across all 45 classes in India.", href: "/trademark" },
  { icon: FileText, title: "Copyright Registration", desc: "Secure your creative works under Indian copyright law.", href: "/copyright" },
  { icon: Lightbulb, title: "Patent Filing", desc: "File patents for your inventions with expert guidance.", href: "/patent" },
  { icon: Search, title: "AI Trademark Search", desc: "Smart trademark search with risk analysis and registration probability.", href: "/trademark#search" },
  { icon: Sparkles, title: "AI Brand Generator", desc: "Generate unique brand names with trademark risk and numerology scores.", href: "/brand-generator" },
  { icon: Bot, title: "AI Legal Advisor", desc: "Ask questions about IP law in India and get instant answers.", href: "/ai-advisor" },
];

const tools = [
  { icon: Globe, title: "Domain Checker", desc: "Check domain availability across .com, .in, .ai and more.", href: "/domain-checker" },
  { icon: Hash, title: "Numerology Analyzer", desc: "Analyze the numerological vibration of your business name.", href: "/numerology" },
  { icon: FileDown, title: "Document Generator", desc: "Auto-generate trademark application drafts (Form TM-A).", href: "/documents" },
];

const stats = [
  { value: "10,000+", label: "Trademarks Filed" },
  { value: "98%", label: "Success Rate" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(42 65% 58% / 0.3), transparent 60%)" }} />
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            AI-Powered IP Protection Platform
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Protect Your Brand, Ideas and{" "}
            <span className="text-gradient-gold">Creative Work</span> in India
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            AI-powered trademark, copyright and patent protection. Smart search, risk analysis, and automated legal documents.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/trademark#search">
              <Button variant="gold" size="lg">
                <Search className="mr-1 h-4 w-4" /> Check Trademark
              </Button>
            </Link>
            <Link to="/trademark">
              <Button variant="gold-outline" size="lg">
                Register Brand <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border bg-card">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Comprehensive IP Protection</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} to={s.href} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold">
              <s.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Platform Tools */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Platform Tools</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Smart Business Tools</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.title} to={t.href} className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-gold">
              <t.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-serif text-lg font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Trusted by Thousands</h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {[
            "AI-powered legal analysis & risk assessment",
            "Government compliant filings (IP India)",
            "End-to-end digital filing process",
            "Transparent pricing, no hidden fees",
            "Secure document handling & cloud storage",
            "Fast turnaround with real-time tracking",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md p-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Preview */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Knowledge Hub</p>
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Latest from Our Blog</h2>
        <p className="mb-6 text-muted-foreground">Expert insights on IP protection in India</p>
        <Link to="/blog">
          <Button variant="gold-outline">
            Visit Blog <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Protect Your Intellectual Property?</h2>
        <p className="mb-8 text-muted-foreground">Get started today with a free consultation from our IP experts.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/ai-advisor">
            <Button variant="gold" size="lg">
              <Bot className="mr-2 h-4 w-4" /> Ask AI Advisor
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="gold-outline" size="lg">
              Schedule Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
