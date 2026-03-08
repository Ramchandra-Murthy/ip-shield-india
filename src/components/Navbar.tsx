import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/trademark", label: "Trademark" },
  { href: "/copyright", label: "Copyright" },
  { href: "/patent", label: "Patent" },
];

const toolLinks = [
  { href: "/brand-generator", label: "AI Brand Generator" },
  { href: "/brand-report", label: "Brand Report" },
  { href: "/class-finder", label: "Class Finder" },
  { href: "/ai-advisor", label: "AI Legal Advisor" },
  { href: "/objection-reply", label: "Objection Reply" },
  { href: "/opposition-notice", label: "Opposition Notice" },
  { href: "/hearing-prep", label: "Hearing Prep" },
  { href: "/documents", label: "Document Generator" },
  { href: "/domain-checker", label: "Domain Checker" },
  { href: "/numerology", label: "Numerology" },
];

const moreLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/ip-news", label: "IP News" },
  { href: "/trademark-guide", label: "TM Guide" },
  { href: "/client-intake", label: "Apply Now" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      location.pathname === href ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-bold text-foreground">Kulkarni IP Law</span>
            <span className="text-[10px] text-muted-foreground">Trademark • Copyright • Patent</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {mainLinks.map((link) => (
            <Link key={link.href} to={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tools <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {toolLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link to={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {moreLinks.map((link) => (
            <Link key={link.href} to={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}

          <Link to="/contact">
            <Button variant="gold" size="sm" className="ml-2">
              Free Consultation
            </Button>
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {[...mainLinks, ...toolLinks, ...moreLinks].map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="gold" size="sm" className="mt-2 w-full">Free Consultation</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
