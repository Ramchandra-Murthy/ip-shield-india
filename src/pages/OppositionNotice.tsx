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
import { FileText, Download, ArrowRight, Gavel } from "lucide-react";
import { Link } from "react-router-dom";

const groundOptions = [
  { value: "similarity", label: "Similarity with existing trademark" },
  { value: "confusion", label: "Likelihood of confusion" },
  { value: "distinctiveness", label: "Lack of distinctiveness" },
  { value: "bad_faith", label: "Bad faith adoption" },
  { value: "multiple", label: "Multiple grounds" },
];

const generateNotice = (
  applicantName: string,
  opponentName: string,
  appNumber: string,
  trademarkName: string,
  tmClass: string,
  journalDate: string,
  grounds: string
) => {
  const groundLabel = groundOptions.find((g) => g.value === grounds)?.label || grounds;

  let groundsParagraphs = "";
  if (grounds === "similarity" || grounds === "multiple") {
    groundsParagraphs += `\n1. The impugned mark "${trademarkName}" is identical or deceptively similar to the Opponent's prior trademark, which has been in use and/or registered prior to the filing date of the impugned application.`;
  }
  if (grounds === "confusion" || grounds === "multiple") {
    groundsParagraphs += `\n${grounds === "multiple" ? "2" : "1"}. The registration of the mark "${trademarkName}" is likely to cause confusion among consumers and the trade, and is likely to damage the goodwill and reputation associated with the Opponent's trademark.`;
  }
  if (grounds === "distinctiveness" || grounds === "multiple") {
    groundsParagraphs += `\n${grounds === "multiple" ? "3" : "1"}. The mark "${trademarkName}" lacks distinctiveness under Section 9 of the Trade Marks Act, 1999 and is not capable of distinguishing the goods/services of the Applicant from those of others.`;
  }
  if (grounds === "bad_faith" || grounds === "multiple") {
    groundsParagraphs += `\n${grounds === "multiple" ? "4" : "1"}. The adoption of the mark "${trademarkName}" by the Applicant appears to be in bad faith, with the intention to trade upon the goodwill and reputation of the Opponent's established mark.`;
  }

  return `NOTICE OF OPPOSITION
${"=".repeat(50)}

Before the Registrar of Trade Marks
Office of the Controller General of Patents, Designs & Trade Marks

In the matter of Trademark Application No: ${appNumber}

Trademark: ${trademarkName}
Class: ${tmClass}
Date of Journal Publication: ${journalDate}

Opponent: ${opponentName}
Applicant: ${applicantName}

${"=".repeat(50)}

To,
The Registrar of Trade Marks

The Opponent, ${opponentName}, hereby gives notice of opposition to the registration of Trademark Application No. ${appNumber} for the mark "${trademarkName}" in Class ${tmClass}, published in the Trade Marks Journal dated ${journalDate}.

GROUNDS OF OPPOSITION:
${groundsParagraphs}

PRAYER:

In view of the above grounds, the Opponent respectfully requests that:

1. The application for registration of the mark "${trademarkName}" bearing Application No. ${appNumber} be REFUSED.
2. Costs of these proceedings be awarded to the Opponent.
3. Any other relief as the Hon'ble Registrar may deem fit and proper.

The Opponent reserves the right to adduce further evidence and submit additional grounds at the appropriate stage of these proceedings.

Submitted before the Registrar of Trade Marks.

Date: ${new Date().toLocaleDateString("en-IN")}

_______________________________
${opponentName}
(Opponent / Authorized Agent)

${"=".repeat(50)}
DISCLAIMER: This is a draft notice generated for reference purposes only.
For professional opposition filing and representation,
please contact Advocate Anuradha R. Kulkarni.
Phone: +91 9869832220 | Email: anuradharkulkarni1976@gmail.com
${"=".repeat(50)}`;
};

const OppositionNotice = () => {
  const [applicantName, setApplicantName] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [appNumber, setAppNumber] = useState("");
  const [trademarkName, setTrademarkName] = useState("");
  const [tmClass, setTmClass] = useState("");
  const [journalDate, setJournalDate] = useState("");
  const [grounds, setGrounds] = useState("");
  const [generated, setGenerated] = useState("");

  const canGenerate = applicantName.trim() && opponentName.trim() && appNumber.trim() && trademarkName.trim() && tmClass.trim() && grounds;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setGenerated(generateNotice(applicantName.trim(), opponentName.trim(), appNumber.trim(), trademarkName.trim(), tmClass.trim(), journalDate.trim() || "____", grounds));
  };

  const handleDownload = () => {
    const blob = new Blob([generated], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Opposition_Notice_${appNumber.trim() || "draft"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Gavel className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Opposition Notice Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              A Trademark Opposition Notice is filed when someone believes a published trademark should not be registered. Opposition must be filed within 4 months of publication in the Trademark Journal as per the Trade Marks Act, 1999.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Applicant Name (whose mark you oppose) *</label>
              <Input placeholder="Name of the trademark applicant" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Opponent Name (your name) *</label>
              <Input placeholder="Your name / company name" value={opponentName} onChange={(e) => setOpponentName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Application Number *</label>
              <Input placeholder="e.g., 5423211" value={appNumber} onChange={(e) => setAppNumber(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Name *</label>
              <Input placeholder="The mark being opposed" value={trademarkName} onChange={(e) => setTrademarkName(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Trademark Class *</label>
                <Input placeholder="e.g., 9" value={tmClass} onChange={(e) => setTmClass(e.target.value)} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Journal Publication Date</label>
                <Input type="date" value={journalDate} onChange={(e) => setJournalDate(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Grounds of Opposition *</label>
              <Select value={grounds} onValueChange={setGrounds}>
                <SelectTrigger><SelectValue placeholder="Select grounds" /></SelectTrigger>
                <SelectContent>
                  {groundOptions.map((g) => (
                    <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="gold" className="w-full" onClick={handleGenerate} disabled={!canGenerate}>
              <Gavel className="mr-2 h-4 w-4" /> Generate Opposition Notice
            </Button>
          </div>

          {generated && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold">Generated Opposition Notice</h2>
                <Button variant="gold-outline" size="sm" onClick={handleDownload}>
                  <Download className="mr-1 h-4 w-4" /> Download
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 overflow-auto max-h-[500px]">
                <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">{generated}</pre>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  This is a draft for reference only. For professional opposition filing and representation before the Trademark Registry, consult a qualified IP lawyer.
                </p>
                <Link to="/contact">
                  <Button variant="gold">Contact Advocate Anuradha R. Kulkarni <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default OppositionNotice;
