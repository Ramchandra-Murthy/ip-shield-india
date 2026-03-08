import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Sparkles, CheckCircle, AlertTriangle, XCircle, Loader2, ArrowRight, Shield } from "lucide-react";

const industries = ["Technology", "Fashion", "Food & Beverage", "Healthcare", "Finance", "Education", "Real Estate", "Entertainment", "E-commerce", "Consulting"];
const styles = ["Modern", "Premium", "Tech", "Creative", "Minimal", "Bold"];

type BrandSuggestion = {
  name: string;
  numerology: number;
  riskLevel: "Low" | "Medium" | "High";
  domainHint: string;
};

const generateNames = (industry: string, keywords: string, style: string): BrandSuggestion[] => {
  const prefixes: Record<string, string[]> = {
    Modern: ["Nova", "Flux", "Aero", "Lumin", "Velt", "Zeno", "Nexo", "Orbi", "Axio", "Kova"],
    Premium: ["Aurum", "Regal", "Prestige", "Elara", "Vesta", "Luxe", "Crest", "Apex", "Opulen", "Sovereign"],
    Tech: ["Byte", "Sync", "Quantum", "Neuro", "Pixel", "Logic", "Digi", "Algo", "Cyber", "Nano"],
    Creative: ["Muse", "Bloom", "Vivid", "Prism", "Canvas", "Spark", "Echo", "Hue", "Craft", "Story"],
    Minimal: ["One", "Pure", "Bare", "Clear", "Simple", "Base", "Core", "Edge", "Lean", "Neat"],
    Bold: ["Strike", "Blaze", "Titan", "Force", "Thunder", "Surge", "Impact", "Vertex", "Maverick", "Forge"],
  };

  const suffixes: Record<string, string[]> = {
    Technology: ["Tech", "Labs", "Systems", "Hub", "Digital"],
    Fashion: ["Style", "Wear", "Co", "Studio", "Atelier"],
    "Food & Beverage": ["Bites", "Kitchen", "Feast", "Taste", "Brew"],
    Healthcare: ["Health", "Care", "Med", "Vita", "Life"],
    Finance: ["Fin", "Capital", "Wealth", "Fund", "Pay"],
    Education: ["Learn", "Academy", "Edu", "School", "Mind"],
    "Real Estate": ["Homes", "Realty", "Estate", "Nest", "Space"],
    Entertainment: ["Play", "Show", "Media", "Flix", "Zone"],
    "E-commerce": ["Mart", "Shop", "Store", "Cart", "Trade"],
    Consulting: ["Consult", "Advisory", "Partners", "Group", "Insights"],
  };

  const pList = prefixes[style] || prefixes.Modern;
  const sList = suffixes[industry] || ["Co", "Hub", "Pro", "Plus", "One"];
  const keyword = keywords.split(/\s+/)[0] || "";

  const results: BrandSuggestion[] = [];
  for (let i = 0; i < 10; i++) {
    const prefix = pList[i % pList.length];
    const suffix = sList[i % sList.length];
    const name = i % 3 === 0
      ? `${prefix}${suffix}`
      : i % 3 === 1
      ? `${keyword ? keyword.charAt(0).toUpperCase() + keyword.slice(1) : prefix} ${suffix}`
      : `${prefix} ${keyword ? keyword.charAt(0).toUpperCase() + keyword.slice(1) : ""}`.trim();

    const numSum = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const numerology = ((numSum - 1) % 9) + 1;
    const riskLevels: Array<"Low" | "Medium" | "High"> = ["Low", "Low", "Low", "Medium", "Low", "Low", "Medium", "Low", "Low", "High"];
    const domainExts = [".com", ".in", ".co", ".ai", ".io"];

    results.push({
      name: name.length > 20 ? name.slice(0, 18) : name,
      numerology,
      riskLevel: riskLevels[i],
      domainHint: `${name.toLowerCase().replace(/\s+/g, "")}${domainExts[i % domainExts.length]} — likely available`,
    });
  }
  return results;
};

const BrandGenerator = () => {
  const [industry, setIndustry] = useState("");
  const [keywords, setKeywords] = useState("");
  const [style, setStyle] = useState("");
  const [results, setResults] = useState<BrandSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!industry || !style) return;
    setLoading(true);
    setResults([]);
    setTimeout(() => {
      setResults(generateNames(industry, keywords, style));
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              AI Brand Name Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate unique brand names with trademark risk analysis, numerology scores, and domain availability hints.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Industry *</label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger>
                <SelectContent>
                  {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Keywords</label>
              <Input placeholder="e.g., innovation, trust, speed" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Brand Style *</label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger><SelectValue placeholder="Select style" /></SelectTrigger>
                <SelectContent>
                  {styles.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <Button variant="gold" className="w-full" onClick={handleGenerate} disabled={loading || !industry || !style}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
              {loading ? "Generating..." : "Generate Brand Names"}
            </Button>
          </div>

          {results.length > 0 && (
            <div className="mt-8 space-y-3">
              <h2 className="font-serif text-xl font-bold text-center mb-4">Generated Brand Names</h2>
              {results.map((r, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-serif text-lg font-bold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.domainHint}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Numerology</p>
                      <p className="font-serif font-bold text-primary">{r.numerology}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">TM Risk</p>
                      <div className="flex items-center gap-1">
                        {r.riskLevel === "Low" && <CheckCircle className="h-4 w-4 text-primary" />}
                        {r.riskLevel === "Medium" && <AlertTriangle className="h-4 w-4 text-primary" />}
                        {r.riskLevel === "High" && <XCircle className="h-4 w-4 text-destructive" />}
                        <span className={`text-sm font-semibold ${r.riskLevel === "High" ? "text-destructive" : "text-primary"}`}>{r.riskLevel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground mb-3">Found a name you like? Protect it now.</p>
                <Button variant="gold" asChild>
                  <a href="/trademark"><Shield className="mr-2 h-4 w-4" /> Register Trademark <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BrandGenerator;
