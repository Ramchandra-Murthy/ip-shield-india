import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TrademarkClass {
  classNum: number;
  name: string;
  description: string;
  example: string;
}

const allClasses: TrademarkClass[] = [
  { classNum: 1, name: "Chemicals", description: "Chemicals used in industry, science, agriculture", example: "Industrial chemicals, fertilizers" },
  { classNum: 2, name: "Paints & Coatings", description: "Paints, varnishes, coatings", example: "Paint brands, color coatings" },
  { classNum: 3, name: "Cosmetics & Cleaning", description: "Cosmetics and cleaning products", example: "Soaps, perfumes, detergents" },
  { classNum: 4, name: "Industrial Oils & Fuels", description: "Industrial oils and fuels", example: "Lubricants, petrol products" },
  { classNum: 5, name: "Pharmaceuticals", description: "Pharmaceuticals and medical products", example: "Medicines, dietary supplements" },
  { classNum: 6, name: "Common Metals", description: "Common metals and metal goods", example: "Metal building materials" },
  { classNum: 7, name: "Machines", description: "Machines and machine tools", example: "Engines, industrial machines" },
  { classNum: 8, name: "Hand Tools", description: "Hand tools and implements", example: "Knives, agricultural tools" },
  { classNum: 9, name: "Electronics & Software", description: "Scientific and electronic equipment", example: "Software, mobile apps, electronics" },
  { classNum: 10, name: "Medical Instruments", description: "Medical and surgical instruments", example: "Surgical equipment" },
  { classNum: 11, name: "Lighting & Heating", description: "Lighting and heating equipment", example: "LED lights, air conditioners" },
  { classNum: 12, name: "Vehicles", description: "Vehicles and conveyances", example: "Cars, motorcycles" },
  { classNum: 13, name: "Firearms", description: "Firearms and ammunition", example: "Firearms, explosives" },
  { classNum: 14, name: "Jewellery", description: "Jewellery and precious metals", example: "Gold jewellery brands" },
  { classNum: 15, name: "Musical Instruments", description: "Musical instruments", example: "Guitars, pianos" },
  { classNum: 16, name: "Paper Products", description: "Paper products and stationery", example: "Books, stationery" },
  { classNum: 17, name: "Rubber & Plastic", description: "Rubber and plastic materials", example: "Insulating materials" },
  { classNum: 18, name: "Leather Goods", description: "Leather goods and bags", example: "Bags, wallets" },
  { classNum: 19, name: "Building Materials", description: "Non-metallic building materials", example: "Cement, tiles" },
  { classNum: 20, name: "Furniture", description: "Furniture and household items", example: "Tables, chairs" },
  { classNum: 21, name: "Kitchen Utensils", description: "Kitchen utensils and containers", example: "Cookware, glassware" },
  { classNum: 22, name: "Ropes & Tents", description: "Ropes, tents, sacks", example: "Tarpaulins, awnings" },
  { classNum: 23, name: "Yarns & Threads", description: "Yarns and threads for textile use", example: "Cotton yarn, silk thread" },
  { classNum: 24, name: "Textiles", description: "Textiles and fabrics", example: "Bed linen, curtains" },
  { classNum: 25, name: "Clothing", description: "Clothing, footwear and headgear", example: "Shirts, shoes, hats" },
  { classNum: 26, name: "Lace & Embroidery", description: "Lace, embroidery, buttons", example: "Ribbons, badges" },
  { classNum: 27, name: "Carpets & Mats", description: "Carpets, rugs and mats", example: "Floor coverings" },
  { classNum: 28, name: "Toys & Sports", description: "Toys and sporting goods", example: "Board games, cricket bats" },
  { classNum: 29, name: "Meat & Dairy", description: "Meat, fish, dairy products", example: "Processed foods, milk" },
  { classNum: 30, name: "Food Products", description: "Staple food products", example: "Tea, coffee, biscuits" },
  { classNum: 31, name: "Agricultural Products", description: "Agricultural and horticultural products", example: "Fresh fruits, seeds" },
  { classNum: 32, name: "Non-Alcoholic Beverages", description: "Non-alcoholic beverages", example: "Soft drinks, juices" },
  { classNum: 33, name: "Alcoholic Beverages", description: "Alcoholic beverages (except beer in some jurisdictions)", example: "Wine, spirits" },
  { classNum: 34, name: "Tobacco", description: "Tobacco products and accessories", example: "Cigarettes, lighters" },
  { classNum: 35, name: "Advertising & Business", description: "Advertising and business services", example: "Marketing agencies, online stores" },
  { classNum: 36, name: "Financial Services", description: "Financial and insurance services", example: "Banking, real estate" },
  { classNum: 37, name: "Construction & Repair", description: "Construction and repair services", example: "Building contractors" },
  { classNum: 38, name: "Telecommunications", description: "Telecommunication services", example: "Internet providers" },
  { classNum: 39, name: "Transport & Logistics", description: "Transport and logistics services", example: "Courier, shipping" },
  { classNum: 40, name: "Manufacturing", description: "Manufacturing and material treatment", example: "Custom printing, milling" },
  { classNum: 41, name: "Education & Entertainment", description: "Education and entertainment services", example: "Coaching institutes, events" },
  { classNum: 42, name: "Technology Services", description: "Technology and IT services", example: "Software development, IT consulting" },
  { classNum: 43, name: "Food & Hospitality", description: "Food and hospitality services", example: "Restaurants, hotels" },
  { classNum: 44, name: "Medical & Beauty", description: "Medical and beauty services", example: "Hospitals, salons" },
  { classNum: 45, name: "Legal & Security", description: "Legal and security services", example: "Law firms, security agencies" },
];

