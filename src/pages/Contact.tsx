import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Scale } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Thank you!", description: "We'll get back to you promptly." });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Scale className="mx-auto mb-4 h-12 w-12 text-primary" />
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Contact Us</p>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Get Professional Legal Guidance
            </h1>
            <p className="text-lg text-muted-foreground">
              Contact Advocate Anuradha R. Kulkarni for expert assistance with trademark, copyright, and patent matters.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-5">
            {/* Info */}
            <div className="space-y-6 md:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold mb-1">Advocate Anuradha R. Kulkarni</h3>
                <p className="text-sm text-primary font-medium mb-4">MSc, LLB, LLM (Intellectual Property Laws)</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Practicing Intellectual Property Lawyer since 2000. Expert in trademark registration, copyright protection, and patent filing.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+919869832220" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +91 9869832220
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:anuradharkulkarni1976@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                        anuradharkulkarni1976@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Offices</p>
                      <p className="text-sm text-muted-foreground">Mumbai and Bengaluru</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                If you need assistance with trademark registration, copyright protection, or patent filing, please contact us for professional legal guidance. You may also send your details through the form and we will get back to you promptly.
              </p>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-serif text-xl font-bold">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Name *</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Phone</label>
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Email *</label>
                      <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Service Required *</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trademark-registration">Trademark Registration</SelectItem>
                        <SelectItem value="trademark-search">Trademark Search & Availability</SelectItem>
                        <SelectItem value="trademark-objection">Trademark Objection Reply</SelectItem>
                        <SelectItem value="trademark-opposition">Trademark Opposition Handling</SelectItem>
                        <SelectItem value="trademark-hearing">Trademark Hearing Representation</SelectItem>
                        <SelectItem value="trademark-renewal">Trademark Renewal & Assignment</SelectItem>
                        <SelectItem value="copyright">Copyright Registration</SelectItem>
                        <SelectItem value="copyright-licensing">Copyright Licensing & Agreements</SelectItem>
                        <SelectItem value="patent">Patent Filing Assistance</SelectItem>
                        <SelectItem value="patent-search">Patentability Search</SelectItem>
                        <SelectItem value="consultation">IP Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Message</label>
                    <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <Button variant="gold" type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
