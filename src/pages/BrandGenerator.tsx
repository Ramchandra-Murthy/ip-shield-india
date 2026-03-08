import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Sparkles, CheckCircle, AlertTriangle, XCircle, Loader2, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const industries = ["Technology", "Fashion", "Food & Beverage", "Healthcare", "Finance", "Education", "Real Estate", "Entertainment", "E-commerce", "Consulting", "Legal", "Agriculture", "Automotive", "Cosmetics", "Pharmaceuticals"];
const styles = ["Modern", "Premium", "Tech", "Creative", "Minimal", "Bold"];

type BrandSuggestion = {
  name: string;
  numerology: number;
  riskLevel: "Low" | "Medium" | "High";
  safetyScore: number;
  domainHint: string;
  suggestedClass: number;
};

const distinctiveWords = [
  "Nova", "Flux", "Aero", "Lumin", "Velt", "Zeno", "Nexo", "Orbi", "Axio", "Kova",
  "Aurum", "Elara", "Vesta", "Crest", "Apex", "Byte", "Sync", "Quantum", "Neuro", "Pixel",
  "Muse", "Bloom", "Vivid", "Prism", "Spark", "Echo", "Blaze", "Titan", "Surge", "Vertex",
];

const industryClass: Record<string, number> = {
  Technology: 9, Fashion: 25, "Food & Beverage": 43, Healthcare: 44, Finance: 36,
  Education: 41, "Real Estate": 36, Entertainment: 41, "E-commerce": 35, Consulting: 35,
  Legal: 45, Agriculture: 31, Automotive: 12, Cosmetics: 3, Pharmaceuticals: 5,
};

const industrySuffixes: Record<string, string[]> = {
  Technology: ["Tech", "Labs", "Systems", "AI", "Digital"],
  Fashion: ["Style", "Wear", "Co", "Studio", "Luxe"],
  "Food & Beverage": ["Bites", "Kitchen", "Feast", "Taste", "Brew"],
  Healthcare: ["Health", "Care", "Med", "Vita", "Life"],
  Finance: ["Fin", "Capital", "Wealth", "Pay", "Trust"],
  Education: ["Learn", "Academy", "Edu", "Mind", "Bright"],
  "Real Estate": ["Homes", "Realty", "Estate", "Nest", "Haven"],
  Entertainment: ["Play", "Show", "Media", "Flix", "Stage"],
  "E-commerce": ["Mart", "Shop", "Store", "Cart", "Deal"],
  Consulting: ["Consult", "Advisory", "Group", "Insights", "Partners"],
  Legal: ["Law", "Legal", "Justice", "Lex", "Juris"],
  Agriculture: ["Agri", "Farm", "Green", "Harvest", "Grow"],
  Automotive: ["Motors", "Drive", "Auto", "Wheels", "Ride"],
  Cosmetics: ["Glow", "Beauty", "Skin", "Radiance", "Pure"],
  Pharmaceuticals: ["Pharma", "Med", "Cure", "Heal", "Bio"],
};

