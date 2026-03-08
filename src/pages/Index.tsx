import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Lightbulb, Search, ArrowRight, CheckCircle, Sparkles, Globe, Hash, Bot, FileDown, Scale, Phone, MapPin } from "lucide-react";

const services = [
  { icon: Shield, title: "Trademark Registration", desc: "Trademark search, filing, objection reply, opposition handling, hearing representation, renewal & assignment.", href: "/trademark" },
  { icon: FileText, title: "Copyright Registration", desc: "Copyright registration, legal consultation, licensing agreements, and infringement advice.", href: "/copyright" },
  { icon: Lightbulb, title: "Patent Services", desc: "Patent filing assistance, patentability search, documentation guidance, and consultation.", href: "/patent" },
  { icon: Scale, title: "IP Consultation", desc: "Strategic advice for businesses, startups, and creators on protecting intellectual assets.", href: "/contact" },
  { icon: Sparkles, title: "AI Brand Generator", desc: "Generate unique brand names with trademark risk and numerology scores.", href: "/brand-generator" },
  { icon: Bot, title: "AI Legal Advisor", desc: "Ask questions about IP law in India and get instant answers.", href: "/ai-advisor" },
];

const tools = [
  { icon: Search, title: "Trademark Search", desc: "AI-powered risk analysis with registration probability.", href: "/trademark#search" },
  { icon: Globe, title: "Domain Checker", desc: "Check domain availability across .com, .in, .ai and more.", href: "/domain-checker" },
  { icon: Hash, title: "Numerology Analyzer", desc: "Analyze the numerological vibration of your business name.", href: "/numerology" },
  { icon: FileDown, title: "Document Generator", desc: "Auto-generate trademark application drafts (Form TM-A).", href: "/documents" },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "10,000+", label: "Cases Handled" },
  { value: "98%", label: "Success Rate" },
  { value: "2", label: "Offices in India" },
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
            Expert IP Legal Services Since 2000
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Protect Your Brand, Creativity and{" "}
            <span className="text-gradient-gold">Inventions</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground">
            <strong className="text-foreground">Advocate Anuradha R. Kulkarni</strong> (MSc, LLB, LLM – Intellectual Property Laws) provides professional legal assistance for Trademark Registration, Copyright Protection, and Patent Filing.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
            Over 20 years of experience helping entrepreneurs, startups, creators, and businesses protect their intellectual property across India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/trademark#search">
              <Button variant="gold" size="lg">
                <Search className="mr-1 h-4 w-4" /> Check Trademark Availability
              </Button>
            </Link>
            <Link to="/trademark">
              <Button variant="gold-outline" size="lg">
                Start Registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Quick contact info */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-primary" /> +91 9869832220
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> Mumbai & Bengaluru
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Key Services Highlights */}
    <section className="border-y border-border bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "✔ Trademark Registration",
            "✔ Copyright Protection",
            "✔ Patent Filing & Advisory",
            "✔ Trademark Opposition & Appeals",
          ].map((item) => (
            <div key={item} className="text-center text-sm font-medium">{item}</div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card">
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Our Legal Services</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Complete IP Protection</h2>
          <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
            From consultation and filing to hearings and appeals — comprehensive intellectual property services.
          </p>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

    {/* About the Advocate */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Advocate Anuradha R. Kulkarni</h2>
            <p className="mt-2 text-primary font-medium">MSc, LLB, LLM – Intellectual Property Laws</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Practicing Intellectual Property Lawyer since 2000, Advocate Anuradha R. Kulkarni has been providing expert legal assistance to entrepreneurs, startups, creators, and businesses in protecting their brands, creative works, and innovations. With deep expertise in trademark registration, copyright protection, and patent filing under Indian law, she has successfully handled thousands of IP cases across the country.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Trademark Search & Registration",
                "Trademark Objection & Opposition",
                "Trademark Hearing Representation",
                "Copyright Registration & Licensing",
                "Patent Filing & Documentation",
                "IP Strategy & Business Consultation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
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
        <h2 className="mb-4 font-serif text-3xl font-bold">Start Protecting Your Intellectual Property Today</h2>
        <p className="mb-8 text-muted-foreground">Contact Advocate Anuradha R. Kulkarni for professional IP legal guidance.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/ai-advisor">
            <Button variant="gold" size="lg">
              <Bot className="mr-2 h-4 w-4" /> Ask AI Advisor
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="gold-outline" size="lg">
              Contact Us <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
