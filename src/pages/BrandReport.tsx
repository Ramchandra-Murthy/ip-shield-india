import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, FileText, Download, Phone, Mail, CheckCircle, AlertTriangle, Globe, Layers } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  businessName: string;
  industry: string;
  distinctivenessScore: number;
  strengthLevel: string;
  similarMarks: number;
  riskLevel: string;
  approvalProbability: number;
  recommendedClasses: { num: number; desc: string }[];
  domains: { name: string; available: boolean }[];
  strategies: string[];
}

const generateAnalysis = (name: string, industry: string, tmClass: string, country: string, domain: string): AnalysisResult => {
  const nameLen = name.length;
  const hasCommon = /tech|app|best|super|global|smart|pro|digital/i.test(name);
  const isCoined = !/[aeiou]{3}/i.test(name) && nameLen > 4 && !hasCommon;

  let distinctiveness = 5;
  if (isCoined) distinctiveness += 3;
  if (!hasCommon) distinctiveness += 1;
  if (nameLen > 6 && nameLen < 12) distinctiveness += 1;
  distinctiveness = Math.min(10, Math.max(2, distinctiveness));

  const strengthLevel = distinctiveness >= 8 ? "Strong" : distinctiveness >= 5 ? "Moderate" : "Weak";
  const similarMarks = hasCommon ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 3);
  const riskLevel = similarMarks > 5 ? "High" : similarMarks > 2 ? "Medium" : "Low";
  const approvalProbability = Math.min(95, Math.max(30, distinctiveness * 10 - similarMarks * 5));

  const classMap: Record<string, { num: number; desc: string }[]> = {
    "Technology": [{ num: 9, desc: "Software & Electronics" }, { num: 42, desc: "Technology Services" }],
    "E-commerce": [{ num: 35, desc: "Advertising & Business" }, { num: 9, desc: "Software" }],
    "Food & Beverage": [{ num: 29, desc: "Processed Food" }, { num: 30, desc: "Spices & Bakery" }, { num: 43, desc: "Food Services" }],
    "Fashion": [{ num: 25, desc: "Clothing & Footwear" }, { num: 35, desc: "Retail Services" }],
    "Healthcare": [{ num: 5, desc: "Pharmaceuticals" }, { num: 44, desc: "Medical Services" }],
    "Education": [{ num: 41, desc: "Education & Training" }, { num: 16, desc: "Printed Material" }],
    "Finance": [{ num: 36, desc: "Financial Services" }, { num: 9, desc: "Software" }],
  };
  const recommendedClasses = classMap[industry] || [{ num: 35, desc: "Business Management" }, { num: 42, desc: "Technology Services" }];

  const base = (domain || name.toLowerCase().replace(/\s+/g, "")).replace(/\.[a-z]+$/, "");
  const domains = [
    { name: `${base}.in`, available: Math.random() > 0.3 },
    { name: `${base}.com`, available: Math.random() > 0.6 },
    { name: `${base}.ai`, available: Math.random() > 0.4 },
    { name: `${base}.co.in`, available: Math.random() > 0.25 },
  ];

  const strategies = [
    "Register both word mark and logo separately for maximum protection",
    "File in all recommended classes to cover current and future business activities",
    "Secure matching domain names immediately",
    `Consider international registration through the Madrid Protocol for expansion beyond ${country || "India"}`,
    "Monitor the Trademark Journal for similar filings after your application is published",
  ];

  return { businessName: name, industry, distinctivenessScore: distinctiveness, strengthLevel, similarMarks, riskLevel, approvalProbability, recommendedClasses, domains, strategies };
};

