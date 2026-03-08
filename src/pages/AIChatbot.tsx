import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Loader2, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Message = { role: "user" | "assistant"; content: string };

const ipKnowledge: Record<string, string> = {
  // Trademark basics
  "what is trademark": "A trademark is a distinctive sign, symbol, word, or combination that identifies and distinguishes the goods or services of one business from those of others. In India, trademarks are governed by the Trade Marks Act, 1999 and administered by the Controller General of Patents, Designs & Trade Marks.",
  "how long": "Trademark registration in India usually takes 12–18 months if there are no objections or oppositions. The process includes filing, examination (1-3 months), publication (4 months opposition period), and registration.",
  "documents": "Documents required for trademark filing:\n\n• Applicant name and address\n• Brand name or logo (high resolution)\n• Description of goods/services\n• Trademark class\n• Power of attorney (Form TM-48, if filed through a lawyer)\n• Identity proof (Aadhaar/PAN/Passport)\n• Business registration proof\n• MSME/Startup certificate (for reduced fees)",
  "section 9": "Section 9 of the Trade Marks Act, 1999 deals with absolute grounds for refusal. A mark may be refused if it:\n\n• Lacks distinctiveness\n• Is descriptive of the goods/services\n• Has become customary in trade\n• Is deceptive or causes confusion\n• Contains prohibited elements\n\nYou can overcome Section 9 objections by proving acquired distinctiveness through use.",
  "section 11": "Section 11 of the Trade Marks Act, 1999 deals with relative grounds for refusal. A mark may be refused if:\n\n• It is identical/similar to an existing registered mark\n• It is similar to a well-known trademark\n• Registration would amount to passing off\n\nYou must show your mark is visually, phonetically, and conceptually different from the cited mark.",
  "objection": "When a trademark examiner raises an objection, you must file a reply within 30 days (extendable to 90 days). Common objections are under Section 9 (lack of distinctiveness) or Section 11 (similarity with existing marks). A well-drafted reply by an experienced lawyer can overcome most objections.\n\n👉 Use our Objection Reply Generator tool at /objection-reply",
  "opposition": "Trademark opposition can be filed by any person within 4 months of publication in the Trademark Journal. The process involves:\n\n1. Notice of Opposition filed by opponent\n2. Counter-statement by applicant\n3. Evidence submission by both parties\n4. Hearing before the Registrar\n5. Decision\n\nOpposition proceedings typically take 2-3 years.",
  "hearing": "A trademark hearing is scheduled when written replies do not satisfy the examiner. You or your authorized attorney appears before the Registrar to present oral arguments. Hearings may be conducted in person or via video conference. Professional representation is strongly recommended.",
  "register": "Steps to register a trademark in India:\n\n1. Conduct a trademark search\n2. File Form TM-A with the Trade Marks Registry\n3. Examination by the Registrar (1-3 months)\n4. Reply to objections (if any)\n5. Publication in Trademark Journal (4 months)\n6. Opposition period\n7. Registration certificate issued\n\nGovernment fees: ₹4,500 for individuals/startups, ₹9,000 for companies per class.",
  "class": "India follows the Nice Classification with 45 trademark classes:\n\n• Classes 1-34: Goods\n• Classes 35-45: Services\n\nCommon classes:\n- Class 9: Software, electronics\n- Class 25: Clothing\n- Class 35: Business services\n- Class 42: IT services\n- Class 43: Restaurant services\n\n👉 Use our Class Finder tool at /class-finder",
  "cost": "Typical costs for IP registration:\n\n• Trademark: Starting from ₹4,999 (govt fee: ₹4,500 for startups)\n• Copyright: Starting from ₹3,999\n• Patent: Starting from ₹15,000\n\nGovernment fees for trademarks:\n- Individual/Startup: ₹4,500 per class\n- Company/LLP: ₹9,000 per class",
  "renewal": "Trademark registration is valid for 10 years and must be renewed before expiry.\n\nRenewal fees:\n• Individual/Startup: ₹5,000 per class\n• Company: ₹10,000 per class\n\nLate renewal within 6 months after expiry is possible with additional surcharge. If not renewed, the mark is removed from the register.",
  "copyright": "Copyright in India is governed by the Copyright Act, 1957. It protects:\n\n• Literary works (books, articles)\n• Musical compositions\n• Dramatic works\n• Artistic works (paintings, photographs)\n• Computer software\n• Cinematograph films\n• Sound recordings\n\nDuration: Lifetime of author + 60 years.\nRegistration through the Copyright Office.",
  "patent": "Patents in India are governed by the Patents Act, 1970. Requirements:\n\n• Novelty – The invention must be new\n• Inventive step – Non-obvious to a skilled person\n• Industrial application – Can be manufactured/used\n\nPatent protection: 20 years from filing date\nFiled with the Indian Patent Office",
  "infringement": "Trademark infringement occurs when someone uses a mark identical or deceptively similar to a registered trademark. Legal remedies include:\n\n• Injunction (temporary and permanent)\n• Monetary damages\n• Account of profits\n• Seizure of counterfeit goods\n• Criminal penalties: Up to 3 years imprisonment, fine up to ₹2 lakhs",
  "startup": "IP protection strategy for startups:\n\n1. Register your brand name as trademark (₹4,500 for DPIIT startups)\n2. Copyright your software/content\n3. Patent unique inventions\n4. Use NDAs for confidential information\n5. Register matching domain names\n\nDPIIT-recognized startups get 50% fee reduction on trademark and patent filing.",
  "assignment": "A trademark can be transferred through assignment:\n\n• With goodwill – Mark + business reputation transferred\n• Without goodwill – Mark alone transferred\n• Partial – For specific goods/services only\n\nFile Form TM-P with the Trade Marks Registry to record the transfer.",
  "licensing": "Trademark licensing allows others to use your mark:\n\n• Exclusive license – Only licensee uses the mark\n• Non-exclusive – Multiple licensees possible\n• Sole license – Owner + one licensee\n\nThe licensee should be registered as a 'Registered User' with the Registry using Form TM-U.",
  "well known": "A well-known trademark receives protection even in classes where it is not registered. The Trade Marks Registry maintains a list of well-known marks in India. Protection extends to preventing dilution, even for dissimilar goods/services.",
  "madrid": "The Madrid Protocol allows filing one international trademark application through WIPO covering multiple countries. India is a member. Benefits:\n\n• Single application for multiple countries\n• Cost-effective\n• Managed centrally through WIPO\n\nFile through the Indian Trade Marks Registry.",
  "symbol": "Trademark symbols:\n\n• ™ – Can be used for any mark (registered or unregistered)\n• ® – Only for registered trademarks\n• © – For copyrighted works\n• ℠ – For service marks (less common in India)\n\nUsing ® without registration is an offense under the Trade Marks Act.",
  "journal": "The Trademark Journal is published weekly by the Trade Marks Registry. When your mark is accepted, it is published in the Journal for 4 months. During this period, anyone can file an opposition. The Journal is available online at ipindia.gov.in.",
  "priority": "Under the Paris Convention, if you file a trademark in India, you can file in other member countries within 6 months and claim the original filing date as your priority date.",
};

