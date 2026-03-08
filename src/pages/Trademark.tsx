import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Shield, ArrowRight, Search, CheckCircle, XCircle, Loader2 } from "lucide-react";

const trademarkClasses = [
  "Class 1 - Chemicals", "Class 2 - Paints", "Class 3 - Cosmetics", "Class 5 - Pharmaceuticals",
  "Class 9 - Electronics", "Class 16 - Paper Goods", "Class 25 - Clothing", "Class 28 - Games & Toys",
  "Class 30 - Food Products", "Class 35 - Advertising & Business", "Class 36 - Financial Services",
  "Class 41 - Education & Entertainment", "Class 42 - IT & Software Services", "Class 43 - Restaurant & Hotels",
  "Class 44 - Medical Services", "Class 45 - Legal Services",
];

const processSteps = [
  { step: "1", title: "Trademark Search", desc: "Comprehensive search to check availability of your brand name." },
  { step: "2", title: "Application Filing", desc: "File TM-A application with the Trademark Registry." },
  { step: "3", title: "Examination", desc: "Registrar examines the application for compliance." },
  { step: "4", title: "Journal Publication", desc: "Published in the Trademark Journal for 4 months." },
  { step: "5", title: "Registration", desc: "Certificate issued if no opposition is filed." },
];

const Trademark = () => {
  const [brandName, setBrandName] = useState("");
  const [tmClass, setTmClass] = useState("");
  const [searchResult, setSearchResult] = useState<null | "available" | "similar">(null);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (!brandName.trim()) return;
    setSearching(true);
    setSearchResult(null);
    setTimeout(() => {
      setSearching(false);
      // Simulate: names with common words show "similar", others "available"
      const common = ["apple", "google", "nike", "amazon", "samsung", "tata", "reliance"];
      const isCommon = common.some((c) => brandName.toLowerCase().includes(c));
      setSearchResult(isCommon ? "similar" : "available");
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Registration in India
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure exclusive rights to your brand name, logo, and slogan under the Trade Marks Act, 1999.
            </p>
          </div>
        </div>
      </section>

      {/* What is a trademark */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 font-serif text-2xl font-bold">What is a Trademark?</h2>
          <p className="text-muted-foreground leading-relaxed">
            A trademark is a distinctive sign — a word, phrase, logo, symbol, or combination — that identifies and distinguishes the goods or services of one enterprise from those of others. Once registered, a trademark gives the owner exclusive legal rights to use the mark across India for 10 years, renewable indefinitely.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-serif text-2xl font-bold">Benefits of Trademark Protection</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Exclusive legal right to use the mark",
              "Legal protection against infringement",
              "Builds trust and brand recognition",
              "Valid for 10 years, renewable indefinitely",
              "Can be licensed or franchised",
              "Asset value for your business",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-md border border-border p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 font-serif text-2xl font-bold">Trademark Classes in India</h2>
          <p className="mb-6 text-muted-foreground">
            India follows the NICE Classification system with 45 classes — 34 for goods and 11 for services. Select the appropriate class when filing your application.
          </p>
          <div className="flex flex-wrap gap-2">
            {trademarkClasses.map((c) => (
              <span key={c} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 font-serif text-2xl font-bold">Registration Process</h2>
          <div className="space-y-6">
            {processSteps.map((s) => (
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

      {/* Search Tool */}
      <section id="search" className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-2 font-serif text-2xl font-bold text-center">Trademark Search Tool</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Check if your desired brand name is available for registration.
          </p>
          <div className="space-y-4 rounded-lg border border-border bg-background p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Brand Name</label>
              <Input
                placeholder="Enter your brand name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Class</label>
              <Select value={tmClass} onValueChange={setTmClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                  {trademarkClasses.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="gold" className="w-full" onClick={handleSearch} disabled={searching || !brandName.trim()}>
              {searching ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
              {searching ? "Searching..." : "Search Trademark"}
            </Button>
            {searchResult && (
              <div className={`mt-4 rounded-md border p-4 ${searchResult === "available" ? "border-green-600/40 bg-green-950/20" : "border-yellow-600/40 bg-yellow-950/20"}`}>
                {searchResult === "available" ? (
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <div>
                      <p className="font-semibold text-green-300">Available!</p>
                      <p className="text-sm text-muted-foreground">"{brandName}" appears to be available for registration.</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <XCircle className="h-6 w-6 text-yellow-400" />
                    <div>
                      <p className="font-semibold text-yellow-300">Similar Trademarks Found</p>
                      <p className="text-sm text-muted-foreground">Similar marks exist for "{brandName}". A detailed search is recommended.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Government Authority:{" "}
            <span className="font-medium text-foreground">
              Controller General of Patents, Designs & Trademarks
            </span>{" "}
            — under the Department for Promotion of Industry and Internal Trade, Ministry of Commerce.
          </p>
          <Link to="/contact" className="mt-6 inline-block">
            <Button variant="gold">
              Start Registration <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Trademark;
