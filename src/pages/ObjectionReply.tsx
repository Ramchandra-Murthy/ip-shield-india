import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { FileText, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const objectionGrounds = [
  { value: "section9", label: "Section 9 – Lack of distinctiveness" },
  { value: "section11", label: "Section 11 – Similarity with existing mark" },
  { value: "section9_11", label: "Section 9 & 11 – Both grounds" },
  { value: "other", label: "Other ground of objection" },
];

const generateReplyText = (
  applicant: string,
  trademark: string,
  appNumber: string,
  tmClass: string,
  ground: string
) => {
  const groundLabel = objectionGrounds.find((g) => g.value === ground)?.label || ground;

  let specificParagraphs = "";

  if (ground === "section9") {
    specificParagraphs = `
The objection raised under Section 9 of the Trade Marks Act, 1999 states that the mark lacks distinctiveness.

The applicant respectfully submits that the applied mark "${trademark}" is inherently distinctive and is capable of distinguishing the applicant's goods/services from those of other traders. The mark is an invented/coined word that has no direct meaning in any language and has been adopted honestly by the applicant.

The mark has acquired distinctiveness through continuous and extensive use in commerce. The applicant has been using this mark in connection with goods/services in Class ${tmClass} and has built substantial goodwill and reputation.

It is well established that coined and invented words are inherently distinctive and are entitled to registration under the Trade Marks Act.`;
  } else if (ground === "section11") {
    specificParagraphs = `
The objection raised under Section 11 of the Trade Marks Act, 1999 states that the mark is similar to an existing registered mark.

The applicant respectfully submits that the applied mark "${trademark}" is neither identical nor deceptively similar to the cited mark. The marks differ in:

1. Visual appearance – The overall look and structure of the marks are distinct.
2. Phonetic composition – The pronunciation of both marks is clearly different.
3. Conceptual meaning – The marks convey different ideas and impressions.

When comparing trademarks, the marks must be compared as a whole and not by dissecting individual elements. The overall commercial impression created by the applicant's mark is distinct from the cited mark.

The goods/services covered under Class ${tmClass} are also different in nature, purpose, and trade channels from those of the cited mark.`;
  } else if (ground === "section9_11") {
    specificParagraphs = `
The objections raised under Section 9 and Section 11 of the Trade Marks Act, 1999 are addressed below.

Regarding Section 9 (Lack of Distinctiveness):
The applicant submits that the mark "${trademark}" is distinctive and capable of identifying the applicant's goods/services. The mark is a coined/invented term with no descriptive meaning and has been adopted honestly and used continuously in commerce.

Regarding Section 11 (Similarity with Existing Mark):
The applicant submits that the applied mark is neither identical nor deceptively similar to any cited mark. The marks differ visually, phonetically, and conceptually. The overall commercial impression is distinct, and the goods/services in Class ${tmClass} differ in nature, purpose, and channels of trade.`;
  } else {
    specificParagraphs = `
The applicant respectfully submits that the applied mark "${trademark}" is distinctive, adopted honestly, and not deceptively similar to any existing trademark in the register.

The mark has been in continuous use and has acquired substantial goodwill in connection with the applicant's goods/services in Class ${tmClass}.

The applicant requests the Hon'ble Registrar to reconsider the objection and allow the mark to proceed for publication.`;
  }

  return `REPLY TO EXAMINATION REPORT
${"=".repeat(50)}

To,
The Registrar of Trade Marks,
Office of the Controller General of Patents, Designs & Trade Marks

Subject: Reply to Examination Report

Applicant Name: ${applicant}
Trademark: ${trademark}
Application Number: ${appNumber}
Class: ${tmClass}
Ground of Objection: ${groundLabel}

${"=".repeat(50)}

Respected Sir/Madam,

The applicant, ${applicant}, respectfully submits this reply in response to the Examination Report issued for Trademark Application No. ${appNumber} for the mark "${trademark}" in Class ${tmClass}.
${specificParagraphs}

PRAYER:

In view of the above submissions, the applicant respectfully requests the Hon'ble Registrar to:

1. Accept the trademark application No. ${appNumber} for the mark "${trademark}".
2. Allow the mark to proceed for publication in the Trademark Journal.
3. Pass any other order as deemed fit and proper.

Respectfully submitted,

${applicant}
(Applicant)

Date: ${new Date().toLocaleDateString("en-IN")}

${"=".repeat(50)}
DISCLAIMER: This is a draft reply generated for reference purposes only.
For professional representation before the Trademark Registry,
please contact Advocate Anuradha R. Kulkarni.
Phone: +91 9869832220
Email: anuradharkulkarni1976@gmail.com
${"=".repeat(50)}`;
};

const ObjectionReply = () => {
  const [applicant, setApplicant] = useState("");
  const [trademark, setTrademark] = useState("");
  const [appNumber, setAppNumber] = useState("");
  const [tmClass, setTmClass] = useState("");
  const [ground, setGround] = useState("");
  const [generated, setGenerated] = useState("");

  const canGenerate = applicant.trim() && trademark.trim() && appNumber.trim() && tmClass.trim() && ground;

  const handleGenerate = () => {
    if (!canGenerate) return;
    const text = generateReplyText(applicant.trim(), trademark.trim(), appNumber.trim(), tmClass.trim(), ground);
    setGenerated(text);
  };

  const handleDownload = () => {
    const blob = new Blob([generated], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Objection_Reply_${appNumber.trim() || "draft"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Objection Reply Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              If your trademark application has received an objection from the trademark examiner, use this tool to generate a formal reply draft. For professional representation, contact Advocate Anuradha R. Kulkarni.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Applicant Name</label>
              <Input placeholder="Full legal name" value={applicant} onChange={(e) => setApplicant(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Name</label>
              <Input placeholder="Your brand / trademark" value={trademark} onChange={(e) => setTrademark(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Application Number</label>
              <Input placeholder="e.g., 5678901" value={appNumber} onChange={(e) => setAppNumber(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Class</label>
              <Input placeholder="e.g., 9, 25, 35" value={tmClass} onChange={(e) => setTmClass(e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Ground of Objection</label>
              <Select value={ground} onValueChange={setGround}>
                <SelectTrigger>
                  <SelectValue placeholder="Select ground of objection" />
                </SelectTrigger>
                <SelectContent>
                  {objectionGrounds.map((g) => (
                    <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="gold" className="w-full" onClick={handleGenerate} disabled={!canGenerate}>
              <FileText className="mr-2 h-4 w-4" /> Generate Reply
            </Button>
          </div>

          {generated && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold">Generated Reply Draft</h2>
                <Button variant="gold-outline" size="sm" onClick={handleDownload}>
                  <Download className="mr-1 h-4 w-4" /> Download
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-background p-4 overflow-auto max-h-[500px]">
                <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">{generated}</pre>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  This is an auto-generated draft for reference only. For professional representation before the Trademark Registry, consult a qualified IP lawyer.
                </p>
                <Link to="/contact">
                  <Button variant="gold">
                    Contact Advocate Anuradha R. Kulkarni <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ObjectionReply;
