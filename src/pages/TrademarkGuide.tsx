import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const chapters = [
  {
    num: 1, title: "Introduction to Trademarks",
    content: "A trademark is a distinctive sign, symbol, word, or combination that identifies and distinguishes the goods or services of one business from those of others. In India, trademarks are governed by the Trade Marks Act, 1999 and administered by the Controller General of Patents, Designs & Trade Marks.\n\nTrademarks are essential for brand identity. They create trust among consumers, help businesses stand out in competitive markets, and provide legal protection against unauthorized use. Whether you are a startup founder, an established business owner, or a creative professional, registering your trademark is a critical step in protecting your intellectual property."
  },
  {
    num: 2, title: "Importance of Trademark Protection",
    content: "Trademark registration provides several key benefits:\n\n• Legal Protection – A registered trademark gives the owner exclusive rights to use the mark across India.\n• Brand Recognition – A protected brand name builds consumer trust and loyalty.\n• Business Asset – Trademarks are valuable intellectual property assets that can be licensed, franchised, or sold.\n• Legal Remedies – Registration enables the owner to take legal action against infringers.\n• Market Credibility – The ® symbol signals legitimacy and professionalism.\n\nFor startups, early trademark registration prevents costly disputes and rebranding. For established companies, it safeguards decades of brand equity. Creators and artists benefit by protecting their unique names and logos from unauthorized use."
  },
  {
    num: 3, title: "What Can Be Registered as a Trademark",
    content: "Under Indian trademark law, the following can be registered:\n\n• Brand Names – Distinctive words or combinations (e.g., 'TechNova', 'GreenLeaf')\n• Logos – Unique graphical representations of a brand\n• Slogans – Memorable taglines (e.g., 'Just Do It')\n• Symbols – Distinctive marks or emblems\n• Product Packaging – Trade dress including shape, color combinations, and packaging design\n• Sound Marks – Distinctive sounds associated with a brand\n• Color Combinations – Specific color schemes used consistently\n\nThe mark must be distinctive and capable of graphical representation. Generic, descriptive, or deceptive marks are generally not registrable."
  },
  {
    num: 4, title: "Types of Trademarks",
    content: "Indian trademark law recognizes several types of marks:\n\n• Word Mark – Protects the name itself regardless of font or style. This is the broadest protection.\n• Logo Mark (Device Mark) – Protects a specific graphical design or logo.\n• Service Mark – Identifies and distinguishes services rather than physical goods.\n• Collective Mark – Used by members of an association or group to indicate membership.\n• Certification Mark – Indicates that goods or services meet certain standards (e.g., ISI mark, Woolmark).\n• Shape Mark – Protects the three-dimensional shape of a product or its packaging.\n• Sound Mark – Protects distinctive audio signatures.\n\nChoosing the right type of mark depends on your business needs and branding strategy."
  },
  {
    num: 5, title: "Trademark Classes Explained",
    content: "The Nice Classification system divides all goods and services into 45 classes:\n\n• Classes 1–34 cover Goods (physical products)\n• Classes 35–45 cover Services\n\nEach class represents a specific category of goods or services. When filing a trademark application, you must specify the class(es) under which your mark will be registered. Filing in the wrong class can result in inadequate protection.\n\nCommon classes include:\n- Class 9: Software, electronics, mobile applications\n- Class 25: Clothing, footwear, headgear\n- Class 35: Advertising, business management, retail services\n- Class 41: Education, entertainment, training\n- Class 42: IT services, software development\n- Class 43: Restaurant and hotel services\n\nA single trademark can be registered in multiple classes for comprehensive protection."
  },
  {
    num: 6, title: "Choosing the Correct Trademark Class",
    content: "Selecting the correct class is crucial for effective trademark protection. Here are examples:\n\n• Restaurant business → Class 43 (Food and hospitality services)\n• Software company → Class 9 (Software products) + Class 42 (IT services)\n• Clothing brand → Class 25 (Clothing, footwear, headgear)\n• Education institute → Class 41 (Education and training services)\n• Pharmaceutical company → Class 5 (Pharmaceuticals)\n• E-commerce platform → Class 35 (Online retail) + Class 9 (Software/app)\n\nIf your business spans multiple categories, you should consider filing in all relevant classes. An experienced trademark lawyer can help identify the appropriate classes for comprehensive protection.\n\nUse our Trademark Class Finder tool to identify the right class for your business."
  },
  {
    num: 7, title: "Trademark Search",
    content: "Before filing a trademark application, conducting a thorough trademark search is essential. A search helps:\n\n• Identify existing similar or identical marks\n• Assess the risk of objection or opposition\n• Avoid investing in a mark that cannot be registered\n• Save time and money by identifying conflicts early\n\nThe Controller General of Patents, Designs & Trade Marks maintains a public database of all trademark applications and registrations in India. This database can be searched to check for existing marks in your chosen class.\n\nA comprehensive search should include:\n- Exact name matches\n- Phonetically similar marks\n- Visually similar logos\n- Marks in related classes"
  },
  {
    num: 8, title: "How to Conduct a Trademark Search",
    content: "You can search for existing trademarks through the official IP India website maintained by the Controller General of Patents, Designs & Trade Marks.\n\nSteps to conduct a search:\n\n1. Visit the IP India trademark search portal\n2. Select the type of search (word mark, Vienna code for logos, or phonetic)\n3. Enter your proposed trademark name\n4. Select the relevant trademark class\n5. Review the search results for similar marks\n\nSearch tips:\n• Search for exact matches and phonetic variations\n• Check multiple spelling variations\n• Search in all relevant classes\n• Look for marks with similar prefixes or suffixes\n• Consider visual and conceptual similarities\n\nFor a professional trademark availability assessment, consult an experienced IP lawyer who can interpret the results and advise on registration strategy."
  },
  {
    num: 9, title: "Trademark Application Filing",
    content: "The trademark application process in India involves filing Form TM-A with the Trade Marks Registry. The application can be filed:\n\n• Online through the IP India e-filing portal\n• Physically at any of the five Trade Marks Registry offices (Mumbai, Delhi, Kolkata, Chennai, Ahmedabad)\n\nThe application must include:\n- Applicant's name and address\n- The trademark (word/logo)\n- Description of goods or services\n- Trademark class(es)\n- Date of first use (if applicable)\n- Power of Attorney (if filed through an agent)\n\nApplications can be filed by individuals, companies, partnerships, trusts, or any legal entity. Foreign applicants must provide an address for service in India."
  },
  {
    num: 10, title: "Documents Required for Filing",
    content: "The following documents are required for trademark registration:\n\n• Applicant Details – Full name, address, and nationality\n• Brand Name – The exact word mark to be registered\n• Logo – High-resolution image (if filing a device/logo mark)\n• Business Description – Details of goods/services covered\n• Proof of Business – Certificate of incorporation, partnership deed, or proprietorship proof\n• Identity Proof – Aadhaar card, PAN card, or passport\n• Address Proof – Utility bill or bank statement\n• Power of Attorney – Form TM-48 (if filing through an attorney)\n• User Affidavit – If claiming prior use of the mark\n• MSME/Startup Certificate – For reduced filing fees (if applicable)\n\nAll documents should be clear, legible, and in the prescribed format."
  },
  {
    num: 11, title: "Government Filing Fees",
    content: "The official government fees for trademark registration in India are:\n\n• Individual / Startup / Small Enterprise: ₹4,500 per class (online filing)\n• Other entities (companies, LLPs): ₹9,000 per class (online filing)\n• Physical filing attracts an additional fee of ₹1,000 per class\n\nNote: These fees are per class. If you are filing in multiple classes, the fee is multiplied accordingly.\n\nStartups recognized by DPIIT (Department for Promotion of Industry and Internal Trade) are eligible for the reduced fee of ₹4,500.\n\nIn addition to government fees, professional fees for a trademark attorney vary based on the complexity of the application and the services provided."
  },
  {
    num: 12, title: "Trademark Examination Process",
    content: "After filing, the trademark application goes through examination by the Trade Marks Registry:\n\n1. Application Review – The Registry assigns an examination officer\n2. Formality Check – Verification of documents and fees\n3. Substantive Examination – The examiner checks:\n   - Distinctiveness of the mark\n   - Similarity with existing marks\n   - Compliance with Section 9 and Section 11 of the Trade Marks Act\n   - Descriptiveness or generic nature\n4. Examination Report – The examiner issues a report within 30 days\n\nIf no objections are found, the mark proceeds to publication. If objections are raised, the applicant must respond within 30 days (extendable to 90 days).\n\nThe examination process typically takes 6-12 months from the date of filing."
  },
  {
    num: 13, title: "Trademark Objections",
    content: "The trademark examiner may raise objections under the following grounds:\n\n• Section 9 – Absolute Grounds:\n  - Mark lacks distinctiveness\n  - Mark is descriptive of the goods/services\n  - Mark is customary in trade\n  - Mark is deceptive or likely to cause confusion\n  - Mark contains prohibited elements\n\n• Section 11 – Relative Grounds:\n  - Mark is identical or similar to an existing registered mark\n  - Mark is similar to a well-known mark\n  - Registration would amount to passing off\n\n• Section 12 – Honest Concurrent Use:\n  - Multiple parties may have used similar marks honestly\n\nReceiving an objection does not mean the application is rejected. A well-drafted reply can overcome most objections."
  },
  {
    num: 14, title: "Replying to Trademark Objections",
    content: "When an objection is raised, the applicant must file a reply to the Examination Report:\n\nProcess:\n1. Review the examination report carefully\n2. Identify the specific grounds of objection\n3. Prepare a detailed legal reply addressing each ground\n4. Submit the reply within 30 days (request extension if needed)\n5. Include supporting evidence and legal arguments\n\nCommon strategies:\n• For Section 9 objections: Demonstrate distinctiveness through use, provide evidence of consumer recognition\n• For Section 11 objections: Distinguish your mark from the cited mark visually, phonetically, and conceptually\n• Submit affidavits, sales figures, advertising evidence, and consumer surveys\n\nA well-prepared reply by an experienced trademark lawyer significantly improves the chances of overcoming objections.\n\nUse our Trademark Objection Reply Generator for a draft template."
  },
  {
    num: 15, title: "Trademark Hearing",
    content: "If the written reply does not satisfy the examiner, a hearing may be scheduled:\n\n• The applicant or their authorized attorney appears before the Registrar\n• The hearing is an opportunity to present oral arguments\n• Evidence and legal precedents can be submitted\n• The Registrar makes a decision to accept or refuse the application\n\nHearing preparation:\n1. Review all objections and previous correspondence\n2. Prepare legal arguments citing relevant case law\n3. Organize supporting documents and evidence\n4. Anticipate counter-arguments\n\nHearings may be conducted in person or via video conference. Professional representation by a trademark attorney is strongly recommended for hearings."
  },
  {
    num: 16, title: "Trademark Journal Publication",
    content: "Once a trademark application is accepted (either initially or after overcoming objections), it is published in the Trade Marks Journal:\n\n• The Journal is published weekly by the Trade Marks Registry\n• Publication serves as public notice of the proposed registration\n• The mark remains published for 4 months (opposition period)\n• Any person may view published marks and file an opposition\n\nThe Journal includes:\n- Application number and filing date\n- Applicant details\n- The trademark (word/logo)\n- Class and description of goods/services\n- Conditions or limitations (if any)\n\nIf no opposition is filed within 4 months, the mark proceeds to registration."
  },
  {
    num: 17, title: "Trademark Opposition",
    content: "During the 4-month publication period, any person can oppose the registration:\n\nProcess:\n1. Notice of Opposition – Filed by the opponent within 4 months of publication\n2. Counter-Statement – Filed by the applicant in response\n3. Evidence Stage – Both parties submit evidence\n4. Hearing – The Registrar hears both sides\n5. Decision – The Registrar allows or refuses registration\n\nGrounds for opposition:\n• The mark is identical or deceptively similar to an earlier mark\n• The opponent has prior rights in the mark\n• The mark is descriptive or lacks distinctiveness\n• The mark was filed in bad faith\n• The mark conflicts with an existing copyright or design\n\nOpposition proceedings can take 2-3 years to resolve."
  },
  {
    num: 18, title: "Trademark Registration Certificate",
    content: "If no opposition is filed (or if the opposition is decided in the applicant's favor), the trademark is registered:\n\n• The Trade Marks Registry issues a Registration Certificate\n• The certificate includes the registration number, date, and trademark details\n• The owner can use the ® symbol with the registered mark\n• Registration provides prima facie evidence of the owner's exclusive rights\n\nRights conferred:\n- Exclusive right to use the mark in connection with registered goods/services\n- Right to take legal action against infringers\n- Right to license or assign the mark\n- Right to use the ® symbol\n- Protection against passing off and counterfeiting"
  },
  {
    num: 19, title: "Duration of Trademark Protection",
    content: "Trademark registration in India provides protection for 10 years from the date of filing.\n\nKey points:\n• Protection starts from the filing date (not the registration date)\n• The registration can be renewed indefinitely for successive periods of 10 years\n• Renewal must be filed before the expiry date\n• A grace period of 6 months is available after expiry (with additional fees)\n• If not renewed, the mark is removed from the register\n\nA registered trademark is one of the few intellectual property rights that can potentially last forever, provided it is renewed and continues to be used in commerce."
  },
  {
    num: 20, title: "Trademark Renewal Process",
    content: "To maintain trademark protection, the registration must be renewed:\n\nProcess:\n1. File Form TM-R with the Trade Marks Registry\n2. Pay the prescribed renewal fee\n3. Renewal can be filed up to 6 months before expiry\n4. Late renewal is possible within 6 months after expiry (with surcharge)\n\nRenewal fees:\n• Individual / Startup: ₹5,000 per class\n• Other entities: ₹10,000 per class\n• Late renewal surcharge: Additional fees apply\n\nImportant:\n• Set reminders well before the renewal date\n• Failure to renew results in removal from the register\n• A removed mark may be restored within one year of removal\n• After one year, the mark becomes available for others to register"
  },
  {
    num: 21, title: "Trademark Assignment",
    content: "A trademark can be transferred from one owner to another through assignment:\n\nTypes of assignment:\n• Assignment with Goodwill – Transfer of the mark along with the business goodwill\n• Assignment without Goodwill – Transfer of the mark alone\n• Partial Assignment – Transfer for specific goods/services only\n\nProcess:\n1. Execute a Trademark Assignment Agreement\n2. File Form TM-P with the Trade Marks Registry\n3. Pay the prescribed fee\n4. The Registry records the new owner's details\n\nThe assignment must be recorded with the Registry to be effective against third parties. An unrecorded assignment may not be enforceable in legal proceedings."
  },
  {
    num: 22, title: "Trademark Licensing",
    content: "A trademark owner can allow others to use the mark through licensing:\n\nTypes of licenses:\n• Exclusive License – Only the licensee can use the mark\n• Non-Exclusive License – Multiple licensees may use the mark\n• Sole License – Only the owner and the licensee can use the mark\n\nLicense agreement should include:\n- Scope of use (goods/services, territory, duration)\n- Quality control provisions\n- Royalty or license fee\n- Termination conditions\n- Intellectual property ownership clause\n\nRegistered User:\nUnder Indian law, a licensee should be registered as a 'Registered User' with the Trade Marks Registry (Form TM-U). This provides legal recognition and protects the licensee's rights."
  },
  {
    num: 23, title: "Trademark Infringement",
    content: "Trademark infringement occurs when a person uses a mark that is identical or deceptively similar to a registered trademark without authorization:\n\nTypes of infringement:\n• Using an identical mark for identical goods/services\n• Using a similar mark likely to cause confusion\n• Using a mark that takes unfair advantage of the registered mark\n• Using a well-known mark even for dissimilar goods/services\n\nInfringement vs. Passing Off:\n• Infringement requires a registered trademark; passing off does not\n• Passing off protects unregistered marks based on goodwill and reputation\n• Both provide legal remedies but through different legal grounds\n\nOnline infringement is increasingly common through domain names, social media, and e-commerce platforms."
  },
  {
    num: 24, title: "Legal Remedies for Infringement",
    content: "The Trade Marks Act provides several legal remedies:\n\n• Injunction – Court order to stop the infringer from using the mark\n  - Interim injunction (temporary, during proceedings)\n  - Permanent injunction (final order)\n\n• Damages – Monetary compensation for losses suffered\n  - Actual damages based on proven losses\n  - Account of profits earned by the infringer\n\n• Seizure – Court-ordered seizure of counterfeit goods\n  - Destruction of infringing materials\n  - Border measures to prevent import of counterfeit goods\n\n• Criminal Remedies:\n  - Imprisonment up to 3 years\n  - Fine up to ₹2 lakhs\n  - Police complaint and FIR\n\nActions can be filed in the District Court or High Court. A trademark attorney can advise on the most effective legal strategy."
  },
  {
    num: 25, title: "Trademark Protection for Startups",
    content: "Startups should prioritize trademark registration from the earliest stage:\n\nWhy startups need trademarks:\n• Prevent competitors from copying your brand name\n• Build brand equity that attracts investors\n• Avoid costly rebranding if someone else registers your name\n• Qualify for reduced government fees under startup policy\n\nStrategy for startups:\n1. Conduct a trademark search before finalizing your brand name\n2. Register the trademark in all relevant classes\n3. File early – rights are determined by filing date\n4. Consider registering your logo and tagline separately\n5. Monitor for infringements as your brand grows\n6. Budget for international registration if planning global expansion\n\nDPIIT-recognized startups pay only ₹4,500 per class (50% of regular fees)."
  },
  {
    num: 26, title: "International Trademark Protection",
    content: "To protect your trademark outside India, consider:\n\n• Madrid System – File one international application through WIPO covering multiple countries\n  - India is a member of the Madrid Protocol\n  - File through the Indian Trade Marks Registry\n  - Designate specific countries for protection\n  - Cost-effective for multi-country filings\n\n• Direct Filing – File separate applications in each country\n  - Required for countries not in the Madrid system\n  - Each country has its own requirements and fees\n\n• Paris Convention Priority – File in other member countries within 6 months of your Indian filing and claim priority\n\nConsiderations for international filing:\n- Identify key markets for your business\n- Budget for filing and maintenance fees\n- Engage local agents in each jurisdiction\n- Monitor for infringements globally"
  },
  {
    num: 27, title: "Common Trademark Mistakes",
    content: "Avoid these common mistakes when filing trademarks:\n\n1. Selecting a generic or descriptive name – Names like 'Best Shoes' or 'Fresh Foods' lack distinctiveness\n2. Skipping the trademark search – Filing without checking existing marks wastes time and money\n3. Filing in the wrong class – Inadequate classification leaves your brand unprotected\n4. Delayed filing – Someone else may register your brand name first\n5. Not monitoring competitors – Infringers may go unnoticed\n6. Ignoring renewal deadlines – Failure to renew results in loss of protection\n7. Using ® before registration – Only registered marks can use ®; use ™ for unregistered marks\n8. Not registering variations – Register both word mark and logo for comprehensive protection\n9. Failing to use the mark – Non-use for 5 years can lead to cancellation\n10. Not seeking professional help – DIY filing often leads to objections and complications"
  },
  {
    num: 28, title: "Trademark Tips for Entrepreneurs",
    content: "Practical advice for entrepreneurs protecting their brands:\n\n• Choose Distinctive Names – Coined words (Xerox, Kodak) get the strongest protection\n• Think Long-Term – Select a name that works across products, services, and markets\n• Register Early – File as soon as you finalize your brand name\n• Protect Digitally – Register matching domain names and social media handles\n• Document Everything – Keep records of first use, advertising, and sales\n• Use Proper Notices – Use ™ for pending marks and ® for registered marks\n• Monitor Regularly – Watch for similar marks in your industry\n• Educate Your Team – Ensure employees use the trademark correctly\n• Plan for Growth – Consider filing in additional classes as your business expands\n• Budget for IP – Allocate funds for registration, maintenance, and enforcement"
  },
  {
    num: 29, title: "Role of a Trademark Lawyer",
    content: "A qualified trademark lawyer provides valuable assistance throughout the registration process:\n\nServices provided:\n• Comprehensive trademark search and availability opinion\n• Strategic advice on mark selection and classification\n• Application drafting and filing\n• Responding to examination reports and objections\n• Representation at trademark hearings\n• Opposition proceedings (filing and defending)\n• Trademark portfolio management\n• Infringement advice and enforcement\n• Licensing and assignment agreements\n• International filing strategy\n\nWhen to consult a lawyer:\n- Before finalizing your brand name\n- When filing a trademark application\n- When receiving an objection or opposition\n- When someone infringes your trademark\n- When expanding to new markets or product lines\n\nProfessional legal guidance significantly improves the chances of successful registration and effective brand protection."
  },
  {
    num: 30, title: "Contact for Trademark Assistance",
    content: "For professional trademark registration services and intellectual property legal assistance:\n\nAdvocate Anuradha R. Kulkarni\nMSc, LLB, LLM (Intellectual Property Laws)\nPracticing Intellectual Property Lawyer since 2000\n\nServices:\n• Trademark Registration and Filing\n• Trademark Search and Availability Opinion\n• Trademark Objection Reply and Hearing Representation\n• Trademark Opposition Proceedings\n• Copyright Registration\n• Patent Filing Consultation\n• IP Portfolio Management\n• Trademark Licensing and Assignment\n\nOffices: Mumbai and Bengaluru\nPhone: +91 9869832220\nEmail: anuradharkulkarni1976@gmail.com\n\nContact us for a free initial consultation to discuss your trademark registration needs."
  },
];

