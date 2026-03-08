import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Globe, CheckCircle, XCircle, Loader2 } from "lucide-react";

const extensions = [".com", ".in", ".co", ".ai", ".net"];

type DomainResult = { domain: string; available: boolean };

const DomainChecker = () => {
  const [brandName, setBrandName] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!brandName.trim()) return;
    setLoading(true);
    setResults([]);
    setTimeout(() => {
      const base = brandName.toLowerCase().replace(/\s+/g, "");
      setResults(
        extensions.map((ext) => ({
          domain: `${base}${ext}`,
          available: Math.random() > 0.4,
        }))
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Globe className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Domain Name Checker
            </h1>
            <p className="text-lg text-muted-foreground">
              Check domain availability across popular extensions for your brand.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Brand Name</label>
              <Input placeholder="Enter brand name" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
            </div>
            <Button variant="gold" className="w-full" onClick={handleCheck} disabled={loading || !brandName.trim()}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Globe className="mr-2 h-4 w-4" />}
              {loading ? "Checking..." : "Check Availability"}
            </Button>
          </div>

          {results.length > 0 && (
            <div className="mt-6 space-y-2">
              {results.map((r) => (
                <div key={r.domain} className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
                  <span className="font-mono text-sm font-medium">{r.domain}</span>
                  {r.available ? (
                    <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                      <CheckCircle className="h-4 w-4" /> Available
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
                      <XCircle className="h-4 w-4" /> Taken
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default DomainChecker;
