import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
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
    toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Contact Us</p>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Get a Free Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              Our IP experts are ready to help you protect your brand, ideas, and creative work.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-5">
            {/* Info */}
            <div className="space-y-6 md:col-span-2">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">info@ipprotectionindia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Office</p>
                  <p className="text-sm text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-serif text-xl font-bold">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll contact you within 24 hours.</p>
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
                        <SelectItem value="trademark">Trademark Registration</SelectItem>
                        <SelectItem value="copyright">Copyright Registration</SelectItem>
                        <SelectItem value="patent">Patent Filing</SelectItem>
                        <SelectItem value="search">Trademark Search</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
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
