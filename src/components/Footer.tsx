import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-serif text-lg font-bold">IP Protection India</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Expert intellectual property legal services by Advocate Anuradha R. Kulkarni (MSc, LLB, LLM).
          </p>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <a href="tel:+919869832220" className="hover:text-foreground transition-colors">+91 9869832220</a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <a href="mailto:anuradharkulkarni1976@gmail.com" className="hover:text-foreground transition-colors text-xs">anuradharkulkarni1976@gmail.com</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Mumbai & Bengaluru</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">Legal Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/trademark" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trademark Registration</Link>
            <Link to="/copyright" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Copyright Protection</Link>
            <Link to="/patent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Patent Filing</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">IP Consultation</Link>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">Tools</h4>
          <div className="flex flex-col gap-2">
            <Link to="/brand-generator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Brand Name Generator</Link>
            <Link to="/class-finder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Class Finder</Link>
            <Link to="/objection-reply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Objection Reply Generator</Link>
            <Link to="/domain-checker" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Domain Checker</Link>
            <Link to="/documents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Document Generator</Link>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">More</h4>
          <div className="flex flex-col gap-2">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          <h4 className="font-serif text-sm font-semibold text-primary mt-5 mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Advocate Anuradha R. Kulkarni. All rights reserved. Mumbai & Bengaluru.</p>
        <div className="flex items-center gap-4">
          <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;