const classMap: Record<string, number[]> = {
  clothing: [25], fashion: [25, 18], garment: [25], footwear: [25], shoes: [25],
  software: [9, 42], technology: [9, 42], app: [9, 42], it: [9, 42], computer: [9, 42],
  restaurant: [43], food: [29, 30, 43], hotel: [43], cafe: [43], bakery: [30, 43],
  education: [41], school: [41], coaching: [41], training: [41], university: [41],
  medicine: [5, 44], pharma: [5], health: [44, 5], hospital: [44], doctor: [44],
  fitness: [41, 28], gym: [41], sports: [28, 41],
  cosmetics: [3], beauty: [3, 44], salon: [44], spa: [44],
  consulting: [35], marketing: [35], advertising: [35], business: [35],
  finance: [36], insurance: [36], banking: [36], investment: [36],
  real: [36, 37], construction: [37], building: [37, 19],
  transport: [39], logistics: [39], courier: [39], shipping: [39],
  legal: [45], lawyer: [45], security: [45],
  agriculture: [31], farming: [31],
  jewelry: [14], jewellery: [14], gold: [14],
  furniture: [20], decor: [20],
  toys: [28], games: [28],
  automobile: [12], car: [12], vehicle: [12],
  ecommerce: [35, 9], retail: [35], shop: [35],
  printing: [16, 40], publishing: [16, 41],
  music: [41, 9, 15], film: [41], photography: [41],
  telecom: [38], internet: [38],
  chemical: [1], paint: [2], oil: [4], fuel: [4],
  textile: [24], fabric: [24], cloth: [24],
  leather: [18], bag: [18], wallet: [18],
  drink: [32], beverage: [32, 33], alcohol: [33], wine: [33],
  tea: [30], coffee: [30],
  dairy: [29], milk: [29], meat: [29],
  cement: [19], tile: [19],
  machine: [7], engine: [7],
  tools: [8], knife: [8],
  medical: [10, 44], surgical: [10],
  light: [11], lamp: [11], ac: [11],
  book: [16], stationery: [16],
  carpet: [27], rug: [27],
  tobacco: [34], cigarette: [34],
};

const ClassFinder = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TrademarkClass[]>([]);
  const [searched, setSearched] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearched(true);
    setShowAll(false);
    const q = query.toLowerCase().trim();
    const matchedNums = new Set<number>();

    for (const [keyword, nums] of Object.entries(classMap)) {
      if (q.includes(keyword) || keyword.includes(q)) {
        nums.forEach((n) => matchedNums.add(n));
      }
    }

    // Also search class descriptions
    if (matchedNums.size === 0) {
      allClasses.forEach((c) => {
        if (
          c.description.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.example.toLowerCase().includes(q)
        ) {
          matchedNums.add(c.classNum);
        }
      });
    }

    if (matchedNums.size === 0) {
      matchedNums.add(35);
    }

    setResults(allClasses.filter((c) => matchedNums.has(c.classNum)));
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              Trademark Class Finder
            </h1>
            <p className="text-lg text-muted-foreground">
              Trademark classification follows the <strong>Nice Classification</strong> system used internationally and by the Controller General of Patents, Designs & Trade Marks. Enter your business activity to find the appropriate class.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto max-w-xl px-4">
          <div className="space-y-4 rounded-lg border border-border bg-card p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Business Activity / Industry</label>
              <Input
                placeholder="e.g., clothing, software, restaurant, education"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button variant="gold" className="w-full" onClick={handleSearch} disabled={!query.trim()}>
              <Search className="mr-2 h-4 w-4" /> Find Trademark Class
            </Button>
          </div>

          {searched && results.length > 0 && (
            <div className="mt-6 space-y-3">
              <h2 className="font-serif text-lg font-bold text-center">Suggested Trademark Classes</h2>
              {results.map((r) => (
                <div key={r.classNum} className="rounded-md border border-border bg-card px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-primary">Class {r.classNum} – {r.name}</span>
                    <span className="text-xs rounded bg-primary/10 text-primary px-2 py-0.5">
                      {r.classNum <= 34 ? "Goods" : "Services"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Example: {r.example}</p>
                </div>
              ))}
              <p className="text-center text-sm text-muted-foreground mt-4">
                For professional trademark filing assistance, contact Advocate Anuradha R. Kulkarni.
              </p>
              <div className="text-center mt-2">
                <Link to="/contact">
                  <Button variant="gold-outline">
                    Contact for Guidance <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Complete 45 Classes Reference */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Complete List of All 45 Trademark Classes</h2>
            <p className="text-muted-foreground mt-2">Nice Classification – Classes 1–34 (Goods) • Classes 35–45 (Services)</p>
            <Button
              variant="gold-outline"
              className="mt-4"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Hide Full List" : "View All 45 Classes"}
            </Button>
          </div>

          {showAll && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold mb-4 text-primary">Goods Classes (1–34)</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {allClasses.filter((c) => c.classNum <= 34).map((c) => (
                    <div key={c.classNum} className="rounded-md border border-border bg-background px-4 py-3">
                      <div className="font-serif font-bold text-primary text-sm">Class {c.classNum} – {c.name}</div>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">Example: {c.example}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-4 text-primary">Service Classes (35–45)</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {allClasses.filter((c) => c.classNum > 34).map((c) => (
                    <div key={c.classNum} className="rounded-md border border-border bg-background px-4 py-3">
                      <div className="font-serif font-bold text-primary text-sm">Class {c.classNum} – {c.name}</div>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.description}</p>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">Example: {c.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ClassFinder;