const generateNames = (industry: string, keywords: string, style: string): BrandSuggestion[] => {
  const stylePrefixes: Record<string, string[]> = {
    Modern: ["Nova", "Flux", "Aero", "Lumin", "Velt", "Zeno", "Nexo", "Orbi", "Axio", "Kova"],
    Premium: ["Aurum", "Regal", "Prestige", "Elara", "Vesta", "Luxe", "Crest", "Apex", "Opulen", "Sovereign"],
    Tech: ["Byte", "Sync", "Quantum", "Neuro", "Pixel", "Logic", "Digi", "Algo", "Cyber", "Nano"],
    Creative: ["Muse", "Bloom", "Vivid", "Prism", "Canvas", "Spark", "Echo", "Hue", "Craft", "Story"],
    Minimal: ["One", "Pure", "Bare", "Clear", "Simple", "Base", "Core", "Edge", "Lean", "Neat"],
    Bold: ["Strike", "Blaze", "Titan", "Force", "Thunder", "Surge", "Impact", "Vertex", "Maverick", "Forge"],
  };

  const pList = stylePrefixes[style] || stylePrefixes.Modern;
  const sList = industrySuffixes[industry] || ["Co", "Hub", "Pro", "Plus", "One"];
  const keyword = keywords.split(/\s+/)[0] || "";
  const cls = industryClass[industry] || 35;

  const results: BrandSuggestion[] = [];
  const domainExts = [".com", ".in", ".co", ".ai", ".io"];

  for (let i = 0; i < 10; i++) {
    const prefix = pList[i % pList.length];
    const suffix = sList[i % sList.length];
    let name: string;

    if (i % 4 === 0) name = `${prefix}${suffix}`;
    else if (i % 4 === 1) name = keyword ? `${keyword.charAt(0).toUpperCase() + keyword.slice(1)}${prefix}` : `${prefix}${suffix}`;
    else if (i % 4 === 2) name = `${prefix} ${suffix}`;
    else name = keyword ? `${prefix}${keyword.charAt(0).toUpperCase() + keyword.slice(1)}` : prefix + suffix;

    if (name.length > 20) name = name.slice(0, 18);

    const numSum = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const numerology = ((numSum - 1) % 9) + 1;

    // Safety score based on distinctiveness
    const isCoined = !["best", "good", "great", "top", "super", "new", "fresh"].some((w) => name.toLowerCase().includes(w));
    const isUnique = distinctiveWords.some((w) => name.includes(w));
    const lengthScore = name.replace(/\s/g, "").length >= 5 ? 10 : 0;
    const baseScore = 50 + (isCoined ? 20 : 0) + (isUnique ? 15 : 0) + lengthScore + ((i * 3) % 10);
    const safetyScore = Math.min(95, Math.max(55, baseScore));

    const riskLevel: "Low" | "Medium" | "High" = safetyScore >= 80 ? "Low" : safetyScore >= 65 ? "Medium" : "High";

    results.push({
      name,
      numerology,
      riskLevel,
      safetyScore,
      domainHint: `${name.toLowerCase().replace(/\s+/g, "")}${domainExts[i % domainExts.length]}`,
      suggestedClass: cls,
    });
  }

  return results.sort((a, b) => b.safetyScore - a.safetyScore);
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

  const getSafetyColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 65) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Startup Brand Name Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate unique brand names with <strong>Trademark Safety Scores</strong>, numerology analysis, and domain availability — designed for startups and entrepreneurs.
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
              <Input placeholder="e.g., future, AI, innovation, trust" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
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
            <div className="mt-8 space-y-4">
              <h2 className="font-serif text-xl font-bold text-center mb-2">Generated Brand Names</h2>
              <p className="text-center text-sm text-muted-foreground mb-4">Sorted by trademark safety score — higher is safer to register</p>

              {results.map((r, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-serif text-lg font-bold">{r.name}</p>
                        {r.safetyScore >= 80 && <CheckCircle className="h-4 w-4 text-green-600" />}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.domainHint} — likely available</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="text-center">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Safety</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className={`h-3 w-3 ${getSafetyColor(r.safetyScore)}`} />
                          <span className={`text-lg font-bold ${getSafetyColor(r.safetyScore)}`}>{r.safetyScore}%</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Risk</p>
                        <div className="flex items-center gap-1">
                          {r.riskLevel === "Low" && <CheckCircle className="h-3 w-3 text-green-600" />}
                          {r.riskLevel === "Medium" && <AlertTriangle className="h-3 w-3 text-yellow-600" />}
                          {r.riskLevel === "High" && <XCircle className="h-3 w-3 text-red-600" />}
                          <span className="text-sm font-semibold">{r.riskLevel}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Class</p>
                        <p className="font-serif font-bold text-primary">{r.suggestedClass}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Numero</p>
                        <p className="font-serif font-bold text-primary">{r.numerology}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center mt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Found a name you like? Check its availability and protect it now.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/trademark">
                    <Button variant="gold"><Shield className="mr-2 h-4 w-4" /> Check Trademark Availability</Button>
                  </Link>
                  <Link to="/client-intake">
                    <Button variant="gold-outline">Start Registration <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Contact Advocate Anuradha R. Kulkarni for professional trademark filing: <a href="tel:+919869832220" className="text-primary underline">+91 9869832220</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BrandGenerator;
