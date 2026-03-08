import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const Patent = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Lightbulb className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Patent Filing in India
          </h1>
          <p className="text-lg text-muted-foreground">
            Protect your inventions and innovations under the Patents Act, 1970.
          </p>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 font-serif text-2xl font-bold">What is a Patent?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A patent is an exclusive right granted for an invention — a product or process that provides a new way of doing something or offers a new technical solution to a problem. In India, a patent is granted for 20 years from the date of filing, giving the inventor the right to prevent others from making, using, or selling the invention.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-6 font-serif text-2xl font-bold">Requirements for Patentability</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Novelty", desc: "The invention must be new and not previously disclosed anywhere in the world." },
            { title: "Inventive Step", desc: "It must involve a technical advance or non-obvious improvement over existing knowledge." },
            { title: "Industrial Application", desc: "The invention must be capable of being manufactured or used in industry." },
          ].map((r) => (
            <div key={r.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold text-primary">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-card py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 font-serif text-2xl font-bold">Patent Filing Process in India</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Patent Search", desc: "Conduct a thorough prior art search to determine novelty of your invention." },
            { step: "2", title: "Drafting Specification", desc: "Prepare the patent specification — provisional or complete — describing the invention in detail." },
            { step: "3", title: "Filing Application", desc: "Submit the application (Form 1) to the Indian Patent Office with required documents and fees." },
            { step: "4", title: "Publication", desc: "The application is published in the Patent Journal after 18 months (or earlier upon request)." },
            { step: "5", title: "Examination", desc: "Request examination (Form 18) within 48 months. Examiner reviews and issues First Examination Report." },
            { step: "6", title: "Grant of Patent", desc: "Once all objections are resolved, the patent is granted and published in the gazette." },
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

    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 font-serif text-2xl font-bold">Ready to Patent Your Invention?</h2>
        <p className="mb-6 text-muted-foreground">Expert patent attorneys to guide you through the entire process.</p>
        <Link to="/contact">
          <Button variant="gold" size="lg">
            Start Patent Filing <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Patent;
