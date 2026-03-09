import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Shield, FileText, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Trademark Registration",
    price: "₹4,999",
    originalPrice: "₹7,000",
    description: "Complete filing, search & legal protection",
    icon: Shield,
    popular: true,
    features: [
      "Comprehensive trademark search",
      "Application filing (TM-A)",
      "Trademark monitoring for 1 year",
      "Dedicated case manager",
      "Status updates via dashboard",
      "Objection reply drafting",
    ],
    govtFee: "₹4,500",
  },
  {
    title: "Copyright Registration",
    price: "₹3,999",
    originalPrice: "₹5,500",
    description: "Literary and artistic works protection",
    icon: FileText,
    features: [
      "Copyright application filing",
      "Document preparation & review",
      "Follow-up with Copyright Office",
      "Registration certificate delivery",
      "Email & phone support",
      "Revision support included",
    ],
    govtFee: "₹500–₹2,000",
  },
  {
    title: "Patent Consultation",
    price: "₹25,000",
    originalPrice: "₹30,000",
    description: "Invention filing & patentability search",
    icon: Lightbulb,
    features: [
      "Prior art search",
      "Patent specification drafting",
      "Application filing with IPO",
      "Response to examination report",
      "Dedicated patent attorney",
      "Full documentation support",
    ],
    govtFee: "₹1,600–₹8,000",
  },
];

const Pricing = () => (
  <>
    <Helmet>
      <title>Pricing | IP Law Services | Transparent & Affordable Rates</title>
      <meta
        name="description"
        content="Transparent pricing for trademark, copyright, and patent services. No hidden fees. Government charges included. Starting from ₹3,999."
      />
      <meta name="keywords" content="trademark registration cost, copyright filing fees, patent attorney rates, ip law pricing india" />
      <link rel="canonical" href="https://id-preview--89d82703-211f-45e1-a70d-b15c1a88b846.lovable.app/pricing" />
    </Helmet>
    
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Pricing</p>
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
          Transparent, Affordable Pricing
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          No hidden fees. All government charges included. Start protecting your intellectual property today.
        </p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative flex flex-col rounded-xl border p-8 transition-all hover:shadow-gold ${
                service.popular ? "border-primary shadow-gold scale-105" : "border-border"
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              {/* Title & Description */}
              <h3 className="mb-2 font-serif text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-bold text-primary">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{service.originalPrice}</span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">+ Govt Fees (one-time)</span>
              </div>
              
              {/* Features */}
              <div className="mb-8 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link to="/contact">
                <Button variant={service.popular ? "gold" : "gold-outline"} className="w-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices include professional fees. Government charges as per official rates.{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            for volume discounts and enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