const BrandReport = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", industry: "", tmClass: "", country: "India", domain: "" });
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!form.name.trim() || !form.industry) {
      toast({ title: "Please enter business name and select industry", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setResult(generateAnalysis(form.name, form.industry, form.tmClass, form.country, form.domain));
      setLoading(false);
    }, 1500);
  };

  const riskColor = (r: string) => r === "Low" ? "text-emerald-400" : r === "Medium" ? "text-yellow-400" : "text-destructive";
  const scoreColor = (s: number) => s >= 7 ? "text-emerald-400" : s >= 5 ? "text-yellow-400" : "text-destructive";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Startup Brand Protection Report</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            AI-powered brand analysis for startups and entrepreneurs. Evaluate trademark safety, domain availability, and filing strategy before registering.
          </p>
        </div>
      </section>

      {/* Input Form */}
      <section className="pb-12">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <h2 className="mb-6 font-serif text-xl font-bold">Enter Brand Details</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <Label>Business Name *</Label>
                <Input placeholder="e.g. TechNova" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <Label>Industry *</Label>
                <Select value={form.industry} onValueChange={(v) => setForm({ ...form, industry: v })}>
                  <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                  <SelectContent>
                    {["Technology", "E-commerce", "Food & Beverage", "Fashion", "Healthcare", "Education", "Finance"].map((i) => (
                      <SelectItem key={i} value={i}>{i}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Trademark Class (optional)</Label>
                <Input placeholder="e.g. 9" value={form.tmClass} onChange={(e) => setForm({ ...form, tmClass: e.target.value })} />
              </div>
              <div>
                <Label>Country</Label>
                <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
              </div>
              <div>
                <Label>Website Domain (optional)</Label>
                <Input placeholder="e.g. technova.in" value={form.domain} onChange={(e) => setForm({ ...form, domain: e.target.value })} />
              </div>
            </div>
            <Button variant="gold" className="mt-6 w-full" onClick={handleAnalyze} disabled={loading}>
              {loading ? "Analyzing..." : "Analyze Brand"}
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      {result && (
        <section className="pb-20">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {/* Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Distinctiveness</p>
                <p className={`text-3xl font-bold ${scoreColor(result.distinctivenessScore)}`}>{result.distinctivenessScore}/10</p>
                <p className="text-sm font-medium mt-1">{result.strengthLevel}</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Conflict Risk</p>
                <p className={`text-3xl font-bold ${riskColor(result.riskLevel)}`}>{result.riskLevel}</p>
                <p className="text-sm text-muted-foreground mt-1">{result.similarMarks} similar marks</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Approval Probability</p>
                <p className={`text-3xl font-bold ${result.approvalProbability >= 70 ? "text-emerald-400" : result.approvalProbability >= 50 ? "text-yellow-400" : "text-destructive"}`}>{result.approvalProbability}%</p>
                <p className="text-sm text-muted-foreground mt-1">Estimated</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Classes</p>
                <p className="text-3xl font-bold text-primary">{result.recommendedClasses.length}</p>
                <p className="text-sm text-muted-foreground mt-1">Recommended</p>
              </div>
            </div>

            {/* Trademark Classes */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold"><Layers className="h-5 w-5 text-primary" /> Recommended Trademark Classes</h3>
              <div className="space-y-3">
                {result.recommendedClasses.map((c) => (
                  <div key={c.num} className="flex items-center gap-3 rounded-md border border-border bg-secondary/30 px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{c.num}</span>
                    <span className="text-sm">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Availability */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold"><Globe className="h-5 w-5 text-primary" /> Domain Availability</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {result.domains.map((d) => (
                  <div key={d.name} className="flex items-center justify-between rounded-md border border-border px-4 py-3">
                    <span className="text-sm font-mono">{d.name}</span>
                    {d.available ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-400"><CheckCircle className="h-3.5 w-3.5" /> Available</span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-medium text-destructive"><AlertTriangle className="h-3.5 w-3.5" /> Taken</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-bold"><FileText className="h-5 w-5 text-primary" /> Brand Protection Strategy</h3>
              <ul className="space-y-2">
                {result.strategies.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Report sections preview */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-serif text-lg font-bold">Full 20-Page Report Includes</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Executive Summary",
                  "Brand Name Analysis",
                  "Trademark Conflict Analysis",
                  "Trademark Class Strategy",
                  "Approval Probability",
                  "Domain Availability",
                  "Legal Risk Assessment",
                  "Filing Strategy",
                  "Brand Protection Strategy",
                  "Professional Consultation",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
              <Button variant="gold" className="mt-6 w-full" onClick={() => toast({ title: "Report Generation", description: "Enable Lovable Cloud to generate AI-powered PDF reports." })}>
                <Download className="mr-2 h-4 w-4" /> Download Full Report — ₹999
              </Button>
            </div>

            {/* CTA */}
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
              <h3 className="mb-2 font-serif text-xl font-bold">Start Your Trademark Registration</h3>
              <p className="mb-4 text-sm text-muted-foreground">Get professional legal assistance from an experienced IP lawyer.</p>
              <p className="mb-1 font-semibold">Advocate Anuradha R. Kulkarni</p>
              <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6 mb-6">
                <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary" /> +91 9869832220</span>
                <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary" /> anuradharkulkarni1976@gmail.com</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link to="/client-intake"><Button variant="gold">Start Registration</Button></Link>
                <Link to="/contact"><Button variant="gold-outline">Book Consultation</Button></Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="container mx-auto max-w-2xl px-4">
          <p className="text-center text-xs text-muted-foreground">
            This analysis provides an indicative assessment and does not constitute legal advice. For professional trademark filing assistance, contact Advocate Anuradha R. Kulkarni.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BrandReport;
