import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, CheckCircle } from "lucide-react";

const Copyright = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Copyright Registration in India
          </h1>
          <p className="text-lg text-muted-foreground">
            Protect your original creative works under the Copyright Act, 1957.
          </p>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 font-serif text-2xl font-bold">What Does Copyright Protect?</h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Copyright protects original works of authorship, including literary works, dramatic works, musical compositions, artistic works, cinematographic films, sound recordings, and computer software. It gives the creator exclusive rights to reproduce, distribute, perform, and display the work.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Literary works (books, articles, blogs)",
            "Musical compositions & lyrics",
            "Artistic works (paintings, photographs)",
            "Computer software & mobile apps",
            "Cinematographic films & videos",
            "Sound recordings & podcasts",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md border border-border p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 font-serif text-2xl font-bold">Duration of Copyright in India</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">Literary, dramatic, musical & artistic works:</strong> Lifetime of the author plus 60 years after death.</p>
          <p><strong className="text-foreground">Cinematographic films & sound recordings:</strong> 60 years from the date of publication.</p>
          <p><strong className="text-foreground">Government works:</strong> 60 years from the date of publication.</p>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-6 font-serif text-2xl font-bold">Benefits of Registration</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Legal evidence of ownership",
            "Right to sue for infringement",
            "Statutory damages and attorney fees",
            "Public record of your claim",
            "Deters unauthorized copying",
            "Required for customs recordation",
          ].map((b) => (
            <div key={b} className="flex items-start gap-3 rounded-md border border-border p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 font-serif text-2xl font-bold">Filing Process</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Application Submission", desc: "File Form XIV with the Copyright Office along with required documents and fees." },
            { step: "2", title: "Diary Number Issued", desc: "A diary number is allotted and a mandatory 30-day waiting period begins." },
            { step: "3", title: "Examination", desc: "The Registrar examines the application for discrepancies." },
            { step: "4", title: "Registration Certificate", desc: "If no objections, the copyright registration certificate is issued." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-serif font-bold text-primary-foreground">
                {s.step}
              </div>
              <div>
                <h3 className="font-serif font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 font-serif text-2xl font-bold">Protect Your Creative Work Today</h2>
        <p className="mb-6 text-muted-foreground">Starting at ₹3,999 — fast, reliable copyright registration.</p>
        <Link to="/contact">
          <Button variant="gold" size="lg">
            Get Started <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Copyright;
