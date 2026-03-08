import Layout from "@/components/Layout";
import { Clock, ExternalLink, Scale, Globe, Landmark, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    category: "Trademark Updates",
    icon: Scale,
    date: "March 2026",
    title: "IP India Introduces Expedited Trademark Examination for Startups",
    summary:
      "The Controller General of Patents, Designs & Trade Marks has announced an expedited examination scheme for DPIIT-recognised startups. Applications filed under this scheme will be examined within 30 days of filing, significantly reducing the typical 1–3 month examination period.",
    tags: ["Trademark", "Startups", "IP India"],
  },
  {
    category: "Court Judgment",
    icon: Landmark,
    date: "February 2026",
    title: "Delhi High Court Clarifies Well-Known Trademark Protection Scope",
    summary:
      "In a landmark ruling, the Delhi High Court expanded the interpretation of well-known trademark protection under Section 11(6) of the Trade Marks Act, 1999, holding that such marks deserve cross-class protection even without proof of confusion.",
    tags: ["Court Ruling", "Well-Known Marks", "Section 11"],
  },
  {
    category: "Global IP",
    icon: Globe,
    date: "February 2026",
    title: "WIPO Report: Global Trademark Filings Reach Record High in 2025",
    summary:
      "The World Intellectual Property Organization (WIPO) published its annual report showing a 12% increase in trademark filings worldwide. India ranked among the top 5 countries by filing volume through the Controller General of Patents, Designs & Trade Marks.",
    tags: ["WIPO", "Global", "Statistics"],
  },
  {
    category: "Startup IP",
    icon: Rocket,
    date: "January 2026",
    title: "Government Launches ₹500 Crore IP Protection Fund for Startups",
    summary:
      "The Ministry of Commerce and Industry announced a dedicated fund to subsidise trademark and patent filing costs for startups. The scheme covers up to 80% of filing fees for qualifying businesses registered under the Startup India programme.",
    tags: ["Startups", "Government", "Funding"],
  },
  {
    category: "Trademark Updates",
    icon: Scale,
    date: "January 2026",
    title: "New Guidelines for Sound and Colour Trademarks in India",
    summary:
      "The Trademark Registry has issued updated guidelines for the registration of non-traditional marks including sound marks, colour combinations, and three-dimensional shapes under the Trade Marks Act, 1999. The guidelines clarify the evidence requirements for establishing distinctiveness.",
    tags: ["Non-Traditional Marks", "Guidelines", "IP India"],
  },
  {
    category: "Court Judgment",
    icon: Landmark,
    date: "December 2025",
    title: "Supreme Court Rules on Trademark Infringement Damages Calculation",
    summary:
      "The Supreme Court of India established a new framework for calculating damages in trademark infringement cases, requiring courts to consider both actual loss suffered and profits earned by the infringer.",
    tags: ["Court Ruling", "Infringement", "Damages"],
  },
  {
    category: "Global IP",
    icon: Globe,
    date: "December 2025",
    title: "India Joins Madrid Protocol Fast-Track Programme",
    summary:
      "India has been accepted into the Madrid Protocol's accelerated examination programme, allowing international trademark applicants designating India to receive examination results within 6 months.",
    tags: ["Madrid Protocol", "International", "IP India"],
  },
  {
    category: "Startup IP",
    icon: Rocket,
    date: "November 2025",
    title: "E-Commerce Platforms Mandate Trademark Registration for Sellers",
    summary:
      "Major Indian e-commerce platforms including Amazon India and Flipkart have introduced mandatory trademark registration for sellers in select categories, driving a surge in trademark applications filed with the Controller General of Patents, Designs & Trade Marks.",
    tags: ["E-Commerce", "Brand Registry", "Sellers"],
  },
];

const categoryColors: Record<string, string> = {
  "Trademark Updates": "bg-primary/10 text-primary",
  "Court Judgment": "bg-destructive/10 text-destructive",
  "Global IP": "bg-blue-500/10 text-blue-400",
  "Startup IP": "bg-emerald-500/10 text-emerald-400",
};

const IPNews = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Stay Informed</p>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">IP News &amp; Updates</h1>
          <p className="text-lg text-muted-foreground">
            Latest developments in trademark, copyright, and patent law in India and globally. Updates related to the Controller General of Patents, Designs &amp; Trade Marks and the Trade Marks Act, 1999.
          </p>
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="space-y-6">
          {newsItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={i}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[item.category] || "bg-secondary text-secondary-foreground"}`}>
                    <Icon className="h-3 w-3" /> {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {item.date}
                  </span>
                </div>
                <h2 className="mb-2 font-serif text-lg font-bold leading-snug">{item.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
          <h3 className="mb-2 font-serif text-xl font-bold">Need IP Legal Advice?</h3>
          <p className="mb-4 text-sm text-muted-foreground">Get expert guidance on trademark, copyright, and patent matters.</p>
          <p className="mb-1 text-sm font-semibold">Advocate Anuradha R. Kulkarni</p>
          <p className="mb-4 text-xs text-muted-foreground">📞 +91 9869832220 · ✉ anuradharkulkarni1976@gmail.com</p>
          <Link to="/contact">
            <Button variant="gold">Book Free Consultation</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default IPNews;
