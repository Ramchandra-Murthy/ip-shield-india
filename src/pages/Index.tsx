import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield, FileText, Lightbulb, Search, ArrowRight, CheckCircle, Sparkles,
  Globe, Hash, Bot, FileDown, Scale, Phone, Mail, MapPin, Star, Clock,
  Users, Award, BookOpen, ChevronDown,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "10,000+", label: "Cases Handled", icon: Users },
  { value: "98%", label: "Success Rate", icon: CheckCircle },
  { value: "2", label: "Offices in India", icon: MapPin },
];

const services = [
  { icon: Shield, title: "Trademark Registration", desc: "Complete filing, search & legal protection for your brand.", href: "/trademark", price: "From ₹4,999" },
  { icon: FileText, title: "Copyright Registration", desc: "Protect creative works, software, art & literature.", href: "/copyright", price: "From ₹3,999" },
  { icon: Lightbulb, title: "Patent Consultation", desc: "Invention filing, patentability search & documentation.", href: "/patent", price: "From ₹15,000" },
  { icon: Scale, title: "Opposition & Appeals", desc: "Objection replies, hearing representation & renewals.", href: "/trademark", price: "Contact us" },
];

const process = [
  { step: "1", title: "Free Consultation", desc: "Discuss your brand and IP needs with our expert lawyer." },
  { step: "2", title: "Trademark Search", desc: "We search existing marks to assess registration viability." },
  { step: "3", title: "Application Filing", desc: "We prepare and file your application with the Registrar." },
  { step: "4", title: "Registration", desc: "We handle objections and secure your trademark certificate." },
];

const testimonials = [
  { name: "Rahul M.", role: "Founder, TechNova Solutions", text: "Advocate Kulkarni guided us through the entire trademark process. Our brand is now fully protected across 3 classes. Highly professional service.", rating: 5 },
  { name: "Priya S.", role: "CEO, StyleVerse Fashion", text: "We faced a Section 11 objection and were worried. The team drafted a strong reply and we got our trademark registered within 14 months.", rating: 5 },
  { name: "Amit D.", role: "Co-founder, FreshBite Foods", text: "The AI tools on this platform helped us pick a strong brand name. Then the legal team filed everything perfectly. Best IP lawyer in Mumbai.", rating: 5 },
  { name: "Sneha K.", role: "Director, EduLearn Academy", text: "From trademark search to registration certificate — everything was handled professionally. The 20+ years of experience really shows.", rating: 5 },
];

const tools = [
  { icon: Sparkles, title: "AI Brand Generator", desc: "Generate brand names with safety scores.", href: "/brand-generator" },
  { icon: Search, title: "Trademark Search", desc: "AI-powered risk analysis.", href: "/trademark#search" },
  { icon: BookOpen, title: "Class Finder", desc: "Find your trademark class.", href: "/class-finder" },
  { icon: Bot, title: "AI Legal Advisor", desc: "Ask IP law questions.", href: "/ai-advisor" },
];

