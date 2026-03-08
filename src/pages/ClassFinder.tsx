import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const classMap: Record<string, { classNum: number; name: string }[]> = {
  clothing: [{ classNum: 25, name: "Clothing, footwear, headgear" }],
  fashion: [{ classNum: 25, name: "Clothing, footwear, headgear" }, { classNum: 18, name: "Leather goods, bags" }],
  software: [{ classNum: 9, name: "Computer software, electronics" }, { classNum: 42, name: "IT & software services" }],
  technology: [{ classNum: 9, name: "Electronics & software" }, { classNum: 42, name: "IT services" }],
  app: [{ classNum: 9, name: "Computer software, mobile apps" }, { classNum: 42, name: "Software development services" }],
  restaurant: [{ classNum: 43, name: "Restaurant and hotel services" }],
  food: [{ classNum: 29, name: "Processed food products" }, { classNum: 30, name: "Staple foods, bakery" }, { classNum: 43, name: "Restaurant services" }],
  hotel: [{ classNum: 43, name: "Hotel and accommodation services" }],
  education: [{ classNum: 41, name: "Education and entertainment services" }],
  school: [{ classNum: 41, name: "Education services" }],
  coaching: [{ classNum: 41, name: "Education and training services" }],
  medicine: [{ classNum: 5, name: "Pharmaceuticals" }, { classNum: 44, name: "Medical services" }],
  pharma: [{ classNum: 5, name: "Pharmaceutical preparations" }],
  health: [{ classNum: 44, name: "Medical and healthcare services" }, { classNum: 5, name: "Pharmaceuticals" }],
  fitness: [{ classNum: 41, name: "Sports and fitness services" }, { classNum: 28, name: "Sporting goods" }],
  cosmetics: [{ classNum: 3, name: "Cosmetics, perfumery, toiletries" }],
  beauty: [{ classNum: 3, name: "Cosmetics and beauty products" }, { classNum: 44, name: "Beauty salon services" }],
  consulting: [{ classNum: 35, name: "Business management and consulting" }],
  marketing: [{ classNum: 35, name: "Advertising and marketing services" }],
  finance: [{ classNum: 36, name: "Financial and insurance services" }],
  insurance: [{ classNum: 36, name: "Insurance services" }],
  banking: [{ classNum: 36, name: "Banking and financial services" }],
  real: [{ classNum: 36, name: "Real estate services" }, { classNum: 37, name: "Construction services" }],
  construction: [{ classNum: 37, name: "Building and construction" }],
  transport: [{ classNum: 39, name: "Transport and logistics" }],
  logistics: [{ classNum: 39, name: "Logistics and delivery services" }],
  legal: [{ classNum: 45, name: "Legal services" }],
  agriculture: [{ classNum: 31, name: "Agricultural products" }],
  jewelry: [{ classNum: 14, name: "Jewelry and precious metals" }],
  furniture: [{ classNum: 20, name: "Furniture and home decor" }],
  toys: [{ classNum: 28, name: "Games and toys" }],
  automobile: [{ classNum: 12, name: "Vehicles and automobiles" }],
  car: [{ classNum: 12, name: "Vehicles" }, { classNum: 37, name: "Vehicle repair services" }],
  ecommerce: [{ classNum: 35, name: "Online retail services" }, { classNum: 9, name: "Software/app" }],
  retail: [{ classNum: 35, name: "Retail and wholesale services" }],
  printing: [{ classNum: 16, name: "Paper goods and printed matter" }, { classNum: 40, name: "Printing services" }],
  music: [{ classNum: 41, name: "Entertainment services" }, { classNum: 9, name: "Sound recordings" }],
  film: [{ classNum: 41, name: "Film production and entertainment" }],
  photography: [{ classNum: 41, name: "Photography services" }],
  telecom: [{ classNum: 38, name: "Telecommunications" }],
  chemical: [{ classNum: 1, name: "Industrial chemicals" }],
  paint: [{ classNum: 2, name: "Paints, varnishes, lacquers" }],
};

const ClassFinder = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ classNum: number; name: string }[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearched(true);
    const q = query.toLowerCase().trim();
    const matches: { classNum: number; name: string }[] = [];
    const seen = new Set<number>();

    for (const [keyword, classes] of Object.entries(classMap)) {
      if (q.includes(keyword) || keyword.includes(q)) {
        for (const c of classes) {
          if (!seen.has(c.classNum)) {
            seen.add(c.classNum);
            matches.push(c);
          }
        }
      }
    }

    if (matches.length === 0) {
      // Default suggestion
      matches.push({ classNum: 35, name: "Business management and consulting (default suggestion)" });
    }
    setResults(matches);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Class Finder
            </h1>
            <p className="text-lg text-muted-foreground">
              Choosing the correct trademark class is essential for proper brand protection. Enter your business activity to find the appropriate class.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business Activity / Industry</label>
              <Input
                placeholder="e.g., clothing, software, restaurant, education"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button variant="gold" className="w-full" onClick={handleSearch} disabled={!query.trim()}>
              <Search className="mr-2 h-4 w-4" /> Find Trademark Class
            </Button>
          </div>

          {searched && results.length > 0 && (
            <div className="mt-6 space-y-3">
              <h2 className="font-serif text-lg font-bold text-center">Suggested Trademark Classes</h2>
              {results.map((r) => (
                <div key={r.classNum} className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
                  <div>
                    <span className="font-serif font-bold text-primary">Class {r.classNum}</span>
                    <p className="text-sm text-muted-foreground">{r.name}</p>
                  </div>
                </div>
              ))}
              <p className="text-center text-sm text-muted-foreground mt-4">
                If you are unsure about the correct class, Advocate Anuradha R. Kulkarni can provide professional legal guidance.
              </p>
              <div className="text-center mt-2">
                <Link to="/contact">
                  <Button variant="gold-outline">
                    Contact for Guidance <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Common Examples */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-serif text-2xl font-bold text-center">Common Business Activities & Classes</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { activity: "Clothing & Fashion", cls: "Class 25" },
              { activity: "Software & Mobile Apps", cls: "Class 9 & 42" },
              { activity: "Restaurant & Hotels", cls: "Class 43" },
              { activity: "Education & Coaching", cls: "Class 41" },
              { activity: "Pharmaceuticals", cls: "Class 5" },
              { activity: "Cosmetics & Beauty", cls: "Class 3" },
              { activity: "Financial Services", cls: "Class 36" },
              { activity: "E-commerce & Retail", cls: "Class 35" },
              { activity: "Marketing & Advertising", cls: "Class 35" },
              { activity: "Legal Services", cls: "Class 45" },
            ].map((item) => (
              <div key={item.activity} className="flex items-center justify-between rounded-md border border-border px-4 py-3">
                <span className="text-sm">{item.activity}</span>
                <span className="text-sm font-bold text-primary">{item.cls}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClassFinder;
