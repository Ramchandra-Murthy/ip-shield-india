import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Hash, Loader2 } from "lucide-react";

const calcNumerology = (name: string): number => {
  const sum = name.toUpperCase().replace(/[^A-Z]/g, "").split("").reduce((acc, ch) => {
    return acc + (ch.charCodeAt(0) - 64);
  }, 0);
  let result = sum;
  while (result > 9 && result !== 11 && result !== 22) {
    result = result.toString().split("").reduce((a, d) => a + parseInt(d), 0);
  }
  return result;
};

const calcDestiny = (dob: string): number => {
  const digits = dob.replace(/\D/g, "");
  let result = digits.split("").reduce((a, d) => a + parseInt(d), 0);
  while (result > 9 && result !== 11 && result !== 22) {
    result = result.toString().split("").reduce((a, d) => a + parseInt(d), 0);
  }
  return result;
};

const meanings: Record<number, string> = {
  1: "Leadership, independence, innovation. Excellent for startups and pioneering brands.",
  2: "Partnership, diplomacy, balance. Ideal for consulting and collaborative businesses.",
  3: "Creativity, communication, expression. Perfect for creative agencies and media companies.",
  4: "Stability, structure, discipline. Strong for manufacturing and real estate businesses.",
  5: "Change, freedom, adaptability. Great for travel, e-commerce, and dynamic ventures.",
  6: "Harmony, responsibility, service. Suited for healthcare, education, and community services.",
  7: "Analysis, wisdom, research. Ideal for tech companies and R&D focused businesses.",
  8: "Power, abundance, material success. Excellent for finance and corporate enterprises.",
  9: "Humanitarianism, completion, global reach. Perfect for NGOs and international brands.",
  11: "Intuition, spiritual insight, visionary. A master number — powerful for transformative brands.",
  22: "Master builder, large-scale achievement. A master number — ideal for large enterprises.",
};

const Numerology = () => {
  const [companyName, setCompanyName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<null | { bizNum: number; destinyNum: number; compatibility: number }>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!companyName.trim() || !founderName.trim() || !dob) return;
    setLoading(true);
    setTimeout(() => {
      const bizNum = calcNumerology(companyName);
      const destinyNum = calcDestiny(dob);
      const diff = Math.abs(bizNum - destinyNum);
      const compatibility = Math.max(40, 100 - diff * 8);
      setResult({ bizNum, destinyNum, compatibility });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Hash className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Business Name Numerology
            </h1>
            <p className="text-lg text-muted-foreground">
              Analyze the numerological vibration of your business name and its compatibility with your destiny.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Company Name *</label>
              <Input placeholder="Enter company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Founder Name *</label>
              <Input placeholder="Enter founder name" value={founderName} onChange={(e) => setFounderName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Founder Birth Date *</label>
              <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <Button variant="gold" className="w-full" onClick={handleAnalyze} disabled={loading || !companyName.trim() || !founderName.trim() || !dob}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Hash className="mr-2 h-4 w-4" />}
              {loading ? "Analyzing..." : "Analyze Numerology"}
            </Button>
          </div>

          {result && (
            <div className="mt-8 rounded-lg border border-border bg-card p-6 space-y-6">
              <h2 className="font-serif text-xl font-bold text-center">Numerology Analysis Report</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-md bg-secondary p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Business Number</p>
                  <p className="mt-1 font-serif text-3xl font-bold text-primary">{result.bizNum}</p>
                </div>
                <div className="rounded-md bg-secondary p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Destiny Number</p>
                  <p className="mt-1 font-serif text-3xl font-bold text-primary">{result.destinyNum}</p>
                </div>
                <div className="rounded-md bg-secondary p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Compatibility</p>
                  <p className="mt-1 font-serif text-3xl font-bold text-primary">{result.compatibility}%</p>
                </div>
              </div>
              <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-gold transition-all duration-1000"
                  style={{ width: `${result.compatibility}%` }}
                />
              </div>
              <div className="space-y-3">
                <div className="rounded-md bg-secondary p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Business Name Vibration ({result.bizNum})</p>
                  <p className="text-sm">{meanings[result.bizNum] || "A unique number with special qualities."}</p>
                </div>
                <div className="rounded-md bg-secondary p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Destiny Number ({result.destinyNum})</p>
                  <p className="text-sm">{meanings[result.destinyNum] || "A unique number with special qualities."}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Numerology;
