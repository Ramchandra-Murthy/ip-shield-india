import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "how-to-register-trademark-india",
    title: "How to Register a Trademark in India – Complete Guide",
    excerpt: "Step-by-step guide to registering your brand name, logo, or slogan as a trademark in India. Learn about the process, fees, and timeline under the Trade Marks Act, 1999.",
    category: "Trademark",
    readTime: "8 min",
    date: "March 2026",
  },
  {
    slug: "difference-trademark-copyright-patent",
    title: "Difference Between Trademark, Copyright and Patent",
    excerpt: "A clear comparison of the three main types of intellectual property protection available in India and when to use each one.",
    category: "IP Basics",
    readTime: "6 min",
    date: "March 2026",
  },
  {
    slug: "trademark-classes-explained",
    title: "Trademark Classes Explained – Which Class Is Right for Your Business?",
    excerpt: "Understanding India's 45 trademark classes based on the NICE Classification system. The Controller General of Patents, Designs & Trade Marks requires correct class selection.",
    category: "Trademark",
    readTime: "7 min",
    date: "February 2026",
  },
  {
    slug: "trademark-search-india",
    title: "Trademark Search in India – How to Check Brand Availability",
    excerpt: "How to search the IP India database to check if your brand name is available for registration before filing with the Controller General of Patents, Designs & Trade Marks.",
    category: "Trademark",
    readTime: "5 min",
    date: "February 2026",
  },
  {
    slug: "trademark-objection-india",
    title: "What Happens if Your Trademark Application Gets an Objection?",
    excerpt: "Understanding trademark objections, common grounds for objection under the Trade Marks Act, and how to draft an effective objection reply.",
    category: "Legal",
    readTime: "7 min",
    date: "January 2026",
  },
  {
    slug: "trademark-opposition-india",
    title: "Trademark Opposition in India – Legal Process Explained",
    excerpt: "Complete guide to trademark opposition proceedings before the Controller General of Patents, Designs & Trade Marks, including timelines and legal strategy.",
    category: "Legal",
    readTime: "8 min",
    date: "January 2026",
  },
  {
    slug: "trademark-benefits-startups",
    title: "Benefits of Registering a Trademark for Startups",
    excerpt: "Why early trademark registration is critical for startups. Protect your brand before competitors and build long-term business value.",
    category: "Startups",
    readTime: "5 min",
    date: "December 2025",
  },
  {
    slug: "trademark-registration-timeline",
    title: "How Long Does Trademark Registration Take in India?",
    excerpt: "Understanding the complete timeline from application filing to registration certificate, including examination, publication, and opposition periods.",
    category: "Trademark",
    readTime: "4 min",
    date: "December 2025",
  },
  {
    slug: "trademark-renewal-india",
    title: "Trademark Renewal Process in India",
    excerpt: "How to renew your trademark registration, important deadlines, and what happens if you miss the renewal date. Filed through the Controller General of Patents, Designs & Trade Marks.",
    category: "Trademark",
    readTime: "5 min",
    date: "November 2025",
  },
  {
    slug: "common-trademark-filing-mistakes",
    title: "Common Mistakes Businesses Make When Filing Trademarks",
    excerpt: "Avoid these frequent errors in trademark applications that lead to rejections, delays, and legal complications. Expert advice from a practicing IP lawyer.",
    category: "Legal",
    readTime: "6 min",
    date: "November 2025",
  },
];

const Blog = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Knowledge Hub</p>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            IP Protection Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert insights on trademarks, copyrights, patents, and intellectual property law in India by Advocate Anuradha R. Kulkarni.
          </p>
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-gold">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h2 className="mb-2 font-serif text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