const faqs = [
  { q: "How long does trademark registration take in India?", a: "Trademark registration typically takes 12–18 months if there are no objections or oppositions. You can use the ™ symbol immediately after filing." },
  { q: "What documents are needed for trademark filing?", a: "You need: applicant name and address, brand name or logo, description of goods/services, trademark class, and Power of Attorney if filed through a lawyer." },
  { q: "How much does trademark registration cost?", a: "Government fees are ₹4,500 per class for individuals/startups (online filing) and ₹9,000 for other entities. Professional fees are additional." },
  { q: "Can I register a trademark myself or do I need a lawyer?", a: "While self-filing is possible, a qualified trademark attorney significantly increases success rates by conducting proper searches, selecting the right class, and handling objections." },
  { q: "What happens if my trademark gets an objection?", a: "You must file a reply within 30 days addressing the examiner's concerns. Common objections include lack of distinctiveness (Section 9) and similarity with existing marks (Section 11)." },
  { q: "Do you serve clients outside Mumbai?", a: "Yes. With offices in Mumbai and Bengaluru, we serve clients across India. Trademark filing is done online through the IP India portal, so location is not a barrier." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>IP Lawyer Mumbai | Trademarks, Copyrights & Patents | Advocate Anuradha R. Kulkarni</title>
        <meta
          name="description"
          content="Expert trademark, copyright and patent services by Advocate Anuradha R. Kulkarni in Mumbai & Bengaluru. 20+ years experience, 98% success rate. Free consultation."
        />
        <meta name="keywords" content="trademark lawyer mumbai, copyright registration, patent attorney, ip lawyer india, brand protection" />
        <link rel="canonical" href="https://id-preview--89d82703-211f-45e1-a70d-b15c1a88b846.lovable.app/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Attorney",
            "name": "Advocate Anuradha R. Kulkarni",
            "description": "Practicing Intellectual Property Lawyer since 2000 specializing in trademark registration, copyright protection, and patent advisory.",
            "url": "https://id-preview--89d82703-211f-45e1-a70d-b15c1a88b846.lovable.app",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "areaServed": ["Mumbai", "Bengaluru", "India"],
            "practiceArea": ["Intellectual Property Law", "Trademark Law", "Copyright Law", "Patent Law"]
          }`}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-navy" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(42 65% 58% / 0.3), transparent 60%)" }} />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" /> Trusted IP Law Firm Since 2000
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
              Protect Your Brand with{" "}
              <span className="text-gradient-gold">Expert Trademark Services</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Get your trademark registered in India with <strong className="text-foreground">Advocate Anuradha R. Kulkarni</strong> — 20+ years of IP law experience, 10,000+ cases, 98% success rate.
            </p>
            {/* Primary CTA Hierarchy */}
            <div className="space-y-4">
              {/* Main Primary Action */}
              <Link to="/trademark" className="w-full sm:w-auto">
                <Button variant="gold" size="lg" className="text-lg px-10 py-4 w-full sm:w-auto font-semibold">
                  <Shield className="mr-3 h-5 w-5" /> Start Trademark Registration
                </Button>
              </Link>
              
              {/* Secondary Actions */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link to="/brand-generator" className="w-full sm:w-auto">
                  <Button variant="gold-outline" size="lg" className="text-base px-8 w-full sm:w-auto">
                    <Sparkles className="mr-2 h-4 w-4" /> Check Brand Name
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="gold-outline" size="lg" className="text-base px-8 w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" /> Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/brand-generator">
                <Button variant="ghost" size="sm" className="text-sm">
                  <Sparkles className="mr-2 h-3 w-3" /> Check Brand Name
                </Button>
              </Link>
              <Link to="/trademark#search">
                <Button variant="ghost" size="sm" className="text-sm">
                  <Search className="mr-2 h-3 w-3" /> Search Existing Marks
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              📞 Call now: <a href="tel:+919869832220" className="text-primary font-medium hover:underline">+91 9869832220</a> · Mumbai & Bengaluru
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gradient-gold py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground text-sm font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> 10,000+ Trademarks Filed</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> 98% Success Rate</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> Free Initial Consultation</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-12">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
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
            <p className="mt-3 mx-auto max-w-xl text-muted-foreground">From brand name to registration certificate — we handle everything.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} to={s.href} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold">
                <s.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <p className="text-xs font-semibold text-primary">{s.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Simple Process</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">How Trademark Registration Works</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-0 md:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center px-4 py-6">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-primary/20 translate-x-1/2" />
                )}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {p.step}
                </div>
                <h3 className="mb-2 font-serif text-sm font-bold">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact">
              <Button variant="gold" size="lg">Start Your Registration <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Client Reviews</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Free AI Tools</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Smart Trademark Tools</h2>
            <p className="mt-3 text-muted-foreground">Use our free tools to evaluate your brand before filing.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <Link key={t.title} to={t.href} className="group flex items-start gap-4 rounded-lg border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-gold">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-lg border border-primary/20 bg-card p-8 md:p-12 md:flex md:items-center md:gap-12">
            <div className="mb-6 flex shrink-0 flex-col items-center md:mb-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary font-serif text-3xl font-bold">AK</div>
              <p className="mt-3 text-xs text-muted-foreground">Since 2000</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">Your Legal Expert</p>
              <h2 className="mb-1 font-serif text-2xl font-bold">Advocate Anuradha R. Kulkarni</h2>
              <p className="mb-4 text-sm text-primary font-medium">MSc, LLB, LLM – Intellectual Property Laws</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Practicing Intellectual Property Lawyer since 2000 with offices in Mumbai and Bengaluru. Specializing in trademark registration, copyright protection, patent advisory, and trademark opposition & appeals before the Controller General of Patents, Designs & Trade Marks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about"><Button variant="gold-outline" size="sm">Read More</Button></Link>
                <Link to="/contact"><Button variant="gold" size="sm">Book Consultation</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border border-border bg-background">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-sm font-semibold pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-lg border border-primary/30 bg-primary/5 p-8 md:p-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">Ready to Protect Your Brand?</h2>
            <p className="mb-6 text-muted-foreground">Get a free consultation with an experienced IP lawyer. We'll assess your trademark needs and guide you through the registration process.</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="tel:+919869832220">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call +91 9869832220
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="gold-outline" size="lg" className="w-full sm:w-auto">
                  <Mail className="mr-2 h-4 w-4" /> Send Enquiry
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Advocate Anuradha R. Kulkarni · MSc, LLB, LLM (IP Laws) · Mumbai & Bengaluru
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
