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
import { FileText, CheckCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClientIntake = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    applicantName: "",
    businessName: "",
    address: "",
    phone: "",
    email: "",
    brandName: "",
    trademarkClass: "",
    goodsDescription: "",
    currentlyUsing: "",
    filingType: "",
    comments: "",
  });

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const canSubmit =
    form.applicantName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.brandName.trim();

  const handleSubmit = () => {
    if (!canSubmit) return;
    // In a real app this would POST to a backend
    setSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "We will review your details and contact you shortly.",
    });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container mx-auto max-w-lg px-4 text-center">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
            <h1 className="font-serif text-3xl font-bold mb-3">Application Received</h1>
            <p className="text-muted-foreground mb-6">
              Thank you, <strong>{form.applicantName}</strong>. We have received your trademark registration request for <strong>"{form.brandName}"</strong>. Our team will review your details and contact you shortly.
            </p>
            <div className="rounded-lg border border-border bg-card p-4 text-left text-sm space-y-1 mb-6">
              <p><strong>Applicant:</strong> {form.applicantName}</p>
              <p><strong>Brand Name:</strong> {form.brandName}</p>
              {form.trademarkClass && <p><strong>Class:</strong> {form.trademarkClass}</p>}
              <p><strong>Phone:</strong> {form.phone}</p>
              <p><strong>Email:</strong> {form.email}</p>
            </div>
            <a href="tel:+919869832220">
              <Button variant="gold">
                <Phone className="mr-2 h-4 w-4" /> Call +91 9869832220 for Immediate Assistance
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Registration – Client Form
            </h1>
            <p className="text-lg text-muted-foreground">
              Submit your details to begin the trademark registration process. Advocate Anuradha R. Kulkarni will review your application and provide professional legal assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-5 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Applicant Name <span className="text-red-500">*</span></label>
              <Input placeholder="Full legal name" value={form.applicantName} onChange={(e) => update("applicantName", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business Name</label>
              <Input placeholder="Company / firm name (if applicable)" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Address</label>
              <Textarea placeholder="Full address" value={form.address} onChange={(e) => update("address", e.target.value)} rows={2} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Phone <span className="text-red-500">*</span></label>
                <Input placeholder="+91 ..." value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email <span className="text-red-500">*</span></label>
                <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <label className="mb-1.5 block text-sm font-medium">Brand Name to be Registered <span className="text-red-500">*</span></label>
              <Input placeholder="Your proposed trademark / brand name" value={form.brandName} onChange={(e) => update("brandName", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Trademark Class (if known)</label>
              <Input placeholder="e.g., Class 9, Class 25, Class 35" value={form.trademarkClass} onChange={(e) => update("trademarkClass", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Description of Goods / Services</label>
              <Textarea placeholder="Briefly describe your products or services" value={form.goodsDescription} onChange={(e) => update("goodsDescription", e.target.value)} rows={3} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Are you currently using this trademark?</label>
              <Select value={form.currentlyUsing} onValueChange={(v) => update("currentlyUsing", v)}>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Preferred Filing Type</label>
              <Select value={form.filingType} onValueChange={(v) => update("filingType", v)}>
                <SelectTrigger><SelectValue placeholder="Select entity type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="llp">LLP</SelectItem>
                  <SelectItem value="startup">Startup (DPIIT recognized)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Additional Comments</label>
              <Textarea placeholder="Any additional information..." value={form.comments} onChange={(e) => update("comments", e.target.value)} rows={3} />
            </div>

            <Button variant="gold" className="w-full" onClick={handleSubmit} disabled={!canSubmit}>
              Submit Application
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is kept confidential. For immediate assistance, call <a href="tel:+919869832220" className="text-primary underline">+91 9869832220</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientIntake;
