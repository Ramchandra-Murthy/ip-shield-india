import Layout from "@/components/Layout";
import { CheckCircle, Scale, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Scale className="mx-auto mb-4 h-12 w-12 text-primary" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About</p>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Advocate Anuradha R. Kulkarni
          </h1>
          <p className="text-lg text-primary font-medium">
            MSc, LLB, LLM (Intellectual Property Laws)
          </p>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Advocate Anuradha R. Kulkarni is a practicing Intellectual Property Lawyer with over <strong className="text-foreground">20 years of legal experience</strong> since 2000. She holds a Master of Science (MSc), Bachelor of Laws (LLB), and Master of Laws specializing in Intellectual Property Laws (LLM – IP Laws).
          </p>
          <p>
            She provides professional legal assistance for <strong className="text-foreground">Trademark Registration, Copyright Protection, Patent Filing, Trademark Opposition and Appeals</strong> to entrepreneurs, startups, creators, and businesses across India.
          </p>
          <p>
            Her practice covers the full spectrum of intellectual property services — from initial trademark search and availability analysis to application filing, objection replies, opposition handling, hearing representation, and trademark renewal and assignment.
          </p>
          <p>
            With offices in <strong className="text-foreground">Mumbai and Bengaluru</strong>, she serves clients throughout India with efficient and reliable IP protection services.
          </p>
        </div>
      </div>
    </section>

    {/* Areas of Practice */}
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 font-serif text-2xl font-bold text-center">Areas of Practice</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Trademark Search and Registration",
            "Trademark Objection Reply",
            "Trademark Opposition Handling",
            "Trademark Hearing Representation",
            "Trademark Renewal and Assignment",
            "Copyright Registration",
            "Copyright Licensing and Agreements",
            "Patent Filing Assistance",
            "Patentability Search",
            "IP Strategy and Consultation",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md border border-border p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 font-serif text-2xl font-bold text-center">Why Choose Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "20+ Years of Legal Experience",
              desc: "Advocate Anuradha R. Kulkarni has been practicing Intellectual Property Law since 2000, assisting clients with reliable and professional legal services.",
            },
            {
              title: "End-to-End IP Protection",
              desc: "We provide complete support from trademark search and filing to hearings, oppositions, and appeals.",
            },
            {
              title: "Personalized Legal Guidance",
              desc: "Every client receives professional consultation tailored to their brand, business, and intellectual property needs.",
            },
            {
              title: "Serving Clients Across India",
              desc: "With offices in Mumbai and Bengaluru, we assist clients throughout India with efficient IP protection services.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-border p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-16">
      <div className="container mx-auto max-w-xl px-4 text-center">
        <h2 className="mb-6 font-serif text-2xl font-bold">Get in Touch</h2>
        <div className="space-y-4 rounded-lg border border-border bg-card p-8">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+919869832220" className="text-sm font-medium hover:text-primary transition-colors">+91 9869832220</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:anuradharkulkarni1976@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">anuradharkulkarni1976@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">Mumbai and Bengaluru, India</span>
          </div>
          <Link to="/contact" className="inline-block mt-4">
            <Button variant="gold">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
