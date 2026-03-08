import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const ipKnowledge: Record<string, string> = {
  trademark: "A trademark in India is registered under the Trade Marks Act, 1999. It protects brand names, logos, and slogans. Registration is valid for 10 years and renewable indefinitely. You can file online at ipindia.gov.in. The process takes 12–18 months typically. Classes follow the NICE International Classification (45 classes).",
  copyright: "Copyright in India is governed by the Copyright Act, 1957. It protects literary, dramatic, musical, and artistic works, as well as computer software. Duration: lifetime of author + 60 years. Registration is done through the Copyright Office. Filing requires Form XIV with prescribed fees.",
  patent: "Patents in India are governed by the Patents Act, 1970. To be patentable, an invention must have novelty, inventive step, and industrial application. Patents are granted for 20 years from filing date. The Indian Patent Office handles all applications.",
  register: "To register a trademark in India: 1) Conduct a trademark search, 2) File Form TM-A with the Registrar, 3) Examination by the Registrar, 4) Publication in Trademark Journal for 4 months, 5) Registration certificate issued if no opposition. Government fees start at ₹4,500 for individuals/startups.",
  class: "India follows the NICE Classification with 45 trademark classes — 34 for goods and 11 for services. Common classes: Class 9 (electronics), Class 25 (clothing), Class 35 (business services), Class 42 (IT services). You must register in each relevant class separately.",
  infringement: "Trademark infringement in India can result in injunction, damages, and criminal penalties under Sections 103-104 of the Trade Marks Act. You can file a civil suit for injunction and damages, or lodge a criminal complaint. Having a registered trademark strengthens your case significantly.",
  cost: "Typical costs: Trademark registration ₹4,999-8,999, Copyright registration ₹3,999-6,999, Patent filing ₹25,000-50,000. Government fees vary based on applicant type (individual vs. company). Our platform offers competitive all-inclusive pricing.",
  startup: "Startups should protect their IP early. Key steps: 1) Register your brand name as trademark, 2) Copyright your software/content, 3) Patent unique inventions, 4) Use NDAs for confidential information. Government offers reduced fees for startups registered with DPIIT.",
};

const getAIResponse = (question: string): string => {
  const q = question.toLowerCase();
  for (const [key, answer] of Object.entries(ipKnowledge)) {
    if (q.includes(key)) return answer;
  }
  if (q.includes("brand") || q.includes("name") || q.includes("logo")) return ipKnowledge.trademark;
  if (q.includes("protect") || q.includes("right")) return "India provides IP protection through trademarks (Trade Marks Act, 1999), copyrights (Copyright Act, 1957), and patents (Patents Act, 1970). Each protects different types of intellectual property. Would you like details on any specific type?";
  if (q.includes("time") || q.includes("long") || q.includes("duration")) return "Trademark registration: 12-18 months. Copyright registration: 2-6 months. Patent grant: 3-5 years. These timelines can vary based on examiner workload and any objections raised.";
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) return "Hello! I'm your AI IP legal advisor. I can help you understand trademark, copyright, and patent law in India. What would you like to know?";
  return "That's a great question about intellectual property in India. I can help with queries about trademarks, copyrights, patents, registration processes, costs, and IP protection strategies for businesses. Could you provide more details about what you'd like to know?";
};

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your AI IP Legal Advisor. I can answer questions about trademark, copyright, and patent law in India. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-6 text-center">
            <Bot className="mx-auto mb-3 h-10 w-10 text-primary" />
            <h1 className="font-serif text-3xl font-bold">AI Legal Advisor</h1>
            <p className="text-sm text-muted-foreground">Ask anything about IP law in India</p>
          </div>

          <div className="flex flex-col rounded-lg border border-border bg-card" style={{ height: "calc(100vh - 260px)" }}>
            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                  {msg.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-lg px-4 py-3 text-sm ${
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

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about trademarks, copyrights, patents..."
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button variant="gold" size="icon" onClick={handleSend} disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Can I trademark my brand?", "How to register copyright?", "Patent filing cost?", "Startup IP protection"].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); }}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            This AI advisor provides general information only. For specific legal advice, please consult a registered IP attorney.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AIChatbot;
