import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "how-to-register-trademark-india",
    title: "How to Register a Trademark in India — Complete Guide 2026",
    excerpt: "Step-by-step guide to registering your brand name, logo, or slogan as a trademark in India under the Trade Marks Act, 1999.",
    category: "Trademark",
    readTime: "8 min",
    date: "March 2026",
  },
  {
    slug: "trademark-classes-explained",
    title: "Trademark Classes Explained: Which Class Does Your Business Need?",
    excerpt: "Understanding India's 45 trademark classes based on the NICE Classification system and how to choose the right one.",
    category: "Trademark",
    readTime: "6 min",
    date: "February 2026",
  },
  {
    slug: "patent-vs-copyright-vs-trademark",
    title: "Patent vs Copyright vs Trademark — What's the Difference?",
    excerpt: "A clear comparison of the three main types of intellectual property protection available in India.",
    category: "IP Basics",
    readTime: "5 min",
    date: "February 2026",
  },
  {
    slug: "startups-protect-brand",
    title: "How Startups Can Protect Their Brand From Day One",
    excerpt: "Essential IP protection strategies every startup founder should implement early to avoid costly disputes later.",
    category: "Startups",
    readTime: "7 min",
    date: "January 2026",
  },
  {
    slug: "copyright-registration-india",
    title: "Copyright Registration in India: Process, Fees & Timeline",
    excerpt: "Everything you need to know about registering your creative works — books, music, software, and art — in India.",
    category: "Copyright",
    readTime: "6 min",
    date: "January 2026",
  },
  {
    slug: "trademark-infringement-remedies",
    title: "Trademark Infringement in India: Legal Remedies & Case Studies",
    excerpt: "Understanding your legal options when someone infringes on your registered trademark in India.",
    category: "Legal",
    readTime: "9 min",
    date: "December 2025",
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
            Expert insights on trademarks, copyrights, patents, and intellectual property law in India.
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
              <h2 className="mb-2 font-serif text-lg font-bold leading-snug">
                {post.title}
              </h2>
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
