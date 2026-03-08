import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Lightbulb, Search, ArrowRight, CheckCircle, Sparkles, Globe, Hash, Bot, FileDown, Scale, Phone, Mail, MapPin, BookOpen } from "lucide-react";

const services = [
  { icon: Shield, title: "Trademark Registration", desc: "Protect your brand name, logo or slogan legally. Includes trademark search, application filing, and professional legal assistance.", href: "/trademark", price: "Starting from ₹4,999" },
  { icon: FileText, title: "Copyright Registration", desc: "Protect books, music, artwork, software and other creative works. Includes documentation assistance and filing guidance.", href: "/copyright", price: "Starting from ₹3,999" },
  { icon: Lightbulb, title: "Patent Consultation", desc: "Legal consultation regarding patent protection, invention filing, patentability search, and documentation guidance.", href: "/patent", price: "Starting from ₹15,000" },
  { icon: Scale, title: "Trademark Opposition & Appeals", desc: "Objection reply, opposition handling, hearing representation, renewal and assignment services.", href: "/trademark", price: "Contact for pricing" },
  { icon: Sparkles, title: "AI Brand Generator", desc: "Generate unique brand names with trademark risk and numerology scores.", href: "/brand-generator", price: "Free tool" },
  { icon: Bot, title: "AI Legal Advisor", desc: "Ask questions about IP law in India and get instant answers.", href: "/ai-advisor", price: "Free tool" },
];

const tools = [
  { icon: Search, title: "Trademark Search", desc: "AI-powered risk analysis with registration probability.", href: "/trademark#search" },
  { icon: BookOpen, title: "Class Finder", desc: "Find the right trademark class for your business.", href: "/class-finder" },
  { icon: Globe, title: "Domain Checker", desc: "Check domain availability across popular extensions.", href: "/domain-checker" },
  { icon: Hash, title: "Numerology Analyzer", desc: "Analyze the numerological vibration of your business name.", href: "/numerology" },
  { icon: FileDown, title: "Document Generator", desc: "Auto-generate trademark application drafts.", href: "/documents" },
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
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Protect Your Brand with Trusted{" "}
            <span className="text-gradient-gold">IP Legal Services</span>
          </h1>
          <p className="mx-auto mb-2 max-w-2xl text-lg text-foreground font-medium">
            Trademark • Copyright • Patent Protection
          </p>
          <p className="mx-auto mb-2 max-w-2xl text-muted-foreground">
            <strong className="text-foreground">Advocate Anuradha R. Kulkarni</strong> — MSc, LLB, LLM (IP Laws)
          </p>
          <p className="mx-auto mb-10 max-w-xl text-sm text-muted-foreground">
            ✔ Practicing since 2000 &nbsp;&nbsp; ✔ Offices in Mumbai & Bengaluru
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/trademark#search">
              <Button variant="gold" size="lg">
                <Search className="mr-1 h-4 w-4" /> Check Trademark
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="gold-outline" size="lg">
                Book Consultation
              </Button>
            </Link>
            <Link to="/trademark">
              <Button variant="outline" size="lg">
                Start Registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Free Consultation Banner */}
    <section className="bg-gradient-gold py-4">
      <div className="container mx-auto px-4 text-center">
        <Link to="/contact" className="flex items-center justify-center gap-2 text-primary-foreground font-semibold">
          📞 Book Free 10-Minute Trademark Consultation — Call +91 9869832220
          <ArrowRight className="h-4 w-4" />
        </Link>
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
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Professional IP Services</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Our Legal Services</h2>
          <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
            Complete intellectual property services from consultation and filing to hearings and appeals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.title} to={s.href} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold">
              <s.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <p className="text-xs font-semibold text-primary">{s.price}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          For customized legal services and complex filings, please{" "}
          <Link to="/contact" className="text-primary hover:underline">contact us directly</Link>.
        </p>
      </div>
    </section>

    {/* Platform Tools */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Free Tools</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Smart Business Tools</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((t) => (
            <Link key={t.title} to={t.href} className="group rounded-lg border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-gold text-center">
              <t.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 font-serif text-sm font-semibold">{t.title}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Why Choose Our Services</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { title: "20+ Years of Legal Experience", desc: "Advocate Anuradha R. Kulkarni has been practicing Intellectual Property Law since 2000, assisting clients with reliable and professional legal services." },
            { title: "End-to-End IP Protection", desc: "Complete support from trademark search and filing to hearings, oppositions, and appeals." },
            { title: "Personalized Legal Guidance", desc: "Every client receives professional consultation tailored to their brand, business, and intellectual property needs." },
            { title: "Serving Clients Across India", desc: "With offices in Mumbai and Bengaluru, we assist clients throughout India with efficient IP protection services." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl mb-2">Advocate Anuradha R. Kulkarni</h2>
          <p className="text-primary font-medium mb-4">MSc, LLB, LLM – Intellectual Property Laws</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Practicing Intellectual Property Lawyer since 2000 with deep expertise in trademark registration, copyright protection, and patent filing under Indian law. Successfully handled thousands of IP cases, helping entrepreneurs, startups, creators, and businesses protect their brands and innovations.
          </p>
          <Link to="/about">
            <Button variant="gold-outline">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Blog */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Knowledge Hub</p>
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Latest Articles</h2>
        <p className="mb-6 text-muted-foreground">Expert insights on trademark law, copyright protection, and patent filing in India</p>
        <Link to="/blog">
          <Button variant="gold-outline">
            Visit Blog <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Consultation CTA */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold">Need Help Protecting Your Brand?</h2>
        <p className="mb-2 text-muted-foreground">Contact Advocate Anuradha R. Kulkarni for professional legal guidance.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-8">
          <span className="flex items-center gap-1.5 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+919869832220" className="hover:text-primary transition-colors">+91 9869832220</a>
          </span>
          <span className="flex items-center gap-1.5 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:anuradharkulkarni1976@gmail.com" className="hover:text-primary transition-colors">anuradharkulkarni1976@gmail.com</a>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Book Free Consultation
            </Button>
          </Link>
          <Link to="/ai-advisor">
            <Button variant="gold-outline" size="lg">
              <Bot className="mr-2 h-4 w-4" /> Ask AI Advisor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
