import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Lightbulb, Search, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Trademark Registration",
    desc: "Protect your brand identity with comprehensive trademark registration across all 45 classes in India.",
    href: "/trademark",
  },
  {
    icon: FileText,
    title: "Copyright Registration",
    desc: "Secure your creative works — literary, artistic, musical, and software — under Indian copyright law.",
    href: "/copyright",
  },
  {
    icon: Lightbulb,
    title: "Patent Filing",
    desc: "File patents for your inventions and innovations with expert guidance through the Indian patent system.",
    href: "/patent",
  },
  {
    icon: Search,
    title: "Trademark Search",
    desc: "Comprehensive trademark availability search before filing to ensure your brand is unique and registrable.",
    href: "/trademark#search",
  },
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
            India's Trusted IP Services
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-6xl">
            Protect Your Brand, Ideas and{" "}
            <span className="text-gradient-gold">Creative Work</span> in India
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Expert intellectual property services — trademarks, copyrights, and patents — with a seamless digital-first experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/trademark">
              <Button variant="gold" size="lg">
                Start Registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="gold-outline" size="lg">
                Free Consultation
              </Button>
            </Link>
            <Link to="/trademark#search">
              <Button variant="outline" size="lg">
                <Search className="mr-1 h-4 w-4" /> Check Trademark
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
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Comprehensive IP Protection
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold"
            >
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

    {/* Why Us */}
    <section className="border-t border-border bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">
            Trusted by Thousands of Businesses
          </h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {[
            "Government-registered IP professionals",
            "End-to-end digital filing process",
            "Transparent pricing, no hidden fees",
            "Dedicated support throughout the process",
            "Trademark monitoring & opposition support",
            "Fast turnaround with real-time status tracking",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md p-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold">
          Ready to Protect Your Intellectual Property?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Get started today with a free consultation from our IP experts.
        </p>
        <Link to="/contact">
          <Button variant="gold" size="lg">
            Schedule Free Consultation <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
