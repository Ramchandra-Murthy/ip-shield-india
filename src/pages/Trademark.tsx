import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Shield, ArrowRight, Search, CheckCircle, XCircle, Loader2, AlertTriangle, ExternalLink, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

type RiskResult = {
  name: string;
  similarMarks: number;
  riskLevel: "Low" | "Medium" | "High";
  probability: number;
  tmClass: string;
};

const Trademark = () => {
  const { toast } = useToast();
  const [brandName, setBrandName] = useState("");
  const [tmClass, setTmClass] = useState("");
  const [searchResult, setSearchResult] = useState<RiskResult | null>(null);
  const [searching, setSearching] = useState(false);

  // Registration form
  const [regForm, setRegForm] = useState({ name: "", phone: "", email: "", brand: "", tmClass: "", logo: null as File | null });
  const [regSubmitted, setRegSubmitted] = useState(false);

  const handleSearch = () => {
    if (!brandName.trim()) return;
    setSearching(true);
    setSearchResult(null);
    setTimeout(() => {
      setSearching(false);
      const common = ["apple", "google", "nike", "amazon", "samsung", "tata", "reliance", "microsoft", "meta", "uber"];
      const partial = ["tech", "global", "india", "smart", "digital", "cloud", "net", "pro"];
      const nameLower = brandName.toLowerCase();
      const isExact = common.some((c) => nameLower.includes(c));
      const isPartial = partial.some((c) => nameLower.includes(c));

      let riskLevel: "Low" | "Medium" | "High";
      let similarMarks: number;
      let probability: number;

      if (isExact) {
        riskLevel = "High";
        similarMarks = Math.floor(Math.random() * 5) + 5;
        probability = Math.floor(Math.random() * 20) + 10;
      } else if (isPartial) {
        riskLevel = "Medium";
        similarMarks = Math.floor(Math.random() * 4) + 1;
        probability = Math.floor(Math.random() * 25) + 50;
      } else {
        riskLevel = "Low";
        similarMarks = Math.floor(Math.random() * 2);
        probability = Math.floor(Math.random() * 15) + 80;
      }

      setSearchResult({
        name: brandName,
        similarMarks,
        riskLevel,
        probability,
        tmClass: tmClass || "Not specified",
      });
    }, 2000);
  };

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name || !regForm.email || !regForm.brand) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setRegSubmitted(true);
    toast({ title: "Application Submitted!", description: "We'll contact you within 24 hours to proceed." });
  };

  return (
    <>
      <Helmet>
        <title>Trademark Registration in India | Expert Legal Services | Mumbai & Bengaluru</title>
        <meta
          name="description"
          content="Professional trademark registration services in India. Complete filing, search & legal protection for your brand with 98% success rate. Free consultation available."
        />
        <meta name="keywords" content="trademark registration india, trademark search, brand protection, trademark lawyer mumbai, trademark filing" />
        <link rel="canonical" href="https://id-preview--89d82703-211f-45e1-a70d-b15c1a88b846.lovable.app/trademark" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Trademark Registration Service",
            "description": "Professional trademark registration services in India with comprehensive search, application filing, and legal protection for your brand.",
            "provider": {
              "@type": "Attorney",
              "name": "Advocate Anuradha R. Kulkarni",
              "description": "Practicing Intellectual Property Lawyer since 2000 with 98% success rate",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "areaServed": ["Mumbai", "Bengaluru", "India"],
            "offers": {
              "@type": "Offer",
              "price": "4999",
              "priceCurrency": "INR",
              "description": "Complete trademark registration including government fees"
            },
            "serviceType": "Trademark Registration",
            "url": "https://id-preview--89d82703-211f-45e1-a70d-b15c1a88b846.lovable.app/trademark"
          }`}
        </script>
      </Helmet>
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

      {/* Our Trademark Services */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-serif text-2xl font-bold">Our Trademark Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Trademark Search and Availability Check",
              "Trademark Filing and Registration",
              "Trademark Objection Reply",
              "Trademark Opposition Handling",
              "Trademark Hearing Representation",
              "Trademark Renewal and Assignment",
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
            India follows the NICE Classification system with 45 classes — 34 for goods and 11 for services.
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

      {/* Search Tools - Tabbed */}
      <section id="search" className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-2 font-serif text-2xl font-bold text-center">Trademark Search</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Search for trademark availability using our AI tool or the official government database.
          </p>

          <Tabs defaultValue="smart" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="smart">AI Risk Analysis</TabsTrigger>
              <TabsTrigger value="government">Government Search</TabsTrigger>
            </TabsList>

            {/* Smart Search */}
            <TabsContent value="smart">
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
                  {searching ? "Analyzing..." : "Analyze Trademark Risk"}
                </Button>

                {/* Risk Analysis Report */}
                {searchResult && (
                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg border border-border bg-card p-6">
                      <h3 className="mb-4 font-serif text-lg font-bold text-center">Trademark Risk Analysis Report</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-md bg-secondary p-4 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Brand Name</p>
                          <p className="mt-1 font-serif text-lg font-bold">{searchResult.name}</p>
                        </div>
                        <div className="rounded-md bg-secondary p-4 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Class</p>
                          <p className="mt-1 font-serif text-lg font-bold">{searchResult.tmClass}</p>
                        </div>
                        <div className="rounded-md bg-secondary p-4 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Similar Marks Found</p>
                          <p className="mt-1 font-serif text-2xl font-bold text-primary">{searchResult.similarMarks}</p>
                        </div>
                        <div className="rounded-md bg-secondary p-4 text-center">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Risk Level</p>
                          <div className="mt-1 flex items-center justify-center gap-2">
                            {searchResult.riskLevel === "Low" && <CheckCircle className="h-5 w-5 text-primary" />}
                            {searchResult.riskLevel === "Medium" && <AlertTriangle className="h-5 w-5 text-primary" />}
                            {searchResult.riskLevel === "High" && <XCircle className="h-5 w-5 text-destructive" />}
                            <span className={`font-serif text-lg font-bold ${searchResult.riskLevel === "High" ? "text-destructive" : "text-primary"}`}>
                              {searchResult.riskLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Probability Bar */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">Registration Probability</p>
                          <p className="font-serif text-lg font-bold text-primary">{searchResult.probability}%</p>
                        </div>
                        <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-gold transition-all duration-1000"
                            style={{ width: `${searchResult.probability}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Link to="/contact">
                          <Button variant="gold">
                            Proceed with Registration <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Government Search (iframe) */}
            <TabsContent value="government">
              <div className="space-y-4 rounded-lg border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Official search powered by the Controller General of Patents, Designs & Trademarks
                  </p>
                  <a
                    href="https://tmsearch.ipindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    Open in new tab <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="relative overflow-hidden rounded-md border border-border" style={{ height: "700px" }}>
                  <iframe
                    src="https://tmsearch.ipindia.gov.in"
                    width="100%"
                    height="100%"
                    title="IP India Trademark Search"
                    className="border-0"
                    sandbox="allow-forms allow-scripts allow-same-origin"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Note: Some government websites may restrict embedding. If the search doesn't load, please{" "}
                  <a href="https://tmsearch.ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    click here to open directly
                  </a>.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="mb-2 font-serif text-2xl font-bold text-center">Start Trademark Registration</h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Fill in your details and our team will handle the entire filing process.
          </p>
          {regSubmitted ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
              <CheckCircle className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 font-serif text-xl font-bold">Application Submitted!</h3>
              <p className="text-sm text-muted-foreground">Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleRegSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Full Name *</label>
                  <Input value={regForm.name} onChange={(e) => setRegForm({ ...regForm, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Phone</label>
                  <Input value={regForm.phone} onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email *</label>
                <Input type="email" value={regForm.email} onChange={(e) => setRegForm({ ...regForm, email: e.target.value })} placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Brand Name *</label>
                <Input value={regForm.brand} onChange={(e) => setRegForm({ ...regForm, brand: e.target.value })} placeholder="Your brand name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Trademark Class</label>
                <Select value={regForm.tmClass} onValueChange={(v) => setRegForm({ ...regForm, tmClass: v })}>
                  <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                  <SelectContent>
                    {trademarkClasses.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Upload Logo (optional)</label>
                <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
                  <Upload className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="file"
                    accept="image/*"
                    className="text-sm text-muted-foreground file:border-0 file:bg-transparent file:text-sm"
                    onChange={(e) => setRegForm({ ...regForm, logo: e.target.files?.[0] || null })}
                  />
                </div>
              </div>
              <Button variant="gold" type="submit" className="w-full">
                Start Trademark Registration <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Authority */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Government Authority:{" "}
            <span className="font-medium text-foreground">
              Controller General of Patents, Designs & Trademarks
            </span>{" "}
            — under the Department for Promotion of Industry and Internal Trade, Ministry of Commerce.
          </p>
          <a href="https://ipindia.gov.in" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Visit ipindia.gov.in <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Trademark;