const getAIResponse = (question: string): string => {
  const q = question.toLowerCase();

  // Direct keyword matching
  for (const [key, answer] of Object.entries(ipKnowledge)) {
    if (q.includes(key)) return answer;
  }

  // Fuzzy matching
  if (q.includes("time") || q.includes("long") || q.includes("duration") || q.includes("take")) return ipKnowledge["how long"];
  if (q.includes("document") || q.includes("paper") || q.includes("need")) return ipKnowledge["documents"];
  if (q.includes("fee") || q.includes("price") || q.includes("charge") || q.includes("cost")) return ipKnowledge["cost"];
  if (q.includes("object")) return ipKnowledge["objection"];
  if (q.includes("oppos")) return ipKnowledge["opposition"];
  if (q.includes("renew")) return ipKnowledge["renewal"];
  if (q.includes("brand") || q.includes("name") || q.includes("logo")) return ipKnowledge["what is trademark"];
  if (q.includes("protect") || q.includes("right")) return "India provides IP protection through trademarks (Trade Marks Act, 1999), copyrights (Copyright Act, 1957), and patents (Patents Act, 1970). Each protects different types of intellectual property. What specific area would you like to know more about?";
  if (q.includes("assign") || q.includes("transfer") || q.includes("sell")) return ipKnowledge["assignment"];
  if (q.includes("licen")) return ipKnowledge["licensing"];
  if (q.includes("infring") || q.includes("copy") || q.includes("stolen") || q.includes("misuse")) return ipKnowledge["infringement"];
  if (q.includes("international") || q.includes("global") || q.includes("abroad") || q.includes("madrid")) return ipKnowledge["madrid"];
  if (q.includes("well known") || q.includes("famous")) return ipKnowledge["well known"];
  if (q.includes("journal") || q.includes("publish")) return ipKnowledge["journal"];
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("namaste")) return "Namaste! 🙏 I'm the AI Legal Advisor for Kulkarni IP Law. I can help you understand trademark, copyright, and patent law in India. What would you like to know?";
  if (q.includes("thank")) return "You're welcome! If you need professional legal assistance, Advocate Anuradha R. Kulkarni is available for consultation. Call +91 9869832220 or visit our Contact page.";

  return "That's a great question about intellectual property. I can help with queries about:\n\n• Trademark registration process\n• Trademark classes and search\n• Objections and opposition\n• Copyright and patent filing\n• Costs and timelines\n• IP protection for startups\n\nCould you rephrase your question or ask about one of these topics?";
};

const quickQuestions = [
  "How to register a trademark?",
  "What documents are needed?",
  "What is Section 9 objection?",
  "Trademark registration cost?",
  "How long does it take?",
  "What are trademark classes?",
  "Startup IP protection",
  "Trademark renewal process",
];

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Namaste! 🙏 I'm the AI Legal Advisor for Kulkarni IP Law. I can answer questions about trademark, copyright, and patent law in India as per the Trade Marks Act, 1999 and other IP statutes.\n\nHow can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;
    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 1000);
  };

  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-6 text-center">
            <Bot className="mx-auto mb-3 h-10 w-10 text-primary" />
            <h1 className="font-serif text-3xl font-bold">AI Trademark Legal Advisor</h1>
            <p className="text-sm text-muted-foreground">
              Ask questions about trademark, copyright & patent law in India
            </p>
          </div>

          <div className="flex flex-col rounded-lg border border-border bg-card" style={{ height: "calc(100vh - 280px)" }}>
            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-lg px-4 py-3 text-sm whitespace-pre-line ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}>
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <User className="h-4 w-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="rounded-lg bg-secondary px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="border-t border-border px-4 py-3">
                <p className="text-xs text-muted-foreground mb-2">Popular questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about trademarks, copyrights, patents..."
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button variant="gold" size="icon" onClick={() => handleSend()} disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              For professional legal advice, contact Advocate Anuradha R. Kulkarni
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="tel:+919869832220">
                <Button variant="gold" size="sm"><Phone className="mr-1 h-3 w-3" /> +91 9869832220</Button>
              </a>
              <Link to="/contact">
                <Button variant="gold-outline" size="sm">Book Consultation <ArrowRight className="ml-1 h-3 w-3" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIChatbot;