const TrademarkGuide = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Complete Guide to Trademark Registration in India
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive 30-chapter guide covering everything from trademark basics to international protection. Referenced to the <strong>Controller General of Patents, Designs & Trade Marks</strong>.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              By Advocate Anuradha R. Kulkarni (MSc, LLB, LLM – Intellectual Property Laws)
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-serif text-2xl font-bold mb-6 text-center">Table of Contents</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {chapters.map((ch) => (
              <a
                key={ch.num}
                href={`#chapter-${ch.num}`}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-primary/5 transition-colors"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {ch.num}
                </span>
                <span className="text-foreground">{ch.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4 space-y-16">
          {chapters.map((ch) => (
            <article key={ch.num} id={`chapter-${ch.num}`} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {ch.num}
                </span>
                <h2 className="font-serif text-2xl font-bold md:text-3xl">{ch.title}</h2>
              </div>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                {ch.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-3 whitespace-pre-line leading-relaxed">{para}</p>
                ))}
              </div>
              {ch.num === 6 && (
                <Link to="/class-finder" className="inline-block mt-4">
                  <Button variant="gold-outline" size="sm">Use Class Finder Tool <ArrowRight className="ml-1 h-3 w-3" /></Button>
                </Link>
              )}
              {ch.num === 14 && (
                <Link to="/objection-reply" className="inline-block mt-4">
                  <Button variant="gold-outline" size="sm">Use Objection Reply Generator <ArrowRight className="ml-1 h-3 w-3" /></Button>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5 py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">Need Professional Trademark Assistance?</h2>
          <p className="text-muted-foreground mb-6">
            Advocate Anuradha R. Kulkarni has been providing expert trademark legal services since 2000.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919869832220">
              <Button variant="gold"><Phone className="mr-2 h-4 w-4" /> Call +91 9869832220</Button>
            </a>
            <Link to="/contact">
              <Button variant="gold-outline">Book Free Consultation <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrademarkGuide;
