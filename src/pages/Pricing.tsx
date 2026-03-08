import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Trademark Registration",
    price: "₹4,999",
    features: [
      "Comprehensive trademark search",
      "Application filing (TM-A)",
      "Government fee included",
      "Trademark monitoring for 1 year",
      "Dedicated case manager",
      "Status updates via dashboard",
    ],
  },
  {
    title: "Copyright Registration",
    price: "₹3,999",
    popular: false,
    features: [
      "Copyright application filing",
      "Government fee included",
      "Document preparation & review",
      "Follow-up with Copyright Office",
      "Registration certificate delivery",
      "Email & phone support",
    ],
  },
  {
    title: "Patent Filing",
    price: "₹25,000",
    features: [
      "Prior art search",
      "Patent specification drafting",
      "Application filing with IPO",
      "Government fee included",
      "Response to examination report",
      "Dedicated patent attorney",
    ],
  },
];

const Pricing = () => (
  <Layout>
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
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-lg border p-8 transition-all hover:shadow-gold ${
                i === 0 ? "border-primary shadow-gold" : "border-border"
              }`}
            >
              {i === 0 && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 font-serif text-xl font-bold">{plan.title}</h3>
              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> / one-time</span>
              </div>
              <div className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant={i === 0 ? "gold" : "gold-outline"} className="w-full">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
