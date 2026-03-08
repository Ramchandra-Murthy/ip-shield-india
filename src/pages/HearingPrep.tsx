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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FileText, Download, ArrowRight, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const HearingPrep = () => {
  const [appNumber, setAppNumber] = useState("");
  const [trademarkName, setTrademarkName] = useState("");
  const [tmClass, setTmClass] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [hearingDate, setHearingDate] = useState("");
  const [section9, setSection9] = useState(false);
  const [section11, setSection11] = useState(false);
  const [distinctivenessArg, setDistinctivenessArg] = useState("");
  const [honestAdoption, setHonestAdoption] = useState("");
  const [priorUse, setPriorUse] = useState("");
  const [differenceArg, setDifferenceArg] = useState("");
  const [generated, setGenerated] = useState("");

  const canGenerate = appNumber.trim() && trademarkName.trim() && applicantName.trim() && (section9 || section11);

  const handleGenerate = () => {
    if (!canGenerate) return;

    const grounds = [
      section9 ? "Section 9 – Lack of distinctiveness" : "",
      section11 ? "Section 11 – Similarity with earlier trademarks" : "",
    ].filter(Boolean).join("\n  ");

    const text = `TRADEMARK HEARING PREPARATION TEMPLATE
${"=".repeat(50)}

Case Details:

  Trademark Application Number: ${appNumber}
  Trademark Name: ${trademarkName}
  Trademark Class: ${tmClass || "____"}
  Applicant Name: ${applicantName}
  Date of Hearing: ${hearingDate || "____"}

${"=".repeat(50)}

GROUNDS OF OBJECTION:

  ${grounds}

${"=".repeat(50)}

ARGUMENTS FOR HEARING:

1. DISTINCTIVENESS OF THE MARK

${distinctivenessArg.trim() || `The applicant submits that the mark "${trademarkName}" is inherently distinctive and capable of distinguishing the applicant's goods/services from those of other traders. The mark is a coined/invented term with no descriptive meaning in relation to the goods/services in Class ${tmClass || "____"}.`}

2. HONEST ADOPTION

${honestAdoption.trim() || `The mark "${trademarkName}" was adopted honestly and in good faith by the applicant. The mark was independently conceived without any intention to copy or imitate any existing trademark. The applicant has been using this mark genuinely in connection with their business activities.`}

3. PRIOR USE

${priorUse.trim() || `The applicant has been using the mark "${trademarkName}" in commerce prior to the date of filing. Evidence of use including invoices, advertisements, website screenshots, and business correspondence can be presented to demonstrate continuous and uninterrupted use.`}

4. DIFFERENCE FROM CITED MARKS

${differenceArg.trim() || `The applicant submits that the applied mark "${trademarkName}" is visually, phonetically, and conceptually different from any cited marks. When compared as a whole (as per established legal principles), the overall commercial impression created by the marks is entirely distinct. There is no likelihood of confusion among consumers.`}

${"=".repeat(50)}

DOCUMENTS TO PRESENT AT HEARING:

  □ Trademark application copy
  □ Examination report and objection details
  □ Previous written reply to examination report
  □ Evidence of use:
    - Invoices / sales receipts
    - Advertising materials
    - Website screenshots with dates
    - Product packaging / labels
    - Business correspondence
  □ Affidavit of use
  □ Legal precedents and case law references
  □ Power of attorney (if represented by agent)

${"=".repeat(50)}

FINAL REQUEST:

The applicant respectfully requests the Hon'ble Registrar to:

1. Accept the trademark application No. ${appNumber} for the mark "${trademarkName}".
2. Waive the objections raised in the examination report.
3. Allow the mark to proceed to publication in the Trademark Journal.
4. Pass any other order as deemed fit and proper.

Respectfully submitted,

${applicantName}
(Applicant / Authorized Agent)

Date: ${hearingDate || new Date().toLocaleDateString("en-IN")}

${"=".repeat(50)}
DISCLAIMER: This is a hearing preparation template for reference only.
Professional legal representation is strongly recommended for
trademark hearings before the Registrar of Trade Marks.

For professional representation, contact:
Advocate Anuradha R. Kulkarni
Phone: +91 9869832220 | Email: anuradharkulkarni1976@gmail.com
${"=".repeat(50)}`;

    setGenerated(text);
  };

  const handleDownload = () => {
    const blob = new Blob([generated], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Hearing_Prep_${appNumber.trim() || "draft"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Scale className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Hearing Preparation Template
            </h1>
            <p className="text-lg text-muted-foreground">
              If objections are not resolved through written replies, the Trademark Registry may schedule a hearing before the Registrar. Use this tool to prepare your hearing summary document.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Application Number *</label>
              <Input placeholder="e.g., 5423211" value={appNumber} onChange={(e) => setAppNumber(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Name *</label>
              <Input placeholder="Your trademark" value={trademarkName} onChange={(e) => setTrademarkName(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Trademark Class</label>
                <Input placeholder="e.g., 9" value={tmClass} onChange={(e) => setTmClass(e.target.value)} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Hearing Date</label>
                <Input type="date" value={hearingDate} onChange={(e) => setHearingDate(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Applicant Name *</label>
              <Input placeholder="Full legal name" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Grounds of Objection *</label>
              <div className="flex items-center gap-2">
                <Checkbox id="s9" checked={section9} onCheckedChange={(v) => setSection9(!!v)} />
                <label htmlFor="s9" className="text-sm">Section 9 – Lack of distinctiveness</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="s11" checked={section11} onCheckedChange={(v) => setSection11(!!v)} />
                <label htmlFor="s11" className="text-sm">Section 11 – Similarity with earlier trademarks</label>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Distinctiveness Argument (optional)</label>
              <Textarea placeholder="Explain how your mark is distinctive..." value={distinctivenessArg} onChange={(e) => setDistinctivenessArg(e.target.value)} rows={3} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Honest Adoption Argument (optional)</label>
              <Textarea placeholder="Describe how you adopted the mark..." value={honestAdoption} onChange={(e) => setHonestAdoption(e.target.value)} rows={3} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Prior Use Evidence (optional)</label>
              <Textarea placeholder="Describe evidence of prior use..." value={priorUse} onChange={(e) => setPriorUse(e.target.value)} rows={3} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Difference from Cited Marks (optional)</label>
              <Textarea placeholder="Explain how your mark differs..." value={differenceArg} onChange={(e) => setDifferenceArg(e.target.value)} rows={3} />
            </div>

            <Button variant="gold" className="w-full" onClick={handleGenerate} disabled={!canGenerate}>
              <Scale className="mr-2 h-4 w-4" /> Generate Hearing Template
            </Button>
          </div>

          {generated && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold">Hearing Preparation Document</h2>
                <Button variant="gold-outline" size="sm" onClick={handleDownload}>
                  <Download className="mr-1 h-4 w-4" /> Download
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 overflow-auto max-h-[500px]">
                <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">{generated}</pre>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Professional legal representation is strongly recommended for trademark hearings. An experienced IP lawyer can present arguments effectively before the Registrar.
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

export default HearingPrep;
