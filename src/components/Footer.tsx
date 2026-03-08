import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-serif text-lg font-bold">IP Protection India</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted intellectual property services across India. Trademarks, copyrights, and patents made simple.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/trademark" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trademark Registration</Link>
            <Link to="/copyright" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Copyright Registration</Link>
            <Link to="/patent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Patent Filing</Link>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold text-primary mb-3">Legal</h4>
          <p className="text-sm text-muted-foreground">
            Government Authority: Controller General of Patents, Designs & Trademarks
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} IP Protection India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
